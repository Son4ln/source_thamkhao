!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}({0:function(e,t,a){e.exports=a("syoa")},syoa:function(e,t){function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var n,i="/s3/success",s=.5,o="thumbnail.png",r=[];r[1]="file",r[2]="preview",r[3]="deliver";var l=0,p=0,u=0;function c(e){return/^video/.test(e.type)}$.fn.dropFile=function(e){return $(this).each(function(){var t,n=$(this),s=[];e.allows&&(s=e.allows);var d={allowedExtensions:s,sizeLimit:5368709120};1==e.zip&&d.allowedExtensions.push("zip"),e.validation||(d={});var m=new qq.s3.FineUploader((a(t={element:document.getElementById(n.prop("id")),autoUpload:!1,request:{endpoint:"https://"+bucketName+".s3-accelerate.amazonaws.com",accessKey:accessKey},chunking:{partSize:20971520}},"autoUpload",!1),a(t,"signature",{endpoint:"/s3?room="+$("#creativeroom_id").val(),customHeaders:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),a(t,"uploadSuccess",{endpoint:i,params:{fileName:function(){return""}}}),a(t,"objectProperties",{key:function(t){var a,n=e&&e.prefix?e.prefix+m.getName(t):m.getName(t);a=n.split("/").slice(-1)[0];for(var i=Date.now(),s=a.split("."),o="",r=0;r<s.length-1;r++)o+="."+s[r]+".";var l=o.replace(".","")+"_"+userId+"_"+i,p=l+="."+s.slice(-1)[0];return n=n.replace(a,p)},acl:"public-read"}),a(t,"validation",d),a(t,"messages",{sizeError:messages.size_limit}),a(t,"callbacks",{onError:function(e,t,a,n){null!=e&&(messages&&$("#error .alert").text(messages.upload_limit),$("#error").modal("show"))},onComplete:function(t,a,n){var i=m.getFile(t);return $('input[name="kind"]',"#file_upload").val(e.type),-1!=i.type.indexOf("zip")||/\.mov$/i.test(i.name)?($('input[name="title"]',"#file_upload").val(a),$('input[name="mime"]',"#file_upload").val(i.type),void $('input[name="path"]',"#file_upload").val(n.tempLink)):0==t&&/^image/.test(i.type)?($('input[name="title"]',"#file_upload").val(a),$('input[name="mime"]',"#file_upload").val(i.type),$('input[name="path"]',"#file_upload").val(n.tempLink),void $('input[name="thumb_path"]',"#file_upload").val(n.tempLink)):void(c(i)||e.allowAll?($('input[name="title"]',"#file_upload").val(a),$('input[name="mime"]',"#file_upload").val(i.type),$('input[name="path"]',"#file_upload").val(n.tempLink)):$('input[name="thumb_path"]',"#file_upload").val(n.tempLink))},onSubmitted:function(t){0==l&&(l=Math.round((new Date).getTime()/1e3)),$("#progress_screen").fadeIn(),$("#progress_text").html('Validating your request..! <i class="fa fa-refresh fa-spin fa-fw"></i>'),$(".progress-bar","#progress_screen").css({width:0});var a=m.getFile(t);if(e.thumbnail&&-1==a.type.indexOf("zip")&&!/\.mov$/i.test(a.name)){if(/^image/.test(a.type))m.uploadStoredFiles();else if(c(a)){o=m.getName(t)+".png";var n=window.URL.createObjectURL(a);$(e.source).attr("src",n),g.on("seeked",function(){m.addFiles({canvas:f(g.get(0)),name:o,quality:"60",type:"image/png"}),g.off("seeked"),g.attr("src","")})}}else m.uploadStoredFiles()},onAllComplete:function(t,a){var n,i,s,o;p=Math.round((new Date).getTime()/1e3),u=p-l,console.log("resultTime",u),l=0,$("#progress_text").html("Upload completed with: "+t.length+" success, "+a.length+" failed! <br> Please waiting for reload page!"),n=r[e.type],i=e.replace,s="/files/upload/"+n,o=$("#file_upload"),$.ajax({type:"POST",url:s,data:o.serialize(),success:function(e){$(i).html(e)},complete:function(){if($("#progress_screen").fadeOut(),"preview"==n){var e="/files/preview/"+$("#creativeroom_id").val();$.get(e,function(e){$(".compare-list").html(e)})}}}),m.clearStoredFiles()},onProgress:function(e,t,a,n){var i=Math.round(100*a/n);$(".progress-bar","#progress_screen").css({width:i+"%"}),$("#progress_text").text("Uploading... "+t+" - "+i+"%")}}),t)),g=$(e.source);g.on("canplay",function(){this.duration&&(this.currentTime=this.duration/2)})})};var d=!0;if($(document).ready(function(){var e=document.getElementById("temp"),t={element:document.getElementById("temp"),autoUpload:!1,request:{endpoint:"https://"+bucketName+".s3-"+region+".amazonaws.com",accessKey:accessKey},validation:{allowedExtensions:["png","jpg","mp4","webM"],sizeLimit:5368709120},messages:{sizeError:messages.size_limit},signature:{endpoint:"/s3",customHeaders:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}},uploadSuccess:{endpoint:i},objectProperties:{key:function(e){return"portfolios/"+$('input[name="user_id"]').val()+"/"+a.getName(e)},acl:"public-read"},callbacks:{onSubmitted:function(e,t){var i=a.getFile(e);(n=e,/^video/.test(i.type)&&($("#preview").removeClass("hidden"),$("#preview").get(0).src=window.URL.createObjectURL(i),o=t+".png"),0==e&&/^image/.test(a.getFile(e).type))&&a.drawThumbnail(e,document.getElementById("canvas"),200).done(function(e){a.addFiles({canvas:document.getElementById("canvas"),name:"thumnail_"+t,type:"image/png"})})},onComplete:function(e,t,n){d?$('input[name="thumb_path"]').val(n.tempLink):0==e?($('input[name="url"]').val(n.tempLink),$('input[name="mime"]').val(a.getFile(e).type)):$('input[name="thumb_path"]').val(n.tempLink)},onProgress:function(e,t,a,n){var i=Math.round(100*a/n);$(".progress-bar","#progress_screen").css({width:i+"%"}),$("#progress_text").text("Uploading... "+t+" - "+i+"%")},onAllComplete:function(){$("#portfolioform").submit(),$("#progress_text").text("Please wait...!")}}};if(null!=document.getElementById("l-flag-mov")&&t.validation.allowedExtensions.push("mov"),e)var a=new qq.s3.FineUploader(t);$("#file_limit button").click(function(){$(this).parent().fadeOut()}),$(document).on("change","#file_selection",function(e){if(a.reset(),$('input[name="validation"]').val(""),this.files&&/^video/.test(this.files[0].type)){$('input[name="validation"]').val("yes"),$('input[name="validation"]').siblings(".parsley-errors-list").remove(),a.addFiles(this.files[0]);var t=$("#preview");t.one("canplay",function(){this.duration&&(this.currentTime=.5)}),t.on("seeked",function(){var e=f(t.get(0));a.addFiles({canvas:e,name:o,quality:"60",type:"image/png"}),$("#thumbnail-preview").attr("src",e.toDataURL()),$(".control").removeClass("hidden"),t.off("seeked"),t.get(0).pause()}),d=!1}this.files&&/^image/.test(this.files[0].type)&&($('input[name="validation"]').val("yes"),$('input[name="validation"]').siblings(".parsley-errors-list").remove(),a.addFiles(this.files[0]),$("#thumbnail-preview").get(0).src=window.URL.createObjectURL(this.files[0]),$("#preview").addClass("hidden"),$(".control").addClass("hidden"),$('input[name="thumb_path"]').val(""),d=!1),$("#file_selection").val("")}),$(document).on("click","#recreate",function(){$("#preview").crossOrigin="*",n&&a.cancel(n),$("#hidden_file").val("");var e=f($("#preview").get(0));$("#thumbnail-preview").attr("src",e.toDataURL()),a.addFiles({canvas:e,name:o,quality:"60",type:"image/png"})}),$(document).on("change","#hidden_file",function(){if(this.files&&/^image/.test(this.files[0].type)){var e=this.files[0];if($("#thumbnail-preview").attr("src",window.URL.createObjectURL(e)),n&&a.cancel(n),d)return void a.addFiles(e);a.addFiles({blob:e,name:o,type:"image/png"})}}),$(document).on("submit","#portfolioform",function(e){a.getUploads({status:qq.status.SUBMITTED}).length>0&&(e.preventDefault(),a.uploadStoredFiles(),$("#progress_screen").fadeIn(),$("#progress_text").html('Validating your request..! <i class="fa fa-refresh fa-spin fa-fw"></i>'),$(".progress-bar","#progress_screen").css({width:0}))})}),$("#change_thumbnail").length>0){var m=new Image;m.crossOrigin="anonymous",m.src=$("#change_thumbnail").val(),m.onload=function(){var e,t,a,n;puploader.addFiles({canvas:(a=m,n=document.getElementById("canvas"),n.height=a.height,n.width=a.width,n.getContext("2d").drawImage(a,0,0),n),name:(e=$("#change_thumbnail").val(),t=e.split("/"),t[t.length-1]),type:"image/png"}),setTimeout(function(){puploader.cancel(0)},500)}}function f(e){e.src;var t=e.videoWidth*s,a=e.videoHeight*s,n=document.createElement("canvas");return n.width=t,n.height=a,n.getContext("2d").drawImage(e,0,0,t,a),n}}});