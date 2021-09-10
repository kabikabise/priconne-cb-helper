var active_team = 1;
var team1_selected = [0,0,0,0];
var team2_selected = [0,0,0,0];
var team3_selected = [0,0,0,0];
var sup1_selected = 0;
var sup2_selected = 0;
var sup3_selected = 0;

function set_team1(){
  active_team = 1;
  document.getElementById('team1').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team1_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");
}

function set_team2(){
  active_team = 2;
  document.getElementById('team2').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team2_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");
}

function set_team3(){
  active_team = 3;
  document.getElementById('team3').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team3_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");
}

function set_support1() {
  active_team = 4;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");
}

function set_support2() {
  active_team = 5;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");
}

function set_support3() {
  active_team = 6;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title_selected");
}


function set_unit(unit_name){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == unit_name){
      var element = document.getElementById(unit_name);
      element.classList.add("u_default");
      element.classList.remove("u_select");
      for (let j = i; j < team1_selected.length-1; j++){
        team1_selected[j] = team1_selected[j+1];
        switch(j){
          case 0:
            var x = document.getElementById('t1_1').className;
            document.getElementById('t1_0').setAttribute("class", x);
            break;
          case 1:
            var x = document.getElementById('t1_2').className;
            document.getElementById('t1_1').setAttribute("class", x);
            break;
          case 2:
            var x = document.getElementById('t1_3').className;
            document.getElementById('t1_2').setAttribute("class", x);
            break;
        }
      }
      switch (i){
        case 0:
          document.getElementById('t1_3').setAttribute("class", "teambox_empty");
          team1_selected[3] = 0;
          break;
        case 1:
          document.getElementById('t1_3').setAttribute("class", "teambox_empty");
          team1_selected[3] = 0;
          break;
        case 2:
          document.getElementById('t1_3').setAttribute("class", "teambox_empty");
          team1_selected[3] = 0;
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "teambox_empty");
          team1_selected[3] = 0;
          break;
      }
      break;
    }
    if (team1_selected[i] == 0){
      var u_unit = "u_"+unit_name;
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", u_unit);
          team1_selected[0] = unit_name;
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", u_unit);
          team1_selected[1] = unit_name;
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", u_unit);
          team1_selected[2] = unit_name;
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", u_unit);
          team1_selected[3] = unit_name;
          break;
      }
      var element = document.getElementById(unit_name);
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}
