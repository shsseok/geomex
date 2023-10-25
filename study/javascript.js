var console = window.console || {
    log: function () {}
};
$(document).ready(function () {
	var map = new ol.Map({
        controls: ol.control.defaults().extend([new ol.control.FullScreen()]),//-->지도를 컨트롤하기 위해서 예를 들어서 먼가 전체로 보여줄수 있는 버튼을 만들 수 있고 여러가지 컨트롤 하기 위함 (회전,전체화면 등)
        																		//control은 지도에 들어갈 컴포넌트 확대버튼 축소버튼 등등 설정가능 회전 버튼 등 interaction은 말 그대로 사용자와 상호작용하기 위함이다.
        renderer: "webgl",//--> 어떤식으로 지도를 랜더링 할것인지에 대해서 설정 지금은 2d 3d를 지원하는 webgl을 이용
        logo: false, //-> 로고 표시 
        target: "map", //--> 지도를 표시할 div id 셀렉터 어디에 map을 표시할껀지에 대해서
        layers: [], //-> 레이어를 쌓기 위한 레이어 배열 이곳에 레이어를 쌓는다.
        interactions: ol.interaction.defaults({// --> 사용자와 상호작용하기 위해서 
            dragPan: false,
            mouseWheelZoom: false
        }).extend([
                new ol.interaction.DragPan({
                    kinetic: false//관성 감속? --> 눈에 보이게 이해는 안됨
                }),
                new ol.interaction.MouseWheelZoom({
                    duration: 2000
                })
            ]),
        view: new ol.View({
            projection: ol.proj.get("EPSG:5186"),//-->지도의 투영 값 어떤 좌표계
            center: [263846.4536899561, 586688.9485874075],//-> 춘천을 중심으로 지도를 잡겠다 그리겠다라는 뜻이다.
            zoom: 11,//처음 들어왔을 때의 줌레벨이다.
            minZoom: 8,//최소 줌레벨
            maxZoom: 23//최대 줌레벨
            //rotation:10
        })
	});
	map.addLayer(_daumMapLayer);
	LayerSour
