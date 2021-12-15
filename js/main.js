;(function() {

  var mainapp = angular.module("mainapp", ['ngAnimate']);
    
    mainapp.directive('onErrorSrc', function() {
        return {
            link: function(scope, element, attrs) {
              element.bind('error', function() {
                if (attrs.src != attrs.onErrorSrc) {
                  attrs.$set('src', attrs.onErrorSrc);
                }
              });
            }
        }
    });
      mainapp.controller("maincontroller",['$scope','$filter', '$window', function($scope,$filter ,$window) {
          var currenetPath = $window.location.pathname;
          currenetPath = currenetPath.substring(0, currenetPath.lastIndexOf("/"));
          currenetPath = $window.location.protocol+"//"+$window.location.host + currenetPath + "/";
         
          $scope.ready = false ; 
          $scope.stage = 1;
          $scope.f_month = "" ; 
          $scope.m_month = "" ;
          $scope.ringname = "" ;
          $scope.result ="";
          $scope.result_m ='01';
          $scope.result_f ='01';
          var gamelogic = function(r){
              switch(r){
                case "0101":
                     $scope.result = "a" ;
                    break;
                case "0102":
                    $scope.result = "b" ;
                    break;
                case "0103":
                    $scope.result = "c" ;
                    break;
                case "0104":
                    $scope.result = "d" ;
                    break;
                case "0105":
                    $scope.result = "e" ;
                    break;      
                case "0106":
                    $scope.result = "f" ;
                    break;
                case "0107":
                    $scope.result = "g" ;
                    break;
                case "0108":
                    $scope.result = "h" ;
                    break;
                case "0109":
                    $scope.result = "i" ;
                    break;
                case "0110":
                    $scope.result = "j" ;
                    break;
                case "0111":
                    $scope.result = "k" ;
                    break;  
                case "0112":
                    $scope.result = "l" ;
                    break;  
                      
                case "0201":
                     $scope.result = "b" ;
                    break;
                case "0202":
                    $scope.result = "c" ;
                    break;
                case "0203":
                    $scope.result = "d" ;
                    break;
                case "0204":
                    $scope.result = "e" ;
                    break;
                case "0205":
                    $scope.result = "f" ;
                    break;      
                case "0206":
                    $scope.result = "g" ;
                    break;
                case "0207":
                    $scope.result = "h" ;
                    break;
                case "0208":
                    $scope.result = "i" ;
                    break;
                case "0209":
                    $scope.result = "j" ;
                    break;
                case "0210":
                    $scope.result = "k" ;
                    break;
                case "0211":
                    $scope.result = "l" ;
                    break;  
                case "0212":
                    $scope.result = "a" ;
                    break;       
                   
                case "0301":
                     $scope.result = "c" ;
                    break;
                case "0302":
                    $scope.result = "d" ;
                    break;
                case "0303":
                    $scope.result = "e" ;
                    break;
                case "0304":
                    $scope.result = "f" ;
                    break;
                case "0305":
                    $scope.result = "g" ;
                    break;      
                case "0306":
                    $scope.result = "h" ;
                    break;
                case "0307":
                    $scope.result = "i" ;
                    break;
                case "0308":
                    $scope.result = "j" ;
                    break;
                case "0309":
                    $scope.result = "k" ;
                    break;
                case "0310":
                    $scope.result = "l" ;
                    break;
                case "0311":
                    $scope.result = "a" ;
                    break;  
                case "0312":
                    $scope.result = "b" ;
                    break;       
                  
                case "0401":
                     $scope.result = "d" ;
                    break;
                case "0402":
                    $scope.result = "e" ;
                    break;
                case "0403":
                    $scope.result = "f" ;
                    break;
                case "0404":
                    $scope.result = "g" ;
                    break;
                case "0405":
                    $scope.result = "h" ;
                    break;      
                case "0406":
                    $scope.result = "i" ;
                    break;
                case "0407":
                    $scope.result = "j" ;
                    break;
                case "0408":
                    $scope.result = "k" ;
                    break;
                case "0409":
                    $scope.result = "l" ;
                    break;
                case "0410":
                    $scope.result = "a" ;
                    break;
                case "0411":
                    $scope.result = "b" ;
                    break;  
                case "0412":
                    $scope.result = "c" ;
                    break;       
                  
                case "0501":
                     $scope.result = "e" ;
                    break;
                case "0502":
                    $scope.result = "f" ;
                    break;
                case "0503":
                    $scope.result = "g" ;
                    break;
                case "0504":
                    $scope.result = "h" ;
                    break;
                case "0505":
                    $scope.result = "i" ;
                    break;      
                case "0506":
                    $scope.result = "j" ;
                    break;
                case "0507":
                    $scope.result = "k" ;
                    break;
                case "0508":
                    $scope.result = "l" ;
                    break;
                case "0509":
                    $scope.result = "a" ;
                    break;
                case "0510":
                    $scope.result = "b" ;
                    break;
                case "0511":
                    $scope.result = "c" ;
                    break;  
                case "0512":
                    $scope.result = "d" ;
                    break;       
                  
                case "0601":
                    $scope.result = "f" ;
                    break;
                case "0602":
                    $scope.result = "g" ;
                    break;
                case "0603":
                    $scope.result = "h" ;
                    break;
                case "0604":
                    $scope.result = "i" ;
                    break;
                case "0605":
                    $scope.result = "j" ;
                    break;      
                case "0606":
                    $scope.result = "k" ;
                    break;
                case "0607":
                    $scope.result = "l" ;
                    break;
                case "0608":
                    $scope.result = "a" ;
                    break;
                case "0609":
                    $scope.result = "b" ;
                    break;
                case "0610":
                    $scope.result = "c" ;
                    break;
                case "0611":
                    $scope.result = "d" ;
                    break;  
                case "0612":
                    $scope.result = "e" ;
                    break;  
                
                case "0701":
                     $scope.result = "g" ;
                    break;
                case "0702":
                    $scope.result = "h" ;
                    break;
                case "0703":
                    $scope.result = "i" ;
                    break;
                case "0704":
                    $scope.result = "j" ;
                    break;
                case "0705":
                    $scope.result = "k" ;
                    break;      
                case "0706":
                    $scope.result = "l" ;
                    break;
                case "0707":
                    $scope.result = "a" ;
                    break;
                case "0708":
                    $scope.result = "b" ;
                    break;
                case "0709":
                    $scope.result = "c" ;
                    break;
                case "0710":
                    $scope.result = "d" ;
                    break;
                case "0711":
                    $scope.result = "e" ;
                    break;  
                case "0712":
                    $scope.result = "f" ;
                    break;  
                      
                case "0801":
                     $scope.result = "h" ;
                    break;
                case "0802":
                    $scope.result = "i" ;
                    break;
                case "0803":
                    $scope.result = "j" ;
                    break;
                case "0804":
                    $scope.result = "k" ;
                    break;
                case "0805":
                    $scope.result = "l" ;
                    break;      
                case "0806":
                    $scope.result = "a" ;
                    break;
                case "0807":
                    $scope.result = "b" ;
                    break;
                case "0808":
                    $scope.result = "c" ;
                    break;
                case "0809":
                    $scope.result = "d" ;
                    break;
                case "0810":
                    $scope.result = "e" ;
                    break;
                case "0811":
                    $scope.result = "f" ;
                    break;  
                case "0812":
                    $scope.result = "g" ;
                    break;       
                   
                case "0901":
                     $scope.result = "i" ;
                    break;
                case "0902":
                    $scope.result = "j" ;
                    break;
                case "0903":
                    $scope.result = "k" ;
                    break;
                case "0904":
                    $scope.result = "l" ;
                    break;
                case "0905":
                    $scope.result = "a" ;
                    break;      
                case "0906":
                    $scope.result = "d" ;
                    break;
                case "0907":
                    $scope.result = "c" ;
                    break;
                case "0908":
                    $scope.result = "d" ;
                    break;
                case "0909":
                    $scope.result = "e" ;
                    break;
                case "0910":
                    $scope.result = "f" ;
                    break;
                case "0911":
                    $scope.result = "g" ;
                    break;  
                case "0912":
                    $scope.result = "h" ;
                    break;       
                  
                case "1001":
                     $scope.result = "j" ;
                    break;
                case "1002":
                    $scope.result = "k" ;
                    break;
                case "1003":
                    $scope.result = "l" ;
                    break;
                case "1004":
                    $scope.result = "a" ;
                    break;
                case "1005":
                    $scope.result = "b" ;
                    break;      
                case "1006":
                    $scope.result = "c" ;
                    break;
                case "1007":
                    $scope.result = "d" ;
                    break;
                case "1008":
                    $scope.result = "e" ;
                    break;
                case "1009":
                    $scope.result = "f" ;
                    break;
                case "1010":
                    $scope.result = "g" ;
                    break;
                case "1011":
                    $scope.result = "h" ;
                    break;  
                case "1012":
                    $scope.result = "i" ;
                    break;       
                  
                case "1101":
                     $scope.result = "k" ;
                    break;
                case "1102":
                    $scope.result = "l" ;
                    break;
                case "1103":
                    $scope.result = "a" ;
                    break;
                case "1104":
                    $scope.result = "b" ;
                    break;
                case "1105":
                    $scope.result = "c" ;
                    break;      
                case "1106":
                    $scope.result = "d" ;
                    break;
                case "1107":
                    $scope.result = "e" ;
                    break;
                case "1108":
                    $scope.result = "f" ;
                    break;
                case "1109":
                    $scope.result = "g" ;
                    break;
                case "1110":
                    $scope.result = "h" ;
                    break;
                case "1111":
                    $scope.result = "i" ;
                    break;  
                case "1112":
                    $scope.result = "j" ;
                    break;       
                  
                case "1201":
                    $scope.result = "l" ;
                    break;
                case "1202":
                    $scope.result = "a" ;
                    break;
                case "1203":
                    $scope.result = "b" ;
                    break;
                case "1204":
                    $scope.result = "c" ;
                    break;
                case "1205":
                    $scope.result = "d" ;
                    break;      
                case "1206":
                    $scope.result = "e" ;
                    break;
                case "1207":
                    $scope.result = "f" ;
                    break;
                case "1208":
                    $scope.result = "g" ;
                    break;
                case "1209":
                    $scope.result = "h" ;
                    break;
                case "1210":
                    $scope.result = "i" ;
                    break;
                case "1211":
                    $scope.result = "j" ;
                    break;  
                case "1212":
                    $scope.result = "k" ;
                    break;       
                default:
                    $scope.result = "a" ;  
              }
              $scope.result = $scope.result +".png" ;
          }
          $scope.ringanimated={
              "0101": "ring0101",
              "0407": "ring0407",
              "0408": "ring0408"
         }
              console.log($scope.ready);    
          if( $scope.f_month !=""){
              $scope.ready = true;
              $scope.$apply;
          }
            $scope.$watch('m_month', function (newValue, oldValue) {
                 if( ($scope.f_month !="") && ($scope.m_month !="")){
                    
                    $scope.ready = true;
                    $scope.$apply;
                 }
            });
            $scope.$watch('f_month', function (newValue, oldValue) {
                 if( ($scope.f_month !="") && ($scope.m_month !="")){
                    $scope.ready = true;
                    $scope.$apply;
                 }
            }); 
            $scope.showresult = function(){
               $scope.result_m =$scope.m_month;
                $scope.result_f =$scope.f_month;
                gamelogic($scope.result_f + $scope.result_m);
                console.log($scope.result);
                $scope.stage = 2;
                 $scope.$apply;
            }
             $scope.showproduct = function(){
                console.log($scope.stage);
                $scope.stage = 3;
                $scope.ringname =  $scope.result_f + $scope.result_m ;
                 $scope.$apply;
            }
            
            function handle_fbshare() {
                
                var filename = $scope.ringname ;
                    FB.ui({
                                method: 'share_open_graph',
                                action_type: 'og.shares',
                                action_properties: JSON.stringify({
                                    object : {
                                       'og:url': currenetPath +'index.html',
                                       'og:title': '緣份指數大測試',
                                       'og:description': '呢隻係我同另一半專屬的誕生石戒指！不如你都輸入您同另一半的生日月份，就知道您同佢有幾夾！想再夾啲？睇下為您倆打造的誕生石戒指啦！',
                                        'og:image:url': 'http://campaign.nextdigital.com.hk/chowsangsang/dev/v28/images/facebook/FB_' + filename + '.jpg' ,
                                        'og:image:width': '1200',
                                        'og:image:height': '630'
                                    },
                                    image: 'http://campaign.nextdigital.com.hk/chowsangsang/dev/v29/images/facebook/FB_' + filename + '.jpg'
                                })


                    }, function(response) { 
                            ga('send', 'event', 'share',  'facebook' , "facebook");
                      });
            } 
           $scope.fb_share = function(){
               
                FB.getLoginStatus(function(response) {
                  if (response.status === 'connected') {
                     handle_fbshare();
                  }
                  else {
                    FB.login(function(response) {
                        if (response.authResponse) {
                            handle_fbshare();
                        } else {
                            console.log('User cancelled login or did not fully authorize.');
                        }
                    });

                  }
                }); 

            } 
            $scope.whatsapp_share = function(){
                window.open("whatsapp://send?text=與其心大心細估估下，不如輸入您同另一半的生日月份，即刻知道您同佢有幾夾！想再夾啲？睇下呢度為您倆打造的誕生石戒指啦！"+currenetPath+"index.html");
            }
            $scope.reloadpage = function(){
                location.reload();
            }
            
            
    }]);
    
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
          appId: '767015930162888',
          //appId: '403975836663040',
          version: 'v2.7'
        });     
        $('#loginbutton,#feedbutton').removeAttr('disabled');
   
    });

})();

$(function() {
   var viewer = new TouchScroll();
        viewer.init({
            id: 'dragformgroup',
            draggable: true,
            wait: false
   });
   var viewer2 = new TouchScroll();
        viewer2.init({
            id: 'dragformgroup2',
            draggable: true,
            wait: false
   });
});