var active_team = 1;
var team1_selected = [0,0,0,0];
var team2_selected = [0,0,0,0];
var team3_selected = [0,0,0,0];

function set_team1(){
  active_team = 1;
  document.getElementById('team1').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team1_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");
}
function set_team2(){
  active_team = 2;
  document.getElementById('team2').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team2_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");
}
function set_team3(){
  active_team = 3;
  document.getElementById('team3').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team3_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");
}
function set_lima(){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == 0){
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", "u_lima");
          team1_selected[0] = "lima";
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", "u_lima");
          team1_selected[1] = "lima";
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", "u_lima");
          team1_selected[2] = "lima";
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "u_lima");
          team1_selected[3] = "lima";
          break;
      }
      break;
    }
  }
}
