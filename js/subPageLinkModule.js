
// 동적으로 HTML 구조 생성
function createListLayouts(robotFiles, aiFiles, etcFiles) {
    var container = document.getElementById('robotProjectList');

    // <div class="collapse" ...> 생성
    var collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse';
    collapseDiv.id = 'robotLayouts';
    collapseDiv.setAttribute('aria-labelledby', 'headingOne');
    collapseDiv.setAttribute('data-bs-parent', '#robotProjectList');

    // <nav class="sb-sidenav-menu-nested nav"> 생성
    var nav = document.createElement('nav');
    nav.className = 'sb-sidenav-menu-nested nav';

    // 파일마다 <a> 생성
    robotFiles.forEach((file) => {
        var filename = file;
        console.log(filename)
        var nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
        var link = document.createElement('a');
        link.className = 'nav-link';
        link.href = `../robotProject/${filename}`;
        link.textContent = `${nameWithoutExtension}`;
        nav.appendChild(link); // <a>를 <nav>에 추가
    });

    // <nav>를 <div>에 추가
    collapseDiv.appendChild(nav);
    // 완성된 <div>를 컨테이너에 추가
    container.appendChild(collapseDiv);


    var container = document.getElementById('aiProjectList');

    // <div class="collapse" ...> 생성
    var collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse';
    collapseDiv.id = 'aiLayouts';
    collapseDiv.setAttribute('aria-labelledby', 'headingOne');
    collapseDiv.setAttribute('data-bs-parent', '#aiProjectList');

    // <nav class="sb-sidenav-menu-nested nav"> 생성
    var nav = document.createElement('nav');
    nav.className = 'sb-sidenav-menu-nested nav';

    // 파일마다 <a> 생성
    aiFiles.forEach((file) => {
        var filename = file;
        console.log(filename)
        var nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
        var link = document.createElement('a');
        link.className = 'nav-link';
        link.href = `../aiProject/${filename}`;
        link.textContent = `${nameWithoutExtension}`;
        nav.appendChild(link); // <a>를 <nav>에 추가
    });

    // <nav>를 <div>에 추가
    collapseDiv.appendChild(nav);
    // 완성된 <div>를 컨테이너에 추가
    container.appendChild(collapseDiv);


    var container = document.getElementById('etcProjectList');

    // <div class="collapse" ...> 생성
    var collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse';
    collapseDiv.id = 'etcLayouts';
    collapseDiv.setAttribute('aria-labelledby', 'headingOne');
    collapseDiv.setAttribute('data-bs-parent', '#etcProjectList');

    // <nav class="sb-sidenav-menu-nested nav"> 생성
    var nav = document.createElement('nav');
    nav.className = 'sb-sidenav-menu-nested nav';

    // 파일마다 <a> 생성
    etcFiles.forEach((file) => {
        var filename = file;
        console.log(filename)
        var nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
        var link = document.createElement('a');
        link.className = 'nav-link';
        link.href = `../etcProject/${filename}`;
        link.textContent = `${nameWithoutExtension}`;
        nav.appendChild(link); // <a>를 <nav>에 추가
    });

    // <nav>를 <div>에 추가
    collapseDiv.appendChild(nav);
    // 완성된 <div>를 컨테이너에 추가
    container.appendChild(collapseDiv);
}

// 리스트 불러오는 모듈 추가
const RobotFiles = ['robotProject1.html'];
const AiFiles = ['aiProject1.html'];
const EtcFiles = ['etcProject1.html'];


// 파일 목록으로 함수 호출
createListLayouts(RobotFiles, AiFiles, EtcFiles);