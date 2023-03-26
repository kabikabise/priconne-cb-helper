var active_team = 1;
var team1_selected = [0,0,0,0];
var team2_selected = [0,0,0,0];
var team3_selected = [0,0,0,0];
var sup1_selected = 0;
var sup2_selected = 0;
var sup3_selected = 0;
var data = 0;
var hasselect = 0;
const charnames = ["lima","miyako","kuka","jun","kaori", "pecorine", "nozomi", "makoto", "akino", "matsuri", "tsumugi", "hiyori", "misogi", "ayane", "tamaki", "tomo", "stamaki", "eriko", "specorine", "kurumi", "djeeta", "rei", "shizuru",
                  "mimi", "shinobu", "mahiru", "yukari", "monika", "ninon", "mifuyu", "illya", "saren", "anna", "smifuyu", "kokkoro", "skokkoro", "rin", "mitsuki", "yori", "akari",
                  "arisa", "rino", "suzuna", "shiori", "io", "suzume", "misato", "kyaru", "hatsune", "misaki", "ssuzume", "skyaru", "aoi", "chika", "maho", "yui", "yuki", "kyoka",
                  "hshinobu", "hmiyako", "hmisaki", "christina", "nanaka", "ruka", "xchika", "xkurumi", "xayane", "nyui", "nrei", "nhiyori", "vshizuru", "veriko", "muimi", "kasumi", "ayumi", "anne", "lou", "grea",
                  "okuka", "oninon", "rem", "ram", "emilia", "ssuzuna", "sio", "ssaren", "smakoto", "skaori", "smaho", "neneka", "taoi", "chloe", "hmisogi", "hkyoka", "hmimi", "luna",
                  "kaya", "xnozomi", "xchristina", "xillya", "nkyaru", "nsuzume", "nkokkoro","mkasumi", "mshiori", "ppecorine", "imio", "iuzuki", "irin", "yuni", "chieru", "rrin", "rmahiru", "pkokkoro"
                  ]
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOAib0Cy9PAsvgepC5q_gk4PiQpAVV8mm7cEIRak0IcBU4UUk34o6KSmnYeZ8TQWWVe6PubRaC6wQ0/pub?gid=0&single=true&output=csv';

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: sheetresult
  })
}

window.onload = function() {
  init();
};

function sheetresult(results){
  data = results.data
}

function set_boss(bossname, bossid){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById(bossid).innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    hasselect = 0;
    if (value.boss == bossname){
      var s1 = document.getElementById('stage1');
      var s2 = document.getElementById('stage2');
      var s3 = document.getElementById('stage3');
      if ( (s1.checked == true)&&(value.stage=='1') || (s2.checked == true)&&(value.stage=='2') || (s3.checked == true)&&(value.stage=='3') ){
        var element1 = document.getElementById(value.u1);
        if(element1.classList.contains("u_select")){
          hasselect += 1;
        }
        var element2 = document.getElementById(value.u2);
        if(element2.classList.contains("u_select")){
          hasselect += 1;
        }
        var element3 = document.getElementById(value.u3);
        if(element3.classList.contains("u_select")){
          hasselect += 1;
        }
        var element4 = document.getElementById(value.u4);
        if(element4.classList.contains("u_select")){
          hasselect += 1;
        }
        var element5 = document.getElementById(value.u5);
        if(element5.classList.contains("u_select")){
          hasselect += 1;
        }
        switch(active_team){
          case 1:
            if(sup1_selected == value.u1){
              hasselect -= 1;
            }
            if(sup1_selected == value.u2){
              hasselect -= 1;
            }
            if(sup1_selected == value.u3){
              hasselect -= 1;
            }
            if(sup1_selected == value.u4){
              hasselect -= 1;
            }
            if(sup1_selected == value.u5){
              hasselect -= 1;
            }
            break;
          case 2:
            if(sup2_selected == value.u1){
              hasselect -= 1;
            }
            if(sup2_selected == value.u2){
              hasselect -= 1;
            }
            if(sup2_selected == value.u3){
              hasselect -= 1;
            }
            if(sup2_selected == value.u4){
              hasselect -= 1;
            }
            if(sup2_selected == value.u5){
              hasselect -= 1;
            }
            break;
          case 3:
            if(sup3_selected == value.u1){
              hasselect -= 1;
            }
            if(sup3_selected == value.u2){
              hasselect -= 1;
            }
            if(sup3_selected == value.u3){
              hasselect -= 1;
            }
            if(sup3_selected == value.u4){
              hasselect -= 1;
            }
            if(sup3_selected == value.u5){
              hasselect -= 1;
            }
            break;
        }

        if (hasselect > 1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
        }else{
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
        }

        databox = "<div class=\"charwrapper\"><div class=\"u_" + value.u1 + " b_default\"></div>";
        if(value.ue1=="yes"){
          databox += "<div class=\"uepos ue\"></div>";
        }
        databox += "<div class=\"starpos\">";
        var starcount = parseInt(value.s1);
        for (let i = 0; i < starcount; i++){
          databox += "<div class=\"star\"></div>";
        }
        for (let i = 0; i < 6-starcount; i++){
          databox += "<div class=\"nostar\"></div>";
        }
        databox += "</div></div>";

        databox += "<div class=\"charwrapper\"><div class=\"u_" + value.u2 + " b_default\"></div>";
        if(value.ue2=="yes"){
          databox += "<div class=\"uepos ue\"></div>";
        }
        databox += "<div class=\"starpos\">";
        var starcount = parseInt(value.s2);
        for (let i = 0; i < starcount; i++){
          databox += "<div class=\"star\"></div>";
        }
        for (let i = 0; i < 6-starcount; i++){
          databox += "<div class=\"nostar\"></div>";
        }
        databox += "</div></div>";

        databox += "<div class=\"charwrapper\"><div class=\"u_" + value.u3 + " b_default\"></div>";
        if(value.ue3=="yes"){
          databox += "<div class=\"uepos ue\"></div>";
        }
        databox += "<div class=\"starpos\">";
        var starcount = parseInt(value.s3);
        for (let i = 0; i < starcount; i++){
          databox += "<div class=\"star\"></div>";
        }
        for (let i = 0; i < 6-starcount; i++){
          databox += "<div class=\"nostar\"></div>";
        }
        databox += "</div></div>";

        databox += "<div class=\"charwrapper\"><div class=\"u_" + value.u4 + " b_default\"></div>";
        if(value.ue4=="yes"){
          databox += "<div class=\"uepos ue\"></div>";
        }
        databox += "<div class=\"starpos\">";
        var starcount = parseInt(value.s4);
        for (let i = 0; i < starcount; i++){
          databox += "<div class=\"star\"></div>";
        }
        for (let i = 0; i < 6-starcount; i++){
          databox += "<div class=\"nostar\"></div>";
        }
        databox += "</div></div>";

        databox += "<div class=\"charwrapper\"><div class=\"u_" + value.u5 + " b_default\"></div>";
        if(value.ue5=="yes"){
          databox += "<div class=\"uepos ue\"></div>";
        }
        databox += "<div class=\"starpos\">";
        var starcount = parseInt(value.s5);
        for (let i = 0; i < starcount; i++){
          databox += "<div class=\"star\"></div>";
        }
        for (let i = 0; i < 6-starcount; i++){
          databox += "<div class=\"nostar\"></div>";
        }
        databox += "</div></div>";

        databox += "<div class=\"compbox_text\">" + value.dmg + "</div>";
        databox += "<div class=\"s" + value.stage + "_text\">Stage " + value.stage + "</div>";

        if(value.timeline == ""){
          databox +="<div class=\"compbox_text\">Timeline</div>";
        }else{
          databox +="<div class=\"compbox_text\"><a target=\"_blank\" href=\"" + value.timeline + "\">Timeline</a></div>";
        }
        if(value.verified == "yes"){
          databox += "<div class=\"verified\"></div>";
        }else{
          databox += "<div class=\"notverified\"></div>";
        }
        document.getElementById(bossid).innerHTML += initbox + databox + endbox;
      }
    }
  });
}

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

  document.getElementById('t2_0').setAttribute("class", "teambox_empty");
  document.getElementById('t2_1').setAttribute("class", "teambox_empty");
  document.getElementById('t2_2').setAttribute("class", "teambox_empty");
  document.getElementById('t2_3').setAttribute("class", "teambox_empty");

  document.getElementById('t3_0').setAttribute("class", "teambox_empty");
  document.getElementById('t3_1').setAttribute("class", "teambox_empty");
  document.getElementById('t3_2').setAttribute("class", "teambox_empty");
  document.getElementById('t3_3').setAttribute("class", "teambox_empty");

  document.getElementById('t1_s').setAttribute("class", "teambox_empty");
  document.getElementById('t2_s').setAttribute("class", "teambox_empty");
  document.getElementById('t3_s').setAttribute("class", "teambox_empty");

  document.getElementById('team1').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team1_title').setAttribute("class", "teambox_title_selected team_input");
  document.getElementById('team1_title').value="Team 1";

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");
  document.getElementById('team2_title').value="Team 2";

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");
  document.getElementById('team3_title').value="Team 3";

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
  document.getElementById('team1_title').setAttribute("class", "teambox_title_selected team_input");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");

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
      document.getElementById(t1_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t2_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t3_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup1_selected == 0){
    document.getElementById("t1_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup1_selected;
    document.getElementById("t1_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup1_selected);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}

function set_team2(){
  active_team = 2;
  document.getElementById('team2').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team2_title').setAttribute("class", "teambox_title_selected team_input");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");

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
      document.getElementById(t1_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t2_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t3_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup2_selected == 0){
    document.getElementById("t2_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup2_selected;
    document.getElementById("t2_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup2_selected);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}

function set_team3(){
  active_team = 3;
  document.getElementById('team3').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team3_title').setAttribute("class", "teambox_title_selected team_input");

  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");

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
      document.getElementById(t1_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t2_x).setAttribute("class", u_unit + "  b_default");
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
      document.getElementById(t3_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup3_selected == 0){
    document.getElementById("t3_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup3_selected;
    document.getElementById("t3_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup3_selected);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}

function set_support1() {
  active_team = 4;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");

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
      document.getElementById(t1_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team1_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup1_selected == 0){
    document.getElementById("t1_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup1_selected;
    document.getElementById("t1_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup1_selected);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}

function set_support2() {
  active_team = 5;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title_selected");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title");

  unit_default_all();
  for (let i = 0; i < team2_selected.length; i++){
    var t2_x = "t2_"+ i.toString();
    if(team2_selected[i] == 0){
      document.getElementById(t2_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team2_selected[i];
      document.getElementById(t2_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team2_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup2_selected == 0){
    document.getElementById("t2_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup2_selected;
    document.getElementById("t2_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup2_selected);
    element.classList.add("u_select");
    element.classList.remove("u_default");
  }
}

function set_support3() {
  active_team = 6;
  document.getElementById('team1').setAttribute("class", "teambox_inner");
  document.getElementById('team1_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team2').setAttribute("class", "teambox_inner");
  document.getElementById('team2_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team3').setAttribute("class", "teambox_inner");
  document.getElementById('team3_title').setAttribute("class", "teambox_title team_input");

  document.getElementById('team1_support').setAttribute("class", "teambox_inner");
  document.getElementById('team1_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team2_support').setAttribute("class", "teambox_inner");
  document.getElementById('team2_support_title').setAttribute("class", "teambox_title");

  document.getElementById('team3_support').setAttribute("class", "teambox_inner_selected");
  document.getElementById('team3_support_title').setAttribute("class", "teambox_title_selected");

  unit_default_all();
  for (let i = 0; i < team3_selected.length; i++){
    var t3_x = "t3_"+ i.toString();
    if(team3_selected[i] == 0){
      document.getElementById(t3_x).setAttribute("class", "teambox_empty");
    }else{
      var u_unit = "u_"+team3_selected[i];
      document.getElementById(t3_x).setAttribute("class", u_unit + "  b_default");
      var element = document.getElementById(team3_selected[i]);
      element.classList.add("u_select");
      element.classList.remove("u_default");
    }
  }
  if(sup3_selected == 0){
    document.getElementById("t3_s").setAttribute("class", "teambox_empty");
  }else{
    var u_sup = "u_"+sup3_selected;
    document.getElementById("t3_s").setAttribute("class", u_sup + "  b_default");
    var element = document.getElementById(sup3_selected);
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
            document.getElementById(t1_i).setAttribute("class", u_unit + "  b_default");
            var element = document.getElementById(unit_name);
            element.classList.add("u_select");
            element.classList.remove("u_default");
            break;
          }
        }
        break;
      case 2:
        for (let i = 0; i < team2_selected.length; i++){
          if (team2_selected[i] == 0){
            var u_unit = "u_"+unit_name;
            var t2_i = "t2_"+i.toString();
            team2_selected[i] = unit_name;
            document.getElementById(t2_i).setAttribute("class", u_unit + "  b_default");
            var element = document.getElementById(unit_name);
            element.classList.add("u_select");
            element.classList.remove("u_default");
            break;
          }
        }
        break;
      case 3:
        for (let i = 0; i < team3_selected.length; i++){
          if (team3_selected[i] == 0){
            var u_unit = "u_"+unit_name;
            var t3_i = "t3_"+i.toString();
            team3_selected[i] = unit_name;
            document.getElementById(t3_i).setAttribute("class", u_unit + "  b_default");
            var element = document.getElementById(unit_name);
            element.classList.add("u_select");
            element.classList.remove("u_default");
            break;
          }
        }
        break;
      case 4:
        if(sup1_selected == 0){
          var u_unit = "u_"+unit_name;
          document.getElementById("t1_s").setAttribute("class", u_unit + "  b_default");
          sup1_selected = unit_name;
          var element = document.getElementById(unit_name);
          element.classList.add("u_select");
          element.classList.remove("u_default");
        }
        break;
      case 5:
        if(sup2_selected == 0){
          var u_unit = "u_"+unit_name;
          document.getElementById("t2_s").setAttribute("class", u_unit + "  b_default");
          sup2_selected = unit_name;
          var element = document.getElementById(unit_name);
          element.classList.add("u_select");
          element.classList.remove("u_default");
        }
        break;
      case 6:
        if(sup3_selected == 0){
          var u_unit = "u_"+unit_name;
          document.getElementById("t3_s").setAttribute("class", u_unit + "  b_default");
          sup3_selected = unit_name;
          var element = document.getElementById(unit_name);
          element.classList.add("u_select");
          element.classList.remove("u_default");
        }
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
        for (let i = 0; i < team2_selected.length; i++){
          if (team2_selected[i] == unit_name){
            var u_unit = "u_" + unit_name;
            var t2_i = "t2_" + i.toString();
            for (let j = i; j < team2_selected.length-1; j++){
              var t2_j = "t2_" + j.toString();
              var k = j+1;
              var t2_k = "t2_" + k.toString();
              var x = document.getElementById(t2_k).className;
              document.getElementById(t2_j).setAttribute("class", x);
              team2_selected[j] = team2_selected[j+1];
            }
            document.getElementById('t2_3').setAttribute("class", "teambox_empty");
            team2_selected[3] = 0;
            var element = document.getElementById(unit_name);
            element.classList.add("u_default");
            element.classList.remove("u_select");
            break;
          }
        }
        break;
      case 3:
        for (let i = 0; i < team3_selected.length; i++){
          if (team3_selected[i] == unit_name){
            var u_unit = "u_" + unit_name;
            var t3_i = "t3_" + i.toString();
            for (let j = i; j < team3_selected.length-1; j++){
              var t3_j = "t3_" + j.toString();
              var k = j+1;
              var t3_k = "t3_" + k.toString();
              var x = document.getElementById(t3_k).className;
              document.getElementById(t3_j).setAttribute("class", x);
              team3_selected[j] = team3_selected[j+1];
            }
            document.getElementById('t3_3').setAttribute("class", "teambox_empty");
            team3_selected[3] = 0;
            var element = document.getElementById(unit_name);
            element.classList.add("u_default");
            element.classList.remove("u_select");
            break;
          }
        }
        break;
      case 4:
        if(sup1_selected == unit_name){
          document.getElementById("t1_s").setAttribute("class", "teambox_empty");
          sup1_selected = 0;
          var element = document.getElementById(unit_name);
          element.classList.add("u_default");
          element.classList.remove("u_select");
        }
        break;
      case 5:
        if(sup2_selected == unit_name){
          document.getElementById("t2_s").setAttribute("class", "teambox_empty");
          sup2_selected = 0;
          var element = document.getElementById(unit_name);
          element.classList.add("u_default");
          element.classList.remove("u_select");
        }
        break;
      case 6:
        if(sup3_selected == unit_name){
          document.getElementById("t3_s").setAttribute("class", "teambox_empty");
          sup3_selected = 0;
          var element = document.getElementById(unit_name);
          element.classList.add("u_default");
          element.classList.remove("u_select");
        }
        break;
    }

  }
}
