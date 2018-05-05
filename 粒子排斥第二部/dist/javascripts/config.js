define(["index"],function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var t=n(e);requirejs.config({baseUrl:"dist/javascripts"});var r=new t["default"]("demo",{src:"dist/images/demo.png",imgSize:[1024,512],backgroundColor:"#000",cols:166,rows:120,disperse:10,mouseRange:100,recovery:.95,filter:function(e,n,t,r){return!(e>100&&t>250)}});window.particle=r;var i=document.getElementById("file"),a=document.getElementById("img");i.addEventListener("change",function(e){var n=e.target.files[0],t=new FileReader;t.onload=function(e){a.src=e.target.result,r.src=e.target.result},t.readAsDataURL(n)});var d=document.getElementById("mouseRange"),o=document.getElementById("mouseRange_value");d.value=r.mouseRange,o.innerHTML=r.mouseRange,d.addEventListener("change",function(e){var n=+e.target.value;o.innerHTML=n,r.mouseRange=n});var u=document.getElementById("recovery"),s=document.getElementById("recovery_value");u.value=100-100*r.recovery,s.innerHTML=100-100*r.recovery,u.addEventListener("change",function(e){var n=+e.target.value;s.innerHTML=n,r.recovery=(100-n)/100});var c=document.getElementById("disperse"),l=document.getElementById("disperse_value");c.value=r.disperse,l.innerHTML=r.disperse,c.addEventListener("change",function(e){var n=+e.target.value;l.innerHTML=n,r.disperse=n});var v=document.getElementById("r"),g=document.getElementById("r_value");v.value=2*r.r,g.innerHTML=r.r,v.addEventListener("change",function(e){var n=+e.target.value;g.innerHTML=n/2,r.r=n/2});var m=document.getElementById("color"),y=document.getElementById("width"),f=document.getElementById("height"),E=document.getElementById("checkBtn");E.addEventListener("click",function(){console.log(m.value),r.filter=function(e,n,t,r){if(e!==parseInt(m.value.substr(1,2),16)||n!==parseInt(m.value.substr(3,2),16)||t!==parseInt(m.value.substr(5,2),16))return!0},r.cols=cols.value||100,r.rows=rows.value||100,y.value&&f.value?r.imgSize=[y.value,f.value]:r.imgSize=void 0,r.x=void 0,r.y=void 0,r.destory(),r.init()});var L=document.getElementById("hideBtn");L.addEventListener("click",function(){return document.querySelector(".control").classList.toggle("hidden")});var B=document.getElementById("resetBtn");B.addEventListener("click",function(){Object.assign(r,{src:"dist/images/demo.png",imgSize:[1024,512],cols:166,rows:120,disperse:10,mouseRange:50,recovery:.95,r:.5,filter:function(e,n,t,r){return!(e>100&&t>250)}}),d.value=r.mouseRange,o.innerHTML=r.mouseRange,u.value=100-100*r.recovery,s.innerHTML=100-100*r.recovery,c.value=r.disperse,l.innerHTML=r.disperse,r.x=void 0,r.y=void 0,r.destory(),r.init()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJfaW5kZXgiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfaW5kZXgyIiwicmVxdWlyZWpzIiwiY29uZmlnIiwiYmFzZVVybCIsInBhcnRpY2xlIiwiUGFydGljbGUiLCJzcmMiLCJpbWdTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiY29scyIsInJvd3MiLCJkaXNwZXJzZSIsIm1vdXNlUmFuZ2UiLCJyZWNvdmVyeSIsImZpbHRlciIsInIiLCJnIiwiYiIsImEiLCJ3aW5kb3ciLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIm1vdXNlUmFuZ2VfdmFsdWUiLCJ2YWx1ZSIsImlubmVySFRNTCIsInYiLCJyZWNvdmVyeV92YWx1ZSIsImRpc3BlcnNlX3ZhbHVlIiwicl92YWx1ZSIsImNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJjaGVja0J0biIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsInN1YnN0ciIsInVuZGVmaW5lZCIsIngiLCJ5IiwiZGVzdG9yeSIsImluaXQiLCJoaWRlQnRuIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlc2V0QnRuIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxTQUFVLFNBQVVDLEdBQzNCLFlBSUEsU0FBU0MsR0FBdUJDLEdBQy9CLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQzlCRSxVQUFTRixHQUpYLEdBQUlHLEdBQVVKLEVBQXVCRCxFQUh0Q00sV0FBVUMsUUFDVEMsUUFBUyxvQkFLVixJQUFJQyxHQUFXLEdBQUlDLEdBQUFBLFdBQVMsUUFDM0JDLElB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QUFPUixPQUd4QzlCLEVBQVNHLFFBQVV5QyxPQUVwQjVDLEVBQVM2QyxFQUFJRCxPQUNiNUMsRUFBUzhDLEVBQUlGLE9BQ2I1QyxFQUFTK0MsVUFDVC9DLEVBQVNnRCxRQU1WLElBQUlDLEdBQVVoQyxTQUFTQyxlQUFlLFVBRXRDK0IsR0FBUTdCLGlCQUFpQixRQUFTLFdBQUEsTUFBTUgsVUFBU2lDLGNBQWMsWUFBWUMsVUFBVUMsT0FBTyxXQU01RixJQUFJQyxHQUFXcEMsU0FBU0MsZUFBZSxXQUN2Q21DLEdBQVNqQyxpQkFBaUIsUUFBUyxXQUNsQ2tDLE9BQU9DLE9BQU92RCxHQUNiRSxJQUFLLHVCQUNMQyxTQUFVLEtBQU0sS0FDaEJFLEtBQU0sSUFDTkMsS0FBTSxJQUNOQyxTQUFVLEdBQ1ZDLFdBQVksR0FDWkMsU0FBVSxJQUNWRSxFQUFHLEdBQ0hELE9BQVEsU0FBQ0MsRUFBR0MsRUFBR0MsRUFBR0MsR0FDakIsUUFBSUgsRUFBSSxLQUFPRSxFQUFJLFFBT3JCTCxFQUFXc0IsTUFBUTlCLEVBQVNRLFdBQzVCcUIsRUFBaUJFLFVBQVkvQixFQUFTUSxXQUN0Q0MsRUFBU3FCLE1BQVMsSUFBMEIsSUFBcEI5QixFQUFTUyxTQUNqQ3dCLEVBQWVGLFVBQWEsSUFBMEIsSUFBcEIvQixFQUFTUyxTQUMzQ0YsRUFBU3VCLE1BQVE5QixFQUFTTyxTQUMxQjJCLEVBQWVILFVBQVkvQixFQUFTTyxTQUNwQ1AsRUFBUzZDLEVBQUlELE9BQ2I1QyxFQUFTOEMsRUFBSUYsT0FDYjVDLEVBQVMrQyxVQUNUL0MsRUFBU2dEIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmVqcy5jb25maWcoe1xuXHRiYXNlVXJsOiAnZGlzdC9qYXZhc2NyaXB0cydcbn0pO1xuXG5pbXBvcnQgUGFydGljbGUgZnJvbSAnaW5kZXgnO1xuXG5sZXQgcGFydGljbGUgPSBuZXcgUGFydGljbGUoJ2RlbW8nLCB7XG5cdHNyYzogJ2Rpc3QvaW1hZ2VzL2RlbW8ucG5nJyxcblx0aW1nU2l6ZTogWzEwMjQsIDUxMl0sXG5cdGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuXHRjb2xzOiAxNjYsXG5cdHJvd3M6IDEyMCxcblx0ZGlzcGVyc2U6IDEwLFxuXHRtb3VzZVJhbmdlOiAxMDAsXG5cdHJlY292ZXJ5OiAuOTUsXG5cdGZpbHRlcjogKHIsIGcsIGIsIGEpID0+IHtcblx0XHRpZiAociA+IDEwMCAmJiBiID4gMjUwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH0sXG59KVxuXG53aW5kb3cucGFydGljbGUgPSBwYXJ0aWNsZVxuXG4vKlxuICog5LiK5Lyg5Zu+54mHXG4gKi9cbmxldCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKVxubGV0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcnKVxuZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuXHRsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG5cblx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuXHRcdGltZy5zcmMgPSBlLnRhcmdldC5yZXN1bHRcblx0XHRwYXJ0aWNsZS5zcmMgPSBlLnRhcmdldC5yZXN1bHRcblx0fVxuXHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxufSlcblxuLypcbiAqIOm8oOagh+iMg+WbtFxuICovXG5sZXQgbW91c2VSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3VzZVJhbmdlJylcbmxldCBtb3VzZVJhbmdlX3ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdXNlUmFuZ2VfdmFsdWUnKVxubW91c2VSYW5nZS52YWx1ZSA9IHBhcnRpY2xlLm1vdXNlUmFuZ2Vcbm1vdXNlUmFuZ2VfdmFsdWUuaW5uZXJIVE1MID0gcGFydGljbGUubW91c2VSYW5nZVxuXG5tb3VzZVJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cdGxldCB2ID0gK2UudGFyZ2V0LnZhbHVlXG5cdG1vdXNlUmFuZ2VfdmFsdWUuaW5uZXJIVE1MID0gdlxuXHRwYXJ0aWNsZS5tb3VzZVJhbmdlID0gdlxufSlcblxuLypcbiAqIOaBouWkjVxuICovXG5sZXQgcmVjb3ZlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb3ZlcnknKVxubGV0IHJlY292ZXJ5X3ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY292ZXJ5X3ZhbHVlJylcbnJlY292ZXJ5LnZhbHVlID0gKDEwMCAtIHBhcnRpY2xlLnJlY292ZXJ5ICogMTAwKVxucmVjb3ZlcnlfdmFsdWUuaW5uZXJIVE1MID0gKDEwMCAtIHBhcnRpY2xlLnJlY292ZXJ5ICogMTAwKVxuXG5yZWNvdmVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuXHRsZXQgdiA9ICtlLnRhcmdldC52YWx1ZVxuXHRyZWNvdmVyeV92YWx1ZS5pbm5lckhUTUwgPSB2XG5cdHBhcnRpY2xlLnJlY292ZXJ5ID0gICgxMDAgLSB2KSAvIDEwMFxufSlcblxuLypcbiAqIOWBj+enu+iMg+WbtFxuICovXG5sZXQgZGlzcGVyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGVyc2UnKVxubGV0IGRpc3BlcnNlX3ZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BlcnNlX3ZhbHVlJylcbmRpc3BlcnNlLnZhbHVlID0gcGFydGljbGUuZGlzcGVyc2VcbmRpc3BlcnNlX3ZhbHVlLmlubmVySFRNTCA9IHBhcnRpY2xlLmRpc3BlcnNlXG5cbmRpc3BlcnNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cdGxldCB2ID0gK2UudGFyZ2V0LnZhbHVlXG5cdGRpc3BlcnNlX3ZhbHVlLmlubmVySFRNTCA9IHZcblx0cGFydGljbGUuZGlzcGVyc2UgPSB2XG59KVxuXG4vKlxuICog5YGP56e76IyD5Zu0XG4gKi9cbmxldCByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3InKVxubGV0IHJfdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncl92YWx1ZScpXG5yLnZhbHVlID0gcGFydGljbGUuciAqIDJcbnJfdmFsdWUuaW5uZXJIVE1MID0gcGFydGljbGUuclxuXG5yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cdGxldCB2ID0gK2UudGFyZ2V0LnZhbHVlXG5cdHJfdmFsdWUuaW5uZXJIVE1MID0gdiAvIDJcblx0cGFydGljbGUuciA9IHYgLyAyXG59KVxuXG4vKlxuICog6L+H5ruk6aKc6ImyXG4gKi9cbmxldCBjb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvcicpXG5sZXQgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkdGgnKVxubGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWlnaHQnKVxuXG5sZXQgY2hlY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tCdG4nKVxuY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKGNvbG9yLnZhbHVlKVxuXHRwYXJ0aWNsZS5maWx0ZXIgPSBmdW5jdGlvbihyLCBnLCBiLCBhKSB7XG5cdFx0aWYociAhPT0gcGFyc2VJbnQoY29sb3IudmFsdWUuc3Vic3RyKDEsIDIpLCAxNikgfHwgZyAhPT0gcGFyc2VJbnQoY29sb3IudmFsdWUuc3Vic3RyKDMsIDIpLCAxNikgfHwgYiAhPT0gcGFyc2VJbnQoY29sb3IudmFsdWUuc3Vic3RyKDUsIDIpLCAxNikpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHR9XG5cdHBhcnRpY2xlLmNvbHMgPSBjb2xzLnZhbHVlIHx8IDEwMFxuXHRwYXJ0aWNsZS5yb3dzID0gcm93cy52YWx1ZSB8fCAxMDBcblx0aWYgKHdpZHRoLnZhbHVlICYmIGhlaWdodC52YWx1ZSkge1xuXHRcdHBhcnRpY2xlLmltZ1NpemUgPSBbd2lkdGgudmFsdWUsIGhlaWdodC52YWx1ZV1cblx0fVxuXHRlbHNlIHtcblx0XHRwYXJ0aWNsZS5pbWdTaXplID0gdW5kZWZpbmVkXG5cdH1cblx0cGFydGljbGUueCA9IHVuZGVmaW5lZFxuXHRwYXJ0aWNsZS55ID0gdW5kZWZpbmVkXG5cdHBhcnRpY2xlLmRlc3RvcnkoKVxuXHRwYXJ0aWNsZS5pbml0KClcbn0pXG5cbi8qXG4gKiDpmpDol4/mjqfliLblj7BcbiAqL1xubGV0IGhpZGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZUJ0bicpXG5cbmhpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpKVxuXG4vKlxuICogcmVzZXRCdG5cbiAqL1xuXG5sZXQgcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRCdG4nKVxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdE9iamVjdC5hc3NpZ24ocGFydGljbGUsIHtcblx0XHRzcmM6ICdkaXN0L2ltYWdlcy9kZW1vLnBuZycsXG5cdFx0aW1nU2l6ZTogWzEwMjQsIDUxMl0sXG5cdFx0Y29sczogMTY2LFxuXHRcdHJvd3M6IDEyMCxcblx0XHRkaXNwZXJzZTogMTAsXG5cdFx0bW91c2VSYW5nZTogNTAsXG5cdFx0cmVjb3Zlcnk6IC45NSxcblx0XHRyOiAuNSxcblx0XHRmaWx0ZXI6IChyLCBnLCBiLCBhKSA9PiB7XG5cdFx0XHRpZiAociA+IDEwMCAmJiBiID4gMjUwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHR9KVxuXHRtb3VzZVJhbmdlLnZhbHVlID0gcGFydGljbGUubW91c2VSYW5nZVxuXHRtb3VzZVJhbmdlX3ZhbHVlLmlubmVySFRNTCA9IHBhcnRpY2xlLm1vdXNlUmFuZ2Vcblx0cmVjb3ZlcnkudmFsdWUgPSAoMTAwIC0gcGFydGljbGUucmVjb3ZlcnkgKiAxMDApXG5cdHJlY292ZXJ5X3ZhbHVlLmlubmVySFRNTCA9ICgxMDAgLSBwYXJ0aWNsZS5yZWNvdmVyeSAqIDEwMClcblx0ZGlzcGVyc2UudmFsdWUgPSBwYXJ0aWNsZS5kaXNwZXJzZVxuXHRkaXNwZXJzZV92YWx1ZS5pbm5lckhUTUwgPSBwYXJ0aWNsZS5kaXNwZXJzZVxuXHRwYXJ0aWNsZS54ID0gdW5kZWZpbmVkXG5cdHBhcnRpY2xlLnkgPSB1bmRlZmluZWRcblx0cGFydGljbGUuZGVzdG9yeSgpXG5cdHBhcnRpY2xlLmluaXQoKVxufSkiXX0=
