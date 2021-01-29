var x = 0;
setScreen("screenstart");
onEvent("buttonstart", "click", function( ) {
  setScreen("Potterquidditch");
});
onEvent("radio_buttonpotterquidditch2", "click", function( ) {
  setScreen("Quidditch_malfoy");
});
onEvent("radio_buttonquidditchpotter", "click", function( ) {
  setScreen("Quidditch_malfoy");
  x = x + 1;
});
onEvent("radio_buttonmalfoyquidditch1", "click", function( ) {
  setScreen("cedric_dragon");
});
onEvent("radio_buttonmalfoyquidditch2", "click", function( ) {
  setScreen("cedric_dragon");
  x = x + 1;
});
onEvent("radio_buttoncedric1", "click", function( ) {
  setScreen("viktorkrum_dragon");
});
onEvent("radio_buttoncedric2", "click", function( ) {
  setScreen("viktorkrum_dragon");
  x = x + 1;
});
onEvent("radio_buttonviktordragon1", "click", function( ) {
  setScreen("Fleur_delacour_dragon");
  x = x + 1;
});
onEvent("radio_buttonviktor2", "click", function( ) {
  setScreen("Fleur_delacour_dragon");
});
onEvent("radio_buttonfleurans1", "click", function( ) {
  setScreen("Harrypotter_dragon");
  x = x + 1;
});
onEvent("radio_buttonfleur2", "click", function( ) {
  setScreen("Harrypotter_dragon");
});
onEvent("radio_buttonharrydragon1", "click", function( ) {
  setScreen("ritaskeeter");
});
onEvent("radio_buttonharrypotterdragon2", "click", function( ) {
  setScreen("ritaskeeter");
  x = x + 1;
});
onEvent("radio_buttonritaskeeter1", "click", function( ) {
  setScreen("Remus_lupin");
});
onEvent("radio_buttonritaskeeter2", "click", function( ) {
  setScreen("Remus_lupin");
  x = x + 1;
});
onEvent("radio_buttonlupinanswer1", "click", function( ) {
  setScreen("Sirius_black");
});
onEvent("radio_buttonlupinanswer2", "click", function( ) {
  setScreen("Sirius_black");
  x = x + 1;
});
onEvent("radio_buttonsirius1", "click", function( ) {
  setScreen("hermione");
  x  = x + 1;
});
onEvent("radio_buttonsirius2", "click", function( ) {
  setScreen("hermione");
});
onEvent("radio_buttonhermione1", "click", function( ) {
  setScreen("ron");
});
onEvent("radio_buttonhermione2", "click", function( ) {
  setScreen("ron");
  x = x + 1;
});
onEvent("radio_buttonron1", "click", function( ) {
  setScreen("snape");
});
onEvent("radio_buttonron2", "click", function( ) {
  setScreen("snape");
  x = x + 1;
});
onEvent("radio_buttonsnape1", "click", function( ) {
  setScreen("hogwarts");
});
onEvent("radio_buttonsnape2", "click", function( ) {
  setScreen("hogwarts");
  x = x + 1;
});
onEvent("radio_buttonhogwarts1", "click", function( ) {
  setScreen("sirius");
});
onEvent("radio_buttonhogwarts2", "click", function( ) {
  setScreen("sirius");
  x = x + 1;
});
onEvent("radio_button1", "click", function( ) {
  setScreen("emmawatson");
});
onEvent("radio_button2", "click", function( ) {
  setScreen("emmawatson");
  x = x + 1;
});
onEvent("radio_buttonemma1", "click", function( ) {
  setScreen("tomfelton");
  x = x + 1;
});
onEvent("radio_buttonemma2", "click", function( ) {
  setScreen("tomfelton");
});
onEvent("radio_buttondracoanswer1", "click", function( ) {
  setScreen("ginnyweasley");
  x = x + 1;
});
onEvent("radio_buttondracoanswer2", "click", function( ) {
  setScreen("ginnyweasley");
});
onEvent("radio_buttonginnyanswer1", "click", function( ) {
  setScreen("luna");
  x = x + 1;
});
onEvent("radio_buttonginnyanswer2", "click", function( ) {
  setScreen("luna");
});
onEvent("button1score", "click", function( ) {
  setText("button1score", x);
});
onEvent("radio_buttonlunaanswer1", "click", function( ) {
  setScreen("bill");
});
onEvent("radio_buttonlunaanswer2", "click", function( ) {
  setScreen("bill");
  x = x + 1;
});
onEvent("radio_buttonbillanswer1", "click", function( ) {
  setScreen("fleur");
  x = x + 1;
});
onEvent("radio_buttonbill2", "click", function( ) {
  setScreen("fleur");
});
onEvent("radio_buttonfleur1", "click", function( ) {
  setScreen("madeye");
});
onEvent("radio_buttonfleur", "click", function( ) {
  x = x + 1;
  setScreen("madeye");
});
onEvent("radio_buttonmoody1", "click", function( ) {
  setScreen("screen16");
});
onEvent("radio_buttonmoody2", "click", function( ) {
  x = x + 1;
  setScreen("screen16");
});
