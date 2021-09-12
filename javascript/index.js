var active_team = 1;
var team1_selected = [0,0,0,0];
var team2_selected = [0,0,0,0];
var team3_selected = [0,0,0,0];
var sup1_selected = 0;
var sup2_selected = 0;
var sup3_selected = 0;
const charnames = ["lima","miyako","kuka","jun","kaori"]

function unit_default(unit_name){
  var element = document.getElementById(unit_name);
  element.classList.add("u_default");
  element.classList.remove("u_select");
}

function unit_default_all(){
  for (let i = 0; i < charnames.length; i++){
    unit_default(charnames[i]);
  }
}

function set_clear(){
  unit_default_all();
  active_team = 1;
  team1_selected = [0,0,0,0];
  team2_selected = [0,0,0,0];
  team3_selected = [0,0,0,0];
  sup1_selected = 0;
  sup2_selected = 0;
  sup3_selected = 0;
  document.getElementById('t1_0').setAttribute("class", "teambox_empty");
  document.getElementById('t1_1').setAttribute("class", "teambox_empty");
  document.getElementById('t1_2').setAttribute("class", "teambox_empty");
  document.getElementById('t1_3').setAttribute("class", "teambox_empty");

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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup1_selected == 0){
    document.getElementById("t1_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t1_s").setAttribute("class", sup1_selected);
    var element = document.getElementById(sup1_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup2_selected == 0){
    document.getElementById("t2_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t2_s").setAttribute("class", sup2_selected);
    var element = document.getElementById(sup2_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup3_selected == 0){
    document.getElementById("t3_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t3_s").setAttribute("class", sup3_selected);
    var element = document.getElementById(sup3_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup1_selected == 0){
    document.getElementById("t1_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t1_s").setAttribute("class", sup1_selected);
    var element = document.getElementById(sup1_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup2_selected == 0){
    document.getElementById("t2_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t2_s").setAttribute("class", sup2_selected);
    var element = document.getElementById(sup2_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
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

  unit_default_all();
  for (let i = 0; i < team1_selected.length; i++){
    var t1_x = "t1_"+ i.toString();
    if(team1_selected[i] == 0){
      document.getElementById(t1_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team1_selected[i];
      document.getElementById(t1_x).setAttribute("class", u_unit);
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit);
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit);
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup3_selected == 0){
    document.getElementById("t3_s").setAttribute("class", "teambox_empty");
  }else{
    document.getElementById("t3_s").setAttribute("class", sup3_selected);
    var element = document.getElementById(sup3_selected[i]);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}


function set_unit(unit_name){

  var element = document.getElementById(unit_name);
  if(element.classList.contains("u_default")){
    switch (active_team) {
      case 1:
        for (let i = 0; i < team1_selected.length; i++){
          if (team1_selected[i] == 0){
            var u_unit = "u_"+unit_name;
            var t1_i = "t1_"+i.toString();
            team1_selected[i] = unit_name;
            document.getElementById(t1_i).setAttribute("class", u_unit);
            var element = document.getElementById(unit_name);
            element.classList.add("u_select");
            element.classList.remove("u_default");
            break;
          }
        }
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
    }
  }else{
    switch (active_team) {
      case 1:
        for (let i = 0; i < team1_selected.length; i++){
          if (team1_selected[i] == unit_name){
            var u_unit = "u_" + unit_name;
            var t1_i = "t1_" + i.toString();
            for (let j = i; j < team1_selected.length-1; j++){
              var t1_j = "t1_" + j.toString();
              var k = j+1;
              var t1_k = "t1_" + k.toString();
              var x = document.getElementById(t1_k).className;
              document.getElementById(t1_j).setAttribute("class", x);
              team1_selected[j] = team1_selected[j+1];
            }
            document.getElementById('t1_3').setAttribute("class", "teambox_empty");
            team1_selected[3] = 0;
            var element = document.getElementById(unit_name);
            element.classList.add("u_default");
            element.classList.remove("u_select");
            break;
          }
        }

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
    }

  }
}
