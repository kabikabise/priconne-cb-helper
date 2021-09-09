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
    if (team1_selected[i] == "lima"){
      var element = document.getElementById("lima");
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
      var element = document.getElementById("lima");
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}


function set_miyako(){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == "miyako"){
      var element = document.getElementById("miyako");
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
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", "u_miyako");
          team1_selected[0] = "miyako";
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", "u_miyako");
          team1_selected[1] = "miyako";
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", "u_miyako");
          team1_selected[2] = "miyako";
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "u_miyako");
          team1_selected[3] = "miyako";
          break;
      }
      var element = document.getElementById("miyako");
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}

function set_kuka(){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == "kuka"){
      var element = document.getElementById("kuka");
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
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", "u_kuka");
          team1_selected[0] = "kuka";
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", "u_kuka");
          team1_selected[1] = "kuka";
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", "u_kuka");
          team1_selected[2] = "kuka";
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "u_kuka");
          team1_selected[3] = "kuka";
          break;
      }
      var element = document.getElementById("kuka");
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}

function set_jun(){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == "jun"){
      var element = document.getElementById("jun");
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
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", "u_jun");
          team1_selected[0] = "jun";
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", "u_jun");
          team1_selected[1] = "jun";
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", "u_jun");
          team1_selected[2] = "jun";
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "u_jun");
          team1_selected[3] = "jun";
          break;
      }
      var element = document.getElementById("jun");
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}

function set_kaori(){
  for (let i = 0; i < team1_selected.length; i++){
    if (team1_selected[i] == "kaori"){
      var element = document.getElementById("kaori");
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
      switch (i){
        case 0:
          document.getElementById('t1_0').setAttribute("class", "u_kaori");
          team1_selected[0] = "kaori";
          break;
        case 1:
          document.getElementById('t1_1').setAttribute("class", "u_kaori");
          team1_selected[1] = "kaori";
          break;
        case 2:
          document.getElementById('t1_2').setAttribute("class", "u_kaori");
          team1_selected[2] = "kaori";
          break;
        case 3:
          document.getElementById('t1_3').setAttribute("class", "u_kaori");
          team1_selected[3] = "kaori";
          break;
      }
      var element = document.getElementById("kaori");
      element.classList.add("u_select");
      element.classList.remove("u_default");
      break;
    }
  }
}
