var active_team = 1;
var team1_selected = [0,0,0,0];
var team2_selected = [0,0,0,0];
var team3_selected = [0,0,0,0];
var sup1_selected = 0;
var sup2_selected = 0;
var sup3_selected = 0;
var data = 0;
var availcount = [0,0,0,0,0];
const charnames = ["lima","miyako","kuka","jun","kaori", "pecorine", "nozomi", "makoto", "akino", "matsuri", "tsumugi", "hiyori", "misogi", "ayane", "tamaki", "tomo", "stamaki", "eriko", "specorine", "kurumi", "djeeta", "rei", "shizuru",
                  "mimi", "shinobu", "misogi", "yukari", "monika", "ninon", "mifuyu", "illya", "saren", "anna", "smifuyu", "kokkoro", "skokkoro", "rin", "mitsuki", "yori", "akari",
                  "arisa", "rino", "suzuna", "shiori", "io", "suzume", "misato", "kyaru", "hatsune", "misaki", "ssuzume", "skyaru", "aoi", "chika", "maho", "yui", "yuki", "kyoka",
                  "hshinobu", "hmiyako", "hmisaki", "christina"
                  ]
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTOAib0Cy9PAsvgepC5q_gk4PiQpAVV8mm7cEIRak0IcBU4UUk34o6KSmnYeZ8TQWWVe6PubRaC6wQ0/pub?gid=0&single=true&output=csv';

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: sheetresult
  })
}

init()

function sheetresult(results){
  data = results.data
}

function boss1(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b1').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    availcount = [0,0,0,0,0];
    if (value.boss == "boss1"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team1_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team1_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team1_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team1_selected[i] == value.u5){
          availcount[4] += 1;
        }
        if (team2_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team2_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team2_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team2_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team2_selected[i] == value.u5){
          availcount[4] += 1;
        }
        if (team3_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team3_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team3_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team3_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team3_selected[i] == value.u5){
          availcount[4] += 1;
        }
      }
      var asum = availcount[0] + availcount[1] + availcount[2] + availcount[3] + availcount[4];
      if (asum > 2){
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
      }else{
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b1').innerHTML += initbox + databox + endbox;
    }
  });
}

function boss2(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b2').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    if (value.boss == "boss2"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b2').innerHTML += initbox + databox + endbox;
    }
  });
}

function boss3(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b3').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    if (value.boss == "boss3"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b3').innerHTML += initbox + databox + endbox;
    }
  });
}

function boss4(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b4').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    availcount = [0,0,0,0,0];
    if (value.boss == "boss4"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team1_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team1_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team1_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team1_selected[i] == value.u5){
          availcount[4] += 1;
        }
        if (team2_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team2_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team2_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team2_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team2_selected[i] == value.u5){
          availcount[4] += 1;
        }
        if (team3_selected[i] == value.u1){
          availcount[0] += 1;
        }
        if (team3_selected[i] == value.u2){
          availcount[1] += 1;
        }
        if (team3_selected[i] == value.u3){
          availcount[2] += 1;
        }
        if (team3_selected[i] == value.u4){
          availcount[3] += 1;
        }
        if (team3_selected[i] == value.u5){
          availcount[4] += 1;
        }
      }
      var asum = availcount[0] + availcount[1] + availcount[2] + availcount[3] + availcount[4];
      if (asum > 2){
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
      }else{
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b4').innerHTML += initbox + databox + endbox;
    }
  });
}

function boss5(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b5').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    if (value.boss == "boss5"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b5').innerHTML += initbox + databox + endbox;
    }
  });
}

function boss5en(){
  var initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
  var databox = 0;
  var endbox = "</div></div></div></div></div>";
  var fullbox = 0;
  document.getElementById('b5en').innerHTML = "";

  $.each(data, function( index, value ) {
    databox = 0;
    if (value.boss == "boss5enrage"){
      for (let i = 0; i < team1_selected.length; i++){
        if (team1_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team1_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team2_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u1){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u2){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u3){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u4){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        if (team3_selected[i] == value.u5){
          initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container inactive_set\">";
          break;
        }
        initbox = "<br><div class=\"teambox_center\"><div class=\"teambox\"><div class=\"teambox_container\"><div class=\"teambox_inner\"><div class=\"teambox_inner_container\">";
      }

      databox = "<div class=\"u_" + value.u1 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u2 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u3 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u4 + " b_default\"></div>";
      databox = databox + "<div class=\"u_" + value.u5 + " b_default\"></div>";
      databox = databox + "<div class=\"teambox_title\">" + value.dmg + "</div>";
      databox = databox + "<div class=\"teambox_title\">Stage " + value.stage + "</div>";
      if(value.timeline == "#"){
        databox = databox + "<div class=\"teambox_title\">no TL</div>";
      }else{
        databox = databox + "<div class=\"teambox_title\"><a target=\"_blank\" href=\"" + value.timeline + "\">Link</a></div>";
      }
      document.getElementById('b5en').innerHTML += initbox + databox + endbox;
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
