(this.webpackJsonpwetube=this.webpackJsonpwetube||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),c=a.n(r),o=a(7),l=a.n(o),s=a(15),u=a(2),m=a(3),d=a(5),v=a(4),p=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=a(16),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),b=(a(41),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui list"}," ",n," ")},S=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading..");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video plauer",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",null,t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},g="AIzaSyCdXwR9iztGthZGzca5k2Rq__iyX-bfThQ",w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:10,key:"".concat(g)}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("h1",{style:y},"WeTube"),i.a.createElement(p,{onSubmit:this.onTermSubmit}),"Found ",this.state.videos.length," videos.",i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(S,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(i.a.Component),y={color:"blue",fontSize:"15 px",textAlign:"center"},N=w;c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f7789017.chunk.js.map