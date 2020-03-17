var sidebar_state = false;

function SidebarToggle(){
    if(sidebar_state === false){
        SidebarOpen();
    } else{
        SidebarClose();
    }
}

function SidebarOpen(){
    document.querySelector('#sidebar').style.left = '0px';
    document.querySelector('.material-icons.md-48').style.left = '300px';
    sidebar_state = true;
}

function SidebarClose(){
    document.querySelector('#sidebar').style.left = '-300px';
    document.querySelector('.material-icons.md-48').style.left = '0px';
    sidebar_state = false;
}