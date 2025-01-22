function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Hc0KdYmDQ9":
        Script1();
        break;
      case "65qZ105jMLX":
        Script2();
        break;
      case "6ddCi9nul7J":
        Script3();
        break;
      case "6hr7V6KCkqF":
        Script4();
        break;
      case "6FDWoShO4zG":
        Script5();
        break;
      case "5zr7k31vb4t":
        Script6();
        break;
      case "69E2OZbiO4B":
        Script7();
        break;
      case "5yaBXx6hAdP":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5ttKlQuozVO');
const duration = 750;
const easing = 'ease-out';
const id = '6AyAzLFJtqB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5ttKlQuozVO');
const duration = 750;
const easing = 'ease-out';
const id = '6AyAzLFJtqB_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('62593CdRR2a');
const duration = 750;
const easing = 'ease-out';
const id = '6F6jkRqEFzy';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('62593CdRR2a');
const duration = 750;
const easing = 'ease-out';
const id = '6F6jkRqEFzy_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6mgbdrtBC2B');
const duration = 750;
const easing = 'ease-out';
const id = '6VHxAS3mORi';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6mgbdrtBC2B');
const duration = 750;
const easing = 'ease-out';
const id = '6VHxAS3mORi_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6p2Uygrl3DB');
const duration = 750;
const easing = 'ease-out';
const id = '6k99cAeUA96';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6p2Uygrl3DB');
const duration = 750;
const easing = 'ease-out';
const id = '6k99cAeUA96_reverse';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
