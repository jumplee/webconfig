// disable proxy hot keys
api.unmap('cp');
api.unmap('gr');
api.unmap('od');
api.unmap('oe');
api.unmap('os');
api.unmap('spa');
api.unmap('spb');
api.unmap('spc');
api.unmap('spd');
api.unmap('spi');
api.unmap('sps');

api.mapkey('oc', '#8Open URL from history', function() {
    api.Front.openOmnibar({type: "History"});
});

const github_callback = function(response) {
    var res = JSON.parse(response.text)['items'];
    return res.map(function(r) {
        return { title: r.description, url: r.html_url };
    });
}
const github_auto_completion = 'https://api.github.com/search/repositories?order=desc&s=stars&q=';
api.addSearchAlias('h', 'GitHub', 'https://github.com/search?order=desc&s=stars&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oh', '#8Search on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "h"}); });
api.addSearchAlias('er', 'GitHub Rust', 'https://github.com/search?order=desc&s=stars&l=Rust&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oer', '#8Search Rust projects on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "er"}); });
api.addSearchAlias('eg', 'GitHub Go', 'https://github.com/search?order=desc&s=stars&l=Go&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oeg', '#8Search Golang projects on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "eg"}); });
api.addSearchAlias('ej', 'GitHub Java', 'https://github.com/search?order=desc&s=stars&l=Java&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oej', '#8Search Java projects on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "ej"}); });
api.addSearchAlias('ep', 'GitHub Python', 'https://github.com/search?order=desc&s=stars&l=Python&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oes', '#8Search JavaScript projects on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "es"}); });
api.addSearchAlias('es', 'GitHub JavaScript', 'https://github.com/search?order=desc&s=stars&l=JavaScript&q=', 's', (github_auto_completion), github_callback);
api.mapkey('oes', '#8Search JavaScript projects on GitHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "es"}); });

api.addSearchAlias('m', 'Maven', 'http://mvnrepository.com/search?q=');
api.mapkey('om', '#8Search on Maven', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "m"}); });

api.addSearchAlias('dh', 'DockerHub', 'https://hub.docker.com/search/?page=1&q=', 's', ('https://hub.docker.com/v2/search/repositories/?page_size=20&query='),
    function(response) {
        return JSON.parse(response.text).results.map(function(r){
            return { title: r.short_description, url: "https://hub.docker.com/r/" + r.repo_name };
        });
    });
api.mapkey('odh', '#8Search on DockerHub', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "dh"}); });

api.addSearchAlias('sc', 'Shellcheck', 'https://github.com/koalaman/shellcheck/wiki/', 's', 'http://api.bing.com/osjson.aspx?query=', function (response) {
    if (response && response.text) {
        var key = JSON.parse(response.text)[0];
        var res = [];
        if (/^\d+$/.test(key)) {
            res.push({ title: 'SC' + key, url: 'https://github.com/koalaman/shellcheck/wiki/SC' + key });
        } else {
            res.push({ title: key, url: 'https://github.com/koalaman/shellcheck/wiki/' + key });
        }
    }
    return res;
});
api.mapkey('osc', '#8Visit Shellcheck rules', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "sc"}); });


// ---------------------------------- for Chinese user ---------------------------------- //
settings.language='zh-CN';

// Inline query, press 'q' in visual mode
api.Front.registerInlineQuery({
    url: function(q) {
        return `http://dict.youdao.com/w/eng/${q}/#keyfrom=dict2.index`;
    },
    parseResult: function(res) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(res.text, "text/html");
        var collinsResult = doc.querySelector("#collinsResult");
        var authTransToggle = doc.querySelector("#authTransToggle");
        var examplesToggle = doc.querySelector("#examplesToggle");
        if (collinsResult) {
            collinsResult.querySelectorAll("div>span.collinsOrder").forEach(function(span) {
                span.nextElementSibling.prepend(span);
            });
            collinsResult.querySelectorAll("div.examples").forEach(function(div) {
                div.innerHTML = div.innerHTML.replace(/<p/gi, "<span").replace(/<\/p>/gi, "</span>");
            });
            var exp = collinsResult.innerHTML;
            return exp;
        } else if (authTransToggle) {
            authTransToggle.querySelector("div.via.ar").remove();
            return authTransToggle.innerHTML;
        } else if (examplesToggle) {
            return examplesToggle.innerHTML;
        }
    }
});

api.addSearchAlias('f', '百度翻译', 'http://fanyi.baidu.com/#zh/en/', 's', 'http://fanyi.baidu.com/sug?kw=', function (response) {
    var result = [];
    if (response && response.text) {
        var res = JSON.parse(response.text);
        if (res && res.errno === 0) {
            for (var i in res.data) {
                var url = 'http://fanyi.baidu.com/#en/zh/' + encodeURIComponent(res.data[i].k);
                if (/[\u4e00-\u9fa5]+/.test(res.data[i].k)) {
                    url = 'http://fanyi.baidu.com/#zh/en/' + encodeURIComponent(res.data[i].k);
                }
                result.push({ title: res.data[i].k + ' ==> ' + res.data[i].v, url: url });
            }
        }
    }
    return result;
});
api.mapkey('of', '#8打开百度翻译', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "f"}); });


function parseDoubanSearchResult(response) {
    let res = [];
    if (response && response.text) {
        let list = JSON.parse(response.text);
        for (let i in list) {
            let img = list[i].pic || list[i].img;
            let year = list[i].year;
            let subtitle = list[i].author_name || list[i].sub_title;
            res.push({ html: `<li>
                            <div style="float: left"><img src="${img}" width="50" /></div>
                            <div style="float: left; margin-left: 10px; padding-top: 3px;">
                                <div style="font-size: 16px; color: #1a2a3a;">${list[i].title}</div>
                                <div style="font-size: 12px; color: #3a4a5a; margin-top: 3px;">${subtitle}</div>
                            </div>
                            <div style="float: left; margin-left: 10px; padding-top: 10px; font-size: 12px; color: #3a4a5a;">${year}</div>
                       </li>`,
                props: { url: list[i].url }
            });
        }
    }
    return res;
}
api.addSearchAlias('dbm', '豆瓣电影', 'https://movie.douban.com/subject_search?search_text=', 's', 'https://movie.douban.com/j/subject_suggest?q=', parseDoubanSearchResult);
api.mapkey('odbm', '#8搜索豆瓣电影', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "dbm"});});
api.addSearchAlias('dbb', '豆瓣图书', 'https://book.douban.com/subject_search?search_text=', 's', 'https://book.douban.com/j/subject_suggest?q=', parseDoubanSearchResult);
api.mapkey('odbb', '#8搜索豆瓣图书', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "dbb"}); });

// --------------------------------------- for LeanDev personal user --------------------------------------- //
api.addSearchAlias('l', 'Vilja Git', 'https://gitlab.leandev.com/search?search=', 's', 'https://gitlab.leandev.com/api/v4/projects.json?per_page=20&simple=true&membership=true&order_by=last_activity_at&search=', function (response) {
    var result = [];
    if (response && response.text) {
        var res = JSON.parse(response.text);
        if (res) {
            for (var i in res) {
                result.push({title: res[i].name, url: res[i].web_url});
            }
        }
    }
    return result;
});
api.mapkey('ol', '#8Search Vilja Git', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "l"}); });
api.mapkey('gl', 'Goto lfp-rn/lfp project', function() { window.location.href = 'https://gitlab.leandev.com/lfp-rn/lfp' })

if (window.origin === "https://gitlab.leandev.com") {
    function gotoRepoPage(path) {
        let href = window.location.href;
        const repoReg = /.*gitlab\.leandev\.com\/(.+)\/-\/.+/;
        if(repoReg.test(href)) {
            window.location.href = 'https://gitlab.leandev.com/' + repoReg.exec(href)[1].trim() + path;
        } else {
            window.location.href = href + path;
        }
    }
    api.mapkey('gb', 'Goto branches page', function() { gotoRepoPage('/-/branches'); });
    api.mapkey('gc', 'Goto compare page', function() { gotoRepoPage('/-/compare?from=master&to=master'); });
    api.mapkey('gC', 'Goto CI/CD settings page', function() { gotoRepoPage('/-/settings/ci_cd'); });
    api.mapkey('gd', 'Goto default-variables.yaml', function() {
        let href = window.location.href;
        const branchReg = /.*lfp-rn\/lfp\/-\/(blob|tree)\/([0-9a-zA-Z._-]+)\/?.*/;
        if(branchReg.test(href)) {
            window.location.href = 'https://gitlab.leandev.com/lfp-rn/lfp/-/blob/' + branchReg.exec(href)[2].trim() + '/bin/variables/default-variables.yaml';
        } else {
            window.location.href = 'https://gitlab.leandev.com/lfp-rn/lfp/-/blob/r18/bin/variables/default-variables.yaml';
        }
    });
    api.mapkey('gm', 'Goto project merge request page', function() { gotoRepoPage('/-/merge_requests'); });
    api.mapkey('gM', 'Goto project members page', function() { gotoRepoPage('/-/project_members'); });
    api.mapkey('gp', 'Goto pipeline page', function() { gotoRepoPage('/-/pipelines'); });
    api.mapkey('gr', 'Goto repository settings page', function() { gotoRepoPage('/-/settings/repository'); });
    api.mapkey('gs', 'Goto pipeline schedules page', function() { gotoRepoPage('/-/pipeline_schedules'); });
    api.mapkey('gt', 'Goto tags page', function() { gotoRepoPage('/-/tags'); });
    api.mapkey('gw', 'Goto wiki page', function() { gotoRepoPage('/-/wikis/home'); });
    api.mapkey('ymr', 'Copy merge request links', function() {
        let mrs = document.getElementsByClassName('merge-request');
        let mrMap = {};
        for(let i = 0; i < mrs.length; i ++) {
            let assignee = mrs[i].getElementsByClassName('author-link')[1].attributes.getNamedItem('title').value.substring(12);
            let link = 'https://gitlab.leandev.com' + mrs[i].getElementsByClassName('merge-request-title-text')[0].getElementsByTagName('a')[0].attributes.getNamedItem('href').value + '/diffs';
            let list = mrMap[assignee];
            if(!list) list = [];
            list.push(link);
            mrMap[assignee] = list;
        }
        let result = '';
        for(let assignee in mrMap) {
            result += assignee + '\n';
            for(let i = 0; i < mrMap[assignee].length; i ++) {
                result += mrMap[assignee][i] + '\n';
            }
            result += '\n';
        }
        api.Clipboard.write(result);
    });
}

// --------------------- Merge requests --------------------------- //
function getGitLabUser(callback) {
    var xhr=new XMLHttpRequest();
    xhr.open('GET', 'https://gitlab.leandev.com/api/v4/user', false);
    xhr.onreadystatechange=function() {
        if(xhr.readyState==4 && xhr.status == 200){ callback(JSON.parse(xhr.responseText)); }
    }
    xhr.send();
}
api.mapkey(';m', 'Merge requests assigned to me', function() {
    getGitLabUser(function(result) { window.location.href = 'https://gitlab.leandev.com/dashboard/merge_requests?assignee_username=' + result.username; });
});

api.mapkey(';M', 'Merge requests created by me', function() {
    getGitLabUser(function(result) { window.location.href = 'https://gitlab.leandev.com/dashboard/merge_requests?author_username=' + result.username; })
});

api.addSearchAlias('j', 'Vilja JIRA', 'https://viljasolutions.atlassian.net/secure/QuickSearch.jspa?searchString=');
api.mapkey('oj', '#8Search Vilja JIRA', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "j"}); });
if (window.origin === "https://viljasolutions.atlassian.net") {
    api.unmap('yj');
    api.mapkey('yjj', 'Copy JIRA number and summary', function() {
        const issue = document.querySelector('[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"] a span').innerText;
        const summary = document.querySelector('[data-test-id="issue.views.issue-base.foundation.summary.heading"]').innerText;
        api.Clipboard.write(issue + ' ' + summary);
    });
    api.mapkey('yjl', 'Copy JIRA link and summary', function() {
        const issue = document.querySelector('[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"] a span').innerText;
        const summary = document.querySelector('[data-test-id="issue.views.issue-base.foundation.summary.heading"]').innerText;
        api.Clipboard.write('https://viljasolutions.atlassian.net/browse/' + issue + ' ' + summary);
    });
    api.mapkey('yjm', 'Copy JIRA link and summary to markdown format', function() {
        const issue = document.querySelector('[data-test-id="issue.views.issue-base.foundation.breadcrumbs.breadcrumb-current-issue-container"] a span').innerText;
        const summary = document.querySelector('[data-test-id="issue.views.issue-base.foundation.summary.heading"]').innerText;
        api.Clipboard.write('[' + issue + ' ' + summary + '](' + window.location.href + ')');
    });
}

api.addSearchAlias('sn', 'SonarQube', 'https://sonar.service.leandev.com/dashboard', 's', 'https://sonar.service.leandev.com/api/components/suggestions?s=', 
    function(response) {
        if (!response || ! response.text) { return []; }
        var res = JSON.parse(response.text)['results'];
        for(var i in res) {
            if(res[i].q !== 'TRK' || !res[i].items) { continue; }
            return res[i].items.map(function(r) {
                return { title: r.name, url: 'https://sonar.service.leandev.com/dashboard?id=' + r.key }
            });
        }
        return [];
    }
);
api.mapkey('osn', '#8Visit sonar project', function () { api.Front.openOmnibar({type: "SearchEngine", extra: "sn"}); });
