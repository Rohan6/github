angular.module('app2',[])
.service('yahooservice',['$http'], function yahooservice($http)
{$http({'method': 'GET', 'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(select%20title%20from%20atom%20where%20url%3D'http%3A%2F%2Fspreadsheets.google.com%2Ffeeds%2Flist%2Fpg_T0Mv3iBwIJoc82J1G8aQ%2Fod6%2Fpublic%2Fbasic')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"}).then(function successful(response){console.log(response.data);}, function welltried(response){console.log("It didn't work, status:" + response.status);});	
});

