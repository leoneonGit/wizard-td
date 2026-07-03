import{M as sd,D as Sm,g as ro,T as uu,P as gf,h as bm,j as rd,k as _f,A as ad,c as xf,m as cn,b as Nr,a as Ur,B as Fr,n as od,p as Em,o as vf,l as Tm}from"./mapio-CkEyFHiA.js";const $o=1/60,hu=300,wm=350,Am=250;function Rm(i,e,t){let n=performance.now(),s=0,r=performance.now();function a(c,l){const d=Math.min((c-n)/1e3,.25);n=c,s+=d*t();let h=0;for(;s>=$o&&h<hu;)i($o),s-=$o,h++;h===hu&&(s=0),e()}function o(c){r=c,a(c),requestAnimationFrame(o)}requestAnimationFrame(o),setInterval(()=>{const c=performance.now();c-r>wm&&a(c)},Am)}const bn={fire:{id:"fire",name:"Fire Mage",element:"fire",placement:"ground",family:"wizard",cost:100,desc:"Hurls fireballs. Splash damage, ignites enemies (Burn). Shatters Frozen foes.",range:130,rate:.95,damage:14,projSpeed:340,splash:34,chains:0,chainFalloff:0,color:"#ff6b35",icon:"🔥",upgrades:[{name:"Inferno",tiers:[{name:"Hotter Flames",cost:70,desc:"+6 damage",mod:{damage:6}},{name:"Searing Burn",cost:140,desc:"Burn +8 dps, +1s",mod:{burnDps:8,burnDuration:1}},{name:"Blast Wave",cost:320,desc:"+22 splash radius, +10 dmg",mod:{splash:22,damage:10}}]},{name:"Pyromancy",tiers:[{name:"Quick Cast",cost:80,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Far Sight",cost:120,desc:"+30 range",mod:{range:30}},{name:"Rapid Fire",cost:300,desc:"30% faster attacks",mod:{rateMul:.7}}]}]},ice:{id:"ice",name:"Frost Mage",element:"ice",placement:"ground",family:"wizard",cost:110,desc:"Chills and Soaks (Wet) enemies; stacked Chill Freezes. Enables Conduct & Shatter.",range:120,rate:.75,damage:7,projSpeed:300,splash:0,chains:0,chainFalloff:0,color:"#5bc8f5",icon:"❄️",upgrades:[{name:"Deep Freeze",tiers:[{name:"Bitter Cold",cost:70,desc:"Chill slows +15%",mod:{chillPct:.15}},{name:"Lasting Soak",cost:110,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Permafrost",cost:280,desc:"Chill slows +20%, +6 dmg",mod:{chillPct:.2,damage:6}}]},{name:"Glacier",tiers:[{name:"Ice Shards",cost:80,desc:"+5 damage",mod:{damage:5}},{name:"Frost Nova",cost:160,desc:"Attacks splash (26)",mod:{splash:26}},{name:"Winter Reach",cost:240,desc:"+35 range, faster cast",mod:{range:35,rateMul:.85}}]}]},lightning:{id:"lightning",name:"Storm Mage",element:"lightning",placement:"ground",family:"wizard",cost:140,desc:"Chain lightning arcs between enemies. Conducts brutally through Wet targets.",range:145,rate:1.15,damage:18,projSpeed:0,splash:0,chains:2,chainFalloff:.65,color:"#c77dff",icon:"⚡",upgrades:[{name:"Tempest",tiers:[{name:"Forked Bolt",cost:90,desc:"+1 chain target",mod:{chains:1}},{name:"High Voltage",cost:150,desc:"+10 damage",mod:{damage:10}},{name:"Storm Front",cost:340,desc:"+2 chain targets",mod:{chains:2}}]},{name:"Stormcalling",tiers:[{name:"Static Charge",cost:80,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Long Arc",cost:130,desc:"+35 range",mod:{range:35}},{name:"Overload",cost:320,desc:"+14 dmg, 15% faster",mod:{damage:14,rateMul:.85}}]}]},water:{id:"water",name:"Water Mage",element:"water",placement:"water",family:"wizard",auraKind:"tide",cost:120,desc:"Builds ONLY on water. Pulsing tide Soaks (Wet) and slows everything in range — the reaction engine.",range:115,rate:1.6,damage:8,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#3a86ff",icon:"🌊",upgrades:[{name:"Tides",tiers:[{name:"Undertow",cost:70,desc:"Slow +10%",mod:{soakSlow:.1}},{name:"Deep Soak",cost:120,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Riptide",cost:280,desc:"Slow +15%, +8 dmg",mod:{soakSlow:.15,damage:8}}]},{name:"Depths",tiers:[{name:"Swell",cost:80,desc:"+25 range",mod:{range:25}},{name:"Surge",cost:140,desc:"25% faster pulses",mod:{rateMul:.75}},{name:"Tsunami",cost:300,desc:"+12 dmg, +20 range",mod:{damage:12,range:20}}]}]},wind:{id:"wind",name:"Cloud Mage",element:"wind",placement:"ground",needsCloud:!0,family:"wizard",auraKind:"gust",cost:160,desc:"Rides the wind: only attacks while a cloud drifts nearby. Gusts hurl enemies BACKWARD along the path.",range:130,rate:2.2,damage:6,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#b8d8d0",icon:"☁️",upgrades:[{name:"Gale",tiers:[{name:"Stiff Breeze",cost:80,desc:"+25px knockback",mod:{knockback:25}},{name:"Squall",cost:150,desc:"+10 dmg",mod:{damage:10}},{name:"Hurricane",cost:320,desc:"+45px knockback",mod:{knockback:45}}]},{name:"Zephyr",tiers:[{name:"Second Wind",cost:90,desc:"20% faster gusts",mod:{rateMul:.8}},{name:"High Winds",cost:140,desc:"+30 range",mod:{range:30}},{name:"Jetstream",cost:300,desc:"30% faster gusts",mod:{rateMul:.7}}]}]},slingshot:{id:"slingshot",name:"Slingshot Goblin",element:"physical",placement:"ground",family:"goblin",cost:75,desc:"Cheap, fast, reliable. Physical damage always lands at full strength — no resistances apply.",range:110,rate:.6,damage:8,projSpeed:380,splash:0,chains:0,chainFalloff:0,color:"#a08060",icon:"🪨",upgrades:[{name:"Quickdraw",tiers:[{name:"Taut Cord",cost:60,desc:"+3 damage",mod:{damage:3}},{name:"Rapid Sling",cost:110,desc:"18% faster attacks",mod:{rateMul:.82}},{name:"Iron Shot",cost:240,desc:"+7 damage",mod:{damage:7}}]},{name:"Marksmanship",tiers:[{name:"Keen Eye",cost:60,desc:"+20 range",mod:{range:20}},{name:"Steady Hand",cost:100,desc:"+5 damage",mod:{damage:5}},{name:"Deadeye",cost:220,desc:"15% faster, +25 range",mod:{rateMul:.85,range:25}}]}]},dynamite:{id:"dynamite",name:"Dynamite Goblin",element:"fire",placement:"ground",family:"goblin",cost:95,desc:"Lobs sputtering dynamite for big splash damage and Burn. Shares fire’s strengths — and its counters.",range:100,rate:1.5,damage:10,projSpeed:220,splash:42,chains:0,chainFalloff:0,color:"#e0522f",icon:"🧨",upgrades:[{name:"Bigger Bangs",tiers:[{name:"Extra Fuse",cost:65,desc:"+5 damage",mod:{damage:5}},{name:"Shrapnel",cost:120,desc:"+16 splash radius",mod:{splash:16}},{name:"Volatile Mix",cost:260,desc:"Burn +6 dps, +1s",mod:{burnDps:6,burnDuration:1}}]},{name:"Munitions",tiers:[{name:"Quick Fuse",cost:70,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Long Toss",cost:100,desc:"+20 range",mod:{range:20}},{name:"Blasting Cap",cost:250,desc:"+9 damage, +14 splash",mod:{damage:9,splash:14}}]}]},gong:{id:"gong",name:"Gong Goblin",element:"physical",placement:"ground",family:"goblin",auraKind:"rattle",cost:85,desc:"Support, not a damage dealer. Pulses a Rattling gong that makes nearby foes take extra damage from everything.",range:105,rate:3,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a63f",icon:"🔔",upgrades:[{name:"Resonance",tiers:[{name:"Bigger Gong",cost:65,desc:"Rattled +8% damage taken",mod:{rattlePct:.08}},{name:"Echo",cost:110,desc:"+25 range",mod:{range:25}},{name:"Thunderous Peal",cost:240,desc:"Rattled +10% damage taken",mod:{rattlePct:.1}}]},{name:"Cadence",tiers:[{name:"Steady Beat",cost:70,desc:"20% faster pulses",mod:{rateMul:.8}},{name:"War Rhythm",cost:110,desc:"+20 range",mod:{range:20}},{name:"Relentless Toll",cost:230,desc:"25% faster pulses",mod:{rateMul:.75}}]}]},longbow:{id:"longbow",name:"Elf Longbow",element:"physical",placement:"ground",family:"archer",cost:110,desc:"Elven marksman. Enormous range, heavy single arrows — the sniper of the realm.",range:195,rate:2,damage:34,projSpeed:560,splash:0,chains:0,chainFalloff:0,color:"#7dc98f",icon:"🏹",upgrades:[{name:"Marksman",tiers:[{name:"Heavy Draw",cost:80,desc:"+12 damage",mod:{damage:12}},{name:"Eagle Eye",cost:130,desc:"+35 range",mod:{range:35}},{name:"Heartseeker",cost:320,desc:"+24 damage",mod:{damage:24}}]},{name:"Fleetness",tiers:[{name:"Swift Nock",cost:75,desc:"15% faster shots",mod:{rateMul:.85}},{name:"Windrunner",cost:140,desc:"20% faster shots",mod:{rateMul:.8}},{name:"Arrowstorm",cost:300,desc:"+10 dmg, 15% faster",mod:{damage:10,rateMul:.85}}]}]},ballesta:{id:"ballesta",name:"Human Ballesta",element:"physical",placement:"ground",family:"archer",pierce:!0,cost:100,desc:"Crank-loaded crossbow. Short range, but bolts PIERCE clean through everything in a line.",range:95,rate:1.2,damage:12,projSpeed:480,splash:0,chains:0,chainFalloff:0,color:"#5b7fc9",icon:"🎯",upgrades:[{name:"Penetration",tiers:[{name:"Steel Bolts",cost:70,desc:"+5 damage",mod:{damage:5}},{name:"Windlass",cost:130,desc:"20% faster reload",mod:{rateMul:.8}},{name:"Arbalest",cost:300,desc:"+12 damage",mod:{damage:12}}]},{name:"Fieldcraft",tiers:[{name:"Braced Stock",cost:65,desc:"+18 range",mod:{range:18}},{name:"Quick Hands",cost:120,desc:"15% faster reload",mod:{rateMul:.85}},{name:"Siege Position",cost:260,desc:"+30 range, +6 dmg",mod:{range:30,damage:6}}]}]},bolas:{id:"bolas",name:"Orc Trapper",element:"physical",placement:"ground",family:"archer",entangles:!0,cost:115,desc:"Hurls bolas that ENTANGLE — roots enemies in place. Pure lockdown; never disturbs your Freeze combos.",range:125,rate:1.8,damage:6,projSpeed:320,splash:0,chains:0,chainFalloff:0,color:"#8c9c72",icon:"🪢",upgrades:[{name:"Snares",tiers:[{name:"Heavier Weights",cost:75,desc:"Entangle +0.4s",mod:{entangleDur:.4}},{name:"Barbed Cords",cost:130,desc:"+8 damage",mod:{damage:8}},{name:"Master Trapper",cost:300,desc:"Entangle +0.6s",mod:{entangleDur:.6}}]},{name:"Warcraft",tiers:[{name:"Strong Arm",cost:70,desc:"+25 range",mod:{range:25}},{name:"Rapid Toss",cost:125,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Twin Bolas",cost:280,desc:"25% faster, +5 dmg",mod:{rateMul:.75,damage:5}}]}]},rootgrasp:{id:"rootgrasp",name:"Rootgrasp Tree",element:"physical",placement:"ground",family:"tree",groundAttack:!0,cost:90,desc:"Roots erupt beneath enemies — no projectile to dodge, and every strike SLOWS.",range:110,rate:1.4,damage:9,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#6a8f4f",icon:"🌳",upgrades:[{name:"Deep Roots",tiers:[{name:"Gnarled Grip",cost:70,desc:"Slow +10% stronger",mod:{rootSlow:.1}},{name:"Thick Taproot",cost:120,desc:"+6 damage",mod:{damage:6}},{name:"Strangleroot",cost:280,desc:"Slow +15%, +6 dmg",mod:{rootSlow:.15,damage:6}}]},{name:"Overgrowth",tiers:[{name:"Spreading Roots",cost:75,desc:"+22 range",mod:{range:22}},{name:"Quickened Sap",cost:130,desc:"20% faster strikes",mod:{rateMul:.8}},{name:"Ancient Reach",cost:260,desc:"+30 range, +5 dmg",mod:{range:30,damage:5}}]}]},boulder:{id:"boulder",name:"Boulder Tree",element:"physical",placement:"ground",family:"tree",cost:105,desc:"An old ent that hurls boulders. Slow, furious, and the splash flattens whole clumps.",range:135,rate:2.6,damage:24,projSpeed:210,splash:46,chains:0,chainFalloff:0,color:"#8d7a5e",icon:"🪨",upgrades:[{name:"Avalanche",tiers:[{name:"Bigger Rocks",cost:80,desc:"+10 damage",mod:{damage:10}},{name:"Wide Impact",cost:140,desc:"+16 splash radius",mod:{splash:16}},{name:"Meteor Toss",cost:320,desc:"+18 dmg, +12 splash",mod:{damage:18,splash:12}}]},{name:"Old Growth",tiers:[{name:"Long Arms",cost:70,desc:"+25 range",mod:{range:25}},{name:"Limber Boughs",cost:130,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Wrath of Ages",cost:300,desc:"25% faster throws",mod:{rateMul:.75}}]}]},thornspitter:{id:"thornspitter",name:"Thornspitter",element:"physical",placement:"ground",family:"tree",cost:95,desc:'A bristling bush that machine-guns needles — the fastest attacker in the realm. Loves "every Nth shot" cards.',range:100,rate:.25,damage:3,projSpeed:450,splash:0,chains:0,chainFalloff:0,color:"#4f8f5c",icon:"🌵",upgrades:[{name:"Bristles",tiers:[{name:"Sharper Thorns",cost:70,desc:"+2 damage",mod:{damage:2}},{name:"Dense Quills",cost:130,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Ironwood Barbs",cost:300,desc:"+4 damage",mod:{damage:4}}]},{name:"Wildgrowth",tiers:[{name:"Tall Canes",cost:65,desc:"+20 range",mod:{range:20}},{name:"Feverish Growth",cost:125,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Bramble Storm",cost:280,desc:"+2 dmg, +20 range",mod:{damage:2,range:20}}]}]},generic_wizard:{id:"generic_wizard",name:"Wizard",element:"physical",placement:"any",family:"wizard",isGeneric:!0,cost:90,desc:"An unproven apprentice. Place, then click to specialize into a random draw of elements.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#8a7aff",icon:"🧙",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_goblin:{id:"generic_goblin",name:"Goblin",element:"physical",placement:"ground",family:"goblin",isGeneric:!0,cost:75,desc:"A goblin recruit, itching for a job. Place, then click to specialize into a random draw of roles.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#7da35c",icon:"👺",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_archer:{id:"generic_archer",name:"Archer",element:"physical",placement:"ground",family:"archer",isGeneric:!0,cost:85,desc:"A fresh recruit with a training bow. Place, then click to specialize into a random draw of marksmen.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a55b",icon:"🏹",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_tree:{id:"generic_tree",name:"Sapling",element:"physical",placement:"ground",family:"tree",isGeneric:!0,cost:70,desc:"A drowsy young ent. Place, then click to awaken it into a random draw of tree-folk.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#5f9e57",icon:"🌱",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]}},qc=["generic_wizard","generic_goblin","generic_archer","generic_tree"];function Cm(i){return Object.values(bn).filter(e=>e.family===i&&!e.isGeneric&&!e.isEvolved)}const Im=[{name:"—",tiers:[]},{name:"—",tiers:[]}],Pm={fire:{to:"phoenix",cost:380,cardId:"pr_wildfire"},ice:{to:"wintercourt",cost:380,cardId:"pr_executioner"},lightning:{to:"tempest",cost:400,cardId:"rx_conduct2"},water:{to:"tidelord",cost:350,cardId:"pr_soaked"},wind:{to:"zephyr",cost:350,cardId:"rx_evap1"},slingshot:{to:"warlord",cost:340,cardId:"pr_firstblood"},dynamite:{to:"sapperking",cost:380,cardId:"pr_powder"},gong:{to:"doomgong",cost:360,cardId:"pr_opportunist"},longbow:{to:"stormpiercer",cost:400,cardId:"arc_crit1"},ballesta:{to:"ironstorm",cost:360,cardId:"arc_root1"},bolas:{to:"chainwarden",cost:350,cardId:"arc_root1"},rootgrasp:{to:"elderroot",cost:360,cardId:"tre_crit1"},boulder:{to:"mountain",cost:400,cardId:"pr_harvest"},thornspitter:{to:"bramblehydra",cost:380,cardId:"tre_crit1"}};function jt(i,e){const t=bn[i];return{element:t.element,placement:t.placement,family:t.family,cost:0,range:t.range,rate:t.rate,damage:t.damage,projSpeed:t.projSpeed,splash:t.splash,chains:t.chains,chainFalloff:t.chainFalloff,needsCloud:t.needsCloud,auraKind:t.auraKind,pierce:t.pierce,entangles:t.entangles,groundAttack:t.groundAttack,isEvolved:!0,upgrades:Im,...e}}Object.assign(bn,{phoenix:jt("fire",{id:"phoenix",name:"Phoenix Herald",icon:"🐦‍🔥",color:"#ff8c42",desc:"EVOLVED. Fire made flesh — victims pass their flames on death, forever.",damage:26,rate:.75,splash:44,range:145,projSpeed:340,baseMods:{burnDps:5,burnDuration:1},innateFx:{spreadBurnOnDeath:!0}}),wintercourt:jt("ice",{id:"wintercourt",name:"Winter Court Sage",icon:"👑",color:"#a8e6ff",desc:"EVOLVED. The deep cold answers — Frozen enemies take +60% from her hand.",damage:15,rate:.6,range:155,projSpeed:400,baseMods:{chillPct:.15},innateFx:{bonusVsStatus:{status:"frozen",mult:1.6}}}),tempest:jt("lightning",{id:"tempest",name:"Tempest Lord",icon:"🌩️",color:"#d9a8ff",desc:"EVOLVED. The storm has opinions. Every 5th bolt is a CRIT; chains run long.",damage:32,rate:.9,range:165,chains:4,chainFalloff:.8,innateFx:{critEveryN:{n:5,mult:2}}}),tidelord:jt("water",{id:"tidelord",name:"Tidelord",icon:"🔱",color:"#26c2e8",desc:"EVOLVED. The pond obeys. Wet enemies take +50% from the tide.",damage:11,rate:.8,range:150,baseMods:{soakSlow:.1,wetDuration:2},innateFx:{bonusVsStatus:{status:"wet",mult:1.5}}}),zephyr:jt("wind",{id:"zephyr",name:"Zephyr Sovereign",icon:"🌀",color:"#bcd9ce",desc:"EVOLVED. Commands the wind itself — no cloud required, and the gusts hit like walls.",damage:9,rate:1,range:140,needsCloud:!1,baseMods:{knockback:40}}),warlord:jt("slingshot",{id:"warlord",name:"Goblin Warlord",icon:"👹",color:"#7da35c",desc:"EVOLVED. His shots pierce through the whole column. The lads cheer every volley.",damage:18,rate:.7,range:130,pierce:!0,projSpeed:460}),sapperking:jt("dynamite",{id:"sapperking",name:"Sapper King",icon:"💥",color:"#ffb163",desc:"EVOLVED. Everything he kills becomes a bomb. Chain reactions are the point.",damage:32,rate:1,splash:62,range:135,innateFx:{onKillExplode:{damage:26,radius:52}}}),doomgong:jt("gong",{id:"doomgong",name:"Gong of Doom",icon:"🛎️",color:"#f4d98a",desc:"EVOLVED. One strike and the whole field flinches — Rattled +40%, huge reach.",rate:1.6,range:160,baseMods:{rattlePct:.15}}),stormpiercer:jt("longbow",{id:"stormpiercer",name:"Stormpiercer",icon:"🏹",color:"#7dc98f",desc:"EVOLVED. An elven legend. Every 3rd arrow CRITS for double across half the map.",damage:55,rate:1.5,range:240,projSpeed:650,innateFx:{critEveryN:{n:3,mult:2}}}),ironstorm:jt("ballesta",{id:"ironstorm",name:"Ironstorm Arbalest",icon:"🎯",color:"#5b7fc9",desc:"EVOLVED. A crank-fed storm of bolts, each punching through the entire line.",damage:20,rate:.65,range:115,projSpeed:540}),chainwarden:jt("bolas",{id:"chainwarden",name:"Warden of Chains",icon:"⛓️",color:"#8c9c72",desc:"EVOLVED. Longer roots, crueler hits — Entangled enemies take +50% from him.",damage:12,rate:1.3,range:145,baseMods:{entangleDur:.5},innateFx:{bonusVsStatus:{status:"entangled",mult:1.5}}}),elderroot:jt("rootgrasp",{id:"elderroot",name:"Elderroot Colossus",icon:"🌲",color:"#4c6b38",desc:"EVOLVED. The forest remembers. Wider eruptions, crushing grip.",damage:17,rate:1.1,range:135,baseMods:{rootSlow:.15}}),mountain:jt("boulder",{id:"mountain",name:"The Walking Mountain",icon:"⛰️",color:"#8d7a5e",desc:"EVOLVED. Every kill splinters into shrapnel. Whole waves vanish under the rubble.",damage:42,rate:2.2,splash:62,range:150,projSpeed:240,innateFx:{onKillExplode:{damage:20,radius:48}}}),bramblehydra:jt("thornspitter",{id:"bramblehydra",name:"Bramble Hydra",icon:"🐉",color:"#6fcf5f",desc:"EVOLVED. Two heads, twice the needles, zero mercy. The ultimate proc machine.",damage:4,rate:.125,range:115,projSpeed:500})});function yf(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const $c=[[[{type:"grunt",count:8,gap:.9,delay:0}],[{type:"grunt",count:13,gap:.7,delay:0}],[{type:"grunt",count:10,gap:.65,delay:0},{type:"runner",count:5,gap:.8,delay:3}],[{type:"runner",count:15,gap:.5,delay:0}],[{type:"knight",count:6,gap:1.3,delay:0},{type:"grunt",count:9,gap:.55,delay:4}],[{type:"golemling",count:1,gap:0,delay:0},{type:"grunt",count:10,gap:.7,delay:2}],[{type:"shade",count:9,gap:.85,delay:0},{type:"runner",count:6,gap:.65,delay:5}],[{type:"grunt",count:10,gap:.5,delay:0},{type:"orcraider",count:6,gap:.7,delay:2},{type:"knight",count:5,gap:1.1,delay:5},{type:"shade",count:5,gap:.9,delay:8}],[{type:"runner",count:14,gap:.42,delay:0},{type:"orcbrute",count:1,gap:0,delay:3},{type:"knight",count:6,gap:1.1,delay:4},{type:"shade",count:5,gap:.9,delay:9}],[{type:"warlord",count:1,gap:0,delay:0},{type:"knight",count:4,gap:1.6,delay:5},{type:"grunt",count:8,gap:.6,delay:9}]],[[{type:"orcraider",count:12,gap:.55,delay:0},{type:"runner",count:6,gap:.6,delay:4}],[{type:"shade",count:10,gap:.7,delay:0},{type:"orcbrute",count:2,gap:3,delay:4}],[{type:"orcraider",count:10,gap:.5,delay:0},{type:"orcshaman",count:1,gap:0,delay:2},{type:"knight",count:6,gap:.9,delay:4}],[{type:"runner",count:24,gap:.32,delay:0}],[{type:"warwagon",count:1,gap:0,delay:0},{type:"shade",count:8,gap:.7,delay:3}],[{type:"knight",count:8,gap:.8,delay:0},{type:"orcshaman",count:2,gap:6,delay:2},{type:"orcraider",count:12,gap:.45,delay:4}],[{type:"runner",count:14,gap:.4,delay:0},{type:"orcbrute",count:3,gap:2.5,delay:3},{type:"golemling",count:1,gap:0,delay:7}],[{type:"warwagon",count:2,gap:9,delay:0},{type:"shade",count:10,gap:.6,delay:3}],[{type:"orcraider",count:16,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"orcbrute",count:3,gap:2.2,delay:5},{type:"knight",count:6,gap:.9,delay:9}],[{type:"pyretitan",count:1,gap:0,delay:0},{type:"orcshaman",count:1,gap:0,delay:4},{type:"orcraider",count:10,gap:.5,delay:6}]],[[{type:"orcraider",count:14,gap:.5,delay:0},{type:"wardrummer",count:1,gap:0,delay:2},{type:"orcbrute",count:2,gap:3,delay:4}],[{type:"wraith",count:6,gap:1,delay:0},{type:"runner",count:12,gap:.4,delay:4}],[{type:"troll",count:1,gap:0,delay:0},{type:"knight",count:8,gap:.8,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"shade",count:10,gap:.6,delay:4}],[{type:"orcraider",count:18,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"wardrummer",count:1,gap:0,delay:5},{type:"orcbrute",count:3,gap:2.5,delay:6}],[{type:"troll",count:2,gap:8,delay:0},{type:"wraith",count:6,gap:.9,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"warwagon",count:1,gap:0,delay:8},{type:"knight",count:8,gap:.7,delay:4}],[{type:"wraith",count:8,gap:.7,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"troll",count:1,gap:0,delay:6},{type:"runner",count:12,gap:.4,delay:8}],[{type:"siegetower",count:2,gap:12,delay:0},{type:"wardrummer",count:2,gap:8,delay:2},{type:"orcraider",count:16,gap:.35,delay:4},{type:"orcbrute",count:4,gap:2.2,delay:8}],[{type:"colossus",count:1,gap:0,delay:0},{type:"orcshaman",count:2,gap:6,delay:4},{type:"troll",count:1,gap:0,delay:8},{type:"wraith",count:6,gap:.8,delay:12}]]],bs=10,Mf=$c.length,Os=[{hp:1,speed:1,bounty:1},{hp:1.9,speed:1.08,bounty:1.35},{hp:3.2,speed:1.15,bounty:1.7}],Lm=.06;function cd(i){return $c[Math.min(i,$c.length-1)]}const Dm=25,Nm=3,ao=[{id:"enraged",name:"Enraged",desc:"+40% speed",speedMult:1.4},{id:"stoneskin",name:"Stoneskin",desc:"+60% health",hpMult:1.6},{id:"slippery",name:"Slippery",desc:"Immune to Wet",immune:["wet"]},{id:"fireproof",name:"Fireproof",desc:"Immune to Burn",immune:["burn"]},{id:"steadfast",name:"Steadfast",desc:"Immune to knockback",gustImmune:!0}],ld=[{id:"fire_dmg1",name:"Searing Flames",desc:"All Fire Mages +4 damage",icon:"🔥",element:"fire",rarity:"common",mod:{damage:4}},{id:"fire_rate1",name:"Kindled Haste",desc:"Fire Mages attack 12% faster",icon:"🔥",element:"fire",rarity:"common",mod:{rateMul:.88}},{id:"fire_burn1",name:"Lingering Embers",desc:"Burn +4/s and lasts +1s",icon:"🔥",element:"fire",rarity:"uncommon",mod:{burnDps:4,burnDuration:1}},{id:"fire_splash1",name:"Bigger Booms",desc:"Fire splash radius +14",icon:"🔥",element:"fire",rarity:"uncommon",mod:{splash:14}},{id:"fire_dmg2",name:"Inferno Core",desc:"All Fire Mages +9 damage",icon:"🔥",element:"fire",rarity:"rare",mod:{damage:9}},{id:"ice_chill1",name:"Deeper Cold",desc:"Chill slows +8% more",icon:"❄️",element:"ice",rarity:"common",mod:{chillPct:.08}},{id:"ice_dmg1",name:"Jagged Icicles",desc:"All Frost Mages +3 damage",icon:"❄️",element:"ice",rarity:"common",mod:{damage:3}},{id:"ice_wet1",name:"Soaking Sleet",desc:"Frost Wet lasts +2s",icon:"❄️",element:"ice",rarity:"common",mod:{wetDuration:2}},{id:"ice_rate1",name:"Flash Freeze",desc:"Frost Mages attack 15% faster",icon:"❄️",element:"ice",rarity:"uncommon",mod:{rateMul:.85}},{id:"ice_range1",name:"Glacial Reach",desc:"Frost Mages +22 range",icon:"❄️",element:"ice",rarity:"uncommon",mod:{range:22}},{id:"ltn_dmg1",name:"Amped Bolts",desc:"All Storm Mages +5 damage",icon:"⚡",element:"lightning",rarity:"common",mod:{damage:5}},{id:"ltn_chain1",name:"Forked Streams",desc:"Chain lightning +1 target",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{chains:1}},{id:"ltn_range1",name:"Skyline Arcs",desc:"Storm Mages +25 range",icon:"⚡",element:"lightning",rarity:"common",mod:{range:25}},{id:"ltn_rate1",name:"Static Rhythm",desc:"Storm Mages attack 12% faster",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{rateMul:.88}},{id:"wat_slow1",name:"Heavy Currents",desc:"Tide slow +8% stronger",icon:"🌊",element:"water",rarity:"common",mod:{soakSlow:.08}},{id:"wat_dmg1",name:"Crashing Waves",desc:"All Water Mages +4 damage",icon:"🌊",element:"water",rarity:"common",mod:{damage:4}},{id:"wat_range1",name:"High Tide",desc:"Water Mages +20 range",icon:"🌊",element:"water",rarity:"uncommon",mod:{range:20}},{id:"wat_wet1",name:"Drenching Pulse",desc:"Tide Wet lasts +2s",icon:"🌊",element:"water",rarity:"common",mod:{wetDuration:2}},{id:"wnd_kb1",name:"Tailwind",desc:"Gust knockback +20px",icon:"☁️",element:"wind",rarity:"common",mod:{knockback:20}},{id:"wnd_rate1",name:"Brisk Gales",desc:"Cloud Mages gust 15% faster",icon:"☁️",element:"wind",rarity:"uncommon",mod:{rateMul:.85}},{id:"wnd_range1",name:"Far Horizons",desc:"Cloud Mages +25 range",icon:"☁️",element:"wind",rarity:"common",mod:{range:25}},{id:"rx_conduct1",name:"Overcharge",desc:"Conduct deals 2.0x (was 1.6x)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{conductMult:2}},{id:"rx_conduct2",name:"Superconductor",desc:"Conduct extends chains by 3 (was 1)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{chainBonus:3}},{id:"rx_shatter1",name:"Brittle Frost",desc:"Shatter deals 2.6x (was 2.0x)",icon:"💎",element:"all",rarity:"rare",unique:!0,reaction:{shatterMult:2.6}},{id:"rx_freeze1",name:"Permafrost Grip",desc:"Freeze lasts 1.7s (was 1.1s)",icon:"🧊",element:"all",rarity:"uncommon",unique:!0,reaction:{freezeDuration:1.7}},{id:"rx_evap1",name:"Steam Burst",desc:"Evaporate burst 10 → 26 damage",icon:"♨️",element:"all",rarity:"uncommon",unique:!0,reaction:{evaporateBurst:26}},{id:"eco_gold1",name:"Windfall",desc:"+60 gold, right now",icon:"💰",element:"all",rarity:"common",econ:{goldNow:60}},{id:"eco_gold2",name:"Royal Grant",desc:"+140 gold, right now",icon:"💰",element:"all",rarity:"uncommon",econ:{goldNow:140}},{id:"eco_bounty1",name:"Bounty Board",desc:"+1 gold per kill",icon:"🪙",element:"all",rarity:"uncommon",econ:{bountyBonus:1}},{id:"eco_bounty2",name:"Head Hunter",desc:"+2 gold per kill",icon:"🪙",element:"all",rarity:"rare",unique:!0,econ:{bountyBonus:2}},{id:"eco_disc1",name:"Guild Discount",desc:"Towers cost 12% less",icon:"🏷️",element:"all",rarity:"uncommon",unique:!0,econ:{towerDiscountPct:12}},{id:"eco_interest1",name:"Compound Interest",desc:"Wave end: +1 gold per 15 held (max +30)",icon:"🏦",element:"all",rarity:"rare",unique:!0,fx:{interest:{per:15,cap:30}}},{id:"eco_trophy1",name:"Trophy Hunter",desc:"Kills have a 15% chance to drop +3 bonus gold",icon:"🏆",element:"all",rarity:"uncommon",unique:!0,fx:{onKillGold:{chance:.15,amount:3}}},{id:"arc_dmg1",name:"Bodkin Points",desc:"All Archers +4 damage",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{damage:4}},{id:"arc_range1",name:"Watchtower Drills",desc:"All Archers +18 range",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{range:18}},{id:"arc_rate1",name:"Nimble Fingers",desc:"Archers attack 12% faster",icon:"🏹",element:"physical",family:"archer",rarity:"uncommon",mod:{rateMul:.88}},{id:"arc_crit1",name:"Overdraw",desc:"Every 4th Archer shot CRITS for 2.5x",icon:"🎯",element:"physical",family:"archer",rarity:"rare",unique:!0,fx:{critEveryN:{n:4,mult:2.5}}},{id:"arc_root1",name:"Cruel Snares",desc:"Archer damage +40% vs Entangled enemies",icon:"🪢",element:"physical",family:"archer",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"entangled",mult:1.4}}},{id:"tre_dmg1",name:"Heartwood",desc:"All Tree-folk +3 damage",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{damage:3}},{id:"tre_range1",name:"Elder Boughs",desc:"All Tree-folk +16 range",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{range:16}},{id:"tre_rate1",name:"Rising Sap",desc:"Tree-folk attack 12% faster",icon:"🌳",element:"physical",family:"tree",rarity:"uncommon",mod:{rateMul:.88}},{id:"tre_crit1",name:"Thorn Volley",desc:"Every 6th Tree-folk attack CRITS for 3x",icon:"🌵",element:"physical",family:"tree",rarity:"rare",unique:!0,fx:{critEveryN:{n:6,mult:3}}},{id:"pr_adrenaline",name:"Adrenaline Surge",desc:"Every 10s, ALL towers frenzy: 2x attack speed for 3s",icon:"🫀",element:"all",rarity:"rare",unique:!0,fx:{frenzy:{period:10,duration:3,rateMul:.5}}},{id:"pr_warhymn",name:"Goblin War-Hymn",desc:"Every 8s, Goblins frenzy: 2x attack speed for 2.5s",icon:"🥁",element:"physical",family:"goblin",rarity:"uncommon",unique:!0,fx:{frenzy:{period:8,duration:2.5,rateMul:.5}}},{id:"pr_powder",name:"Powder Trail",desc:"Enemies killed by Goblins EXPLODE (30 dmg, small area)",icon:"🧨",element:"physical",family:"goblin",rarity:"rare",unique:!0,fx:{onKillExplode:{damage:30,radius:55}}},{id:"pr_wildfire",name:"Wildfire",desc:"Burning enemies pass their Burn to a neighbor on death",icon:"🔥",element:"fire",rarity:"rare",unique:!0,fx:{spreadBurnOnDeath:!0}},{id:"pr_harvest",name:"Soul Harvest",desc:"Every kill: ALL damage +0.2%, forever (max +30%)",icon:"👻",element:"all",rarity:"rare",unique:!0,fx:{onKillStackDamage:{pct:.2,capPct:30}}},{id:"pr_opportunist",name:"Opportunist",desc:"All damage +40% vs Rattled enemies",icon:"🎯",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"rattled",mult:1.4}}},{id:"pr_executioner",name:"Executioner",desc:"All damage +75% vs Frozen enemies",icon:"⚔️",element:"all",rarity:"rare",unique:!0,fx:{bonusVsStatus:{status:"frozen",mult:1.75}}},{id:"pr_firstblood",name:"First Blood",desc:"Physical damage +30% vs full-health enemies",icon:"🩸",element:"physical",rarity:"uncommon",unique:!0,fx:{bonusVsHealthy:{threshold:.99,mult:1.3}}},{id:"pr_soaked",name:"Riptide Predator",desc:"Lightning damage +35% vs Wet enemies",icon:"🌩️",element:"lightning",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"wet",mult:1.35}}}],Um={common:60,uncommon:30,rare:10},Sf=25,bf=[{id:"frozen_core",name:"Frozen Core",icon:"🧊",rarity:"rare",desc:"Enemies arrive with a chill in their bones (1 chill stack on spawn).",special:["spawnChill"]},{id:"cursed_hourglass",name:"Cursed Hourglass",icon:"⏳",rarity:"rare",desc:"Drafts show 4 cards — but enemies move 10% faster.",special:["draft4","hasteEnemies"]},{id:"blood_chalice",name:"Blood Chalice",icon:"🍷",rarity:"rare",desc:"Every 40 kills restores 1 life.",special:["killLives"]},{id:"sharpening_stone",name:"Sharpening Stone",icon:"🪨",rarity:"uncommon",desc:"ALL towers +2 damage.",payload:{id:"relic_sharp",name:"Sharpening Stone",desc:"",icon:"🪨",element:"all",rarity:"rare",mod:{damage:2}}},{id:"eagle_standard",name:"Eagle Standard",icon:"🦅",rarity:"uncommon",desc:"ALL towers +12 range.",payload:{id:"relic_eagle",name:"Eagle Standard",desc:"",icon:"🦅",element:"all",rarity:"rare",mod:{range:12}}},{id:"war_banner",name:"War Banner",icon:"🚩",rarity:"uncommon",desc:"Physical towers (goblins, archers, tree-folk) attack 8% faster.",payload:{id:"relic_banner",name:"War Banner",desc:"",icon:"🚩",element:"physical",rarity:"rare",mod:{rateMul:.92}}},{id:"molten_heart",name:"Molten Heart",icon:"🌋",rarity:"rare",desc:"Burn ticks +3/s and last +1s.",payload:{id:"relic_molten",name:"Molten Heart",desc:"",icon:"🌋",element:"fire",rarity:"rare",mod:{burnDps:3,burnDuration:1}}},{id:"storm_prism",name:"Storm Prism",icon:"🔮",rarity:"rare",desc:"Conduct deals 2.0x (up from 1.6x).",payload:{id:"relic_prism",name:"Storm Prism",desc:"",icon:"🔮",element:"all",rarity:"rare",reaction:{conductMult:2}}},{id:"golden_idol",name:"Golden Idol",icon:"🗿",rarity:"uncommon",desc:"+1 gold per kill.",payload:{id:"relic_idol",name:"Golden Idol",desc:"",icon:"🗿",element:"all",rarity:"rare",econ:{bountyBonus:1}}},{id:"beggars_bowl",name:"Beggar's Bowl",icon:"🥣",rarity:"uncommon",desc:"Wave end: +1 gold per 20 held (max +20).",payload:{id:"relic_bowl",name:"Beggar's Bowl",desc:"",icon:"🥣",element:"all",rarity:"rare",fx:{interest:{per:20,cap:20}}}},{id:"headsman_seal",name:"Headsman's Seal",icon:"🪓",rarity:"rare",desc:"All damage +35% vs Frozen enemies.",payload:{id:"relic_seal",name:"Headsman's Seal",desc:"",icon:"🪓",element:"all",rarity:"rare",fx:{bonusVsStatus:{status:"frozen",mult:1.35}}}},{id:"ancient_acorn",name:"Ancient Acorn",icon:"🌰",rarity:"uncommon",desc:"Tree-folk +2 damage and +15 range.",payload:{id:"relic_acorn",name:"Ancient Acorn",desc:"",icon:"🌰",element:"physical",family:"tree",rarity:"rare",mod:{damage:2,range:15}}}],fu={uncommon:65,rare:35},Ef=[{id:"cursed_chest",name:"The Cursed Chest",icon:"🗝️",desc:"A chest hums with power in the treeline. The lock is warm to the touch, and something out there noticed you noticing it.",choices:[{label:"Open it",desc:"Gain a random relic — but the next wave becomes an ELITE.",effect:"chest_open"},{label:"Leave it",desc:"Walk away. Nothing happens.",effect:"skip"}]},{id:"blood_pact",name:"The Blood Pact",icon:"🩸",desc:'A hooded figure offers power for pain. "The realm remembers sacrifice," it whispers.',choices:[{label:"Sign the pact",desc:"Lose 3 lives → choose from a RARE card draft.",effect:"blood_pact"},{label:"Refuse",desc:"Keep your blood where it is.",effect:"skip"}]},{id:"merchant",name:"The Wandering Merchant",icon:"🧳",desc:'A cart rattles up the road, sagging under trinkets. "Artifacts! Genuine! Mostly."',choices:[{label:"Buy a relic (130 ◉)",desc:"Pay 130 gold for a random relic.",effect:"merchant_buy"},{label:"Decline",desc:"His prices are theft anyway.",effect:"skip"}]},{id:"training",name:"The Training Grounds",icon:"🎯",desc:'A veteran drillmaster sizes up your towers. "Give me one of them for an hour and 60 gold."',choices:[{label:"Pay 60 ◉",desc:"A random tower gains a free upgrade tier.",effect:"training"},{label:"Skip",desc:"They train themselves. Probably.",effect:"skip"}]},{id:"gambler",name:"The Gambler's Coin",icon:"🪙",desc:'A grinning imp flips a coin that never seems to land the same way twice. "Double or... well. You know."',choices:[{label:"Flip it",desc:"50%: DOUBLE your gold. 50%: lose half.",effect:"gamble"},{label:"Walk away",desc:"Your gold stays boring and safe.",effect:"skip"}]},{id:"storm_blessing",name:"The Storm Blessing",icon:"⛈️",desc:"A sky-spirit offers to drench the next wave in glory: slower, tougher foes — worth twice the bounty.",choices:[{label:"Accept",desc:"Next wave: enemies 20% slower, +30% HP, 2x bounty.",effect:"blessing"},{label:"Decline",desc:"The spirit shrugs and drifts off.",effect:"skip"}]}],Fm=230,Om=25,dd=.7,Bm={conductMult:1.6,shatterMult:2,chainBonus:1,freezeDuration:1.1,evaporateBurst:10};function km(){return{kills:0,leaks:0,wavesCleared:0,dmgByElement:{fire:0,ice:0,lightning:0,water:0,wind:0,physical:0},reactions:{conduct:0,shatter:0,evaporate:0,frozen:0},cardIds:[]}}function Tf(i){const e=new uu(i),t=(i.cloudPaths??[]).map(a=>new uu({id:"",name:"",waypoints:[...a,a[0]]})),n=(i.props??[]).map(a=>{var o;return{x:a.x,y:a.y,r:(((o=gf[a.model])==null?void 0:o.blockRadius)??12)*a.scale}}),s=bm(e);for(const a of n){const{cx:o,cy:c}=rd(a.x,a.y);s.add(ro(o,c))}const r=t.flatMap((a,o)=>[0,a.total/2].map(c=>{const l=a.posAt(c);return{pathIdx:o,dist:c,x:l.x,y:l.y}}));return{map:i,track:e,blocked:s,water:new Set((i.water??[]).map(([a,o])=>ro(a,o))),blockers:n,clouds:r,cloudTracks:t}}function Uo(i=sd[Sm],e=Date.now()){return{...Tf(i),phase:"build",gold:Fm,lives:Om,round:0,act:0,speed:1,autoplay:!1,autoplayTimer:0,seed:e,rng:yf(e),draftMods:[],pendingDraft:null,eliteDraft:!1,reaction:{...Bm},bountyBonus:0,towerDiscountPct:0,waveModifier:null,lastEliteRound:-5,stats:km(),clock:0,killStackPct:0,relics:[],nextNodes:["normal"],nodesForRound:-1,nodeChoice:"normal",nodePicked:!0,waveKind:"normal",forcedModifier:null,pendingRelicDraft:null,pendingEvent:null,seenEvents:[],enemies:[],wizards:[],projectiles:[],waveTime:0,pendingSpawns:[],selectedWizardId:null,placingType:null,mouseX:0,mouseY:0,mouseOnBoard:!1,nextId:1}}function wf(i){return ad.includes(i.map.id)}function zm(i){if(i.act>=Mf-1)return!1;let e=0;for(const t of i.wizards)e+=Math.round(t.invested*dd);return i.gold+=e,i.wizards=[],i.enemies=[],i.projectiles=[],i.selectedWizardId=null,i.placingType=null,i.act++,Object.assign(i,Tf(sd[ad[i.act]])),i.round=0,i.lastEliteRound=-5,i.nodesForRound=-1,i.nodeChoice="normal",i.nodePicked=!0,i.waveModifier=null,i.forcedModifier=null,i.phase="build",!0}function Yo(i,e){e.damage&&(i.damage+=e.damage),e.rateMul&&(i.rate*=e.rateMul),e.range&&(i.range+=e.range),e.splash&&(i.splash+=e.splash),e.chains&&(i.chains+=e.chains),e.burnDps&&(i.burnDps+=e.burnDps),e.burnDuration&&(i.burnDuration+=e.burnDuration),e.chillPct&&(i.chillPct+=e.chillPct),e.wetDuration&&(i.wetDuration+=e.wetDuration),e.projSpeed&&(i.projSpeed+=e.projSpeed),e.soakSlow&&(i.soakSlow+=e.soakSlow),e.knockback&&(i.knockback+=e.knockback),e.rattlePct&&(i.rattlePct+=e.rattlePct),e.entangleDur&&(i.entangleDur+=e.entangleDur),e.rootSlow&&(i.rootSlow+=e.rootSlow)}function Li(i,e,t=[]){const n={range:i.range,rate:i.rate,damage:i.damage,projSpeed:i.projSpeed,splash:i.splash,chains:i.chains,chainFalloff:i.chainFalloff,burnDps:i.element==="fire"?6:0,burnDuration:i.element==="fire"?3:0,chillPct:i.element==="ice"?.3:0,wetDuration:i.element==="ice"?4:i.element==="water"?5:0,soakSlow:i.auraKind==="tide"?.2:0,knockback:i.auraKind==="gust"?70:0,rattlePct:i.auraKind==="rattle"?.25:0,entangleDur:i.entangles?1:0,rootSlow:i.groundAttack?.25:0};i.baseMods&&Yo(n,i.baseMods);for(let s=0;s<2;s++)for(let r=0;r<e[s];r++)Yo(n,i.upgrades[s].tiers[r].mod);for(const s of t){if(!s.mod)continue;const r=s.element===i.element||s.element==="all",a=!s.family||s.family===i.family;r&&a&&Yo(n,s.mod)}return n}function Af(i,e){const t=i.element===e.element||i.element==="all",n=!i.family||i.family===e.family;return t&&n}function ud(i,e){if(i.draftMods.push(e),i.stats.cardIds.push(e.id),e.reaction)for(const[t,n]of Object.entries(e.reaction))i.reaction[t]=n;e.econ&&(e.econ.goldNow&&(i.gold+=e.econ.goldNow),e.econ.bountyBonus&&(i.bountyBonus+=e.econ.bountyBonus),e.econ.towerDiscountPct&&(i.towerDiscountPct+=e.econ.towerDiscountPct));for(const t of i.wizards)t.stats=Li(t.def,t.tiers,i.draftMods)}function Fo(i,e){if(e!==null)return i.wizards.find(t=>t.id===e)}function Rf(i,e,t){return i.wizards.find(n=>n.cx===e&&n.cy===t)}function oo(i,e,t,n){const s=ro(e,t);if(i.blocked.has(s)||Rf(i,e,t))return!1;if((n==null?void 0:n.placement)==="any")return!0;const r=i.water.has(s),a=(n==null?void 0:n.placement)==="water";return r===a}function hd(i,e,t,n){const s=[0,0],r=_f(t,n),a={id:i.nextId++,def:e,cx:t,cy:n,x:r.x,y:r.y,cooldown:0,mode:"first",aim:-Math.PI/2,tiers:s,invested:e.cost,stats:Li(e,s,i.draftMods),recoil:0,attackCount:0,family:e.family};if(e.isGeneric){a.pendingSpecialize=!0;const o=i.water.has(ro(t,n));a.specializeOptions=Vm(i,e.family,o)}return a}function Cf(i,e,t){e.def=t,e.pendingSpecialize=!1,e.specializeOptions=void 0,e.stats=Li(t,e.tiers,i.draftMods),e.cooldown=0}function Vm(i,e,t,n=3){const{specializationsFor:s}=Hm();let r=s(e),a;e==="wizard"&&(t?(a=r.find(l=>l.placement==="water"),r=r.filter(l=>l.placement!=="water")):r=r.filter(l=>l.placement!=="water"));const o=a?[a]:[],c=Math.max(0,n-o.length);for(let l=0;l<c&&r.length>0;l++){const d=Math.floor(i.rng()*r.length);o.push(r[d]),r.splice(d,1)}for(let l=o.length-1;l>0;l--){const d=Math.floor(i.rng()*(l+1));[o[l],o[d]]=[o[d],o[l]]}return o}function Hm(){return{specializationsFor:Cm}}function If(i,e=3,t=!1){const{CARDS:n,RARITY_WEIGHT:s}=Gm(),r=new Set(i.draftMods.filter(c=>c.unique).map(c=>c.id));let a=n.filter(c=>!r.has(c.id));if(t){const c=a.filter(l=>l.rarity==="rare");c.length>=e&&(a=c)}const o=[];for(let c=0;c<e&&a.length>0;c++){const l=a.reduce((u,f)=>u+s[f.rarity],0);let d=i.rng()*l,h=a[0];for(const u of a)if(d-=s[u.rarity],d<=0){h=u;break}o.push(h),a=a.filter(u=>u.id!==h.id)}return o}function Gm(){return{CARDS:ld,RARITY_WEIGHT:Um}}function co(i,e){i.relics.some(t=>t.id===e.id)||(i.relics.push(e),e.payload&&ud(i,e.payload))}function lo(i,e){return i.relics.some(t=>{var n;return(n=t.special)==null?void 0:n.includes(e)})}function Yc(i,e=2){const t=new Set(i.relics.map(r=>r.id));let n=bf.filter(r=>!t.has(r.id));const s=[];for(let r=0;r<e&&n.length>0;r++){const a=n.reduce((l,d)=>l+fu[d.rarity],0);let o=i.rng()*a,c=n[0];for(const l of n)if(o-=fu[l.rarity],o<=0){c=l;break}s.push(c),n=n.filter(l=>l.id!==c.id)}return s}const Wm=2,pu=3;function Pf(i){if(i.nodesForRound===i.round)return;if(i.nodesForRound=i.round,i.nodeChoice="normal",i.round>=bs-1){i.nextNodes=["normal"],i.nodePicked=!0;return}const e=["normal"];if(i.round>=Wm){const t=i.seenEvents.length<Xm();if(i.round>=pu&&i.rng()<.5&&e.push("elite"),i.rng()<.35&&e.push("treasure"),i.rng()<.4&&t&&e.push("event"),e.length===1){const s=(i.round>=pu?["treasure","event","elite"]:["treasure","event"]).filter(r=>r!=="event"||t);e.push(s[Math.floor(i.rng()*s.length)])}}i.nextNodes=e.slice(0,3),i.nodePicked=i.nextNodes.length<=1}function Xm(){return Ef.length}function Lf(i){const e=Ef.filter(n=>!i.seenEvents.includes(n.id));if(e.length===0)return null;const t=e[Math.floor(i.rng()*e.length)];return i.seenEvents.push(t.id),t}function fd(i,e){const t=Df()[e.def.id];if(!t)return null;const n=e.tiers[0]>=e.def.upgrades[0].tiers.length&&e.tiers[1]>=e.def.upgrades[1].tiers.length,s=i.draftMods.some(a=>a.id===t.cardId),r=s?Math.floor(t.cost/2):t.cost;return n?i.gold<r?{ok:!1,cost:r,discounted:s,reason:"Not enough gold"}:{ok:!0,cost:r,discounted:s}:{ok:!1,cost:r,discounted:s,reason:"Max both paths first"}}function qm(i,e){const t=fd(i,e),n=Df()[e.def.id];return!(t!=null&&t.ok)||!n?!1:(i.gold-=t.cost,e.invested+=t.cost,e.def=$m(n.to),e.tiers=[0,0],e.stats=Li(e.def,e.tiers,i.draftMods),e.cooldown=0,!0)}function Df(){return Pm}function $m(i){return bn[i]}const Mn={fire:{id:"fire",name:"Fire",color:"#ff6b35",glow:"#ffb163"},ice:{id:"ice",name:"Ice",color:"#5bc8f5",glow:"#b3ecff"},lightning:{id:"lightning",name:"Lightning",color:"#c77dff",glow:"#e8c3ff"},water:{id:"water",name:"Water",color:"#3a86ff",glow:"#8fc0ff"},wind:{id:"wind",name:"Wind",color:"#b8d8d0",glow:"#e6f7f1"},physical:{id:"physical",name:"Physical",color:"#a08060",glow:"#d4b896"}},pd={grunt:{id:"grunt",name:"Grunt",hp:34,speed:68,radius:12,bounty:4,color:"#7da35c",resist:{}},runner:{id:"runner",name:"Runner",hp:22,speed:128,radius:10,bounty:5,color:"#d9a648",resist:{ice:1.4}},knight:{id:"knight",name:"Armored Knight",hp:110,speed:52,radius:13,bounty:10,color:"#8d99ae",resist:{ice:.5,lightning:.75,fire:1.5}},shade:{id:"shade",name:"Ember Shade",hp:60,speed:80,radius:11,bounty:8,color:"#b35442",resist:{fire:0,lightning:1.3}},golem:{id:"golem",name:"Obsidian Golem",hp:2600,speed:30,radius:22,bounty:200,color:"#5e4b8b",resist:{fire:.75,ice:.75},boss:!0},golemling:{id:"golemling",name:"Golemling",hp:500,speed:42,radius:16,bounty:50,color:"#7a68a6",resist:{fire:.75,ice:.75},boss:!0},orcraider:{id:"orcraider",name:"Orc Raider",hp:55,speed:75,radius:12,bounty:6,color:"#5e7a3a",resist:{}},orcbrute:{id:"orcbrute",name:"Orc Brute",hp:260,speed:46,radius:15,bounty:14,color:"#4a5d33",resist:{},armor:120},troll:{id:"troll",name:"Troll",hp:1300,speed:34,radius:19,bounty:60,color:"#6a7d5e",resist:{},armor:320,regen:.015},warwagon:{id:"warwagon",name:"War Wagon",hp:900,speed:40,radius:20,bounty:45,color:"#7a5c38",resist:{},vehicle:"wagon",leakCost:8,deathSpawns:["orcraider","orcraider","orcraider","orcraider","orcraider"]},siegetower:{id:"siegetower",name:"Siege Tower",hp:1600,speed:30,radius:22,bounty:80,color:"#6b4f30",resist:{},vehicle:"tower",leakCost:10,dropSpawns:{type:"orcraider",count:2,period:5}},orcshaman:{id:"orcshaman",name:"Orc Shaman",hp:140,speed:60,radius:11,bounty:18,color:"#3f8f5c",resist:{},aura:{kind:"heal",radius:110,power:.03,period:2}},wardrummer:{id:"wardrummer",name:"War Drummer",hp:300,speed:55,radius:13,bounty:22,color:"#8a5c3a",resist:{},aura:{kind:"haste",radius:120,power:.18}},wraith:{id:"wraith",name:"Wraith",hp:220,speed:95,radius:11,bounty:20,color:"#9db8c9",resist:{},phase:{period:5,duration:1.6}},warlord:{id:"warlord",name:"Ironhide Warlord",hp:1800,speed:26,radius:24,bounty:250,color:"#6e7b8a",resist:{ice:.8},boss:!0,armor:700},pyretitan:{id:"pyretitan",name:"Pyre Titan",hp:4200,speed:24,radius:26,bounty:350,color:"#c25a2e",resist:{fire:0,lightning:1.15},boss:!0,innateImmune:["burn","chill"]},colossus:{id:"colossus",name:"Dread Colossus",hp:7500,speed:20,radius:30,bounty:600,color:"#3d2f5e",resist:{fire:.5},boss:!0,armor:1600,innateImmune:["chill"],armorBreakSpawns:["golemling","golemling","golemling"]}},te={particles:[],floaters:[],arcs:[],rings:[],ring(i,e,t,n=26){this.rings.push({x:i,y:e,maxR:n,life:.35,maxLife:.35,color:t})},burst(i,e,t,n,s,r=3,a=.45){for(let o=0;o<n;o++){const c=Math.random()*Math.PI*2,l=s*(.4+Math.random()*.6);this.particles.push({x:i,y:e,vx:Math.cos(c)*l,vy:Math.sin(c)*l,life:a,maxLife:a,size:r*(.6+Math.random()*.8),color:t,drag:3.5,gravity:0})}},floater(i,e,t,n,s=12){this.floaters.push({x:i+(Math.random()-.5)*10,y:e,text:t,color:n,life:.9,maxLife:.9,size:s})},arc(i,e,t,n,s,r=2.5){const o=t-i,c=n-e,l=Math.hypot(o,c)||1,d=-c/l,h=o/l,u=[{x:i,y:e}];for(let f=1;f<7;f++){const g=f/7,y=(Math.random()-.5)*l*.22;u.push({x:i+o*g+d*y,y:e+c*g+h*y})}u.push({x:t,y:n}),this.arcs.push({pts:u,life:.18,maxLife:.18,color:s,width:r})},update(i){for(const e of this.particles){e.life-=i;const t=Math.max(0,1-e.drag*i);e.vx*=t,e.vy=e.vy*t+e.gravity*i,e.x+=e.vx*i,e.y+=e.vy*i}this.particles=this.particles.filter(e=>e.life>0);for(const e of this.floaters)e.life-=i,e.y-=28*i;this.floaters=this.floaters.filter(e=>e.life>0);for(const e of this.arcs)e.life-=i;this.arcs=this.arcs.filter(e=>e.life>0);for(const e of this.rings)e.life-=i;this.rings=this.rings.filter(e=>e.life>0)},clear(){this.particles.length=0,this.floaters.length=0,this.arcs.length=0,this.rings.length=0},draw(i){i.save();for(const e of this.rings){const t=1-e.life/e.maxLife;i.globalAlpha=(1-t)*.7,i.strokeStyle=e.color,i.lineWidth=2.5*(1-t)+.5,i.beginPath(),i.arc(e.x,e.y,e.maxR*t,0,Math.PI*2),i.stroke()}i.globalAlpha=1;for(const e of this.particles){const t=e.life/e.maxLife;i.globalAlpha=t,i.fillStyle=e.color,i.beginPath(),i.arc(e.x,e.y,e.size*t,0,Math.PI*2),i.fill()}for(const e of this.arcs){const t=e.life/e.maxLife;i.globalAlpha=t,i.strokeStyle=e.color,i.lineWidth=e.width,i.shadowColor=e.color,i.shadowBlur=8,i.beginPath(),i.moveTo(e.pts[0].x,e.pts[0].y);for(let n=1;n<e.pts.length;n++)i.lineTo(e.pts[n].x,e.pts[n].y);i.stroke(),i.shadowBlur=0}i.globalAlpha=1,i.textAlign="center";for(const e of this.floaters){const t=e.life/e.maxLife;i.globalAlpha=Math.min(1,t*2),i.font=`bold ${e.size}px 'Segoe UI', sans-serif`,i.lineWidth=3,i.strokeStyle="rgba(0,0,0,0.6)",i.strokeText(e.text,e.x,e.y),i.fillStyle=e.color,i.fillText(e.text,e.x,e.y)}i.restore()}};let ft=null,Vn=null,Nf=null,jr=!1,Ko=.5;function It(i,e=.04){return i*(1+(Math.random()*2-1)*e)}function Ym(i){const e=Math.floor(i.sampleRate*1.4),t=i.createBuffer(2,e,i.sampleRate);for(let n=0;n<2;n++){const s=t.getChannelData(n);for(let r=0;r<e;r++)s[r]=(Math.random()*2-1)*Math.pow(1-r/e,2.4)}return t}const mu=new Map;function Vt(i,e){if(!ft)return null;const t=performance.now();return t-(mu.get(i)??-1/0)<e?null:(mu.set(i,t),ft.state==="suspended"&&ft.resume(),ft)}function en(){return ft?(ft.state==="suspended"&&ft.resume(),ft):null}function Km(i){const e=i.sampleRate*1.5,t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;return t}function Me(i,e,t,n){const s=i.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(1e-4,t),e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+n),s.connect(Vn),s}function nt(i,e,t,n,s,r){const a=i.createOscillator();a.type=e,a.frequency.setValueAtTime(t,n),a.connect(r),a.start(n),a.stop(n+s)}function Ht(i,e,t,n,s,r,a){const o=i.createOscillator();o.type=e,o.frequency.setValueAtTime(Math.max(1,t),s),o.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r),o.connect(a),o.start(s),o.stop(s+r)}function Ot(i,e,t,n,s){const r=i.createBufferSource();if(r.buffer=Nf,r.loop=!0,s){const a=i.createBiquadFilter();a.type=s.type,a.frequency.setValueAtTime(s.f0,e),s.f1&&a.frequency.exponentialRampToValueAtTime(Math.max(1,s.f1),e+t),a.Q.value=s.q??1,r.connect(a),a.connect(n)}else r.connect(n);r.start(e),r.stop(e+t)}const Ae={init(){if(ft){ft.resume();return}try{ft=new AudioContext,Vn=ft.createGain(),Vn.gain.value=jr?0:Ko;const i=ft.createBiquadFilter();i.type="lowpass",i.frequency.value=11e3;const e=ft.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4;const t=ft.createConvolver();t.buffer=Ym(ft);const n=ft.createGain();n.gain.value=.18,Vn.connect(i),i.connect(e),e.connect(ft.destination),e.connect(t),t.connect(n),n.connect(ft.destination),Nf=Km(ft)}catch{ft=null}},bus(){return ft&&Vn?{ctx:ft,target:Vn}:null},setVolume(i){Ko=i,Vn&&!jr&&(Vn.gain.value=i)},setMuted(i){jr=i,Vn&&(Vn.gain.value=i?0:Ko)},isMuted(){return jr},fireCast(){const i=Vt("fire",90);if(!i)return;const e=i.currentTime;Ot(i,e,.28,Me(i,e,.5,.28),{type:"bandpass",f0:It(400),f1:1600,q:1.2}),Ht(i,"sawtooth",It(160),60,e,.25,Me(i,e,.15,.25))},iceCast(){const i=Vt("ice",90);if(!i)return;const e=i.currentTime;nt(i,"triangle",It(1320),e,.3,Me(i,e,.25,.3)),nt(i,"triangle",It(1980),e+.03,.25,Me(i,e+.03,.15,.25))},boltCast(){const i=Vt("bolt",90);if(!i)return;const e=i.currentTime;Ot(i,e,.16,Me(i,e,.55,.16),{type:"highpass",f0:2e3,q:.7}),Ht(i,"square",It(800),90,e,.12,Me(i,e,.2,.12))},waterPulse(){const i=en();if(!i)return;const e=i.currentTime;Ht(i,"sine",90,220,e,.35,Me(i,e,.45,.4)),Ot(i,e+.05,.3,Me(i,e+.05,.18,.3),{type:"lowpass",f0:700,f1:250})},windGust(){const i=en();if(!i)return;const e=i.currentTime;Ot(i,e,.5,Me(i,e,.4,.5),{type:"bandpass",f0:300,f1:1200,q:.6})},gongPulse(){const i=Vt("gong",200);if(!i)return;const e=i.currentTime;nt(i,"sine",55,e,1.4,Me(i,e,.3,1.4)),nt(i,"sine",110,e,1.1,Me(i,e,.4,1.1)),nt(i,"triangle",187,e,.9,Me(i,e,.18,.9)),nt(i,"triangle",266,e,.7,Me(i,e,.1,.7))},bowTwang(){const i=Vt("bow",80);if(!i)return;const e=i.currentTime;Ht(i,"triangle",It(900,.07),320,e,.12,Me(i,e,.35,.12)),Ot(i,e+.02,.14,Me(i,e+.02,.12,.14),{type:"bandpass",f0:2200,f1:900,q:1.5})},thud(){const i=Vt("thud",110);if(!i)return;const e=i.currentTime;Ht(i,"sine",It(140,.08),45,e,.22,Me(i,e,.5,.22)),Ot(i,e,.1,Me(i,e,.25,.1),{type:"lowpass",f0:500,f1:120})},explosion(){const i=Vt("boom",120);if(!i)return;const e=i.currentTime;Ht(i,"sine",It(64),26,e,.5,Me(i,e,.9,.5)),Ot(i,e,.45,Me(i,e,.55,.45),{type:"lowpass",f0:3e3,f1:300});for(let t=0;t<3;t++){const n=.1+Math.random()*.22;Ot(i,e+n,.06,Me(i,e+n,.16,.06),{type:"bandpass",f0:It(1600,.3),q:2})}},armorClank(){const i=Vt("clank",100);if(!i)return;const e=i.currentTime;nt(i,"triangle",It(1180,.06),e,.09,Me(i,e,.3,.09)),nt(i,"triangle",It(1730,.06),e,.07,Me(i,e,.18,.07)),Ot(i,e,.05,Me(i,e,.2,.05),{type:"highpass",f0:3500,q:1})},armorBreak(){const i=en();if(!i)return;const e=i.currentTime;Ot(i,e,.5,Me(i,e,.7,.5),{type:"bandpass",f0:2400,f1:500,q:.8}),Ht(i,"sine",90,35,e,.4,Me(i,e,.6,.4));for(let t=0;t<5;t++){const n=.06+t*.07;nt(i,"triangle",It(2200-t*320,.1),e+n,.12,Me(i,e+n,.14,.12))}},bossRoar(){const i=Vt("roar",800);if(!i)return;const e=i.currentTime,t=Me(i,e,.5,1.2),n=i.createBiquadFilter();n.type="bandpass",n.Q.value=1.4,n.frequency.setValueAtTime(280,e),n.frequency.exponentialRampToValueAtTime(900,e+.45),n.frequency.exponentialRampToValueAtTime(320,e+1.1);for(const s of[55,82.5,110.5]){const r=i.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(It(s,.02),e),r.connect(n),r.start(e),r.stop(e+1.2)}n.connect(t),Ht(i,"sine",60,38,e,1,Me(i,e,.4,1))},actFanfare(){const i=en();if(!i)return;const e=i.currentTime;[262,330,392,523,659].forEach((n,s)=>{const r=s*.16;nt(i,"sawtooth",n,e+r,.34,Me(i,e+r,.16,.34)),nt(i,"triangle",n*2,e+r,.3,Me(i,e+r,.08,.3))}),nt(i,"sawtooth",262,e+.85,.9,Me(i,e+.85,.14,.9)),nt(i,"sawtooth",392,e+.85,.9,Me(i,e+.85,.12,.9)),nt(i,"sawtooth",523,e+.85,.9,Me(i,e+.85,.12,.9))},healChime(){const i=Vt("heal",250);if(!i)return;const e=i.currentTime;nt(i,"sine",It(880,.02),e,.25,Me(i,e,.14,.25)),nt(i,"sine",It(1320,.02),e+.09,.3,Me(i,e+.09,.1,.3))},drumBeat(){const i=Vt("drum",850);if(!i)return;const e=i.currentTime;Ht(i,"sine",120,55,e,.18,Me(i,e,.45,.18)),Ht(i,"sine",110,50,e+.22,.18,Me(i,e+.22,.3,.18)),Ot(i,e,.05,Me(i,e,.12,.05),{type:"lowpass",f0:900})},phaseShimmer(){const i=Vt("phase",300);if(!i)return;const e=i.currentTime;Ot(i,e,.35,Me(i,e,.16,.35),{type:"bandpass",f0:3200,f1:6800,q:3}),nt(i,"sine",It(2093,.05),e,.3,Me(i,e,.05,.3))},woodCrash(){const i=Vt("wood",300);if(!i)return;const e=i.currentTime;Ot(i,e,.3,Me(i,e,.5,.3),{type:"bandpass",f0:700,f1:250,q:1}),Ht(i,"sine",110,45,e,.25,Me(i,e,.4,.25));for(let t=0;t<2;t++){const n=.08+Math.random()*.12;Ot(i,e+n,.04,Me(i,e+n,.2,.04),{type:"bandpass",f0:It(1400,.2),q:3})}},hit(){const i=Vt("hit",70);if(!i)return;const e=i.currentTime;Ht(i,"sine",220,70,e,.09,Me(i,e,.3,.09))},shatter(){const i=Vt("shatter",110);if(!i)return;const e=i.currentTime;Ot(i,e,.25,Me(i,e,.5,.25),{type:"highpass",f0:3e3,q:1.5}),nt(i,"triangle",2640,e,.12,Me(i,e,.2,.12))},conduct(){const i=Vt("conduct",110);if(!i)return;const e=i.currentTime;Ht(i,"square",1400,200,e,.18,Me(i,e,.3,.18)),Ot(i,e,.14,Me(i,e,.25,.14),{type:"highpass",f0:2500})},evaporate(){const i=en();if(!i)return;const e=i.currentTime;Ot(i,e,.4,Me(i,e,.3,.4),{type:"bandpass",f0:4500,f1:900,q:.8})},freeze(){const i=en();if(!i)return;const e=i.currentTime;Ht(i,"triangle",1500,3200,e,.2,Me(i,e,.25,.22)),nt(i,"triangle",990,e+.05,.2,Me(i,e+.05,.12,.2))},coin(){const i=Vt("coin",80);if(!i)return;const e=i.currentTime;nt(i,"square",It(1046,.02),e,.06,Me(i,e,.12,.06)),nt(i,"square",It(1568,.02),e+.06,.1,Me(i,e+.06,.12,.1)),nt(i,"sine",3136,e+.1,.12,Me(i,e+.1,.05,.12))},place(){const i=en();if(!i)return;const e=i.currentTime;Ht(i,"sine",300,500,e,.12,Me(i,e,.3,.14)),nt(i,"triangle",750,e+.08,.12,Me(i,e+.08,.15,.12))},sell(){const i=en();if(!i)return;const e=i.currentTime;Ht(i,"sine",500,280,e,.16,Me(i,e,.25,.18))},upgrade(){const i=en();if(!i)return;const e=i.currentTime;[523,659,784].forEach((t,n)=>nt(i,"triangle",t,e+n*.06,.12,Me(i,e+n*.06,.2,.14)))},leak(){const i=en();if(!i)return;const e=i.currentTime;Ht(i,"sawtooth",180,60,e,.3,Me(i,e,.35,.3)),Ot(i,e,.2,Me(i,e,.15,.2),{type:"lowpass",f0:300})},waveStart(){const i=en();if(!i)return;const e=i.currentTime;nt(i,"sawtooth",262,e,.22,Me(i,e,.18,.24)),nt(i,"sawtooth",392,e+.18,.3,Me(i,e+.18,.2,.32))},win(){const i=en();if(!i)return;const e=i.currentTime;[523,659,784,1046].forEach((t,n)=>nt(i,"triangle",t,e+n*.13,.3,Me(i,e+n*.13,.25,.34)))},lose(){const i=en();if(!i)return;const e=i.currentTime;[392,330,262].forEach((t,n)=>nt(i,"sawtooth",t,e+n*.18,.32,Me(i,e+n*.18,.2,.36)))},click(){const i=en();if(!i)return;const e=i.currentTime;nt(i,"square",660,e,.04,Me(i,e,.08,.045))}};function $r(i,e,t,n){const s=[];for(const r of i.enemies){if(r.hp<=0||r.phased)continue;const a=r.x-e,o=r.y-t,c=n+r.def.radius;a*a+o*o<=c*c&&s.push(r)}return s}function Uf(i,e,t,n,s){for(const r of i.blockers){const a=n-e,o=s-t,c=a*a+o*o,l=c===0?0:Math.max(0,Math.min(1,((r.x-e)*a+(r.y-t)*o)/c)),d=e+l*a,h=t+l*o;if((r.x-d)**2+(r.y-h)**2<r.r*r.r)return!1}return!0}function Zm(i,e){const t=$r(i,e.x,e.y,e.stats.range).filter(n=>Uf(i,e.x,e.y,n.x,n.y));if(t.length!==0)switch(e.mode){case"first":return t.reduce((n,s)=>s.dist>n.dist?s:n);case"last":return t.reduce((n,s)=>s.dist<n.dist?s:n);case"strong":return t.reduce((n,s)=>s.hp>n.hp?s:n);case"close":{const n=s=>(s.x-e.x)**2+(s.y-e.y)**2;return t.reduce((s,r)=>n(r)<n(s)?r:s)}}}function md(i,e){const t=i.draftMods.filter(n=>n.fx&&Af(n,e.def)).map(n=>n.fx);return e.def.innateFx&&t.push(e.def.innateFx),t}function Jm(i,e){return i.clock%e.period<e.duration}function Ff(i,e){e.attackCount++;let t=1+i.killStackPct/100;for(const n of md(i,e)){const s=n.critEveryN;s&&e.attackCount%s.n===0&&(t*=s.mult,te.floater(e.x,e.y-28,"CRIT!","#ffd75e",13),te.burst(e.x,e.y-10,"#ffd75e",6,90,2.5,.3))}return t}function gu(i,e){let t=1;for(const n of md(i,e))n.frenzy&&Jm(i,n.frenzy)&&(t*=n.frenzy.rateMul);return t}function _u(i,e,t){if(!e)return 1;let n=1;for(const s of md(i,e)){const r=s.bonusVsStatus;r&&t.statuses[r.status]&&(n*=r.mult);const a=s.bonusVsHealthy;a&&t.hp>=t.maxHp*a.threshold&&(n*=a.mult)}return n}const xu=95,vu=3,Qm=.35,yu=165,jm=26,eg=1.5,tg=.25,ng=1.5,ig=2.5,sg=.3,rg=1.4,ag=14,Mu=30,og=1.6;function cg(i,e){for(const t of i.clouds){const n=i.cloudTracks[t.pathIdx];t.dist=(t.dist+jm*e)%n.total;const s=n.posAt(t.dist);t.x=s.x,t.y=s.y}}function lg(i,e){return i.clouds.some(t=>(t.x-e.x)**2+(t.y-e.y)**2<=yu*yu)}function dg(i,e){i.clock+=e;for(const t of i.wizards){if(t.pendingSpecialize)continue;if(t.recoil>0&&(t.recoil-=e),t.cooldown>0&&(t.cooldown-=e),t.def.needsCloud&&(t.becalmed=!lg(i,t),t.becalmed)){Math.random()<e*.5&&te.floater(t.x,t.y-30,"≋ no wind","#cfd8dc",10);continue}if(t.def.auraKind){if(t.cooldown<=0&&$r(i,t.x,t.y,t.stats.range).length>0){t.cooldown=t.stats.rate*gu(i,t),t.recoil=.18;const s=Ff(i,t);t.def.auraKind==="tide"?ug(i,t,s):t.def.auraKind==="gust"?hg(i,t,s):fg(i,t,s)}continue}const n=Zm(i,t);n&&(t.aim=Math.atan2(n.y-t.y,n.x-t.x),t.cooldown<=0&&(t.cooldown=t.stats.rate*gu(i,t),t.recoil=.18,pg(i,t,n)))}}function ug(i,e,t=1){var n;Ae.waterPulse(),te.ring(e.x,e.y,"#3a86ff",e.stats.range);for(const s of $r(i,e.x,e.y,e.stats.range))if(Ln(i,s,e.stats.damage*t,"water",e),!(s.hp<=0)&&!((n=s.immunities)!=null&&n.includes("wet"))){if(s.statuses.burn){if(delete s.statuses.burn,i.stats.reactions.evaporate++,te.floater(s.x,s.y-18,"Evaporate!","#ffffff",12),Ae.evaporate(),Ln(i,s,i.reaction.evaporateBurst,"water",e),s.hp<=0)continue}else s.statuses.wet={t:e.stats.wetDuration};Bf(i,s,e.stats.soakSlow),s.statuses.chill&&(s.statuses.chill.t=ng)}}function hg(i,e,t=1){Ae.windGust(),te.ring(e.x,e.y,"#e6f7f1",e.stats.range*.7);for(const n of $r(i,e.x,e.y,e.stats.range)){if(Ln(i,n,e.stats.damage*t,"wind",e),n.hp<=0||n.gustImmune||(n.gustCd??0)>0)continue;const s=e.stats.knockback*(n.def.boss?tg:1);n.dist=Math.max(0,n.dist-s),n.gustCd=eg;const r=i.track.posAt(n.dist);te.burst(n.x,n.y,"#e6f7f1",6,90,2.5,.35),n.x=r.x,n.y=r.y}}function fg(i,e,t=1){Ae.gongPulse(),te.ring(e.x,e.y,"#c9a63f",e.stats.range);for(const n of $r(i,e.x,e.y,e.stats.range)){if(e.stats.damage>0&&Ln(i,n,e.stats.damage*t,"physical",e),n.hp<=0)continue;const s=n.statuses.rattled;n.statuses.rattled={t:3,pct:Math.max((s==null?void 0:s.pct)??0,e.stats.rattlePct)},s||te.floater(n.x,n.y-14,"Rattled!","#c9a63f",11)}}function pg(i,e,t){const n=Mn[e.def.element],s=e.x+Math.cos(e.aim)*16,r=e.y+Math.sin(e.aim)*16;te.burst(s,r,n.glow,4,60,2,.25),e.def.element==="fire"?Ae.fireCast():e.def.element==="ice"?Ae.iceCast():e.def.element==="lightning"?Ae.boltCast():e.def.family==="archer"?Ae.bowTwang():e.def.family==="tree"&&Ae.thud();const a=Ff(i,e);if(e.def.element==="lightning")gg(i,e,t,a);else if(e.def.groundAttack)mg(i,e,t,a);else if(e.def.pierce){const o=t.x-s,c=t.y-r,l=Math.hypot(o,c)||1;i.projectiles.push({id:i.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:0,targetId:-1,tx:t.x,ty:t.y,wizardId:e.id,visual:e.def.family==="archer"?"bolt":Su(e.def),pierce:{dirX:o/l,dirY:c/l,traveled:0,maxDist:e.stats.range*rg,hitIds:[]}})}else i.projectiles.push({id:i.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:e.stats.splash,targetId:t.id,tx:t.x,ty:t.y,wizardId:e.id,visual:Su(e.def),sx:s,sy:r})}function Su(i){return i.family==="archer"?"arrow":i.id==="dynamite"||i.id==="sapperking"?"stick":i.id==="slingshot"||i.id==="boulder"||i.id==="mountain"?"rock":i.id==="thornspitter"||i.id==="bramblehydra"?"needle":"orb"}function mg(i,e,t,n=1){te.burst(t.x,t.y+4,"#6a8f4f",10,80,3,.4),te.ring(t.x,t.y,"#4c6b38",Mu);for(const s of i.enemies){if(s.hp<=0)continue;const r=s.x-t.x,a=s.y-t.y;if(r*r+a*a>(Mu+s.def.radius)**2||(Ln(i,s,e.stats.damage*n,e.def.element,e),s.hp<=0))continue;const o=s.statuses.snared;s.statuses.snared={t:og,pct:Math.max((o==null?void 0:o.pct)??0,e.stats.rootSlow)}}}function gg(i,e,t,n=1){const s=Mn.lightning;let r=1+e.stats.chains,a=e.stats.damage*n;const o=new Set;let c=t,l=e.x,d=e.y;for(;c&&r>0;)te.arc(l,d,c.x,c.y,s.glow),c.statuses.wet?(delete c.statuses.wet,r+=i.reaction.chainBonus,i.stats.reactions.conduct++,te.floater(c.x,c.y-18,"Conduct!","#e8c3ff",13),te.burst(c.x,c.y,"#c77dff",10,120,3),Ae.conduct(),Ln(i,c,a*i.reaction.conductMult,"lightning",e)):Ln(i,c,a,"lightning",e),Of(i,e,c),o.add(c.id),r--,a*=e.stats.chainFalloff,l=c.x,d=c.y,c=_g(i,l,d,o)}function _g(i,e,t,n){let s,r=xu*xu;for(const a of i.enemies){if(a.hp<=0||a.phased||n.has(a.id))continue;const o=(a.x-e)**2+(a.y-t)**2;o<=r&&Uf(i,e,t,a.x,a.y)&&(r=o,s=a)}return s}function xg(i,e){for(const t of i.projectiles){if(t.pierce){vg(i,t,e);continue}const n=i.enemies.find(c=>c.id===t.targetId&&c.hp>0);n&&(t.tx=n.x,t.ty=n.y);const s=t.tx-t.x,r=t.ty-t.y,a=Math.hypot(s,r),o=t.speed*e;a<=Math.max(10,o)?(yg(i,t,n),t.speed=-1):(t.x+=s/a*o,t.y+=r/a*o,Math.random()<.6&&te.burst(t.x,t.y,Mn[t.element].glow,1,15,2,.3))}i.projectiles=i.projectiles.filter(t=>t.speed>=0)}function vg(i,e,t){const n=e.pierce,s=Math.min(e.speed*t,n.maxDist-n.traveled);e.x+=n.dirX*s,e.y+=n.dirY*s,n.traveled+=s,e.tx=e.x+n.dirX*20,e.ty=e.y+n.dirY*20;const r=i.wizards.find(a=>a.id===e.wizardId);for(const a of i.enemies){if(a.hp<=0||a.phased||n.hitIds.includes(a.id))continue;const o=a.x-e.x,c=a.y-e.y,l=ag+a.def.radius;o*o+c*c>l*l||(n.hitIds.push(a.id),te.burst(a.x,a.y,Mn[e.element].glow,5,80,2.5,.3),Kc(i,r,a,e.damage,e.element))}n.traveled>=n.maxDist?e.speed=-1:Math.random()<.5&&te.burst(e.x,e.y,Mn[e.element].glow,1,12,1.5,.2)}function yg(i,e,t){const n=Mn[e.element];te.burst(e.tx,e.ty,n.color,e.splash>0?14:7,e.splash>0?150:90,3),e.splash>=40&&(Ae.explosion(),te.ring(e.tx,e.ty,"#ff7b00",e.splash),te.burst(e.tx,e.ty,"#9a9086",12,35,4,1.3));const s=i.wizards.find(r=>r.id===e.wizardId);if(t&&t.hp>0&&Kc(i,s,t,e.damage,e.element),e.splash>0)for(const r of i.enemies){if(r.hp<=0||r===t)continue;const a=r.x-e.tx,o=r.y-e.ty;a*a+o*o<=(e.splash+r.def.radius)**2&&Kc(i,s,r,e.damage*.6,e.element)}}function Kc(i,e,t,n,s){s==="fire"&&(t.statuses.chill||t.statuses.frozen)&&(delete t.statuses.chill,delete t.statuses.frozen,n*=i.reaction.shatterMult,i.stats.reactions.shatter++,te.floater(t.x,t.y-18,"Shatter!","#b3ecff",13),te.burst(t.x,t.y,"#b3ecff",12,140,3),Ae.shatter()),Ln(i,t,n,s,e),e&&t.hp>0&&Of(i,e,t)}function ka(i,e){var t;return((t=i.immunities)==null?void 0:t.includes(e))??!1}function Of(i,e,t){const n=e.stats;if(e.def.element==="fire"&&n.burnDps>0&&!ka(t,"burn"))if(t.statuses.wet)delete t.statuses.wet,i.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Ae.evaporate(),Ln(i,t,i.reaction.evaporateBurst,"fire",e);else{const s=t.statuses.burn;t.statuses.burn={t:n.burnDuration,dps:Math.max((s==null?void 0:s.dps)??0,n.burnDps)}}if(e.def.entangles&&e.stats.entangleDur>0&&(t.entangleCd??0)<=0){const s=t.def.boss?e.stats.entangleDur*sg:e.stats.entangleDur;t.statuses.entangled={t:s},t.entangleCd=s+ig,te.floater(t.x,t.y-14,"Rooted!","#8c9c72",11),te.burst(t.x,t.y+6,"#6b7a52",8,70,2.5,.4)}if(e.def.element==="ice"){if(t.statuses.burn&&!ka(t,"wet")?(delete t.statuses.burn,i.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Ae.evaporate(),Ln(i,t,i.reaction.evaporateBurst,"ice",e)):ka(t,"wet")||(t.statuses.wet={t:n.wetDuration}),t.hp<=0)return;Bf(i,t,n.chillPct)}}function Bf(i,e,t){if(e.statuses.frozen||ka(e,"chill"))return;const n=e.statuses.chill??{t:0,pct:0,stacks:0};if(n.stacks=Math.min(vu,n.stacks+1),n.pct=Math.max(n.pct,t),n.t=2.5,e.statuses.chill=n,n.stacks>=vu){delete e.statuses.chill;const s=e.def.boss?i.reaction.freezeDuration*Qm:i.reaction.freezeDuration;e.statuses.frozen={t:s},i.stats.reactions.frozen++,te.floater(e.x,e.y-18,"Frozen!","#e6f9ff",12),te.burst(e.x,e.y,"#b3ecff",10,100,3),Ae.freeze()}}function Ln(i,e,t,n,s){var l,d;if(e.hp<=0)return;if(e.armorHp!==void 0&&e.armorHp>0){const h=1+(((l=e.statuses.rattled)==null?void 0:l.pct)??0),u=_u(i,s,e),f=t*h*u*(n==="physical"?1:.1);e.armorHp-=f,e.hitFlash=.12,i.stats.dmgByElement[n]+=f,f>=1&&te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(f)),n==="physical"?"#cdd7e0":"#6b7684",n==="physical"?11:9),n==="physical"&&Ae.armorClank(),e.armorHp<=0&&Mg(i,e);return}const r=e.def.resist[n]??1;if(r===0){te.floater(e.x,e.y-14,"Immune!","#999999",11);return}const a=1+(((d=e.statuses.rattled)==null?void 0:d.pct)??0),o=_u(i,s,e),c=t*r*a*o;if(e.hp-=c,e.hitFlash=.12,i.stats.dmgByElement[n]+=c,c>=1){const h=r>1?"#ffe08a":r<1?"#8899aa":"#ffffff";te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(c)),h,r>1?12:10)}e.hp<=0&&kf(i,e,s)}function gd(i,e,t){const n=pd[e];if(!n)return null;const s=Os[Math.min(i.act,Os.length-1)],r=n.hp*s.hp,a=Math.max(0,t),o=i.track.posAt(a),c={id:i.nextId++,def:n,hp:r,maxHp:r,dist:a,x:o.x,y:o.y,statuses:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:o.angle,hitFlash:0,speedMult:s.speed,armorHp:n.armor};return i.enemies.push(c),te.burst(o.x,o.y,n.color,10,120,3,.4),c}function Mg(i,e){e.armorHp=0,te.floater(e.x,e.y-30,"ARMOR SHATTERED!","#ffd75e",15),te.burst(e.x,e.y,"#cdd7e0",22,190,4,.6),te.ring(e.x,e.y,"#cdd7e0",55),Ae.armorBreak();for(const t of e.def.armorBreakSpawns??[])gd(i,t,e.dist-20-Math.random()*30)}function kf(i,e,t){var r;const n=Os[Math.min(i.act,Os.length-1)].bounty,s=Math.round(e.def.bounty*(((r=i.waveModifier)==null?void 0:r.bountyMult)??1)*n)+i.bountyBonus;i.gold+=s,i.stats.kills++,te.floater(e.x,e.y-22,`+${s}`,"#ffd75e",12),te.burst(e.x,e.y,e.def.color,12,130,3.5,.5),te.ring(e.x,e.y,e.def.color,e.def.boss?46:24),Ae.coin(),i.stats.kills%40===0&&lo(i,"killLives")&&(i.lives++,te.floater(e.x,e.y-40,"🍷 +1 ❤","#ff9db5",14)),e.def.deathSpawns&&(Ae.woodCrash(),te.floater(e.x,e.y-34,"The wagon breaks open!","#e0b070",13),te.burst(e.x,e.y,"#7a5c38",18,150,4,.6),e.def.deathSpawns.forEach((a,o)=>gd(i,a,e.dist-8-o*14))),Sg(i,e,t)}function Sg(i,e,t){for(const n of i.draftMods){if(!n.fx)continue;const s=n.element!=="all"||!!n.family,r=t?Af(n,t.def):!s;bu(i,e,t,n.fx,r)}t!=null&&t.def.innateFx&&bu(i,e,t,t.def.innateFx,!0)}function bu(i,e,t,n,s){var c;if(n.spreadBurnOnDeath&&e.statuses.burn){let l,d=8100;for(const h of i.enemies){if(h===e||h.hp<=0||h.statuses.burn||(c=h.immunities)!=null&&c.includes("burn"))continue;const u=(h.x-e.x)**2+(h.y-e.y)**2;u<=d&&(d=u,l=h)}l&&(l.statuses.burn={t:Math.max(e.statuses.burn.t,1.5),dps:e.statuses.burn.dps},te.arc(e.x,e.y,l.x,l.y,"#ff7b00"),te.floater(l.x,l.y-16,"Wildfire!","#ff9b4a",11))}if(!s)return;const r=n.onKillExplode;if(r){Ae.explosion(),te.burst(e.x,e.y,"#ffab5e",14,160,3.5),te.burst(e.x,e.y,"#9a9086",8,30,4,1.2),te.ring(e.x,e.y,"#ff7b00",r.radius);for(const l of i.enemies){if(l===e||l.hp<=0)continue;const d=l.x-e.x,h=l.y-e.y;d*d+h*h<=(r.radius+l.def.radius)**2&&Ln(i,l,r.damage,"physical",t)}}const a=n.onKillGold;a&&i.rng()<a.chance&&(i.gold+=a.amount,te.floater(e.x,e.y-36,`+${a.amount} bonus`,"#ffd75e",11));const o=n.onKillStackDamage;o&&i.killStackPct<o.capPct&&(i.killStackPct=Math.min(o.capPct,i.killStackPct+o.pct))}function bg(i,e){for(const t of i.enemies)t.hasteMul=1;for(const t of i.enemies){const n=t.def.aura;if(!(!n||t.hp<=0))if(n.kind==="heal"){if(t.auraCd=(t.auraCd??n.period??2)-e,t.auraCd<=0){t.auraCd=n.period??2;let s=!1;for(const r of i.enemies){if(r===t||r.hp<=0||r.hp>=r.maxHp||(r.x-t.x)**2+(r.y-t.y)**2>n.radius*n.radius)continue;const o=r.maxHp*n.power;r.hp=Math.min(r.maxHp,r.hp+o),te.floater(r.x,r.y-12,`+${Math.round(o)}`,"#7dff9b",10),s=!0}s&&(te.ring(t.x,t.y,"#3fae5a",n.radius),Ae.healChime())}}else{Ae.drumBeat();for(const s of i.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=n.radius*n.radius&&(s.hasteMul=Math.max(s.hasteMul??1,1+n.power))}}}for(const t of i.enemies){if(t.hp<=0)continue;const n=t.statuses;if(t.def.regen&&!n.frozen&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.def.regen*e)),t.def.dropSpawns&&(t.dropCd=(t.dropCd??t.def.dropSpawns.period)-e,t.dropCd<=0)){t.dropCd=t.def.dropSpawns.period,Ae.woodCrash(),te.floater(t.x,t.y-30,"The tower unloads!","#e0b070",12);for(let a=0;a<t.def.dropSpawns.count;a++)gd(i,t.def.dropSpawns.type,t.dist-18-a*14)}if(t.def.phase){t.phaseT=(t.phaseT??0)+e;const a=t.phaseT%t.def.phase.period,o=t.phased;t.phased=a>t.def.phase.period-t.def.phase.duration,t.phased!==o&&Ae.phaseShimmer()}if(n.burn&&(Eg(i,t,n.burn.dps*e),n.burn.t-=e,n.burn.t<=0&&delete n.burn),n.wet&&(n.wet.t-=e,n.wet.t<=0&&delete n.wet),n.chill&&(n.chill.t-=e,n.chill.t<=0&&delete n.chill),n.frozen&&(n.frozen.t-=e,n.frozen.t<=0&&delete n.frozen),n.rattled&&(n.rattled.t-=e,n.rattled.t<=0&&delete n.rattled),n.entangled&&(n.entangled.t-=e,n.entangled.t<=0&&delete n.entangled),n.snared&&(n.snared.t-=e,n.snared.t<=0&&delete n.snared),t.hp<=0)continue;let s=1;n.frozen||n.entangled?s=0:n.chill&&(s=Math.max(.25,1-n.chill.pct*(.6+.2*n.chill.stacks))),s>0&&n.snared&&(s*=Math.max(.2,1-n.snared.pct)),s*=t.hasteMul??1,t.animT+=s*e,t.hitFlash>0&&(t.hitFlash-=e),t.gustCd&&t.gustCd>0&&(t.gustCd-=e),t.entangleCd&&t.entangleCd>0&&(t.entangleCd-=e),t.dist+=t.def.speed*(t.speedMult??1)*s*e;const r=i.track.posAt(t.dist);if(t.x=r.x,t.y=r.y,t.angle=r.angle,t.dist>=i.track.total){t.hp=0;const a=t.def.leakCost??(t.def.boss?5:1);i.lives-=a,i.stats.leaks++,te.floater(r.x-20,r.y,`-${a} ❤`,"#ff6b81",a>1?16:14),Ae.leak(),i.lives<=0&&(i.lives=0,i.phase="lost",Ae.lose())}}i.enemies=i.enemies.filter(t=>t.hp>0)}function Eg(i,e,t){var a;if(e.armorHp!==void 0&&e.armorHp>0)return;const n=e.def.resist.fire??1,s=1+(((a=e.statuses.rattled)==null?void 0:a.pct)??0),r=t*n*s;e.hp-=r,i.stats.dmgByElement.fire+=r,e.hp<=0&&kf(i,e)}const _d="wizardtd.run";function Ji(i){if(i.phase==="won"||i.phase==="lost")return;const e={mapId:i.map.id,seed:i.seed,gold:i.gold,lives:i.lives,round:i.round,act:i.act,lastEliteRound:i.lastEliteRound,cardIds:i.draftMods.map(t=>t.id),wizards:i.wizards.map(t=>({defId:t.def.id,cx:t.cx,cy:t.cy,tiers:[...t.tiers],mode:t.mode,invested:t.invested})),stats:i.stats,killStackPct:i.killStackPct,relicIds:i.relics.map(t=>t.id),seenEvents:[...i.seenEvents]};try{localStorage.setItem(_d,JSON.stringify(e))}catch{}}function Tg(){try{const i=localStorage.getItem(_d);if(!i)return null;const e=JSON.parse(i);return e.round>0||e.wizards.length>0?e:null}catch{return null}}function xd(){try{localStorage.removeItem(_d)}catch{}}function wg(i){const e=xf(i.mapId);if(!e)return null;const t=Uo(e,i.seed);for(const n of i.cardIds){const s=ld.find(r=>r.id===n);s&&ud(t,s)}for(const n of i.relicIds??[]){const s=bf.find(r=>r.id===n);s&&co(t,s)}t.seenEvents=[...i.seenEvents??[]];for(const n of i.wizards){const s=bn[n.defId];if(!s)continue;const r=hd(t,s,n.cx,n.cy);r.tiers=n.tiers,r.mode=n.mode,r.invested=n.invested,r.stats=Li(s,r.tiers,t.draftMods),t.wizards.push(r)}return t.gold=i.gold,t.lives=i.lives,t.round=i.round,t.lastEliteRound=i.lastEliteRound,t.stats=i.stats,t.killStackPct=i.killStackPct??0,t.act=i.act??0,t.rng=yf(i.seed+i.round*101),t}const Eu={id:"guarded",name:"Guarded",desc:"+25% HP — a relic awaits",hpMult:1.25};function vd(i){const e=cd(i.act);if(i.phase!=="build"||i.round>=e.length||!i.nodePicked&&i.nextNodes.length>1)return!1;Ji(i);const t=e[i.round];i.waveKind=i.nodeChoice,i.waveModifier=null,i.forcedModifier?(i.waveModifier=i.forcedModifier,i.forcedModifier=null,i.waveModifier!==Eu&&i.waveModifier.id!=="blessed"&&(i.waveKind="elite"),te.floater(480,80,`★ ${i.waveModifier.name} — ${i.waveModifier.desc}`,"#ffd75e",15)):i.nodeChoice==="elite"?(i.waveModifier=Ag(i),i.lastEliteRound=i.round,te.floater(480,80,`★ ELITE: ${i.waveModifier.name} — ${i.waveModifier.desc}`,"#ffd75e",15)):i.nodeChoice==="treasure"&&(i.waveModifier=Eu,te.floater(480,80,"💎 GUARDED: clear the wave to claim a relic","#7fd8ff",15)),i.pendingSpawns=[];for(const n of t)for(let s=0;s<n.count;s++)i.pendingSpawns.push({t:n.delay+s*n.gap,type:n.type});return i.pendingSpawns.sort((n,s)=>n.t-s.t),i.waveTime=0,i.phase="wave",Ae.waveStart(),!0}function Ag(i){const e=()=>ao[Math.floor(i.rng()*ao.length)],t=e();if(i.act<2)return t;let n=e();for(let s=0;s<5&&n.id===t.id;s++)n=e();return n.id===t.id?t:{id:`${t.id}+${n.id}`,name:`${t.name} ${n.name}`,desc:`${t.desc} & ${n.desc}`,speedMult:(t.speedMult??1)*(n.speedMult??1),hpMult:(t.hpMult??1)*(n.hpMult??1),immune:[...t.immune??[],...n.immune??[]],gustImmune:t.gustImmune||n.gustImmune}}function Rg(i,e){var t;if(i.phase!=="wave"){i.phase==="build"&&i.autoplay&&i.autoplayTimer>0&&(i.autoplayTimer-=e,i.autoplayTimer<=0&&vd(i));return}for(i.waveTime+=e;i.pendingSpawns.length>0&&i.pendingSpawns[0].t<=i.waveTime;){const n=i.pendingSpawns.shift();Cg(i,n.type)}if(i.pendingSpawns.length===0&&i.enemies.length===0){const n=i.waveKind==="elite",s=i.waveKind==="treasure";if(i.waveModifier=null,i.waveKind="normal",i.round++,i.stats.wavesCleared++,i.round>=cd(i.act).length)wf(i)&&i.act<Mf-1?(i.phase="actClear",Ae.actFanfare()):(i.phase="won",Ae.win());else{const r=Dm+Nm*i.round;i.gold+=r;for(const a of i.draftMods){const o=(t=a.fx)==null?void 0:t.interest;if(!o)continue;const c=Math.min(o.cap,Math.floor(i.gold/o.per));c>0&&(i.gold+=c,te.floater(480,110,`+${c} interest 🏦`,"#ffd75e",13))}if(s)i.pendingRelicDraft=Yc(i,2),i.phase="relic";else{const a=lo(i,"draft4")?4:3;i.pendingDraft=If(i,a,n),i.eliteDraft=n,i.phase="draft"}}}}function Cg(i,e){const t=pd[e],n=i.track.posAt(0),s=i.waveModifier,r=Os[Math.min(i.act,Os.length-1)],a=t.boss?1:1+i.round*Lm,o=t.hp*((s==null?void 0:s.hpMult)??1)*r.hp*a,c=lo(i,"hasteEnemies")?1.1:1,l=[...t.innateImmune??[],...(s==null?void 0:s.immune)??[]];i.enemies.push({id:i.nextId++,def:t,hp:o,maxHp:o,dist:0,x:n.x,y:n.y,statuses:lo(i,"spawnChill")&&!l.includes("chill")?{chill:{t:2.5,pct:.15,stacks:1}}:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:n.angle,hitFlash:0,speedMult:((s==null?void 0:s.speedMult)??1)*c*r.speed,immunities:l.length>0?l:void 0,gustImmune:s==null?void 0:s.gustImmune,armorHp:t.armor}),t.boss&&(te.floater(n.x+30,n.y-20,`${t.name}!`,"#ff9db5",14),(t.armor||t.hp>=1500)&&Ae.bossRoar())}function uo(i,e){return i.gold>=e}function Tu(i,e){return Math.round(e*(1-i.towerDiscountPct/100))}function zf(i,e){return uo(i,e)?(i.gold-=e,!0):!1}function Vf(i){return Math.floor(i.invested*dd)}function Ig(i,e){i.gold+=Vf(e),i.wizards=i.wizards.filter(t=>t.id!==e.id),i.selectedWizardId===e.id&&(i.selectedWizardId=null)}const Pg={common:"#9a92b5",uncommon:"#5bc8f5",rare:"#ffd75e"};let Xi,hr=null,za=null;function Lg(i){za=i,Xi=document.getElementById("draft-modal")}function Dg(i){if(i.phase!=="draft"||!i.pendingDraft){hr&&(Xi.classList.add("hidden"),hr=null);return}hr!==i.pendingDraft&&(hr=i.pendingDraft,Ng(i))}function Ng(i){const e=i.pendingDraft;Xi.classList.remove("hidden"),Xi.innerHTML=`
    <div id="draft-inner">
      <h2>${i.eliteDraft?"★ Elite Spoils — choose a RARE":"Choose a card"}</h2>
      <div id="draft-cards"></div>
      <button id="draft-skip">Skip — take ${Sf} ◉</button>
    </div>`;const t=Xi.querySelector("#draft-cards");for(const n of e){const s=n.element==="all"?"#c9b8ff":Mn[n.element].color,r=document.createElement("button");r.className="draft-card",r.style.borderColor=s,r.innerHTML=`
      <div class="dc-icon" style="background:${s}22">${n.icon}</div>
      <div class="dc-name">${n.name}</div>
      <div class="dc-desc">${n.desc}</div>
      <div class="dc-rarity" style="color:${Pg[n.rarity]}">◆ ${n.rarity}</div>`,r.addEventListener("click",()=>wu(i,n)),t.appendChild(r)}Xi.querySelector("#draft-skip").addEventListener("click",()=>wu(i,null))}function wu(i,e){e?(ud(i,e),Ae.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#c9b8ff",16)):(i.gold+=Sf,Ae.coin()),i.pendingDraft=null,i.eliteDraft=!1,i.phase="build",Xi.classList.add("hidden"),hr=null,za==null||za()}let Is,fr=null,Va=null;function Ug(i){Va=i,Is=document.getElementById("specialize-modal")}function Fg(i){const e=Fo(i,i.selectedWizardId),t=e!=null&&e.pendingSpecialize?e:void 0;if(!t){fr&&(Is.classList.add("hidden"),fr=null);return}fr!==t&&(fr=t,Og(i,t))}function Og(i,e){const t=e.specializeOptions??[];Is.classList.remove("hidden"),Is.innerHTML=`
    <div id="draft-inner">
      <h2>Specialize your ${e.family==="wizard"?"Wizard":"Goblin"}</h2>
      <div id="draft-cards"></div>
      <div id="spec-hint">Click elsewhere to decide later — it'll wait, idle, until you choose.</div>
    </div>`;const n=Is.querySelector("#draft-cards");for(const s of t){const r=document.createElement("button");r.className="draft-card",r.style.borderColor=s.color,r.innerHTML=`
      <div class="dc-icon" style="background:${s.color}22">${s.icon}</div>
      <div class="dc-name">${s.name}</div>
      <div class="dc-desc">${s.desc}</div>`,r.addEventListener("click",()=>Bg(i,e,s)),n.appendChild(r)}}function Bg(i,e,t){Cf(i,e,t),Ae.upgrade(),te.burst(e.x,e.y,t.color,14,120,3),te.floater(e.x,e.y-24,`${t.icon} ${t.name}!`,t.color,14),Is.classList.add("hidden"),fr=null,Va==null||Va()}let Ps,Zc,pr=null,Ha=null,Au="";function kg(i){Ha=i,Ps=document.getElementById("relic-modal"),Zc=document.getElementById("relic-bar")}function zg(i){i.phase!=="relic"||!i.pendingRelicDraft?pr&&(Ps.classList.add("hidden"),pr=null):pr!==i.pendingRelicDraft&&(pr=i.pendingRelicDraft,Vg(i));const e=i.relics.map(t=>t.id).join(",");if(e!==Au){Au=e,Zc.innerHTML="";for(const t of i.relics){const n=document.createElement("div");n.className=`relic-chip ${t.rarity}`,n.textContent=t.icon,n.title=`${t.name} — ${t.desc}`,Zc.appendChild(n)}}}function Vg(i){const e=i.pendingRelicDraft;Ps.classList.remove("hidden"),Ps.innerHTML=`
    <div id="draft-inner">
      <h2>💎 Treasure! Choose a relic</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Ps.querySelector("#draft-cards");for(const n of e){const s=document.createElement("button");s.className="draft-card",s.style.borderColor=n.rarity==="rare"?"#ffd75e":"#5bc8f5",s.innerHTML=`
      <div class="dc-icon" style="background:#ffd75e22">${n.icon}</div>
      <div class="dc-name">${n.name}</div>
      <div class="dc-desc">${n.desc}</div>
      <div class="dc-rarity" style="color:${n.rarity==="rare"?"#ffd75e":"#5bc8f5"}">◆ ${n.rarity} relic</div>`,s.addEventListener("click",()=>Hg(i,n)),t.appendChild(s)}}function Hg(i,e){co(i,e),Ae.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#ffd75e",16),i.pendingRelicDraft=null,i.phase="build",Ps.classList.add("hidden"),pr=null,Ha==null||Ha()}const Gg={id:"blessed",name:"Storm-Blessed",desc:"20% slower, +30% HP, 2x bounty",speedMult:.8,hpMult:1.3,bountyMult:2};function Wg(i,e){switch(e){case"chest_open":{const t=Yc(i,1)[0];t&&(co(i,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),i.forcedModifier=ao[Math.floor(i.rng()*ao.length)],te.floater(480,210,"⚠ Something stirs... next wave is ELITE","#ff9db5",13),Ae.upgrade();break}case"blood_pact":{i.lives=Math.max(1,i.lives-3),i.pendingDraft=If(i,3,!0),i.eliteDraft=!0,i.phase="draft",Ae.leak();break}case"merchant_buy":{if(i.gold<130){te.floater(480,180,"Not enough gold — he scoffs and rolls on.","#9a92b5",12);break}i.gold-=130;const t=Yc(i,1)[0];t&&(co(i,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),Ae.coin();break}case"training":{if(i.gold<60){te.floater(480,180,"Not enough gold for the drillmaster.","#9a92b5",12);break}const t=i.wizards.filter(a=>!a.pendingSpecialize&&(a.tiers[0]<a.def.upgrades[0].tiers.length||a.tiers[1]<a.def.upgrades[1].tiers.length));if(t.length===0){te.floater(480,180,"No tower can be trained further.","#9a92b5",12);break}i.gold-=60;const n=t[Math.floor(i.rng()*t.length)],s=n.tiers[0]<n.def.upgrades[0].tiers.length?0:1,r=n.def.upgrades[s].tiers[n.tiers[s]];n.tiers[s]++,n.stats=Xg(i,n),te.burst(n.x,n.y,"#c9b8ff",12,110,3),te.floater(n.x,n.y-24,`${r.name} — free!`,"#c9b8ff",12),Ae.upgrade();break}case"gamble":{i.rng()<.5?(i.gold*=2,te.floater(480,180,`🪙 DOUBLE! ${i.gold} gold`,"#ffd75e",16),Ae.coin()):(i.gold=Math.floor(i.gold/2),te.floater(480,180,`🪙 The imp cackles. ${i.gold} gold left`,"#ff9db5",14),Ae.leak());break}case"blessing":{i.forcedModifier=Gg,te.floater(480,180,"⛈️ The next wave is Storm-Blessed","#7fd8ff",14),Ae.waterPulse();break}}i.pendingEvent=null,i.nodeChoice="normal",i.nodePicked=!0,i.nextNodes=i.nextNodes.filter(t=>t!=="event")}function Xg(i,e){return Li(e.def,e.tiers,i.draftMods)}let Es,mr=null,Ga=null;function qg(i){Ga=i,Es=document.getElementById("event-modal")}function $g(i){if(!i.pendingEvent){mr&&(Es.classList.add("hidden"),mr=null);return}mr!==i.pendingEvent&&(mr=i.pendingEvent,Yg(i))}function Yg(i){const e=i.pendingEvent;Es.classList.remove("hidden"),Es.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">${e.icon}</div>
      <h2>${e.name}</h2>
      <div class="ev-desc">${e.desc}</div>
      <div id="event-choices"></div>
    </div>`;const t=Es.querySelector("#event-choices");for(const n of e.choices){const s=document.createElement("button");s.className="ev-choice",s.innerHTML=`
      <div class="evc-label">${n.label}</div>
      <div class="evc-desc">${n.desc}</div>`,s.addEventListener("click",()=>{Ae.click(),Wg(i,n.effect),Es.classList.add("hidden"),mr=null,Ga==null||Ga()}),t.appendChild(s)}}const Hf={normal:{icon:"⚔️",label:"Normal",hint:"A standard wave. No surprises."},elite:{icon:"★",label:"Elite",hint:"A modified, harder wave — clear it for a RARE-only card draft."},treasure:{icon:"💎",label:"Treasure",hint:"Guarded wave (+25% HP) — clear it to claim a RELIC."},event:{icon:"❓",label:"Event",hint:"Something is happening on the road..."}};let Wa,Vi,Xa="",Zo=-1;function Kg(){Wa=document.getElementById("node-picker"),Vi=document.getElementById("path-modal")}function Zg(i){i.phase==="build"&&Pf(i),Jg(i),jg(i)}function Jg(i){if(!(i.phase==="build"&&!i.nodePicked&&i.nextNodes.length>1&&!i.pendingEvent)){if(Zo===i.round)return;Vi.classList.add("hidden");return}if(Zo===i.round&&!Vi.classList.contains("hidden"))return;Zo=i.round,Vi.classList.remove("hidden"),Vi.innerHTML=`
    <div id="draft-inner">
      <h2>🗺️ Choose your path — Wave ${i.round+1}</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Vi.querySelector("#draft-cards");for(const n of i.nextNodes){const s=Hf[n],r=document.createElement("button");r.className=`draft-card path-card ${n}`,r.innerHTML=`
      <div class="dc-icon">${s.icon}</div>
      <div class="dc-name">${s.label}</div>
      <div class="dc-desc">${s.hint}</div>`,r.addEventListener("click",()=>Qg(i,n)),t.appendChild(r)}}function Qg(i,e){Ae.click(),e==="event"?(i.pendingEvent=Lf(i),i.pendingEvent||(i.nextNodes=i.nextNodes.filter(t=>t!=="event"),i.nodeChoice="normal",i.nodePicked=!0)):(i.nodeChoice=e,i.nodePicked=!0),Vi.classList.add("hidden"),Xa=""}function jg(i){const e=i.phase==="build"&&i.nodePicked&&i.nextNodes.length>1,t=`${e}|${i.nextNodes.join(",")}|${i.nodeChoice}|${i.nodesForRound}`;if(t!==Xa&&(Xa=t,Wa.classList.toggle("hidden",!e),!!e)){Wa.innerHTML="";for(const n of i.nextNodes){const s=Hf[n],r=document.createElement("button");r.className=`node-btn ${n}${i.nodeChoice===n?" active":""}`,r.title=s.hint,r.innerHTML=`<span class="nb-icon">${s.icon}</span>${s.label}`,r.addEventListener("click",()=>{if(Ae.click(),n==="event"){i.pendingEvent=Lf(i),i.pendingEvent||(i.nextNodes=i.nextNodes.filter(a=>a!=="event"));return}i.nodeChoice=n,Xa=""}),Wa.appendChild(r)}}}let Ts,gr=-1,qa=null;function e0(i){qa=i,Ts=document.getElementById("actclear-modal")}function t0(i){if(i.phase!=="actClear"){gr!==-1&&(Ts.classList.add("hidden"),gr=-1);return}gr!==i.act&&(gr=i.act,n0(i))}function n0(i){const e=sd[ad[i.act+1]],t=i.wizards.reduce((n,s)=>n+Math.round(s.invested*dd),0);Ts.classList.remove("hidden"),Ts.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">🏰</div>
      <h2>Act ${["I","II","III"][i.act]} Complete!</h2>
      <div class="ev-desc">
        The ${i.map.name} is safe. The horde regroups ahead at <b>${e.name}</b>.<br/>
        Your towers are packed up and sold for <b>+${t} ◉</b> — cards, relics and gold
        travel with you. Build anew.
      </div>
      <div id="event-choices">
        <button class="ev-choice" id="btn-travel">
          <div class="evc-label">Travel onward ➤</div>
          <div class="evc-desc">Cross into ${e.name} (Act ${["I","II","III"][i.act+1]})</div>
        </button>
      </div>
    </div>`,Ts.querySelector("#btn-travel").addEventListener("click",()=>{Ts.classList.add("hidden"),gr=-1,qa==null||qa(i)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="185",i0=0,Ru=1,s0=2,Er=1,r0=2,_r=3,hi=0,sn=1,Wt=2,di=0,Ls=1,ho=2,Cu=3,Iu=4,a0=5,Hi=100,o0=101,c0=102,l0=103,d0=104,u0=200,h0=201,f0=202,p0=203,Jc=204,Qc=205,m0=206,g0=207,_0=208,x0=209,v0=210,y0=211,M0=212,S0=213,b0=214,jc=0,el=1,tl=2,Bs=3,nl=4,il=5,sl=6,rl=7,Gf=0,E0=1,T0=2,$n=0,Wf=1,Xf=2,qf=3,Md=4,$f=5,Yf=6,Kf=7,Pu="attached",w0="detached",Zf=300,Yi=301,ks=302,Jo=303,Qo=304,Oo=306,zs=1e3,Xn=1001,fo=1002,Pt=1003,Jf=1004,xr=1005,Lt=1006,$a=1007,oi=1008,ln=1009,Qf=1010,jf=1011,Or=1012,Sd=1013,Zn=1014,xn=1015,fi=1016,bd=1017,Ed=1018,Br=1020,ep=35902,tp=35899,np=1021,ip=1022,vn=1023,pi=1026,qi=1027,Td=1028,wd=1029,Ki=1030,Ad=1031,Rd=1033,Ya=33776,Ka=33777,Za=33778,Ja=33779,al=35840,ol=35841,cl=35842,ll=35843,dl=36196,ul=37492,hl=37496,fl=37488,pl=37489,po=37490,ml=37491,gl=37808,_l=37809,xl=37810,vl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,Tl=37817,wl=37818,Al=37819,Rl=37820,Cl=37821,Il=36492,Pl=36494,Ll=36495,Dl=36283,Nl=36284,mo=36285,Ul=36286,Fl=2200,A0=2201,R0=2202,kr=2300,zr=2301,jo=2302,Lu=2303,ws=2400,As=2401,go=2402,Cd=2500,C0=2501,I0=0,sp=1,Ol=2,P0=3200,Bl=0,L0=1,Ri="",kt="srgb",hn="srgb-linear",_o="linear",it="srgb",es=7680,Du=519,D0=512,N0=513,U0=514,Id=515,F0=516,O0=517,Pd=518,B0=519,kl=35044,Nu="300 es",qn=2e3,Vr=2001;function k0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function V0(){const i=Hr("canvas");return i.style.display="block",i}const Uu={};function xo(...i){const e="THREE."+i.shift();console.log(e,...i)}function rp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=rp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=rp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){const e=i.join(" ");e in Uu||(Uu[e]=!0,Te(...i))}function H0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const G0={[jc]:el,[tl]:sl,[nl]:rl,[Bs]:il,[el]:jc,[sl]:tl,[rl]:nl,[il]:Bs};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const Tr=Math.PI/180,Vs=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ld(i,e){return(i%e+e)%e}function W0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function X0(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function q0(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function $0(i,e=1){return e-Math.abs(Ld(i,e*2)-e)}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function K0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Z0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function J0(i,e){return i+Math.random()*(e-i)}function Q0(i){return i*(.5-Math.random())}function j0(i){i!==void 0&&(Fu=i);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e_(i){return i*Tr}function t_(i){return i*Vs}function n_(i){return(i&i-1)===0&&i!==0}function i_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r_(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*h,c*u,o*l);break;case"YZY":i.set(c*u,o*d,c*h,o*l);break;case"ZXZ":i.set(c*h,c*u,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*d,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ap={DEG2RAD:Tr,RAD2DEG:Vs,generateUUID:In,clamp:We,euclideanModulo:Ld,mapLinear:W0,inverseLerp:X0,lerp:wr,damp:q0,pingpong:$0,smoothstep:Y0,smootherstep:K0,randInt:Z0,randFloat:J0,randFloatSpread:Q0,seededRandom:j0,degToRad:e_,radToDeg:t_,isPowerOfTwo:n_,ceilPowerOfTwo:i_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:r_,normalize:st,denormalize:Cn},Jd=class Jd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jd.prototype.isVector2=!0;let xe=Jd;class yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||c!==u||l!==f||d!==g){let m=c*u+l*f+d*g+h*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),b=Math.sin(E);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b,c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+y*o}else{c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+y*o;const E=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=E,l*=E,d*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qd=class Qd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qd.prototype.isVector3=!0;let C=Qd;const ec=new C,Ou=new yn,jd=class jd{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],b=s[4],v=s[7],T=s[2],S=s[5],R=s[8];return r[0]=a*y+o*E+c*T,r[3]=a*m+o*b+c*S,r[6]=a*p+o*v+c*R,r[1]=l*y+d*E+h*T,r[4]=l*m+d*b+h*S,r[7]=l*p+d*v+h*R,r[2]=u*y+f*E+g*T,r[5]=u*m+f*b+g*S,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*l-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tc.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jd.prototype.isMatrix3=!0;let Fe=jd;const tc=new Fe,Bu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){const i={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hn]:{primaries:e,whitePoint:n,transfer:_o,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const qe=a_();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class o_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Hr("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?o_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let l_=0;const ic=new C;class Dt extends Di{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Xn,s=Xn,r=Lt,a=oi,o=vn,c=ln,l=Dt.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=In(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Zf;Dt.DEFAULT_ANISOTROPY=1;const eu=class eu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,v=(f+1)/2,T=(p+1)/2,S=(d+u)/4,R=(h+y)/4,_=(g+m)/4;return b>v&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=_/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-y)/E,this.z=(u-d)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eu.prototype.isVector4=!0;let at=eu;class d_ extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Dt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends d_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class op extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const No=class No{constructor(e,t,n,s,r,a,o,c,l,d,h,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,y,m)}set(e,t,n,s,r,a,o,c,l,d,h,u,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new No().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,y=l*h;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,y=l*h;t[0]=u-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*h,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=y-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+y,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,f_)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),vi.crossVectors(n,an),vi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),vi.crossVectors(n,an)),vi.normalize(),ea.crossVectors(an,vi),s[0]=vi.x,s[4]=ea.x,s[8]=an.x,s[1]=vi.y,s[5]=ea.y,s[9]=an.y,s[2]=vi.z,s[6]=ea.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],b=n[7],v=n[11],T=n[15],S=s[0],R=s[4],_=s[8],w=s[12],I=s[1],P=s[5],D=s[9],X=s[13],$=s[2],O=s[6],W=s[10],G=s[14],Q=s[3],ne=s[7],fe=s[11],_e=s[15];return r[0]=a*S+o*I+c*$+l*Q,r[4]=a*R+o*P+c*O+l*ne,r[8]=a*_+o*D+c*W+l*fe,r[12]=a*w+o*X+c*G+l*_e,r[1]=d*S+h*I+u*$+f*Q,r[5]=d*R+h*P+u*O+f*ne,r[9]=d*_+h*D+u*W+f*fe,r[13]=d*w+h*X+u*G+f*_e,r[2]=g*S+y*I+m*$+p*Q,r[6]=g*R+y*P+m*O+p*ne,r[10]=g*_+y*D+m*W+p*fe,r[14]=g*w+y*X+m*G+p*_e,r[3]=E*S+b*I+v*$+T*Q,r[7]=E*R+b*P+v*O+T*ne,r[11]=E*_+b*D+v*W+T*fe,r[15]=E*w+b*X+v*G+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],E=c*f-l*u,b=o*f-l*h,v=o*u-c*h,T=a*f-l*d,S=a*u-c*d,R=a*h-o*d;return t*(y*E-m*b+p*v)-n*(g*E-m*T+p*S)+s*(g*b-y*T+p*R)-r*(g*v-y*S+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],E=t*o-n*a,b=t*c-s*a,v=t*l-r*a,T=n*c-s*o,S=n*l-r*o,R=s*l-r*c,_=d*y-h*g,w=d*m-u*g,I=d*p-f*g,P=h*m-u*y,D=h*p-f*y,X=u*p-f*m,$=E*X-b*D+v*P+T*I-S*w+R*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/$;return e[0]=(o*X-c*D+l*P)*O,e[1]=(s*D-n*X-r*P)*O,e[2]=(y*R-m*S+p*T)*O,e[3]=(u*S-h*R-f*T)*O,e[4]=(c*I-a*X-l*w)*O,e[5]=(t*X-s*I+r*w)*O,e[6]=(m*v-g*R-p*b)*O,e[7]=(d*R-u*v+f*b)*O,e[8]=(a*D-o*I+l*_)*O,e[9]=(n*I-t*D-r*_)*O,e[10]=(g*S-y*v+p*E)*O,e[11]=(h*v-d*S-f*E)*O,e[12]=(o*w-a*P-c*_)*O,e[13]=(t*P-n*w+s*_)*O,e[14]=(y*b-g*T-m*E)*O,e[15]=(d*T-h*b+u*E)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,y=a*d,m=a*h,p=o*h,E=c*l,b=c*d,v=c*h,T=n.x,S=n.y,R=n.z;return s[0]=(1-(y+p))*T,s[1]=(f+v)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+p))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(g+b)*R,s[9]=(m-E)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),c=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const l=1/a,d=1/o,h=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===qn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Vr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===qn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Vr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};No.prototype.isMatrix4=!0;let Be=No;const ns=new C,En=new Be,h_=new C(0,0,0),f_=new C(1,1,1),vi=new C,ea=new C,an=new C,zu=new Be,Vu=new yn;class Pi{constructor(e=0,t=0,n=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const Hu=new C,is=new yn,jn=new Be,ta=new C,Zs=new C,m_=new C,g_=new yn,Gu=new C(1,0,0),Wu=new C(0,1,0),Xu=new C(0,0,1),qu={type:"added"},__={type:"removed"},ss={type:"childadded",child:null},sc={type:"childremoved",child:null};class ht extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new C,t=new Pi,n=new yn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Fe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Zs,ta,this.up):jn.lookAt(ta,Zs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(jn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),ss.child=e,this.dispatchEvent(ss),ss.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ht.DEFAULT_UP=new C(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xt extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},na={h:0,s:0,l:0};function ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class z{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Ld(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ac(a,r,e+1/3),this.g=ac(a,r,e),this.b=ac(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return qe.workingToColorSpace(Yt.copy(this),e),Math.round(We(Yt.r*255,0,255))*65536+Math.round(We(Yt.g*255,0,255))*256+Math.round(We(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){qe.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(na);const n=wr(yi.h,na.h,t),s=wr(yi.s,na.s,t),r=wr(yi.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new z;z.NAMES=cp;class Ud{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new z(e),this.near=t,this.far=n}clone(){return new Ud(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v_ extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tn=new C,ei=new C,oc=new C,ti=new C,rs=new C,as=new C,$u=new C,cc=new C,lc=new C,dc=new C,uc=new at,hc=new at,fc=new at;class _n{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),ei.subVectors(n,t),oc.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(ei),c=Tn.dot(oc),l=ei.dot(ei),d=ei.dot(oc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return uc.setScalar(0),hc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(uc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(fc,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),ei.subVectors(e,t),Tn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),cc.subVectors(e,n);const c=rs.dot(cc),l=as.dot(cc);if(c<=0&&l<=0)return t.copy(n);lc.subVectors(e,s);const d=rs.dot(lc),h=as.dot(lc);if(d>=0&&h<=d)return t.copy(s);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(rs,a);dc.subVectors(e,r);const f=rs.dot(dc),g=as.dot(dc);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(as,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return $u.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector($u,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),sa.subVectors(this.max,Js),os.subVectors(e.a,Js),cs.subVectors(e.b,Js),ls.subVectors(e.c,Js),Mi.subVectors(cs,os),Si.subVectors(ls,cs),Ui.subVectors(os,ls);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ui.y,Ui.x,0];return!pc(t,os,cs,ls,sa)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,os,cs,ls,sa))?!1:(ra.crossVectors(Mi,Si),t=[ra.x,ra.y,ra.z],pc(t,os,cs,ls,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,ia=new Sn,os=new C,cs=new C,ls=new C,Mi=new C,Si=new C,Ui=new C,Js=new C,sa=new C,ra=new C,Fi=new C;function pc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);const o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),d=n.dot(Fi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const At=new C,aa=new xe;let y_=0;class Xt extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class lp extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dp extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const M_=new Sn,Qs=new C,mc=new C;class Qn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(mc)),this.expandByPoint(Qs.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let S_=0;const pn=new Be,gc=new ht,ds=new C,on=new Sn,js=new Sn,Bt=new C;class vt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k0(e)?dp:lp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(on.min,js.min),on.expandByPoint(Bt),Bt.addVectors(on.max,js.max),on.expandByPoint(Bt)):(on.expandByPoint(js.min),on.expandByPoint(js.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Bt.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(e,l),Bt.add(ds)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new C,c[_]=new C;const l=new C,d=new C,h=new C,u=new xe,f=new xe,g=new xe,y=new C,m=new C;function p(_,w,I){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),o[_].add(y),o[w].add(y),o[I].add(y),c[_].add(m),c[w].add(m),c[I].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,w=E.length;_<w;++_){const I=E[_],P=I.start,D=I.count;for(let X=P,$=P+D;X<$;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const b=new C,v=new C,T=new C,S=new C;function R(_){T.fromBufferAttribute(s,_),S.copy(T);const w=o[_];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(S,w);const P=v.dot(c[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,P)}for(let _=0,w=E.length;_<w;++_){const I=E[_],P=I.start,D=I.count;for(let X=P,$=P+D;X<$;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Xt(u,d,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class up{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new C;class Gr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let b_=0;class Pn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Ls,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Qc&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hp extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let us;const er=new C,hs=new C,fs=new C,ps=new xe,tr=new xe,fp=new Be,oa=new C,nr=new C,ca=new C,Yu=new xe,_c=new xe,Ku=new xe;class E_ extends ht{constructor(e=new hp){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new up(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Gr(n,3,0,!1)),us.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-fs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;la(oa.set(-.5,-.5,0),fs,a,hs,s,r),la(nr.set(.5,-.5,0),fs,a,hs,s,r),la(ca.set(.5,.5,0),fs,a,hs,s,r),Yu.set(0,0),_c.set(1,0),Ku.set(1,1);let o=e.ray.intersectTriangle(oa,nr,ca,!1,er);if(o===null&&(la(nr.set(-.5,.5,0),fs,a,hs,s,r),_c.set(0,1),o=e.ray.intersectTriangle(oa,ca,nr,!1,er),o===null))return;const c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:_n.getInterpolation(er,oa,nr,ca,Yu,_c,Ku,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(i,e,t,n,s,r){ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ps.x-s*ps.y,tr.y=s*ps.x+r*ps.y):tr.copy(ps),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(fp)}const ii=new C,xc=new C,da=new C,bi=new C,vc=new C,ua=new C,yc=new C;class Yr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(xc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=bi.dot(this.direction),c=-bi.dot(da),l=bi.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const y=1/d;h*=y,u*=y,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xc).addScaledVector(da,u),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){vc.subVectors(t,e),ua.subVectors(n,e),yc.crossVectors(vc,ua);let a=this.direction.dot(yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const c=o*this.direction.dot(ua.crossVectors(bi,ua));if(c<0)return null;const l=o*this.direction.dot(vc.cross(bi));if(l<0||c+l>a)return null;const d=-o*bi.dot(yc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zu=new Be,Oi=new Yr,ha=new Qn,Ju=new C,fa=new C,pa=new C,ma=new C,Mc=new C,ga=new C,Qu=new C,_a=new C;class Oe extends ht{constructor(e=new vt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Mc.fromBufferAttribute(h,e),a?ga.addScaledVector(Mc,d):ga.addScaledVector(Mc.sub(t),d))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(ha.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ha,Ju)===null||Oi.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,T=b;v<T;v+=3){const S=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=xa(this,p,e,n,l,d,h,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=xa(this,a,e,n,l,d,h,E,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,T=b;v<T;v+=3){const S=v,R=v+1,_=v+2;s=xa(this,p,e,n,l,d,h,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=m,b=m+1,v=m+2;s=xa(this,a,e,n,l,d,h,E,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function T_(i,e,t,n,s,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hi,o),c===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:i}}function xa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fa),i.getVertexPosition(c,pa),i.getVertexPosition(l,ma);const d=T_(i,e,t,n,fa,pa,ma,Qu);if(d){const h=new C;_n.getBarycoord(Qu,fa,pa,ma,h),s&&(d.uv=_n.getInterpolatedAttribute(s,o,c,l,h,new xe)),r&&(d.uv1=_n.getInterpolatedAttribute(r,o,c,l,h,new xe)),a&&(d.normal=_n.getInterpolatedAttribute(a,o,c,l,h,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};_n.getNormal(fa,pa,ma,u.normal),d.face=u,d.barycoord=h}return d}const ir=new at,ju=new at,eh=new at,w_=new at,th=new Be,va=new C,Sc=new Qn,nh=new Be,bc=new Yr;class A_ extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pu,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingBox.expandByPoint(va)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingSphere.expandByPoint(va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(s),e.ray.intersectsSphere(Sc)!==!1&&(nh.copy(s).invert(),bc.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===w0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ju.fromBufferAttribute(s.attributes.skinIndex,e),eh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ir.copy(t),t.set(0,0,0,0)):(ir.set(...t,1),t.set(0,0,0)),ir.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=eh.getComponent(r);if(a!==0){const o=ju.getComponent(r);th.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(w_.copy(ir).applyMatrix4(th),a)}}return t.isVector4&&(t.w=ir.w),t.applyMatrix4(this.bindMatrixInverse)}}class pp extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Fd extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Pt,d=Pt,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new Be,R_=new Be;class Od{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:R_;ih.multiplyMatrices(o,t[r]),ih.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Od(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Fd(t,e,e,vn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new pp),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class zl extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new Be,sh=new Be,ya=[],rh=new Sn,C_=new Be,sr=new Oe,rr=new Qn;class I_ extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),rh.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),rr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),sh.multiplyMatrices(n,ms),sr.matrixWorld=sh,sr.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){const c=ya[a];c.instanceId=r,c.object=this,t.push(c)}ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fd(new Float32Array(s*this.count),s,this.count,Td,xn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ec=new C,P_=new C,L_=new Fe;class Ai{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ec.subVectors(n,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||L_.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Qn,D_=new xe(.5,.5),Ma=new C;class Bd{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],b=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-a,f-d,p-g,T-E).normalize(),s[1].setComponents(l+a,f+d,p+g,T+E).normalize(),s[2].setComponents(l+o,f+h,p+y,T+b).normalize(),s[3].setComponents(l-o,f-h,p-y,T-b).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,T-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,T-v).normalize(),t===qn)s[5].setComponents(l+c,f+u,p+m,T+v).normalize();else if(t===Vr)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=D_.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kd extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vo=new C,yo=new C,ah=new Be,ar=new Yr,Sa=new Qn,Tc=new C,oh=new C;class Bo extends ht{constructor(e=new vt,t=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)vo.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=vo.distanceTo(yo);e.setAttribute("lineDistance",new Ze(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;ah.copy(s).invert(),ar.copy(e.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=d.getX(y),E=d.getX(y+1),b=ba(this,e,ar,c,p,E,y);b&&t.push(b)}if(this.isLineLoop){const y=d.getX(g-1),m=d.getX(f),p=ba(this,e,ar,c,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=ba(this,e,ar,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=ba(this,e,ar,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ba(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),yo.fromBufferAttribute(o,r),t.distanceSqToSegment(vo,yo,Tc,oh)>n)return;Tc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Tc);if(!(l<e.near||l>e.far))return{distance:l,point:oh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new C,lh=new C;class N_ extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ch.fromBufferAttribute(t,s),lh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(lh);e.setAttribute("lineDistance",new Ze(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U_ extends Bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zd extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dh=new Be,Vl=new Yr,Ea=new Qn,Ta=new C;class mp extends ht{constructor(e=new vt,t=new zd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;dh.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(dh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,y=f;g<y;g++){const m=l.getX(g);Ta.fromBufferAttribute(h,m),uh(Ta,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Ta.fromBufferAttribute(h,g),uh(Ta,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function uh(i,e,t,n,s,r,a){const o=Vl.distanceSqToPoint(i);if(o<t){const c=new C;Vl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gp extends Dt{constructor(e=[],t=Yi,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F_ extends Dt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends Dt{constructor(e,t,n=Zn,s,r,a,o=Pt,c=Pt,l,d=pi,h=1){if(d!==pi&&d!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class O_ extends Hs{constructor(e,t=Zn,n=Yi,s,r,a=Pt,o=Pt,c,l=pi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _p extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class un extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(h,2));function g(y,m,p,E,b,v,T,S,R,_,w){const I=v/R,P=T/_,D=v/2,X=T/2,$=S/2,O=R+1,W=_+1;let G=0,Q=0;const ne=new C;for(let fe=0;fe<W;fe++){const _e=fe*P-X;for(let Se=0;Se<O;Se++){const Je=Se*I-D;ne[y]=Je*E,ne[m]=_e*b,ne[p]=$,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=S>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(Se/R),h.push(1-fe/_),G+=1}}for(let fe=0;fe<_;fe++)for(let _e=0;_e<R;_e++){const Se=u+_e+O*fe,Je=u+_e+O*(fe+1),pt=u+(_e+1)+O*(fe+1),Qe=u+(_e+1)+O*fe;c.push(Se,Je,Qe),c.push(Je,pt,Qe),Q+=6}o.addGroup(f,Q,w),f+=Q,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vd extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,d=new xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const y=[],m=n/2;let p=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function E(){const v=new C,T=new C;let S=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const w=[],I=_/r,P=I*(t-e)+e;for(let D=0;D<=s;D++){const X=D/s,$=X*c+o,O=Math.sin($),W=Math.cos($);T.x=P*O,T.y=-I*n+m,T.z=P*W,h.push(T.x,T.y,T.z),v.set(O,R,W).normalize(),u.push(v.x,v.y,v.z),f.push(X,1-I),w.push(g++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){const I=y[w][_],P=y[w+1][_],D=y[w+1][_+1],X=y[w][_+1];(e>0||w!==0)&&(d.push(I,P,X),S+=3),(t>0||w!==r-1)&&(d.push(P,D,X),S+=3)}l.addGroup(p,S,0),p+=S}function b(v){const T=g,S=new xe,R=new C;let _=0;const w=v===!0?e:t,I=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const $=D/s*c+o,O=Math.cos($),W=Math.sin($);R.x=w*W,R.y=m*I,R.z=w*O,h.push(R.x,R.y,R.z),u.push(0,I,0),S.x=O*.5+.5,S.y=W*.5*I+.5,f.push(S.x,S.y),g++}for(let D=0;D<s;D++){const X=T+D,$=P+D;v===!0?d.push($,$+1,X):d.push($+1,$,X),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hd extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),d(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new C,v=new C,T=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],v),f(t[S+2],T),c(b,v,T,E)}function c(E,b,v,T){const S=T+1,R=[];for(let _=0;_<=S;_++){R[_]=[];const w=E.clone().lerp(v,_/S),I=b.clone().lerp(v,_/S),P=S-_;for(let D=0;D<=P;D++)D===0&&_===S?R[_][D]=w:R[_][D]=w.clone().lerp(I,D/P)}for(let _=0;_<S;_++)for(let w=0;w<2*(S-_)-1;w++){const I=Math.floor(w/2);w%2===0?(u(R[_][I+1]),u(R[_+1][I]),u(R[_][I])):(u(R[_][I+1]),u(R[_+1][I+1]),u(R[_+1][I]))}}function l(E){const b=new C;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function d(){const E=new C;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;a.push(v,1-T)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const b=a[E+0],v=a[E+2],T=a[E+4],S=Math.max(b,v,T),R=Math.min(b,v,T);S>.9&&R<.1&&(b<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function f(E,b){const v=E*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){const E=new C,b=new C,v=new C,T=new C,S=new xe,R=new xe,_=new xe;for(let w=0,I=0;w<r.length;w+=9,I+=6){E.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),S.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),T.copy(E).add(b).add(v).divideScalar(3);const P=m(T);y(S,I+0,E,P),y(R,I+2,b,P),y(_,I+4,v,P)}}function y(E,b,v,T){T<0&&E.x===1&&(a[b]=E.x-1),v.x===0&&v.z===0&&(a[b]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.vertices,e.indices,e.radius,e.detail)}}class Gd extends Hd{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gd(e.radius,e.detail)}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const d=n[s],u=n[s+1]-d,f=(a-d)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,s=[],r=[],a=[],o=new C,c=new Be;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xp extends mi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*d-f*h+this.aX,l=u*h+f*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B_ extends xp{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wd(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,h){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,f*=d,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const hh=new C,fh=new C,wc=new Wd,Ac=new Wd,Rc=new Wd;class k_ extends mi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(fh.subVectors(s[0],s[1]).add(s[0]),l=fh);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(hh.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=hh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),wc.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,y,m),Ac.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,y,m),Rc.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Ac.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),Rc.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return n.set(wc.calc(c),Ac.calc(c),Rc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ph(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function z_(i,e){const t=1-i;return t*t*e}function V_(i,e){return 2*(1-i)*i*e}function H_(i,e){return i*i*e}function Rr(i,e,t,n){return z_(i,e)+V_(i,t)+H_(i,n)}function G_(i,e){const t=1-i;return t*t*t*e}function W_(i,e){const t=1-i;return 3*t*t*i*e}function X_(i,e){return 3*(1-i)*i*i*e}function q_(i,e){return i*i*i*e}function Cr(i,e,t,n,s){return G_(i,e)+W_(i,t)+X_(i,n)+q_(i,s)}class $_ extends mi{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,s.x,r.x,a.x,o.x),Cr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y_ extends mi{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cr(e,s.x,r.x,a.x,o.x),Cr(e,s.y,r.y,a.y,o.y),Cr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K_ extends mi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends mi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J_ extends mi{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ko extends mi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y),Rr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q_ extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ph(o,c.x,l.x,d.x,h.x),ph(o,c.y,l.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var j_=Object.freeze({__proto__:null,ArcCurve:B_,CatmullRomCurve3:k_,CubicBezierCurve:$_,CubicBezierCurve3:Y_,EllipseCurve:xp,LineCurve:K_,LineCurve3:Z_,QuadraticBezierCurve:J_,QuadraticBezierCurve3:ko,SplineCurve:Q_});class Kn extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<d;p++){const E=p*u-a;for(let b=0;b<l;b++){const v=b*h-r;g.push(v,-E,0),y.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,v=E+l*(p+1),T=E+1+l*(p+1),S=E+1+l*p;f.push(b,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class zo extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let h=e;const u=(t-e)/s,f=new C,g=new xe;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let y=0;y<s;y++){const m=y*(n+1);for(let p=0;p<n;p++){const E=p+m,b=E,v=E+n+1,T=E+n+2,S=E+1;o.push(b,v,S),o.push(v,T,S)}}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kr extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new C,u=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n,v=a+b*o,T=e*Math.cos(v),S=Math.sqrt(e*e-T*T);let R=0;p===0&&a===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const w=_/t,I=s+w*r;h.x=-S*Math.cos(I),h.y=T,h.z=S*Math.sin(I),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),m.push(w+R,1-b),E.push(l++)}d.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const b=d[p][E+1],v=d[p][E],T=d[p+1][E],S=d[p+1][E+1];(p!==0||a>0)&&f.push(b,v,S),(p!==n-1||c<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xd extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],d=[],h=[],u=new C,f=new C,g=new C;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=s;p++){const E=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(E),f.y=(e+t*Math.cos(m))*Math.sin(E),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),g.subVectors(f,u).normalize(),d.push(g.x,g.y,g.z),h.push(p/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){const p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,E,v),c.push(E,b,v)}this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vo extends vt{constructor(e=new ko(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new xe;let d=new C;const h=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function y(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),E(),p()}function m(b){d=e.getPointAt(b/t,d);const v=a.normals[b],T=a.binormals[b];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,_=Math.sin(R),w=-Math.cos(R);c.x=w*v.x+_*T.x,c.y=w*v.y+_*T.y,c.z=w*v.z+_*T.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=d.x+n*c.x,o.y=d.y+n*c.y,o.z=d.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){const T=(s+1)*(b-1)+(v-1),S=(s+1)*b+(v-1),R=(s+1)*b+v,_=(s+1)*(b-1)+v;g.push(T,S,_),g.push(S,R,_)}}function E(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)l.x=b/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Vo(new j_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(mh(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(mh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function mh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ex(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const tx={clone:Gs,merge:Zt};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new z().setHex(s.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sx extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bt extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rx extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ax extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ox(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function gh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function cx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Xs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class lx extends Xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case As:r=e,o=2*t-n;break;case go:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case As:a=e,c=2*n-t;break;case go:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let T=0;T!==o;++T)r[T]=p*a[d+T]+E*a[l+T]+b*a[c+T]+v*a[h+T];return r}}class yp extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class dx extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ux extends Xs{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,h=this.outTangents;if(!d||!h){const g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const y=a[l+g],m=a[c+g],p=f*u+g*2,E=h[p],b=h[p+1],v=e*u+g*2,T=d[v],S=d[v+1];let R=(n-t)/(s-t),_,w,I,P,D;for(let X=0;X<8;X++){_=R*R,w=_*R,I=1-R,P=I*I,D=P*I;const O=D*t+3*P*R*E+3*I*_*T+w*s-n;if(Math.abs(O)<1e-10)break;const W=3*P*(E-t)+6*I*R*(T-E)+3*_*(s-T);if(Math.abs(W)<1e-10)break;R=R-O/W,R=Math.max(0,Math.min(1,R))}r[g]=D*y+3*P*R*b+3*I*_*S+w*m}return r}}class Un{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ux(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break;case Lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return jo;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&z0(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[u+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=zr;class qs extends Un{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=kr;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends Un{constructor(e,t,n,s){super(e,t,n,s)}}Mp.prototype.ValueTypeName="color";class Wr extends Un{constructor(e,t,n,s){super(e,t,n,s)}}Wr.prototype.ValueTypeName="number";class hx extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)yn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Xr extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hx(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Un{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="string";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=kr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends Un{constructor(e,t,n,s){super(e,t,n,s)}}Mo.prototype.ValueTypeName="vector";class So{constructor(e="",t=-1,n=[],s=Cd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(px(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=ox(c);c=gh(c,1,d),l=gh(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Wr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=s[h];u||(s[h]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function fx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wr;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return Mp;case"quaternion":return Xr;case"bool":case"boolean":return qs;case"string":return $s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function px(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fx(i.type);if(i.times===void 0){const t=[],n=[];cx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_h(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_h(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _h(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class mx{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gx=new mx;class Ys{constructor(e){this.manager=e!==void 0?e:gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class _x extends Error{constructor(e,t){super(e),this.response=t}}class Sp extends Ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=si[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{y+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let S=0,R=d.length;S<R;S++){const _=d[S];_.onProgress&&_.onProgress(T)}p.enqueue(v),E()}},b=>{p.error(b)})}}});return new Response(m)}else throw new _x(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ci.add(`file:${e}`,l);const d=si[e];delete si[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=si[e];if(d===void 0)throw this.manager.itemError(e),l;delete si[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const gs=new WeakMap;class xx extends Ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=gs.get(a);h===void 0&&(h=[],gs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Hr("img");function c(){d(),t&&t(this);const h=gs.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}gs.delete(this),r.manager.itemEnd(e)}function l(h){d(),s&&s(h),ci.remove(`image:${e}`);const u=gs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class vx extends Ys{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new xx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ho extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new z(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class yx extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Cc=new Be,xh=new C,vh=new C;class qd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),Cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Aa=new C,Ra=new yn,kn=new C;class bp extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ra,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Aa,Ra,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new C,yh=new xe,Mh=new xe;class nn extends bp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,yh,Mh),t.subVectors(Mh,yh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mx extends qd{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sx extends Ho{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class bx extends qd{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ep extends Ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zr extends bp{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ex extends qd{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tp extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Ex}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ir{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ic=new WeakMap;class Tx extends Ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ci.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Ic.has(a)===!0?(s&&s(Ic.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ci.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Ic.set(c,l),ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=-90,xs=1;class wx extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(_s,xs,e,t);s.layers=this.layers,this.add(s);const r=new nn(_s,xs,e,t);r.layers=this.layers,this.add(r);const a=new nn(_s,xs,e,t);a.layers=this.layers,this.add(a);const o=new nn(_s,xs,e,t);o.layers=this.layers,this.add(o);const c=new nn(_s,xs,e,t);c.layers=this.layers,this.add(c);const l=new nn(_s,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ax extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rx{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){yn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;yn.multiplyQuaternionsFlat(e,a,e,t,e,n),yn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const $d="\\[\\]\\.:\\/",Cx=new RegExp("["+$d+"]","g"),Yd="[^"+$d+"]",Ix="[^"+$d.replace("\\.","")+"]",Px=/((?:WC+[\/:])*)/.source.replace("WC",Yd),Lx=/(WCOD+)?/.source.replace("WCOD",Ix),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yd),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yd),Ux=new RegExp("^"+Px+Lx+Dx+Nx+"$"),Fx=["material","materials","bones","map"];class Ox{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(e){const t=Ux.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Ox;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bx{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ws,endingEnd:ws};for(let l=0;l!==a;++l){const d=r[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=A0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case C0:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case Cd:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===R0;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Fl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=As,s.endingEnd=As):(e?s.endingStart=this.zeroSlopeAtStart?As:ws:s.endingStart=go,t?s.endingEnd=this.zeroSlopeAtEnd?As:ws:s.endingEnd=go)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const kx=new Float32Array(1);class zx extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==r;++h){const u=s[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;g=new Rx(et.create(n,f,y),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yp(new Float32Array(2),new Float32Array(2),1,kx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?So.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cd),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new Bx(this,a,t,n);return this._bindAction(d,l),this._addInactiveAction(d,o,r),d}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?So.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Sh=new Be;class Vx{constructor(e,t,n=0,s=1/0){this.ray=new Yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(e,t=!0,n=[]){return Hl(e,this,n,t),n.sort(bh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Hl(e[s],this,n,t);return n.sort(bh),n}}function bh(i,e){return i.distance-e.distance}function Hl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Hl(r[a],e,t,!0)}}const tu=class tu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};tu.prototype.isMatrix2=!0;let Eh=tu;function Th(i,e,t,n){const s=Hx(n);switch(t){case np:return i*e;case Td:return i*e/s.components*s.byteLength;case wd:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case Ad:return i*e*2/s.components*s.byteLength;case ip:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Rd:return i*e*4/s.components*s.byteLength;case Ya:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(i,16)*Math.max(e,8)/4;case al:case cl:return Math.max(i,8)*Math.max(e,8)/2;case dl:case ul:case fl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:case po:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Il:case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mo:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(i){switch(i){case ln:case Qf:return{byteLength:1,components:1};case Or:case jf:case fi:return{byteLength:2,components:1};case bd:case Ed:return{byteLength:2,components:4};case Zn:case Sd:case xn:return{byteLength:4,components:1};case ep:case tp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gx(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:$x,alphatest_fragment:Yx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:jx,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:sv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:av,clipping_planes_pars_vertex:ov,clipping_planes_vertex:cv,color_fragment:lv,color_pars_fragment:dv,color_pars_vertex:uv,color_vertex:hv,common:fv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:_v,emissivemap_fragment:xv,emissivemap_pars_fragment:vv,colorspace_fragment:yv,colorspace_pars_fragment:Mv,envmap_fragment:Sv,envmap_common_pars_fragment:bv,envmap_pars_fragment:Ev,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Fv,envmap_vertex:wv,fog_vertex:Av,fog_pars_vertex:Rv,fog_fragment:Cv,fog_pars_fragment:Iv,gradientmap_pars_fragment:Pv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Nv,lights_pars_begin:Uv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Bv,lights_phong_fragment:kv,lights_phong_pars_fragment:zv,lights_physical_fragment:Vv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Wv,lights_fragment_end:Xv,lightprobes_pars_fragment:qv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:Zv,map_fragment:Jv,map_pars_fragment:Qv,map_particle_fragment:jv,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:sy,morphnormal_vertex:ry,morphtarget_pars_vertex:ay,morphtarget_vertex:oy,normal_fragment_begin:cy,normal_fragment_maps:ly,normal_pars_fragment:dy,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:fy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:_y,opaque_fragment:xy,packing:vy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:Sy,dithering_pars_fragment:by,roughnessmap_fragment:Ey,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ay,shadowmap_vertex:Ry,shadowmask_pars_fragment:Cy,skinbase_vertex:Iy,skinning_pars_vertex:Py,skinning_vertex:Ly,skinnormal_vertex:Dy,specularmap_fragment:Ny,specularmap_pars_fragment:Uy,tonemapping_fragment:Fy,tonemapping_pars_fragment:Oy,transmission_fragment:By,transmission_pars_fragment:ky,uv_pars_fragment:zy,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:qy,backgroundCube_frag:$y,cube_vert:Yy,cube_frag:Ky,depth_vert:Zy,depth_frag:Jy,distance_vert:Qy,distance_frag:jy,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:sM,meshbasic_frag:rM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:cM,meshmatcap_frag:lM,meshnormal_vert:dM,meshnormal_frag:uM,meshphong_vert:hM,meshphong_frag:fM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:_M,points_vert:xM,points_frag:vM,shadow_vert:yM,shadow_frag:MM,sprite_vert:SM,sprite_frag:bM},he={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Wn={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new z(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Zt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ca={r:0,b:0,g:0},EM=new Be,Ap=new Fe;Ap.set(-1,0,0,0,1,0,0,0,1);function TM(i,e,t,n,s,r){const a=new z(0);let o=s===!0?0:1,c,l,d=null,h=0,u=null;function f(E){let b=E.isScene===!0?E.background:null;if(b&&b.isTexture){const v=E.backgroundBlurriness>0;b=e.get(b,v)}return b}function g(E){let b=!1;const v=f(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,b){const v=f(b);v&&(v.isCubeTexture||v.mapping===Oo)?(l===void 0&&(l=new Oe(new un(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Gs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ap),l.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,(d!==v||h!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new Kn(2,2),new Jn({name:"BackgroundMaterial",uniforms:Gs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,b){E.getRGB(Ca,vp(i)),t.buffers.color.setClear(Ca.r,Ca.g,Ca.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:y,dispose:p}}function wM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(P,D,X,$,O){let W=!1;const G=h(P,$,X,D);r!==G&&(r=G,l(r.object)),W=f(P,$,X,O),W&&g(P,$,X,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(P,D,X,$),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function h(P,D,X,$){const O=$.wireframe===!0;let W=n[D.id];W===void 0&&(W={},n[D.id]=W);const G=P.isInstancedMesh===!0?P.id:0;let Q=W[G];Q===void 0&&(Q={},W[G]=Q);let ne=Q[X.id];ne===void 0&&(ne={},Q[X.id]=ne);let fe=ne[O];return fe===void 0&&(fe=u(c()),ne[O]=fe),fe}function u(P){const D=[],X=[],$=[];for(let O=0;O<t;O++)D[O]=0,X[O]=0,$[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:$,object:P,attributes:{},index:null}}function f(P,D,X,$){const O=r.attributes,W=D.attributes;let G=0;const Q=X.getAttributes();for(const ne in Q)if(Q[ne].location>=0){const _e=O[ne];let Se=W[ne];if(Se===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==$}function g(P,D,X,$){const O={},W=D.attributes;let G=0;const Q=X.getAttributes();for(const ne in Q)if(Q[ne].location>=0){let _e=W[ne];_e===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),O[ne]=Se,G++}r.attributes=O,r.attributesNum=G,r.index=$}function y(){const P=r.newAttributes;for(let D=0,X=P.length;D<X;D++)P[D]=0}function m(P){p(P,0)}function p(P,D){const X=r.newAttributes,$=r.enabledAttributes,O=r.attributeDivisors;X[P]=1,$[P]===0&&(i.enableVertexAttribArray(P),$[P]=1),O[P]!==D&&(i.vertexAttribDivisor(P,D),O[P]=D)}function E(){const P=r.newAttributes,D=r.enabledAttributes;for(let X=0,$=D.length;X<$;X++)D[X]!==P[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function b(P,D,X,$,O,W,G){G===!0?i.vertexAttribIPointer(P,D,X,O,W):i.vertexAttribPointer(P,D,X,$,O,W)}function v(P,D,X,$){y();const O=$.attributes,W=X.getAttributes(),G=D.defaultAttributeValues;for(const Q in W){const ne=W[Q];if(ne.location>=0){let fe=O[Q];if(fe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const _e=fe.normalized,Se=fe.itemSize,Je=e.get(fe);if(Je===void 0)continue;const pt=Je.buffer,Qe=Je.type,J=Je.bytesPerElement,ae=Qe===i.INT||Qe===i.UNSIGNED_INT||fe.gpuType===Sd;if(fe.isInterleavedBufferAttribute){const ie=fe.data,Ue=ie.stride,ke=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<ne.locationSize;Le++)p(ne.location+Le,ie.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<ne.locationSize;Le++)m(ne.location+Le);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Le=0;Le<ne.locationSize;Le++)b(ne.location+Le,Se/ne.locationSize,Qe,_e,Ue*J,(ke+Se/ne.locationSize*Le)*J,ae)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)p(ne.location+ie,fe.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ie=0;ie<ne.locationSize;ie++)b(ne.location+ie,Se/ne.locationSize,Qe,_e,Se*J,Se/ne.locationSize*ie*J,ae)}}else if(G!==void 0){const _e=G[Q];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(ne.location,_e);break;case 3:i.vertexAttrib3fv(ne.location,_e);break;case 4:i.vertexAttrib4fv(ne.location,_e);break;default:i.vertexAttrib1fv(ne.location,_e)}}}}E()}function T(){w();for(const P in n){const D=n[P];for(const X in D){const $=D[X];for(const O in $){const W=$[O];for(const G in W)d(W[G].object),delete W[G];delete $[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const X in D){const $=D[X];for(const O in $){const W=$[O];for(const G in W)d(W[G].object),delete W[G];delete $[O]}}delete n[P.id]}function R(P){for(const D in n){const X=n[D];for(const $ in X){const O=X[$];if(O[P.id]===void 0)continue;const W=O[P.id];for(const G in W)d(W[G].object),delete W[G];delete O[P.id]}}}function _(P){for(const D in n){const X=n[D],$=P.isInstancedMesh===!0?P.id:0,O=X[$];if(O!==void 0){for(const W in O){const G=O[W];for(const Q in G)d(G[Q].object),delete G[Q];delete O[W]}delete X[$],Object.keys(X).length===0&&delete n[D]}}}function w(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function AM(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function RM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Te("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:S}}function CM(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ai,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const E=r?0:n,b=E*4;let v=p.clippingState||null;c.value=v,v=d(g,u,b,f);for(let T=0;T!==b;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==y;++b,v+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Ci=4,wh=[.125,.215,.35,.446,.526,.582],Gi=20,IM=256,or=new Zr,Ah=new z;let Pc=null,Lc=0,Dc=0,Nc=!1;const PM=new C;class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=PM}=r;Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Lc,Dc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:fi,format:vn,colorSpace:hn,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LM(r)),this._blurMaterial=NM(r,e,t),this._ggxMaterial=DM(r,e,t)}return s}_compileMaterial(e){const t=new Oe(new vt,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,n,s,r){const c=new nn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ah),h.toneMapping=$n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new un,new dn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Ah),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[b]));const T=this._cubeSize;vs(s,v*T,b>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Yi||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;vs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=0+l*1.25,f=h*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ci?n-g+Ci:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,vs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,or),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,vs(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,or)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[s];h.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):Gi;m>Gi&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let E=0;for(let R=0;R<Gi;++R){const _=R/y,w=Math.exp(-_*_/2);p.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const v=this._sizeLods[s],T=3*v*(s>b-Ci?s-b+Ci:0),S=4*(this._cubeSize-v);vs(t,T,S,3*v,2*v),c.setRenderTarget(t),c.render(h,or)}}function LM(i){const e=[],t=[],n=[];let s=i;const r=i-Ci+1+wh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ci?c=wh[a-i+Ci-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){const R=S%3*2/3-1,_=S>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];E.set(w,y*g*S),b.set(u,m*g*S);const I=[S,S,S,S,S,S];v.set(I,p*g*S)}const T=new vt;T.setAttribute("position",new Xt(E,y)),T.setAttribute("uv",new Xt(b,m)),T.setAttribute("faceIndex",new Xt(v,p)),n.push(new Oe(T,null)),s>Ci&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ch(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function DM(i,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function NM(i,e,t){const n=new Float32Array(Gi),s=new C(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ih(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ph(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new un(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});r.uniforms.tEquirect.value=t;const a=new Oe(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=Lt),new wx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function UM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Jo||f===Qo)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new Rp(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Jo||f===Qo,y=f===Yi||f===ks;if(g||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Rh(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return g&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new Rh(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===Jo?u.mapping=Yi:f===Qo&&(u.mapping=ks),u}function c(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function FM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function OM(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const E=f.array;y=f.version;for(let b=0,v=E.length;b<v;b+=3){const T=E[b+0],S=E[b+1],R=E[b+2];u.push(T,S,S,R,R,T)}}else{const E=g.array;y=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const T=b+0,S=b+1,R=b+2;u.push(T,S,S,R,R,T)}}const m=new(g.count>=65535?dp:lp)(u,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function BM(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function l(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*a,f),t.update(u,n,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function kM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zM(i,e,t){const n=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*T*4*h),R=new op(S,v,T,h);R.type=xn,R.needsUpdate=!0;const _=b*4;for(let I=0;I<h;I++){const P=m[I],D=p[I],X=E[I],$=v*T*4*I;for(let O=0;O<P.count;O++){const W=O*_;f===!0&&(s.fromBufferAttribute(P,O),S[$+W+0]=s.x,S[$+W+1]=s.y,S[$+W+2]=s.z,S[$+W+3]=0),g===!0&&(s.fromBufferAttribute(D,O),S[$+W+4]=s.x,S[$+W+5]=s.y,S[$+W+6]=s.z,S[$+W+7]=0),y===!0&&(s.fromBufferAttribute(X,O),S[$+W+8]=s.x,S[$+W+9]=s.y,S[$+W+10]=s.z,S[$+W+11]=X.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new xe(v,T)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function VM(i,e,t,n,s){let r=new WeakMap;function a(l){const d=s.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const HM={[Wf]:"LINEAR_TONE_MAPPING",[Xf]:"REINHARD_TONE_MAPPING",[qf]:"CINEON_TONE_MAPPING",[Md]:"ACES_FILMIC_TONE_MAPPING",[Yf]:"AGX_TONE_MAPPING",[Kf]:"NEUTRAL_TONE_MAPPING",[$f]:"CUSTOM_TONE_MAPPING"};function GM(i,e,t,n,s,r){const a=new Yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Hs(e,t):void 0}),o=new Yn(e,t,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new vt;c.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const l=new sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(c,l),h=new Zr(-1,1,1,-1,0,1);let u=null,f=null,g=!1,y,m=null,p=[],E=!1;this.setSize=function(b,v){a.setSize(b,v),o.setSize(b,v);for(let T=0;T<p.length;T++){const S=p[T];S.setSize&&S.setSize(b,v)}},this.setEffects=function(b){p=b,E=p.length>0&&p[0].isRenderPass===!0;const v=a.width,T=a.height;for(let S=0;S<p.length;S++){const R=p[S];R.setSize&&R.setSize(v,T)}},this.begin=function(b,v){if(g||b.toneMapping===$n&&p.length===0)return!1;if(m=v,v!==null){const T=v.width,S=v.height;(a.width!==T||a.height!==S)&&this.setSize(T,S)}return E===!1&&b.setRenderTarget(a),y=b.toneMapping,b.toneMapping=$n,!0},this.hasRenderPass=function(){return E},this.end=function(b,v){b.toneMapping=y,g=!0;let T=a,S=o;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(b,S,T,v),_.needsSwap!==!1)){const w=T;T=S,S=w}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,l.defines={},qe.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const R=HM[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Cp=new Dt,Gl=new Hs(1,1),Ip=new op,Pp=new u_,Lp=new gp,Lh=[],Dh=[],Nh=new Float32Array(16),Uh=new Float32Array(9),Fh=new Float32Array(4);function Ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wo(i,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function WM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function XM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function qM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function $M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function YM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ut(t,n)}}function KM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Ut(t,n)}}function ZM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Ut(t,n)}}function JM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function QM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function jM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function tS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function rS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=t.isReversedDepthBuffer()?Pd:Id,r=Gl):r=Cp,t.setTexture2D(e||r,s)}function aS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pp,s)}function oS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lp,s)}function cS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ip,s)}function lS(i){switch(i){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return $M;case 35674:return YM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return jM;case 35669:case 35673:return eS;case 5125:return tS;case 36294:return nS;case 36295:return iS;case 36296:return sS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return aS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return cS}}function dS(i,e){i.uniform1fv(this.addr,e)}function uS(i,e){const t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function hS(i,e){const t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function fS(i,e){const t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function pS(i,e){const t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mS(i,e){const t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gS(i,e){const t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _S(i,e){i.uniform1iv(this.addr,e)}function xS(i,e){i.uniform2iv(this.addr,e)}function vS(i,e){i.uniform3iv(this.addr,e)}function yS(i,e){i.uniform4iv(this.addr,e)}function MS(i,e){i.uniform1uiv(this.addr,e)}function SS(i,e){i.uniform2uiv(this.addr,e)}function bS(i,e){i.uniform3uiv(this.addr,e)}function ES(i,e){i.uniform4uiv(this.addr,e)}function TS(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gl:a=Cp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wS(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pp,r[a])}function AS(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Lp,r[a])}function RS(i,e,t){const n=this.cache,s=e.length,r=Wo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ip,r[a])}function CS(i){switch(i){case 5126:return dS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return pS;case 35675:return mS;case 35676:return gS;case 5124:case 35670:return _S;case 35667:case 35671:return xS;case 35668:case 35672:return vS;case 35669:case 35673:return yS;case 5125:return MS;case 36294:return SS;case 36295:return bS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return RS}}class IS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CS(t.type)}}class LS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function DS(i,e,t){const n=i.name,s=n.length;for(Uc.lastIndex=0;;){const r=Uc.exec(n),a=Uc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Oh(t,l===void 0?new IS(o,i,e):new PS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new LS(o),Oh(t,h)),t=h}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);DS(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const NS=37297;let US=0;function FS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const kh=new Fe;function OS(i){qe._getMatrix(kh,qe.workingColorSpace,i);const e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case _o:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+FS(i.getShaderSource(e),o)}else return r}function BS(i,e){const t=OS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kS={[Wf]:"Linear",[Xf]:"Reinhard",[qf]:"Cineon",[Md]:"ACESFilmic",[Yf]:"AgX",[Kf]:"Neutral",[$f]:"Custom"};function zS(i,e){const t=kS[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new C;function VS(){qe.getLuminanceCoefficients(Ia);const i=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function GS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vr(i){return i!==""}function Vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(XS,$S)}const qS=new Map;function $S(i,e){let t=He[e];if(t===void 0){const n=qS.get(e);if(n!==void 0)t=He[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wl(t)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(YS,KS)}function KS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZS={[Er]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function JS(i){return ZS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QS={[Yi]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function jS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":QS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eb={[ks]:"ENVMAP_MODE_REFRACTION"};function tb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nb={[Gf]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function ib(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nb[i.combine]||"ENVMAP_BLENDING_NONE"}function sb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=JS(t),l=jS(t),d=tb(t),h=ib(t),u=sb(t),f=HS(t),g=GS(r),y=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?He.tonemapping_pars_fragment:"",t.toneMapping!==$n?zS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,BS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Wl(a),a=Vh(a,t),a=Hh(a,t),o=Wl(o),o=Vh(o,t),o=Hh(o,t),a=Gh(a),o=Gh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,v=E+p+o,T=Bh(s,s.VERTEX_SHADER,b),S=Bh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(y)||"",X=s.getShaderInfoLog(T)||"",$=s.getShaderInfoLog(S)||"",O=D.trim(),W=X.trim(),G=$.trim();let Q=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,S);else{const fe=zh(s,T,"vertex"),_e=zh(s,S,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+fe+`
`+_e)}else O!==""?Te("WebGLProgram: Program Info Log:",O):(W===""||G==="")&&(ne=!1);ne&&(P.diagnostics={runnable:Q,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(T),s.deleteShader(S),_=new Qa(s,y),w=WS(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,NS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=US++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}let ab=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cb(e),t.set(e,n)),n}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function lb(i){return i===Ki||i===po||i===mo}function db(i,e,t,n,s,r){const a=new Nd,o=new ob,c=new Set,l=[],d=new Map,h=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,w,I,P,D,X){const $=P.fog,O=D.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||W,G),ne=Q&&Q.mapping===Oo?Q.image.height:null,fe=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Te("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=_e!==void 0?_e.length:0;let Je=0;O.morphAttributes.position!==void 0&&(Je=1),O.morphAttributes.normal!==void 0&&(Je=2),O.morphAttributes.color!==void 0&&(Je=3);let pt,Qe,J,ae;if(fe){const be=Wn[fe];pt=be.vertexShader,Qe=be.fragmentShader}else{pt=_.vertexShader,Qe=_.fragmentShader;const be=o.getVertexShaderStage(_),gt=o.getFragmentShaderStage(_);o.update(_,be,gt),J=be.id,ae=gt.id}const ie=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,Le=D.isBatchedMesh===!0,yt=!!_.map,$e=!!_.matcap,ot=!!Q,je=!!_.aoMap,Ye=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,Ct=!!_.normalMap,Ft=!!_.displacementMap,zt=!!_.emissiveMap,mt=!!_.metalnessMap,wt=!!_.roughnessMap,N=_.anisotropy>0,Qt=_.clearcoat>0,tt=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,F=_.transmission>0,V=N&&!!_.anisotropyMap,q=Qt&&!!_.clearcoatMap,se=Qt&&!!_.clearcoatNormalMap,oe=Qt&&!!_.clearcoatRoughnessMap,Y=A&&!!_.iridescenceMap,Z=A&&!!_.iridescenceThicknessMap,ce=x&&!!_.sheenColorMap,Re=x&&!!_.sheenRoughnessMap,ue=!!_.specularMap,le=!!_.specularColorMap,Pe=!!_.specularIntensityMap,De=F&&!!_.transmissionMap,ze=F&&!!_.thicknessMap,L=!!_.gradientMap,re=!!_.alphaMap,K=_.alphaTest>0,de=!!_.alphaHash,ge=!!_.extensions;let j=$n;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(j=i.toneMapping);const we={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:pt,fragmentShader:Qe,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Le,batchingColor:Le&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:yt,matcap:$e,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:ne,aoMap:je,lightMap:Ye,bumpMap:Tt,normalMap:Ct,displacementMap:Ft,emissiveMap:zt,normalMapObjectSpace:Ct&&_.normalMapType===L0,normalMapTangentSpace:Ct&&_.normalMapType===Bl,packedNormalMap:Ct&&_.normalMapType===Bl&&lb(_.normalMap.format),metalnessMap:mt,roughnessMap:wt,anisotropy:N,anisotropyMap:V,clearcoat:Qt,clearcoatMap:q,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:tt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:ue,specularColorMap:le,specularIntensityMap:Pe,transmission:F,transmissionMap:De,thicknessMap:ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===Ls&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:K,alphaHash:de,combine:_.combine,mapUv:yt&&g(_.map.channel),aoMapUv:je&&g(_.aoMap.channel),lightMapUv:Ye&&g(_.lightMap.channel),bumpMapUv:Tt&&g(_.bumpMap.channel),normalMapUv:Ct&&g(_.normalMap.channel),displacementMapUv:Ft&&g(_.displacementMap.channel),emissiveMapUv:zt&&g(_.emissiveMap.channel),metalnessMapUv:mt&&g(_.metalnessMap.channel),roughnessMapUv:wt&&g(_.roughnessMap.channel),anisotropyMapUv:V&&g(_.anisotropyMap.channel),clearcoatMapUv:q&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:le&&g(_.specularColorMap.channel),specularIntensityMapUv:Pe&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:ze&&g(_.thicknessMap.channel),alphaMapUv:re&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ct||N),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(yt||re),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Je,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:yt&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wt,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)w.push(I),w.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(w,_),E(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function E(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){const w=f[_.type];let I;if(w){const P=Wn[w];I=tx.clone(P.uniforms)}else I=_.uniforms;return I}function v(_,w){let I=d.get(w);return I!==void 0?++I.usedTimes:(I=new rb(i,w,_,s),l.push(I),d.set(w,I)),I}function T(_){if(--_.usedTimes===0){const w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:R}}function ub(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=p),e++,E}function c(u,f,g,y,m,p){const E=o(u,f,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,f,g,y,m,p){const E=o(u,f,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function d(u,f,g){t.length>1&&t.sort(u||hb),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh),g&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:d}}function fb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new z};break;case"SpotLight":t={position:new C,direction:new C,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new z,groundColor:new z};break;case"RectAreaLight":t={color:new z,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function mb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gb=0;function _b(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xb(i){const e=new pb,t=mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Be,a=new Be;function o(l){let d=0,h=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,b=0,v=0,T=0,S=0,R=0;l.sort(_b);for(let w=0,I=l.length;w<I;w++){const P=l[w],D=P.color,X=P.intensity,$=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ki?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=D.r*X,h+=D.g*X,u+=D.b*X;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],X);R++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,Q=t.get(P);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(X),W.distance=$,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[y]=W;const G=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[y]=G.matrix,P.castShadow){const Q=t.get(P);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=O,v++}y++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(D).multiplyScalar(X),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const G=P.shadow,Q=t.get(P);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(X),W.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==b||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=b,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=R,n.version=gb++)}function c(l,d){let h=0,u=0,f=0,g=0,y=0;const m=d.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:n}}function $h(i){const e=new xb(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function vb(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $h(i),e.set(s,[o])):r>=a.length?(o=new $h(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],bb=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Yh=new Be,cr=new C,Fc=new C;function Eb(i,e,t){let n=new Bd;const s=new xe,r=new xe,a=new at,o=new rx,c=new ax,l={},d=t.maxTextureSize,h={[hi]:sn,[sn]:hi,[Wt]:Wt},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:yb,fragmentShader:Mb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Oe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let p=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===r0&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Er);const w=i.getRenderTarget(),I=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=p!==this.type;X&&R.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(O=>O.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,O=S.length;$<O;$++){const W=S[$],G=W.shadow;if(G===void 0){Te("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();s.multiply(Q),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y));const ne=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===_r){if(W.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yn(s.x,s.y,{format:Ki,type:fi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Hs(s.x,s.y,xn),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=pi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt}else W.isPointLight?(G.map=new Rp(s.x),G.map.depthTexture=new O_(s.x,Zn)):(G.map=new Yn(s.x,s.y),G.map.depthTexture=new Hs(s.x,s.y,Zn)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=pi,this.type===Er?(G.map.depthTexture.compareFunction=ne?Pd:Id,G.map.depthTexture.minFilter=Lt,G.map.depthTexture.magFilter=Lt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pt,G.map.depthTexture.magFilter=Pt);G.camera.updateProjectionMatrix()}const fe=G.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<fe;_e++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(G.map),i.clear());const Se=G.getViewport(_e);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),D.viewport(a)}if(W.isPointLight){const Se=G.camera,Je=G.matrix,pt=W.distance||Se.far;pt!==Se.far&&(Se.far=pt,Se.updateProjectionMatrix()),cr.setFromMatrixPosition(W.matrixWorld),Se.position.copy(cr),Fc.copy(Se.position),Fc.add(Sb[_e]),Se.up.copy(bb[_e]),Se.lookAt(Fc),Se.updateMatrixWorld(),Je.makeTranslation(-cr.x,-cr.y,-cr.z),Yh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Yh,Se.coordinateSystem,Se.reversedDepth)}else G.updateMatrices(W);n=G.getFrustum(),v(R,_,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===_r&&E(G,_),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,P)};function E(S,R){const _=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Yn(s.x,s.y,{format:Ki,type:fi})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,_,f,y,null)}function b(S,R,_,w){let I=null;const P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)I=P;else if(I=_.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=I.uuid,X=R.uuid;let $=l[D];$===void 0&&($={},l[D]=$);let O=$[X];O===void 0&&(O=I.clone(),$[X]=O,R.addEventListener("dispose",T)),I=O}if(I.visible=R.visible,I.wireframe=R.wireframe,w===_r?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:h[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const D=i.properties.get(I);D.light=_}return I}function v(S,R,_,w,I){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===_r)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const X=e.update(S),$=S.material;if(Array.isArray($)){const O=X.groups;for(let W=0,G=O.length;W<G;W++){const Q=O[W],ne=$[Q.materialIndex];if(ne&&ne.visible){const fe=b(S,ne,w,I);S.onBeforeShadow(i,S,R,_,X,fe,Q),i.renderBufferDirect(_,null,X,fe,S,Q),S.onAfterShadow(i,S,R,_,X,fe,Q)}}}else if($.visible){const O=b(S,$,w,I);S.onBeforeShadow(i,S,R,_,X,O,null),i.renderBufferDirect(_,null,X,O,S,null),S.onAfterShadow(i,S,R,_,X,O,null)}}const D=S.children;for(let X=0,$=D.length;X<$;X++)v(D[X],R,_,w,I)}function T(S){S.target.removeEventListener("dispose",T);for(const _ in l){const w=l[_],I=S.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function Tb(i,e){function t(){let L=!1;const re=new at;let K=null;const de=new at(0,0,0,0);return{setMask:function(ge){K!==ge&&!L&&(i.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){L=ge},setClear:function(ge,j,we,be,gt){gt===!0&&(ge*=be,j*=be,we*=be),re.set(ge,j,we,be),de.equals(re)===!1&&(i.clearColor(ge,j,we,be),de.copy(re))},reset:function(){L=!1,K=null,de.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,K=null,de=null,ge=null;return{setReversed:function(j){if(re!==j){const we=e.get("EXT_clip_control");j?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),re=j;const be=ge;ge=null,this.setClear(be)}},getReversed:function(){return re},setTest:function(j){j?ie(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(j){K!==j&&!L&&(i.depthMask(j),K=j)},setFunc:function(j){if(re&&(j=G0[j]),de!==j){switch(j){case jc:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=j}},setLocked:function(j){L=j},setClear:function(j){ge!==j&&(ge=j,re&&(j=1-j),i.clearDepth(j))},reset:function(){L=!1,K=null,de=null,ge=null,re=!1}}}function s(){let L=!1,re=null,K=null,de=null,ge=null,j=null,we=null,be=null,gt=null;return{setTest:function(dt){L||(dt?ie(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(dt){re!==dt&&!L&&(i.stencilMask(dt),re=dt)},setFunc:function(dt,Fn,On){(K!==dt||de!==Fn||ge!==On)&&(i.stencilFunc(dt,Fn,On),K=dt,de=Fn,ge=On)},setOp:function(dt,Fn,On){(j!==dt||we!==Fn||be!==On)&&(i.stencilOp(dt,Fn,On),j=dt,we=Fn,be=On)},setLocked:function(dt){L=dt},setClear:function(dt){gt!==dt&&(i.clearStencil(dt),gt=dt)},reset:function(){L=!1,re=null,K=null,de=null,ge=null,j=null,we=null,be=null,gt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,b=null,v=null,T=null,S=null,R=null,_=new z(0,0,0),w=0,I=!1,P=null,D=null,X=null,$=null,O=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=Q>=2);let fe=null,_e={};const Se=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),pt=new at().fromArray(Se),Qe=new at().fromArray(Je);function J(L,re,K,de){const ge=new Uint8Array(4),j=i.createTexture();i.bindTexture(L,j),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<K;we++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(re+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return j}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Bs),Tt(!1),Ct(Ru),ie(i.CULL_FACE),je(di);function ie(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ue(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function ke(L,re){return u[L]!==re?(i.bindFramebuffer(L,re),u[L]=re,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Le(L,re){let K=g,de=!1;if(L){K=f.get(re),K===void 0&&(K=[],f.set(re,K));const ge=L.textures;if(K.length!==ge.length||K[0]!==i.COLOR_ATTACHMENT0){for(let j=0,we=ge.length;j<we;j++)K[j]=i.COLOR_ATTACHMENT0+j;K.length=ge.length,de=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,de=!0);de&&i.drawBuffers(K)}function yt(L){return y!==L?(i.useProgram(L),y=L,!0):!1}const $e={[Hi]:i.FUNC_ADD,[o0]:i.FUNC_SUBTRACT,[c0]:i.FUNC_REVERSE_SUBTRACT};$e[l0]=i.MIN,$e[d0]=i.MAX;const ot={[u0]:i.ZERO,[h0]:i.ONE,[f0]:i.SRC_COLOR,[Jc]:i.SRC_ALPHA,[v0]:i.SRC_ALPHA_SATURATE,[_0]:i.DST_COLOR,[m0]:i.DST_ALPHA,[p0]:i.ONE_MINUS_SRC_COLOR,[Qc]:i.ONE_MINUS_SRC_ALPHA,[x0]:i.ONE_MINUS_DST_COLOR,[g0]:i.ONE_MINUS_DST_ALPHA,[y0]:i.CONSTANT_COLOR,[M0]:i.ONE_MINUS_CONSTANT_COLOR,[S0]:i.CONSTANT_ALPHA,[b0]:i.ONE_MINUS_CONSTANT_ALPHA};function je(L,re,K,de,ge,j,we,be,gt,dt){if(L===di){m===!0&&(Ue(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),L!==a0){if(L!==p||dt!==I){if((E!==Hi||T!==Hi)&&(i.blendEquation(i.FUNC_ADD),E=Hi,T=Hi),dt)switch(L){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.ONE,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cu:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}b=null,v=null,S=null,R=null,_.set(0,0,0),w=0,p=L,I=dt}return}ge=ge||re,j=j||K,we=we||de,(re!==E||ge!==T)&&(i.blendEquationSeparate($e[re],$e[ge]),E=re,T=ge),(K!==b||de!==v||j!==S||we!==R)&&(i.blendFuncSeparate(ot[K],ot[de],ot[j],ot[we]),b=K,v=de,S=j,R=we),(be.equals(_)===!1||gt!==w)&&(i.blendColor(be.r,be.g,be.b,gt),_.copy(be),w=gt),p=L,I=!1}function Ye(L,re){L.side===Wt?Ue(i.CULL_FACE):ie(i.CULL_FACE);let K=L.side===sn;re&&(K=!K),Tt(K),L.blending===Ls&&L.transparent===!1?je(di):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function Ct(L){L!==i0?(ie(i.CULL_FACE),L!==D&&(L===Ru?i.cullFace(i.BACK):L===s0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),D=L}function Ft(L){L!==X&&(G&&i.lineWidth(L),X=L)}function zt(L,re,K){L?(ie(i.POLYGON_OFFSET_FILL),($!==re||O!==K)&&($=re,O=K,a.getReversed()&&(re=-re),i.polygonOffset(re,K))):Ue(i.POLYGON_OFFSET_FILL)}function mt(L){L?ie(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function wt(L){L===void 0&&(L=i.TEXTURE0+W-1),fe!==L&&(i.activeTexture(L),fe=L)}function N(L,re,K){K===void 0&&(fe===null?K=i.TEXTURE0+W-1:K=fe);let de=_e[K];de===void 0&&(de={type:void 0,texture:void 0},_e[K]=de),(de.type!==L||de.texture!==re)&&(fe!==K&&(i.activeTexture(K),fe=K),i.bindTexture(L,re||ae[L]),de.type=L,de.texture=re)}function Qt(){const L=_e[fe];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function oe(){try{i.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Z(){try{i.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ce(L){return h[L]!==void 0?h[L]:i.getParameter(L)}function Re(L,re){h[L]!==re&&(i.pixelStorei(L,re),h[L]=re)}function ue(L){pt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),pt.copy(L))}function le(L){Qe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function Pe(L,re){let K=l.get(re);K===void 0&&(K=new WeakMap,l.set(re,K));let de=K.get(L);de===void 0&&(de=i.getUniformBlockIndex(re,L.name),K.set(L,de))}function De(L,re){const de=l.get(re).get(L);c.get(re)!==de&&(i.uniformBlockBinding(re,de,L.__bindingPointIndex),c.set(re,de))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},fe=null,_e={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,b=null,v=null,T=null,S=null,R=null,_=new z(0,0,0),w=0,I=!1,P=null,D=null,X=null,$=null,O=null,pt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ue,bindFramebuffer:ke,drawBuffers:Le,useProgram:yt,setBlending:je,setMaterial:Ye,setFlipSided:Tt,setCullFace:Ct,setLineWidth:Ft,setPolygonOffset:zt,setScissorTest:mt,activeTexture:wt,bindTexture:N,unbindTexture:Qt,compressedTexImage2D:tt,compressedTexImage3D:A,texImage2D:Y,texImage3D:Z,pixelStorei:Re,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:ue,viewport:le,reset:ze}}function wb(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return g?new OffscreenCanvas(A,x):Hr("canvas")}function m(A,x,F){let V=1;const q=tt(A);if((q.width>F||q.height>F)&&(V=F/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(V*q.width),oe=Math.floor(V*q.height);u===void 0&&(u=y(se,oe));const Y=x?y(se,oe):u;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(A,0,0,se,oe),Te("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+se+"x"+oe+")."),Y}else return"data"in A&&Te("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function E(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,F,V,q,se=!1){if(A!==null){if(i[A]!==void 0)return i[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;V&&(oe=e.get("EXT_texture_norm16"),oe||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),F===i.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),F===i.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),F===i.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const Z=se?_o:qe.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Z===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),F===i.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(A,x){let F;return A?x===null||x===Zn||x===Br?F=i.DEPTH24_STENCIL8:x===xn?F=i.DEPTH32F_STENCIL8:x===Or&&(F=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===Br?F=i.DEPTH_COMPONENT24:x===xn?F=i.DEPTH_COMPONENT32F:x===Or&&(F=i.DEPTH_COMPONENT16),F}function S(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),P(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,V=f.get(F);if(V){const q=V[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(A),Object.keys(V).length===0&&f.delete(F)}n.remove(A)}function I(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const F=A.source,V=f.get(F);delete V[x.__cacheKey],a.memory.textures--}function P(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let q=0;q<x.__webglFramebuffer[V].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[V][q]);else i.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)i.deleteFramebuffer(x.__webglFramebuffer[V]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let V=0,q=F.length;V<q;V++){const se=n.get(F[V]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(A)}let D=0;function X(){D=0}function $(){return D}function O(A){D=A}function W(){const A=D;return A>=s.maxTextures&&Te("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const F=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const V=A.image;if(V===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function ne(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ue(F,A,x);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function fe(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ue(F,A,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function _e(A,x){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){ke(F,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const Se={[zs]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},Je={[Pt]:i.NEAREST,[Jf]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},pt={[D0]:i.NEVER,[B0]:i.ALWAYS,[N0]:i.LESS,[Id]:i.LEQUAL,[U0]:i.EQUAL,[Pd]:i.GEQUAL,[F0]:i.GREATER,[O0]:i.NOTEQUAL};function Qe(A,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===$a||x.magFilter===xr||x.magFilter===oi||x.minFilter===Lt||x.minFilter===$a||x.minFilter===xr||x.minFilter===oi)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Se[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Se[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Se[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Je[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Je[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==xr&&x.minFilter!==oi||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function J(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const V=x.source;let q=f.get(V);q===void 0&&(q={},f.set(V,q));const se=G(x);if(se!==A.__cacheKey){q[se]===void 0&&(q[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[se].usedTimes++;const oe=q[A.__cacheKey];oe!==void 0&&(q[A.__cacheKey].usedTimes--,oe.usedTimes===0&&I(x)),A.__cacheKey=se,A.__webglTexture=q[se].texture}return F}function ae(A,x,F){return Math.floor(Math.floor(A/F)/x)}function ie(A,x,F,V){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,V,x.data);else{se.sort((Re,ue)=>Re.start-ue.start);let oe=0;for(let Re=1;Re<se.length;Re++){const ue=se[oe],le=se[Re],Pe=ue.start+ue.count,De=ae(le.start,x.width,4),ze=ae(ue.start,x.width,4);le.start<=Pe+1&&De===ze&&ae(le.start+le.count-1,x.width,4)===De?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++oe,se[oe]=le)}se.length=oe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ue=se.length;Re<ue;Re++){const le=se[Re],Pe=Math.floor(le.start/4),De=Math.ceil(le.count/4),ze=Pe%x.width,L=Math.floor(Pe/x.width),re=De,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,re,K,F,V,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function Ue(A,x,F){let V=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=i.TEXTURE_3D);const q=J(A,x),se=x.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+F);const oe=n.get(se);if(se.version!==oe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=qe.getPrimaries(qe.workingColorSpace),de=x.colorSpace===Ri?null:qe.getPrimaries(x.colorSpace),ge=x.colorSpace===Ri||K===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=m(x.image,!1,s.maxTextureSize);Z=Qt(x,Z);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ue=v(x.internalFormat,ce,Re,x.normalized,x.colorSpace,x.isVideoTexture);Qe(V,x);let le;const Pe=x.mipmaps,De=x.isVideoTexture!==!0,ze=oe.__version===void 0||q===!0,L=se.dataReady,re=S(x,Z);if(x.isDepthTexture)ue=T(x.format===qi,x.type),ze&&(De?t.texStorage2D(i.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ue,Z.width,Z.height,0,ce,Re,null));else if(x.isDataTexture)if(Pe.length>0){De&&ze&&t.texStorage2D(i.TEXTURE_2D,re,ue,Pe[0].width,Pe[0].height);for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,ce,Re,le.data);x.generateMipmaps=!1}else De?(ze&&t.texStorage2D(i.TEXTURE_2D,re,ue,Z.width,Z.height),L&&ie(x,Z,ce,Re)):t.texImage2D(i.TEXTURE_2D,0,ue,Z.width,Z.height,0,ce,Re,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,ue,Pe[0].width,Pe[0].height,Z.depth);for(let K=0,de=Pe.length;K<de;K++)if(le=Pe[K],x.format!==vn)if(ce!==null)if(De){if(L)if(x.layerUpdates.size>0){const ge=Th(le.width,le.height,x.format,x.type);for(const j of x.layerUpdates){const we=le.data.subarray(j*ge/le.data.BYTES_PER_ELEMENT,(j+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,j,le.width,le.height,1,ce,we)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,ce,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,Z.depth,0,le.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,ce,Re,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,Z.depth,0,ce,Re,le.data)}else{De&&ze&&t.texStorage2D(i.TEXTURE_2D,re,ue,Pe[0].width,Pe[0].height);for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],x.format!==vn?ce!==null?De?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,le.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(i.TEXTURE_2D,K,ue,le.width,le.height,0,ce,Re,le.data)}else if(x.isDataArrayTexture)if(De){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,ue,Z.width,Z.height,Z.depth),L)if(x.layerUpdates.size>0){const K=Th(Z.width,Z.height,x.format,x.type);for(const de of x.layerUpdates){const ge=Z.data.subarray(de*K/Z.data.BYTES_PER_ELEMENT,(de+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,Z.width,Z.height,1,ce,Re,ge)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,Re,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,ce,Re,Z.data);else if(x.isData3DTexture)De?(ze&&t.texStorage3D(i.TEXTURE_3D,re,ue,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,Re,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,ce,Re,Z.data);else if(x.isFramebufferTexture){if(ze)if(De)t.texStorage2D(i.TEXTURE_2D,re,ue,Z.width,Z.height);else{let K=Z.width,de=Z.height;for(let ge=0;ge<re;ge++)t.texImage2D(i.TEXTURE_2D,ge,ue,K,de,0,ce,Re,null),K>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),h.add(x),K.onpaint=de=>{const ge=de.changedElements;for(const j of h)ge.includes(j.image)&&(j.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const ge=i.RGBA,j=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,j,we,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&ze){const K=tt(Pe[0]);t.texStorage2D(i.TEXTURE_2D,re,ue,K.width,K.height)}for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],De?L&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ce,Re,le):t.texImage2D(i.TEXTURE_2D,K,ue,ce,Re,le);x.generateMipmaps=!1}else if(De){if(ze){const K=tt(Z);t.texStorage2D(i.TEXTURE_2D,re,ue,K.width,K.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Re,Z)}else t.texImage2D(i.TEXTURE_2D,0,ue,ce,Re,Z);p(x)&&E(V),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ke(A,x,F){if(x.image.length!==6)return;const V=J(A,x),q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const se=n.get(q);if(q.version!==se.__version||V===!0){t.activeTexture(i.TEXTURE0+F);const oe=qe.getPrimaries(qe.workingColorSpace),Y=x.colorSpace===Ri?null:qe.getPrimaries(x.colorSpace),Z=x.colorSpace===Ri||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!ce&&!Re?ue[j]=m(x.image[j],!0,s.maxCubemapSize):ue[j]=Re?x.image[j].image:x.image[j],ue[j]=Qt(x,ue[j]);const le=ue[0],Pe=r.convert(x.format,x.colorSpace),De=r.convert(x.type),ze=v(x.internalFormat,Pe,De,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,re=se.__version===void 0||V===!0,K=q.dataReady;let de=S(x,le);Qe(i.TEXTURE_CUBE_MAP,x);let ge;if(ce){L&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ze,le.width,le.height);for(let j=0;j<6;j++){ge=ue[j].mipmaps;for(let we=0;we<ge.length;we++){const be=ge[we];x.format!==vn?Pe!==null?L?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,ze,be.width,be.height,0,be.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,0,0,be.width,be.height,Pe,De,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we,ze,be.width,be.height,0,Pe,De,be.data)}}}else{if(ge=x.mipmaps,L&&re){ge.length>0&&de++;const j=tt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ze,j.width,j.height)}for(let j=0;j<6;j++)if(Re){L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Pe,De,ue[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,ue[j].width,ue[j].height,0,Pe,De,ue[j].data);for(let we=0;we<ge.length;we++){const gt=ge[we].image[j].image;L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,0,0,gt.width,gt.height,Pe,De,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,ze,gt.width,gt.height,0,Pe,De,gt.data)}}else{L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,De,ue[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,Pe,De,ue[j]);for(let we=0;we<ge.length;we++){const be=ge[we];L?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,0,0,Pe,De,be.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,we+1,ze,Pe,De,be.image[j])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),se.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Le(A,x,F,V,q,se){const oe=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),Z=v(F.internalFormat,oe,Y,F.normalized,F.colorSpace),ce=n.get(x),Re=n.get(F);if(Re.__renderTarget=x,!ce.__hasExternalTextures){const ue=Math.max(1,x.width>>se),le=Math.max(1,x.height>>se);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,se,Z,ue,le,x.depth,0,oe,Y,null):t.texImage2D(q,se,Z,ue,le,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,q,Re.__webglTexture,0,mt(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,q,Re.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const V=x.depthTexture,q=V&&V.isDepthTexture?V.type:null,se=T(x.stencilBuffer,q),oe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),se,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,A)}else{const V=x.textures;for(let q=0;q<V.length;q++){const se=V[q],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),Z=v(se.internalFormat,oe,Y,se.normalized,se.colorSpace);wt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),Z,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(A,x,F){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x.depthTexture);const ce=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===pi?ue=i.DEPTH_COMPONENT24:x.depthTexture.format===qi&&(ue=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,ce,Re,null)}}else Q(x.depthTexture,0);const se=q.__webglTexture,oe=mt(x),Y=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Z=x.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===pi)wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,se,0);else if(x.depthTexture.format===qi)wt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=V}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)$e(x.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?$e(x.__webglFramebuffer[0],A,0):$e(x.__webglFramebuffer,A,0)}else if(F){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=i.createRenderbuffer(),yt(x.__webglDepthbuffer[V],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,se)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),yt(x.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(A,x,F){const V=n.get(A);x!==void 0&&Le(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ot(A)}function Ye(A){const x=A.texture,F=n.get(A),V=n.get(x);A.addEventListener("dispose",_);const q=A.textures,se=A.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)F.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,Z=q.length;Y<Z;Y++){const ce=n.get(q[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&wt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const Z=q[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const ce=r.convert(Z.format,Z.colorSpace),Re=r.convert(Z.type),ue=v(Z.internalFormat,ce,Re,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),le=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Le(F.__webglFramebuffer[Y][Z],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Le(F.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,Z=q.length;Y<Z;Y++){const ce=q[Y],Re=n.get(ce);let ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),Qe(ue,ce),Le(F.__webglFramebuffer,A,ce,i.COLOR_ATTACHMENT0+Y,ue,0),p(ce)&&E(ue)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),Qe(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Le(F.__webglFramebuffer[Z],A,x,i.COLOR_ATTACHMENT0,Y,Z);else Le(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&E(Y),t.unbindTexture()}A.depthBuffer&&ot(A)}function Tt(A){const x=A.textures;for(let F=0,V=x.length;F<V;F++){const q=x[F];if(p(q)){const se=b(A),oe=n.get(q).__webglTexture;t.bindTexture(se,oe),E(se),t.unbindTexture()}}}const Ct=[],Ft=[];function zt(A){if(A.samples>0){if(wt(A)===!1){const x=A.textures,F=A.width,V=A.height;let q=i.COLOR_BUFFER_BIT;const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),Y=x.length>1;if(Y)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,q,i.NEAREST),c===!0&&(Ct.length=0,Ft.length=0,Ct.push(i.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ct.push(se),Ft.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function wt(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){const x=a.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function Qt(A,x){const F=A.colorSpace,V=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==hn&&F!==Ri&&(qe.getTransfer(F)===it?(V!==vn||q!==ln)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",F)),x}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.getTextureUnits=$,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=_e,this.rebindTextures=je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ab(i,e){function t(n,s=Ri){let r;const a=qe.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===bd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ep)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qf)return i.BYTE;if(n===jf)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Sd)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===np)return i.ALPHA;if(n===ip)return i.RGB;if(n===vn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Td)return i.RED;if(n===wd)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Ad)return i.RG_INTEGER;if(n===Rd)return i.RGBA_INTEGER;if(n===Ya||n===Ka||n===Za||n===Ja)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===cl||n===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===ul||n===hl||n===fl||n===pl||n===po||n===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===ul)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return r.COMPRESSED_R11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Il||n===Pl||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Il)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dl||n===Nl||n===mo||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:Rb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Ib,p={},E=t.getContextAttributes();let b=null,v=null;const T=[],S=[],R=new xe;let _=null;const w=new nn;w.viewport=new at;const I=new nn;I.viewport=new at;const P=[w,I],D=new Ax;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=T[J];return ae===void 0&&(ae=new rc,T[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=T[J];return ae===void 0&&(ae=new rc,T[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=T[J];return ae===void 0&&(ae=new rc,T[J]=ae),ae.getHandSpace()};function O(J){const ae=S.indexOf(J.inputSource);if(ae===-1)return;const ie=T[ae];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||a),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",G);for(let J=0;J<T.length;J++){const ae=S[J];ae!==null&&(S[J]=null,T[J].disconnect(ae))}X=null,$=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(b),f=null,u=null,h=null,s=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ue=null,ke=null;E.depth&&(ke=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?qi:pi,Ue=E.stencil?Br:Zn);const Le={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Yn(u.textureWidth,u.textureHeight,{format:vn,type:ln,depthTexture:new Hs(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let ae=0;ae<J.removed.length;ae++){const ie=J.removed[ae],Ue=S.indexOf(ie);Ue>=0&&(S[Ue]=null,T[Ue].disconnect(ie))}for(let ae=0;ae<J.added.length;ae++){const ie=J.added[ae];let Ue=S.indexOf(ie);if(Ue===-1){for(let Le=0;Le<T.length;Le++)if(Le>=S.length){S.push(ie),Ue=Le;break}else if(S[Le]===null){S[Le]=ie,Ue=Le;break}if(Ue===-1)break}const ke=T[Ue];ke&&ke.connect(ie)}}const Q=new C,ne=new C;function fe(J,ae,ie){Q.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Ue=Q.distanceTo(ne),ke=ae.projectionMatrix.elements,Le=ie.projectionMatrix.elements,yt=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),ot=(ke[9]+1)/ke[5],je=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],Tt=(Le[8]+1)/Le[0],Ct=yt*Ye,Ft=yt*Tt,zt=Ue/(-Ye+Tt),mt=zt*-Ye;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(mt),J.translateZ(zt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const wt=yt+zt,N=$e+zt,Qt=Ct-mt,tt=Ft+(Ue-mt),A=ot*$e/N*wt,x=je*$e/N*wt;J.projectionMatrix.makePerspective(Qt,tt,A,x,wt,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,ie=J.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=I.near=w.near=ae,D.far=I.far=w.far=ie,(X!==D.near||$!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,$=D.far),D.layers.mask=J.layers.mask|6,w.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;const Ue=J.parent,ke=D.cameras;_e(D,Ue);for(let Le=0;Le<ke.length;Le++)_e(ke[Le],Ue);ke.length===2?fe(D,w,I):D.projectionMatrix.copy(w.projectionMatrix),Se(J,D,Ue)};function Se(J,ae,ie){ie===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let Je=null;function pt(J,ae){if(d=ae.getViewerPose(l||a),g=ae,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,Ue=!0);for(let $e=0;$e<ie.length;$e++){const ot=ie[$e];let je=null;if(f!==null)je=f.getViewport(ot);else{const Tt=h.getViewSubImage(u,ot);je=Tt.viewport,$e===0&&(e.setRenderTargetTextures(v,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(v))}let Ye=P[$e];Ye===void 0&&(Ye=new nn,Ye.layers.enable($e),Ye.viewport=new at,P[$e]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(je.x,je.y,je.width,je.height),$e===0&&(D.matrix.copy(Ye.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ue===!0&&D.cameras.push(Ye)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const $e=h.getDepthInformation(ie[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ke&&ke.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<ie.length;$e++){const ot=ie[$e].camera;if(ot){let je=p[ot];je||(je=new _p,p[ot]=je);const Ye=h.getCameraImage(ot);je.sourceTexture=Ye}}}}for(let ie=0;ie<T.length;ie++){const Ue=S[ie],ke=T[ie];Ue!==null&&ke!==void 0&&ke.update(Ue,ae,l||a)}Je&&Je(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Qe=new wp;Qe.setAnimationLoop(pt),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}}const Lb=new Be,Dp=new Fe;Dp.set(-1,0,0,0,1,0,0,0,1);function Db(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Nb(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const S=T.program;n.uniformBlockBinding(v,S)}function l(v,T){let S=s[v.id];S===void 0&&(m(v),S=d(v),s[v.id]=S,v.addEventListener("dispose",E));const R=T.program;n.updateUBOMapping(v,R);const _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function d(v){const T=h();v.__bindingPointIndex=T;const S=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=s[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,w=S.length;_<w;_++){const I=S[_];if(Array.isArray(I))for(let P=0,D=I.length;P<D;P++)f(I[P],_,P,R);else f(I,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,T,S,R){if(y(v,T,S,R)===!0){const _=v.__offset,w=v.value;if(Array.isArray(w)){let I=0;for(let P=0;P<w.length;P++){const D=w[P],X=p(D);g(D,v.__data,I),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,S){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,S)}function y(v,T,S,R){const _=v.value,w=T+"_"+S;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{const I=R[w];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(v){const T=v.uniforms;let S=0;const R=16;for(let w=0,I=T.length;w<I;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let D=0,X=P.length;D<X;D++){const $=P[D],O=Array.isArray($.value)?$.value:[$.value];for(let W=0,G=O.length;W<G;W++){const Q=O[W],ne=p(Q),fe=S%R,_e=fe%ne.boundary,Se=fe+_e;S+=_e,Se!==0&&R-Se<ne.storage&&(S+=R-Se),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=ne.storage}}}const _=S%R;return _>0&&(S+=R-_),v.__size=S,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",v),T}function E(v){const T=v.target;T.removeEventListener("dispose",E);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}const Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function Fb(){return zn===null&&(zn=new Fd(Ub,16,16,Ki,fi),zn.name="DFG_LUT",zn.minFilter=Lt,zn.magFilter=Lt,zn.wrapS=Xn,zn.wrapT=Xn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class Ob{constructor(e={}){const{canvas:t=V0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=f,m=new Set([Rd,Ad,wd]),p=new Set([ln,Zn,Or,Br,bd,Ed]),E=new Uint32Array(4),b=new Int32Array(4),v=new C;let T=null,S=null;const R=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,D=null,X=null,$=null,O=null;this._outputColorSpace=kt;let W=0,G=0,Q=null,ne=-1,fe=null;const _e=new at,Se=new at;let Je=null;const pt=new z(0);let Qe=0,J=t.width,ae=t.height,ie=1,Ue=null,ke=null;const Le=new at(0,0,J,ae),yt=new at(0,0,J,ae);let $e=!1;const ot=new Bd;let je=!1,Ye=!1;const Tt=new Be,Ct=new C,Ft=new at,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return Q===null?ie:1}let N=n;function Qt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Fn,!1),N===null){const U="webgl2";if(N=Qt(U,M),N===null)throw Qt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ne("WebGLRenderer: "+M.message),M}let tt,A,x,F,V,q,se,oe,Y,Z,ce,Re,ue,le,Pe,De,ze,L,re,K,de,ge,j;function we(){tt=new FM(N),tt.init(),de=new Ab(N,tt),A=new RM(N,tt,e,de),x=new Tb(N,tt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),X=N.createFramebuffer(),$=N.createFramebuffer(),O=N.createFramebuffer(),F=new kM(N),V=new ub,q=new wb(N,tt,x,V,A,de,F),se=new UM(I),oe=new Gx(N),ge=new wM(N,oe),Y=new OM(N,oe,F,ge),Z=new VM(N,Y,oe,ge,F),L=new zM(N,A,q),Pe=new CM(V),ce=new db(I,se,tt,A,ge,Pe),Re=new Db(I,V),ue=new fb,le=new vb(tt),ze=new TM(I,se,x,Z,g,c),De=new Eb(I,Z,A),j=new Nb(N,F,A,x),re=new AM(N,tt,F),K=new BM(N,tt,F),F.programs=ce.programs,I.capabilities=A,I.extensions=tt,I.properties=V,I.renderLists=ue,I.shadowMap=De,I.state=x,I.info=F}we(),y!==ln&&(w=new GM(y,t.width,t.height,o,s,r));const be=new Pb(I,N);this.xr=be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(J,ae,!1))},this.getSize=function(M){return M.set(J,ae)},this.setSize=function(M,U,H=!0){if(be.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,ae=U,t.width=Math.floor(M*ie),t.height=Math.floor(U*ie),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(J*ie,ae*ie).floor()},this.setDrawingBufferSize=function(M,U,H){J=M,ae=U,ie=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===ln){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(_e)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,U,H,B){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,U,H,B),x.viewport(_e.copy(Le).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(yt)},this.setScissor=function(M,U,H,B){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,H,B),x.scissor(Se.copy(yt).multiplyScalar(ie).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){x.setScissorTest($e=M)},this.setOpaqueSort=function(M){Ue=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,H=!0){let B=0;if(M){let k=!1;if(Q!==null){const me=Q.texture.format;k=m.has(me)}if(k){const me=Q.texture.type,ye=p.has(me),pe=ze.getClearColor(),Ee=ze.getClearAlpha(),Ce=pe.r,Ve=pe.g,Ge=pe.b;ye?(E[0]=Ce,E[1]=Ve,E[2]=Ge,E[3]=Ee,N.clearBufferuiv(N.COLOR,0,E)):(b[0]=Ce,b[1]=Ve,b[2]=Ge,b[3]=Ee,N.clearBufferiv(N.COLOR,0,b))}else B|=N.COLOR_BUFFER_BIT}U&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),ze.dispose(),ue.dispose(),le.dispose(),V.dispose(),se.dispose(),Z.dispose(),ge.dispose(),j.dispose(),ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",iu),be.removeEventListener("sessionend",su),Ni.stop()};function gt(M){M.preventDefault(),xo("WebGLRenderer: Context Lost."),P=!0}function dt(){xo("WebGLRenderer: Context Restored."),P=!1;const M=F.autoReset,U=De.enabled,H=De.autoUpdate,B=De.needsUpdate,k=De.type;we(),F.autoReset=M,De.enabled=U,De.autoUpdate=H,De.needsUpdate=B,De.type=k}function Fn(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function On(M){const U=M.target;U.removeEventListener("dispose",On),mm(U)}function mm(M){gm(M),V.remove(M)}function gm(M){const U=V.get(M).programs;U!==void 0&&(U.forEach(function(H){ce.releaseProgram(H)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,B,k,me){U===null&&(U=zt);const ye=k.isMesh&&k.matrixWorld.determinantAffine()<0,pe=vm(M,U,H,B,k);x.setMaterial(B,ye);let Ee=H.index,Ce=1;if(B.wireframe===!0){if(Ee=Y.getWireframeAttribute(H),Ee===void 0)return;Ce=2}const Ve=H.drawRange,Ge=H.attributes.position;let Ie=Ve.start*Ce,rt=(Ve.start+Ve.count)*Ce;me!==null&&(Ie=Math.max(Ie,me.start*Ce),rt=Math.min(rt,(me.start+me.count)*Ce)),Ee!==null?(Ie=Math.max(Ie,0),rt=Math.min(rt,Ee.count)):Ge!=null&&(Ie=Math.max(Ie,0),rt=Math.min(rt,Ge.count));const Mt=rt-Ie;if(Mt<0||Mt===1/0)return;ge.setup(k,B,pe,H,Ee);let _t,ct=re;if(Ee!==null&&(_t=oe.get(Ee),ct=K,ct.setIndex(_t)),k.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*wt()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(k.isLine){let qt=B.linewidth;qt===void 0&&(qt=1),x.setLineWidth(qt*wt()),k.isLineSegments?ct.setMode(N.LINES):k.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else k.isPoints?ct.setMode(N.POINTS):k.isSprite&&ct.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const qt=k._multiDrawStarts,ve=k._multiDrawCounts,rn=k._multiDrawCount,Ke=Ee?oe.get(Ee).bytesPerElement:1,fn=V.get(B).currentProgram.getUniforms();for(let Bn=0;Bn<rn;Bn++)fn.setValue(N,"_gl_DrawID",Bn),ct.render(qt[Bn]/Ke,ve[Bn])}else if(k.isInstancedMesh)ct.renderInstances(Ie,Mt,k.count);else if(H.isInstancedBufferGeometry){const qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ve=Math.min(H.instanceCount,qt);ct.renderInstances(Ie,Mt,ve)}else ct.render(Ie,Mt)};function nu(M,U,H){M.transparent===!0&&M.side===Wt&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,Qr(M,U,H),M.side=hi,M.needsUpdate=!0,Qr(M,U,H),M.side=Wt):Qr(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),S=le.get(H),S.init(U),_.push(S),H.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();const B=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];nu(pe,H,k),B.add(pe)}else nu(me,H,k),B.add(me)}),S=_.pop(),B},this.compileAsync=function(M,U,H=null){const B=this.compile(M,U,H);return new Promise(k=>{function me(){if(B.forEach(function(ye){V.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){k(M);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Xo=null;function _m(M){Xo&&Xo(M)}function iu(){Ni.stop()}function su(){Ni.start()}const Ni=new wp;Ni.setAnimationLoop(_m),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(M){Xo=M,be.setAnimationLoop(M),M===null?Ni.stop():Ni.start()},be.addEventListener("sessionstart",iu),be.addEventListener("sessionend",su),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(M,U);const H=be.enabled===!0&&be.isPresenting===!0,B=w!==null&&(Q===null||H)&&w.begin(I,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,Q),S=le.get(M,_.length),S.init(U),S.state.textureUnits=q.getTextureUnits(),_.push(S),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ot.setFromProjectionMatrix(Tt,qn,U.reversedDepth),Ye=this.localClippingEnabled,je=Pe.init(this.clippingPlanes,Ye),T=ue.get(M,R.length),T.init(),R.push(T),be.enabled===!0&&be.isPresenting===!0){const ye=I.xr.getDepthSensingMesh();ye!==null&&qo(ye,U,-1/0,I.sortObjects)}qo(M,U,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(Ue,ke,U.reversedDepth),mt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,mt&&ze.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Pe.beginShadows();const k=S.state.shadowsArray;if(De.render(k,M,U),je===!0&&Pe.endShadows(),(B&&w.hasRenderPass())===!1){const ye=T.opaque,pe=T.transmissive;if(S.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(pe.length>0)for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ge=Ee[Ce];au(ye,pe,M,Ge)}mt&&ze.render(M);for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ge=Ee[Ce];ru(T,M,Ge,Ge.viewport)}}else pe.length>0&&au(ye,pe,M,U),mt&&ze.render(M),ru(T,M,U)}Q!==null&&G===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),B&&w.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),ge.resetDefaultState(),ne=-1,fe=null,_.pop(),_.length>0?(S=_[_.length-1],q.setTextureUnits(S.state.textureUnits),je===!0&&Pe.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,D!==null&&D.renderEnd()};function qo(M,U,H,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){B&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Tt);const ye=Z.update(M),pe=M.material;pe.visible&&T.push(M,ye,pe,H,Ft.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const ye=Z.update(M),pe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ft.copy(ye.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(Tt)),Array.isArray(pe)){const Ee=ye.groups;for(let Ce=0,Ve=Ee.length;Ce<Ve;Ce++){const Ge=Ee[Ce],Ie=pe[Ge.materialIndex];Ie&&Ie.visible&&T.push(M,ye,Ie,H,Ft.z,Ge)}}else pe.visible&&T.push(M,ye,pe,H,Ft.z,null)}}const me=M.children;for(let ye=0,pe=me.length;ye<pe;ye++)qo(me[ye],U,H,B)}function ru(M,U,H,B){const{opaque:k,transmissive:me,transparent:ye}=M;S.setupLightsView(H),je===!0&&Pe.setGlobalState(I.clippingPlanes,H),B&&x.viewport(_e.copy(B)),k.length>0&&Jr(k,U,H),me.length>0&&Jr(me,U,H),ye.length>0&&Jr(ye,U,H),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function au(M,U,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){const Ie=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new Yn(1,1,{generateMipmaps:!0,type:Ie?fi:ln,minFilter:oi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=S.state.transmissionRenderTarget[B.id],ye=B.viewport||_e;me.setSize(ye.z*I.transmissionResolutionScale,ye.w*I.transmissionResolutionScale);const pe=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Ce=I.getActiveMipmapLevel();I.setRenderTarget(me),I.getClearColor(pt),Qe=I.getClearAlpha(),Qe<1&&I.setClearColor(16777215,.5),I.clear(),mt&&ze.render(H);const Ve=I.toneMapping;I.toneMapping=$n;const Ge=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),je===!0&&Pe.setGlobalState(I.clippingPlanes,B),Jr(M,H,B),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let rt=0,Mt=U.length;rt<Mt;rt++){const _t=U[rt],{object:ct,geometry:qt,material:ve,group:rn}=_t;if(ve.side===Wt&&ct.layers.test(B.layers)){const Ke=ve.side;ve.side=sn,ve.needsUpdate=!0,ou(ct,H,B,qt,ve,rn),ve.side=Ke,ve.needsUpdate=!0,Ie=!0}}Ie===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}I.setRenderTarget(pe,Ee,Ce),I.setClearColor(pt,Qe),Ge!==void 0&&(B.viewport=Ge),I.toneMapping=Ve}function Jr(M,U,H){const B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,me=M.length;k<me;k++){const ye=M[k],{object:pe,geometry:Ee,group:Ce}=ye;let Ve=ye.material;Ve.allowOverride===!0&&B!==null&&(Ve=B),pe.layers.test(H.layers)&&ou(pe,U,H,Ee,Ve,Ce)}}function ou(M,U,H,B,k,me){M.onBeforeRender(I,U,H,B,k,me),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(I,U,H,B,M,me),k.transparent===!0&&k.side===Wt&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,I.renderBufferDirect(H,U,B,k,M,me),k.side=hi,k.needsUpdate=!0,I.renderBufferDirect(H,U,B,k,M,me),k.side=Wt):I.renderBufferDirect(H,U,B,k,M,me),M.onAfterRender(I,U,H,B,k,me)}function Qr(M,U,H){U.isScene!==!0&&(U=zt);const B=V.get(M),k=S.state.lights,me=S.state.shadowsArray,ye=k.state.version,pe=ce.getParameters(M,k.state,me,U,H,S.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(pe);let Ce=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=se.get(M.envMap||B.environment,Ve),B.envMapRotation=B.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",On),Ce=new Map,B.programs=Ce);let Ge=Ce.get(Ee);if(Ge!==void 0){if(B.currentProgram===Ge&&B.lightsStateVersion===ye)return lu(M,pe),Ge}else pe.uniforms=ce.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,H,pe),M.onBeforeCompile(pe,I),Ge=ce.acquireProgram(pe,Ee),Ce.set(Ee,Ge),B.uniforms=pe.uniforms;const Ie=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=Pe.uniform),lu(M,pe),B.needsLights=Mm(M),B.lightsStateVersion=ye,B.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Ge,B.uniformsList=null,Ge}function cu(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Qa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function lu(M,U){const H=V.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function xm(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let H=0,B=M.length;H<B;H++){const k=M[H];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function vm(M,U,H,B,k){U.isScene!==!0&&(U=zt),q.resetTextureUnits();const me=U.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,pe=Q===null?I.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qe.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=se.get(B.envMap||ye,Ee),Ve=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Mt=!!H.morphAttributes.color;let _t=$n;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(_t=I.toneMapping);const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=ct!==void 0?ct.length:0,ve=V.get(B),rn=S.state.lights;if(je===!0&&(Ye===!0||M!==fe)){const ut=M===fe&&B.id===ne;Pe.setState(B,M,ut)}let Ke=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==rn.state.version||ve.outputColorSpace!==pe||k.isBatchedMesh&&ve.batching===!1||!k.isBatchedMesh&&ve.batching===!0||k.isBatchedMesh&&ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ve.instancing===!1||!k.isInstancedMesh&&ve.instancing===!0||k.isSkinnedMesh&&ve.skinning===!1||!k.isSkinnedMesh&&ve.skinning===!0||k.isInstancedMesh&&ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ve.instancingMorph===!1&&k.morphTexture!==null||ve.envMap!==Ce||B.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==Ve||ve.vertexTangents!==Ge||ve.morphTargets!==Ie||ve.morphNormals!==rt||ve.morphColors!==Mt||ve.toneMapping!==_t||ve.morphTargetsCount!==qt||!!ve.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ve.__version=B.version);let fn=ve.currentProgram;Ke===!0&&(fn=Qr(B,U,k),D&&B.isNodeMaterial&&D.onUpdateProgram(B,fn,ve));let Bn=!1,gi=!1,Qi=!1;const lt=fn.getUniforms(),St=ve.uniforms;if(x.useProgram(fn.program)&&(Bn=!0,gi=!0,Qi=!0),B.id!==ne&&(ne=B.id,gi=!0),ve.needsLights){const ut=xm(S.state.lightProbeGridArray,k);ve.lightProbeGrid!==ut&&(ve.lightProbeGrid=ut,gi=!0)}if(Bn||fe!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(N,"projectionMatrix",M.projectionMatrix),lt.setValue(N,"viewMatrix",M.matrixWorldInverse);const xi=lt.map.cameraPosition;xi!==void 0&&xi.setValue(N,Ct.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),fe!==M&&(fe=M,gi=!0,Qi=!0)}if(ve.needsLights&&(rn.state.directionalShadowMap.length>0&&lt.setValue(N,"directionalShadowMap",rn.state.directionalShadowMap,q),rn.state.spotShadowMap.length>0&&lt.setValue(N,"spotShadowMap",rn.state.spotShadowMap,q),rn.state.pointShadowMap.length>0&&lt.setValue(N,"pointShadowMap",rn.state.pointShadowMap,q)),k.isSkinnedMesh){lt.setOptional(N,k,"bindMatrix"),lt.setOptional(N,k,"bindMatrixInverse");const ut=k.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(N,"boneTexture",ut.boneTexture,q))}k.isBatchedMesh&&(lt.setOptional(N,k,"batchingTexture"),lt.setValue(N,"batchingTexture",k._matricesTexture,q),lt.setOptional(N,k,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",k._indirectTexture,q),lt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",k._colorsTexture,q));const _i=H.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&L.update(k,H,fn),(gi||ve.receiveShadow!==k.receiveShadow)&&(ve.receiveShadow=k.receiveShadow,lt.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(St.envMapIntensity.value=U.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Fb()),gi){if(lt.setValue(N,"toneMappingExposure",I.toneMappingExposure),ve.needsLights&&ym(St,Qi),me&&B.fog===!0&&Re.refreshFogUniforms(St,me),Re.refreshMaterialUniforms(St,B,ie,ae,S.state.transmissionRenderTarget[M.id]),ve.needsLights&&ve.lightProbeGrid){const ut=ve.lightProbeGrid;St.probesSH.value=ut.texture,St.probesMin.value.copy(ut.boundingBox.min),St.probesMax.value.copy(ut.boundingBox.max),St.probesResolution.value.copy(ut.resolution)}Qa.upload(N,cu(ve),St,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Qa.upload(N,cu(ve),St,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(N,"center",k.center),lt.setValue(N,"modelViewMatrix",k.modelViewMatrix),lt.setValue(N,"normalMatrix",k.normalMatrix),lt.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const ut=B.uniformsGroups;for(let xi=0,ji=ut.length;xi<ji;xi++){const du=ut[xi];j.update(du,fn),j.bind(du,fn)}}return fn}function ym(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Mm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,U,H){const B=V.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=U,V.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const H=V.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){Q=M,W=U,G=H;let B=null,k=!1,me=!1;if(M){const pe=V.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),_e.copy(M.viewport),Se.copy(M.scissor),Je=M.scissorTest,x.viewport(_e),x.scissor(Se),x.setScissorTest(Je),ne=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(pe.__hasExternalTextures)q.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(pe.__boundDepthTexture!==Ve){if(Ve!==null&&V.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Ce=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?B=Ce[U][H]:B=Ce[U],k=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[H]:B=Ce,_e.copy(M.viewport),Se.copy(M.scissor),Je=M.scissorTest}else _e.copy(Le).multiplyScalar(ie).floor(),Se.copy(yt).multiplyScalar(ie).floor(),Je=$e;if(H!==0&&(B=X),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(M,B),x.viewport(_e),x.scissor(Se),x.setScissorTest(Je),k){const pe=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,H)}else if(me){const pe=U;for(let Ee=0;Ee<M.textures.length;Ee++){const Ce=V.get(M.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,H,pe)}}else if(M!==null&&H!==0){const pe=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,H)}ne=-1},this.readRenderTargetPixels=function(M,U,H,B,k,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){x.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Ce=M.textures[pe],Ve=Ce.format,Ge=Ce.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Ve)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ge)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&H>=0&&H<=M.height-k&&N.readPixels(U,H,B,k,de.convert(Ve),de.convert(Ge),me)}finally{const Ce=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,B,k,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(U>=0&&U<=M.width-B&&H>=0&&H<=M.height-k){x.bindFramebuffer(N.FRAMEBUFFER,Ee);const Ce=M.textures[pe],Ve=Ce.format,Ge=Ce.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ie),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(U,H,B,k,de.convert(Ve),de.convert(Ge),0);const rt=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,rt);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await H0(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(Ie),N.deleteSync(Mt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,H=0){const B=Math.pow(2,-H),k=Math.floor(M.image.width*B),me=Math.floor(M.image.height*B),ye=U!==null?U.x:0,pe=U!==null?U.y:0;q.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ye,pe,k,me),x.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,B=null,k=0,me=0){let ye,pe,Ee,Ce,Ve,Ge,Ie,rt,Mt;const _t=M.isCompressedTexture?M.mipmaps[me]:M.image;if(H!==null)ye=H.max.x-H.min.x,pe=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ve=H.min.y,Ge=H.isBox3?H.min.z:0;else{const St=Math.pow(2,-k);ye=Math.floor(_t.width*St),pe=Math.floor(_t.height*St),M.isDataArrayTexture?Ee=_t.depth:M.isData3DTexture?Ee=Math.floor(_t.depth*St):Ee=1,Ce=0,Ve=0,Ge=0}B!==null?(Ie=B.x,rt=B.y,Mt=B.z):(Ie=0,rt=0,Mt=0);const ct=de.convert(U.format),qt=de.convert(U.type);let ve;U.isData3DTexture?(q.setTexture3D(U,0),ve=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),ve=N.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),ve=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const rn=x.getParameter(N.UNPACK_ROW_LENGTH),Ke=x.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=x.getParameter(N.UNPACK_SKIP_PIXELS),Bn=x.getParameter(N.UNPACK_SKIP_ROWS),gi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Qi=M.isDataArrayTexture||M.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const St=V.get(M),_i=V.get(U),ut=V.get(St.__renderTarget),xi=V.get(_i.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,ut.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let ji=0;ji<Ee;ji++)Qi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(M).__webglTexture,k,Ge+ji),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(U).__webglTexture,me,Mt+ji)),N.blitFramebuffer(Ce,Ve,ye,pe,Ie,rt,ye,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||V.has(M)){const St=V.get(M),_i=V.get(U);x.bindFramebuffer(N.READ_FRAMEBUFFER,$),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let ut=0;ut<Ee;ut++)Qi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,k,Ge+ut):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,k),lt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_i.__webglTexture,me,Mt+ut):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_i.__webglTexture,me),k!==0?N.blitFramebuffer(Ce,Ve,ye,pe,Ie,rt,ye,pe,N.COLOR_BUFFER_BIT,N.NEAREST):lt?N.copyTexSubImage3D(ve,me,Ie,rt,Mt+ut,Ce,Ve,ye,pe):N.copyTexSubImage2D(ve,me,Ie,rt,Ce,Ve,ye,pe);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(ve,me,Ie,rt,Mt,ye,pe,Ee,ct,qt,_t.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(ve,me,Ie,rt,Mt,ye,pe,Ee,ct,_t.data):N.texSubImage3D(ve,me,Ie,rt,Mt,ye,pe,Ee,ct,qt,_t):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Ie,rt,ye,pe,ct,qt,_t.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Ie,rt,_t.width,_t.height,ct,_t.data):N.texSubImage2D(N.TEXTURE_2D,me,Ie,rt,ye,pe,ct,qt,_t);x.pixelStorei(N.UNPACK_ROW_LENGTH,rn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),x.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Bn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,gi),me===0&&U.generateMipmaps&&N.generateMipmap(ve),x.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){W=0,G=0,Q=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function Kh(i,e){if(e===I0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ol||e===sp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ol)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Np(i){const e=new Map,t=new Map,n=i.clone();return Up(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Up(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Up(i.children[n],e.children[n],t)}class Fp extends Ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Zh(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zh(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new tE(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ir.extractUrlBase(e);a=Ir.resolveURL(l,this.path)}else a=Ir.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Sp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Op){try{a[Xe.KHR_BINARY_GLTF]=new nE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new mE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new zb;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new iE(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new sE;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new rE;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Bb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Et(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kb{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new z(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],hn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Tp(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ep(d),l.distance=h;break;case"spot":l=new Sx(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class zb{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){const s=[];e.color=new z(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Hb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(r,r)}return Promise.all(s)}}class Gb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Wb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class Xb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new z(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,kt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class qb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class $b{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new z().setRGB(r[0],r[1],r[2],hn),Promise.all(s)}}class Yb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class Kb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new z().setRGB(r[0],r[1],r[2],hn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,kt)),Promise.all(s)}}class Zb{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class Jb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){const n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class Qb{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class jb{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class eE{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Zh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}}class tE{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const y=new Be,m=new C,p=new yn,E=new C(1,1,1),b=new I_(g.geometry,g.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&E.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,y.compose(m,p,E));for(const v in c)if(v==="_COLOR_0"){const T=c[v];b.instanceColor=new zl(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ht.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const Op="glTF",lr=12,Jh={JSON:1313821514,BIN:5130562};class nE{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-lr,r=new DataView(e,lr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Jh.JSON){const l=new Uint8Array(e,lr+a,o);this.content=n.decode(l)}else if(c===Jh.BIN){const l=lr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=Xl[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=Xl[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=Us[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}h(f)},o,l,hn,u)})})}}class sE{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rE{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Bp extends Xs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,h=(n-t)/d,u=h*h,f=u*h,g=e*l,y=g-l,m=-2*f+3*u,p=f-u,E=1-m,b=p-u+h;for(let v=0;v!==o;v++){const T=a[y+v+o],S=a[y+v+c]*d,R=a[g+v+o],_=a[g+v]*d;r[v]=E*T+b*S+m*R+p*_}return r}}const aE=new yn;class oE extends Bp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return aE.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qh={9728:Pt,9729:Lt,9984:Jf,9985:$a,9986:xr,9987:oi},jh={33071:Xn,33648:fo,10497:zs},Oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cE={CUBICSPLINE:void 0,LINEAR:zr,STEP:kr},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),i.DefaultMaterial}function ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dE(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function uE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hE(i){let e;const t=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kc(t.attributes):e=i.indices+":"+kc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+kc(i.targets[n]);return e}function kc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ql(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pE=new Be;class mE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new vx(this.options.manager):this.textureLoader=new Tx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ki(r,o,s),Hn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Ir.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Oc[s.type],o=Us[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Xt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Oc[s.type],l=Us[s.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(f&&f!==h){const p=Math.floor(u/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(E);b||(y=new l(o,p*f,s.count*f/d),b=new up(y,f/d),t.cache.add(E,b)),m=new Gr(b,c,u%f/d,g)}else o===null?y=new l(s.count*c):y=new l(o,u,s.count*c),m=new Xt(y,c,g);if(s.sparse!==void 0){const p=Oc.SCALAR,E=Us[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new E(a[1],b,s.sparse.count*p),S=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=T.length;R<_;R++){const w=T[R];if(m.setX(w,S[R*c]),c>=2&&m.setY(w,S[R*c+1]),c>=3&&m.setZ(w,S[R*c+2]),c>=4&&m.setW(w,S[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=Qh[u.magFilter]||Lt,d.minFilter=Qh[u.minFilter]||oi,d.wrapS=jh[u.wrapS]||zs,d.wrapT=jh[u.wrapT]||zs,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Pt&&d.minFilter!==Lt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Dt(y);m.needsUpdate=!0,u(m)}),t.load(Ir.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Hn(h,a),h.userData.mimeType=a.mimeType||fE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new zd,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new kd,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return bt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){const h=s[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new z(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],hn),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,kt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);const d=r.alphaMode||Bc.OPAQUE;if(d===Bc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Bc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==dn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==dn){const h=r.emissiveFactor;o.emissive=new z().setRGB(h[0],h[1],h[2],hn)}return r.emissiveTexture!==void 0&&a!==dn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Hn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ki(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ef(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=hE(l),h=s[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=ef(new vt,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?lE(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const y=d[f],m=a[f];let p;const E=l[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new A_(y,E):new Oe(y,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=Kh(p.geometry,sp):m.mode===gn.TRIANGLE_FAN&&(p.geometry=Kh(p.geometry,Ol));else if(m.mode===gn.LINES)p=new N_(y,E);else if(m.mode===gn.LINE_STRIP)p=new Bo(y,E);else if(m.mode===gn.LINE_LOOP)p=new U_(y,E);else if(m.mode===gn.POINTS)p=new mp(y,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hn(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ki(s,h[0],r),h[0];const u=new xt;r.extensions&&ki(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(ap.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Be;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Od(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){const f=s.channels[h],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let b=0,v=u.length;b<v;b++){const T=u[b],S=f[b],R=g[b],_=y[b],w=m[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const I=n._createAnimationTracks(T,S,R,_,w);if(I)for(let P=0;P<I.length;P++)p.push(I[P])}const E=new So(r,void 0,p);return Hn(E,s),E})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,pE)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){const f=d.userData.pivot,g=h[0];d.pivot=new C().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new pp:l.length>1?d=new xt:l.length===1?d=l[0]:d=new ht,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),Hn(d,r),r.extensions&&ki(n,d,r),r.matrix!==void 0){const h=new Be;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(d);s.associations.set(d,{...h})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new xt;n.name&&(r.name=s.createUniqueName(n.name)),Hn(r,n),n.extensions&&ki(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++){const u=c[d];u.parent!==null?r.add(Np(u)):r.add(u)}const l=d=>{const h=new Map;for(const[u,f]of s.associations)(u instanceof Pn||u instanceof Dt)&&h.set(u,f);return d.traverse(u=>{const f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ti[r.path]===Ti.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let d;switch(Ti[r.path]){case Ti.weights:d=Wr;break;case Ti.rotation:d=Xr;break;case Ti.translation:case Ti.scale:d=Mo;break;default:switch(n.itemSize){case 1:d=Wr;break;case 2:case 3:default:d=Mo;break}break}const h=s.interpolation!==void 0?cE[s.interpolation]:zr,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const y=new d(c[f]+"."+Ti[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ql(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Xr?oE:Bp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gE(i,e,t){const n=e.attributes,s=new Sn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const d=ql(Us[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const y=ql(Us[u.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Qn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ef(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Xl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return qe.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Hn(i,e),gE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dE(i,e.targets,t):i})}const _E={mage:cn("models/Mage.glb"),knight:cn("models/Knight.glb"),goblin:cn("models/Barbarian.glb"),ranger:cn("models/Rogue_Hooded.glb"),skel_mage:cn("models/Skeleton_Mage.glb"),skel_minion:cn("models/Skeleton_Minion.glb"),skel_rogue:cn("models/Skeleton_Rogue.glb"),skel_warrior:cn("models/Skeleton_Warrior.glb")},xE={canopy_a:cn("models/props/tree_single_A.gltf"),canopy_b:cn("models/props/tree_single_B.gltf"),rock:cn("models/props/rock_single_A.gltf")},tf={default:[/spellcast.*shoot/i,/spellcast/i,/cast/i,/attack/i,/melee/i],goblin:[/^throw$/i,/throw/i,/melee.*attack/i,/attack/i],ranger:[/2h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],knight:[/1h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i]},yr=new Map,Ms=new Map;function zc(i,e,t){var n;for(const s of e){const r=i.find(a=>s.test(a.name));if(r)return r.name}return((n=i[0])==null?void 0:n.name)??t}function nf(i,e){for(const t of e){const n=i.find(s=>t.test(s.name));if(n)return n.name}return null}async function vE(){const i=new Fp;await Promise.all(Object.entries(_E).map(async([e,t])=>{const n=await i.loadAsync(t),s=n.scene;s.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.frustumCulled=!1)});const r=new Sn().setFromObject(s),a=Math.max(.001,r.max.y-r.min.y),o=n.animations;yr.set(e,{scene:s,clips:o,idle:zc(o,[/^idle$/i,/idle/i],"Idle"),walk:zc(o,[/^walking_a$/i,/walking/i,/walk/i,/running/i],"Walking_A"),attack:zc(o,tf[e]??tf.default,"Attack"),death:nf(o,[/^death_a$/i,/death/i]),cheer:nf(o,[/cheer/i]),unitScale:1/a}),console.log(`[3d] ${e}: ${o.length} clips (idle=${yr.get(e).idle}, walk=${yr.get(e).walk}, attack=${yr.get(e).attack})`)})),await Promise.all(Object.entries(xE).map(async([e,t])=>{try{const n=await i.loadAsync(t);n.scene.traverse(r=>{r.isMesh&&(r.castShadow=!0)});const s=new Sn().setFromObject(n.scene);Ms.set(e,{scene:n.scene,rawHeight:Math.max(.001,s.max.y-s.min.y)})}catch(n){console.warn(`attachment prop failed to load: ${e}`,n)}})),Ms.set("bow",{scene:SE(),rawHeight:.9}),Ms.set("crossbow",{scene:bE(),rawHeight:.5}),Ms.set("vehicle_wagon",{scene:yE(),rawHeight:1}),Ms.set("vehicle_tower",{scene:ME(),rawHeight:2.3})}const Pr=()=>new bt({color:"#4a3826",roughness:.85}),kp=()=>new bt({color:"#6b4f30",roughness:.8}),zp=()=>new bt({color:"#3a3f47",roughness:.5,metalness:.6});function Vp(i){const e=new Oe(new Dn(i,i,.08,10),zp());return e.rotation.z=Math.PI/2,e.name="wheel",e.castShadow=!0,e}function yE(){const i=new xt,e=new Oe(new un(.55,.34,.95),kp());e.position.y=.42,e.castShadow=!0;const t=new Oe(new un(.62,.08,1.02),Pr());t.position.y=.6;const n=new Oe(new Dn(.3,.3,.6,10,1,!1,0,Math.PI),new bt({color:"#5e5346",roughness:.95,side:Wt}));n.rotation.z=Math.PI/2,n.rotation.y=Math.PI/2,n.position.set(0,.64,-.15);const s=new Oe(new Dn(.02,.02,.5,5),Pr());s.position.set(0,.95,.4);const r=new Oe(new Kn(.24,.14),new bt({color:"#8a2f2f",side:Wt,roughness:.9}));r.position.set(.12,1.1,.4),i.add(e,t,n,s,r);for(const[a,o]of[[-.32,.3],[.32,.3],[-.32,-.32],[.32,-.32]]){const c=Vp(.19);c.position.set(a,.19,o),i.add(c)}return i}function ME(){const i=new xt,e=new Oe(new un(.8,.24,1),Pr());e.position.y=.34,e.castShadow=!0;const t=new Oe(new un(.62,1.5,.7),kp());t.position.y=1.2,t.castShadow=!0;const n=new Oe(new un(.66,.07,.74),zp());n.position.y=1;const s=n.clone();s.position.y=1.6,i.add(e,t,n,s);for(const[o,c]of[[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]]){const l=new Oe(new un(.14,.18,.14),Pr());l.position.set(o,2.03,c),i.add(l)}const r=new Oe(new Dn(.02,.02,.5,5),Pr());r.position.y=2.3;const a=new Oe(new Kn(.3,.18),new bt({color:"#8a2f2f",side:Wt,roughness:.9}));a.position.set(.15,2.42,0),i.add(r,a);for(const[o,c]of[[-.44,.34],[.44,.34],[-.44,-.34],[.44,-.34]]){const l=Vp(.22);l.position.set(o,.22,c),i.add(l)}return i}function SE(){const i=new xt,e=new bt({color:"#6b4a2f",roughness:.75}),t=new ko(new C(0,-.45,0),new C(.2,0,0),new C(0,.45,0)),n=new Oe(new Vo(t,16,.028,6),e);n.castShadow=!0;const s=new Oe(new Dn(.007,.007,.9,4),new bt({color:"#e8e2d5",roughness:.4}));return i.add(n,s),i}function bE(){const i=new xt,e=new bt({color:"#5a4630",roughness:.75}),t=new bt({color:"#9aa6b5",roughness:.4,metalness:.5}),n=new Oe(new un(.42,.05,.06),e);n.castShadow=!0;const s=new ko(new C(.18,0,-.25),new C(.3,0,0),new C(.18,0,.25)),r=new Oe(new Vo(s,12,.02,6),t),a=new Oe(new Dn(.006,.006,.5,4),new bt({color:"#e8e2d5",roughness:.4}));return a.rotation.x=Math.PI/2,a.position.x=.18,i.add(n,r,a),i}function EE(i){const e=yr.get(i);if(!e)throw new Error(`asset not loaded: ${i}`);return e}function ja(i){return Ms.get(i)}const sf={fire:{model:"mage",height:1.45,tint:new z("#ff6a1e"),tintStrength:.75,mage:{hat:{sx:.78,sy:1.55,sz:.78,rotX:-.18},hatEmissive:new z("#ff5500")}},ice:{model:"mage",height:1.45,tint:new z("#5bc8f5"),tintStrength:.55,mage:{hat:{sx:1.4,sy:.62,sz:1.4},spellbook:!0,hatEmissive:new z("#7fd8ff")}},lightning:{model:"mage",height:1.45,tint:new z("#b06bff"),tintStrength:.55,mage:{hat:{sx:.92,sy:1.35,sz:.92,rotZ:.34},hatEmissive:new z("#d9a8ff")}},water:{model:"mage",height:1.45,tint:new z("#26c2e8"),tintStrength:.55,watery:!0,mage:{hat:{sx:1.15,sy:.85,sz:1.15,rotX:.35},hatEmissive:new z("#7fe8ff")}},wind:{model:"mage",height:1.45,tint:new z("#bcd9ce"),tintStrength:.5,mage:{hat:{sx:1.22,sy:1,sz:1.22},hatEmissive:new z("#eafff5")}},generic_wizard:{model:"mage",height:1.45,tint:new z("#8a8494"),tintStrength:.5},generic_goblin:{model:"goblin",height:1.15,tint:new z("#8a8494"),tintStrength:.55},slingshot:{model:"goblin",height:1.15,tint:new z("#7da35c"),tintStrength:.6,goblin:{hatEmissive:new z("#c9e08a")}},dynamite:{model:"goblin",height:1.15,tint:new z("#8a9c4a"),tintStrength:.6,emissive:new z("#ff6a1e"),goblin:{hatEmissive:new z("#ffb163")}},gong:{model:"goblin",height:1.15,tint:new z("#6a9c6a"),tintStrength:.6,goblin:{showShield:!0,hatEmissive:new z("#f4d98a")}},generic_archer:{model:"ranger",height:1.4,tint:new z("#8a8494"),tintStrength:.5,hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.55}},longbow:{model:"ranger",height:1.5,tint:new z("#4e8f4e"),tintStrength:.55,emissive:new z("#3fae5a"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.62}},ballesta:{model:"knight",height:1.35,tint:new z("#5b7fc9"),tintStrength:.5,hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.5}},bolas:{model:"goblin",height:1.3,tint:new z("#4a5548"),tintStrength:.65,goblin:{hatEmissive:new z("#c8d6b0")}},generic_tree:{model:"goblin",height:1.1,tint:new z("#6d6357"),tintStrength:.8,ent:{canopy:"canopy_a",canopyScale:.75,canopyTint:new z("#7a8a6a")}},rootgrasp:{model:"goblin",height:1.7,tint:new z("#5e4630"),tintStrength:.85,ent:{canopy:"canopy_a",canopyTint:new z("#3f6b33")}},boulder:{model:"goblin",height:1.95,tint:new z("#6b543c"),tintStrength:.85,ent:{canopy:"canopy_a",canopyScale:1,canopyTint:new z("#556b3a"),rock:!0}},thornspitter:{model:"goblin",height:1.35,tint:new z("#55663d"),tintStrength:.8,ent:{canopy:"canopy_b",canopyScale:.8,canopyTint:new z("#6fcf5f")}},phoenix:{model:"mage",height:1.7,tint:new z("#ff8c42"),tintStrength:.85,emissive:new z("#ff5500"),mage:{hat:{sx:.7,sy:1.9,sz:.7,rotX:-.3},hatEmissive:new z("#ffb163")}},wintercourt:{model:"mage",height:1.7,tint:new z("#a8e6ff"),tintStrength:.7,emissive:new z("#7fd8ff"),mage:{hat:{sx:1.6,sy:.7,sz:1.6},spellbook:!0,hatEmissive:new z("#ffffff")}},tempest:{model:"mage",height:1.7,tint:new z("#d9a8ff"),tintStrength:.7,emissive:new z("#b06bff"),mage:{hat:{sx:.95,sy:1.7,sz:.95,rotZ:.45},hatEmissive:new z("#f0dcff")}},tidelord:{model:"mage",height:1.7,tint:new z("#26c2e8"),tintStrength:.6,watery:!0,mage:{hat:{sx:1.3,sy:1,sz:1.3,rotX:.4},hatEmissive:new z("#bff4ff")}},zephyr:{model:"mage",height:1.7,tint:new z("#dff2ea"),tintStrength:.6,emissive:new z("#bcd9ce"),mage:{hat:{sx:1.4,sy:1.15,sz:1.4},hatEmissive:new z("#ffffff")}},warlord:{model:"goblin",height:1.45,tint:new z("#7da35c"),tintStrength:.7,emissive:new z("#c9e08a"),goblin:{hatEmissive:new z("#f4ffb0")}},sapperking:{model:"goblin",height:1.45,tint:new z("#8a9c4a"),tintStrength:.7,emissive:new z("#ff6a1e"),goblin:{hatEmissive:new z("#ffd75e")}},doomgong:{model:"goblin",height:1.45,tint:new z("#6a9c6a"),tintStrength:.7,emissive:new z("#f4d98a"),goblin:{showShield:!0,hatEmissive:new z("#ffd75e")}},stormpiercer:{model:"ranger",height:1.75,tint:new z("#4e8f4e"),tintStrength:.65,emissive:new z("#7dff9b"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.7}},ironstorm:{model:"knight",height:1.55,tint:new z("#5b7fc9"),tintStrength:.65,emissive:new z("#8fb4ff"),hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.58}},chainwarden:{model:"goblin",height:1.55,tint:new z("#4a5548"),tintStrength:.75,emissive:new z("#c8d6b0"),goblin:{hatEmissive:new z("#e8f2d8")}},elderroot:{model:"goblin",height:2.15,tint:new z("#4a3624"),tintStrength:.9,emissive:new z("#3f6b33"),ent:{canopy:"canopy_a",canopyScale:1.1,canopyTint:new z("#2f5427")}},mountain:{model:"goblin",height:2.4,tint:new z("#5e4c38"),tintStrength:.9,emissive:new z("#8d7a5e"),ent:{canopy:"canopy_a",canopyScale:1.15,canopyTint:new z("#4c6b38"),rock:!0}},bramblehydra:{model:"goblin",height:1.7,tint:new z("#3f6b33"),tintStrength:.85,emissive:new z("#6fcf5f"),ent:{canopy:"canopy_b",canopyScale:1.05,canopyTint:new z("#8fff6f")}}},rf={grunt:{model:"skel_minion",height:1.05,tint:new z("#7da35c"),tintStrength:.35},runner:{model:"skel_rogue",height:1.1,tint:new z("#d9a648"),tintStrength:.35},knight:{model:"knight",height:1.25,tint:new z("#8d99ae"),tintStrength:.25},shade:{model:"skel_mage",height:1.15,tint:new z("#b35442"),tintStrength:.45,emissive:new z("#ff5522")},golem:{model:"skel_warrior",height:2.6,tint:new z("#3d2f5e"),tintStrength:.6},golemling:{model:"skel_warrior",height:1.45,tint:new z("#7a68a6"),tintStrength:.5},orcraider:{model:"goblin",height:1.15,tint:new z("#5e7a3a"),tintStrength:.55},orcbrute:{model:"goblin",height:1.5,tint:new z("#4a5d33"),tintStrength:.65},troll:{model:"goblin",height:2.3,tint:new z("#6a7d5e"),tintStrength:.7,emissive:new z("#38553f")},orcshaman:{model:"skel_mage",height:1.2,tint:new z("#3f8f5c"),tintStrength:.6,emissive:new z("#3fae5a")},wardrummer:{model:"goblin",height:1.35,tint:new z("#8a5c3a"),tintStrength:.6,goblin:{showShield:!0}},wraith:{model:"skel_rogue",height:1.15,tint:new z("#9db8c9"),tintStrength:.5,emissive:new z("#bcd9ff"),ghostly:!0},warwagon:{model:"goblin",height:1,vehicle:"vehicle_wagon",tint:new z("#7a5c38"),tintStrength:.2},siegetower:{model:"goblin",height:2.3,vehicle:"vehicle_tower",tint:new z("#6b4f30"),tintStrength:.2},warlord:{model:"skel_warrior",height:3,tint:new z("#6e7b8a"),tintStrength:.55,emissive:new z("#8fa2b8")},pyretitan:{model:"skel_mage",height:3.1,tint:new z("#c25a2e"),tintStrength:.6,emissive:new z("#ff5522")},colossus:{model:"skel_warrior",height:3.6,tint:new z("#3d2f5e"),tintStrength:.7,emissive:new z("#b14aed")}},bo=1/Nr;function Eo(i){return Math.atan2(Math.cos(i),Math.sin(i))}const TE=1.05,Kd=.28,Pa=new Map,dr=new Map,Fs=[];let qr,Hp=new C;function Gp(i,e){qr=i,Hp=e}function wE(i){const e=ja(i.vehicle),t=new xt,n=new xt;t.add(n);const s=[],r=[];if(e){const a=e.scene.clone(!0);a.scale.setScalar(i.height/e.rawHeight),n.add(a),a.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.clone();i.tint&&l.color.lerp(i.tint,i.tintStrength??.25),c.material=l,s.push(l),/wheel/i.test(c.name)&&r.push(c)})}return{root:t,inner:n,mats:s,origColors:s.map(a=>a.color.clone()),baseEmissive:new z(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,wheels:r,height:i.height}}function Wp(i){var E;if(i.vehicle)return wE(i);const e=EE(i.model),t=Np(e.scene),n=e.unitScale*i.height;t.scale.setScalar(n);const s=b=>{const v=new Set;return b==null||b.traverse(T=>{T.isMesh&&v.add(T)}),v};let r=new Set,a=new Set;if(i.mage){const b=t.getObjectByName("Mage_Hat");if(b){const S=i.mage.hat;b.scale.set(b.scale.x*S.sx,b.scale.y*S.sy,b.scale.z*S.sz),S.rotZ&&(b.rotation.z+=S.rotZ),S.rotX&&(b.rotation.x+=S.rotX),a=s(b)}const v=t.getObjectByName("Spellbook"),T=t.getObjectByName("Spellbook_open");v&&(v.visible=!1),T&&(T.visible=!!i.mage.spellbook),r=s(t.getObjectByName("Mage_Head"))}if(i.goblin){for(const T of["1H_Axe","2H_Axe","1H_Axe_Offhand","Mug"]){const S=t.getObjectByName(T);S&&(S.visible=!1)}const b=t.getObjectByName("Barbarian_Round_Shield");b&&(b.visible=!!i.goblin.showShield);const v=t.getObjectByName("Barbarian_Hat");v&&(a=s(v)),r=s(t.getObjectByName("Barbarian_Head"))}if(i.hideRe&&t.traverse(b=>{i.hideRe.test(b.name)&&(b.visible=!1)}),i.held){const b=ja(i.held.key),v=t.getObjectByName(`handslot${i.held.hand}`)??t.getObjectByName(`hand${i.held.hand}`);if(b&&v){t.updateMatrixWorld(!0);const T=b.scene.clone(!0),S=new C;v.getWorldScale(S);const R=1/Math.max(1e-6,S.y),_=i.held.scale*i.height;T.scale.setScalar(_*R/b.rawHeight),T.rotation.set(i.held.rotX??0,i.held.rotY??Math.PI/2,i.held.rotZ??0),v.add(T)}}let o=new Set,c=new Set;if(i.ent){for(const T of["1H_Axe","2H_Axe","1H_Axe_Offhand","Mug","Barbarian_Round_Shield","Barbarian_Hat"]){const S=t.getObjectByName(T);S&&(S.visible=!1)}t.updateMatrixWorld(!0);const b=t.getObjectByName("Barbarian_Head")??t,v=ja(i.ent.canopy);if(v){const T=v.scene.clone(!0),S=new C;b.getWorldScale(S);const R=1/Math.max(1e-6,S.y),_=(i.ent.canopyScale??.9)*i.height;T.scale.setScalar(_*R/v.rawHeight),T.position.y=-.35*i.height*R,b.add(T),o=s(T)}if(i.ent.rock){const T=ja("rock"),S=t.getObjectByName("handslotr")??t.getObjectByName("handslot.r")??t.getObjectByName("handr")??((E=t.getObjectByName("1H_Axe"))==null?void 0:E.parent);if(T&&S){const R=T.scene.clone(!0),_=new C;S.getWorldScale(_);const w=1/Math.max(1e-6,_.y),I=.28*i.height;R.scale.setScalar(I*w/T.rawHeight),S.add(R),c=s(R)}}}const l=[];t.traverse(b=>{var _,w,I,P;const v=b;if(!v.isMesh)return;const T=v.material;let S;if(i.watery?S=new Nn({map:T.map??null,color:((_=T.color)==null?void 0:_.clone())??new z("#ffffff"),transparent:!0,opacity:.72,roughness:.08,metalness:.1,clearcoat:.6,side:Wt}):S=T.clone(),o.has(v))(w=i.ent)!=null&&w.canopyTint&&S.color.lerp(i.ent.canopyTint,.5);else if(!c.has(v)){if(i.tint){let D=i.tintStrength??.4;(i.mage||i.goblin)&&(r.has(v)?D=.08:a.has(v)&&(D=Math.min(1,D+.25))),S.color.lerp(i.tint,D)}}const R=((I=i.mage)==null?void 0:I.hatEmissive)??((P=i.goblin)==null?void 0:P.hatEmissive);R&&a.has(v)?(S.emissive.copy(R),S.emissiveIntensity=.18):i.emissive&&(S.emissive.copy(i.emissive),S.emissiveIntensity=.35),i.ghostly&&(S.transparent=!0),v.material=S,l.push(S)});const d=new zx(t),h=b=>{const v=So.findByName(e.clips,b);return d.clipAction(v)},u=h(e.idle);i.ent&&(u.timeScale=.55);const f=h(e.walk),g=h(e.attack);g.setLoop(Fl,1);const y=e.death?h(e.death):null;y&&(y.setLoop(Fl,1),y.clampWhenFinished=!0);const m=e.cheer?h(e.cheer):null,p=new xt;return p.add(t),{root:p,inner:t,mixer:d,idle:u,walk:f,attack:g,death:y,cheer:m,mats:l,origColors:l.map(b=>b.color.clone()),baseEmissive:i.emissive?i.emissive.clone():new z(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!!i.watery,prevRecoil:0,height:i.height}}function AE(i){const e=(t,n)=>{const s=new hp({color:t,depthTest:!1}),r=new E_(s);return r.center.set(0,.5),r.scale.set(.8,.09,1),r.position.set(-.4,i.height+.25,0),r.renderOrder=10+n,i.root.add(r),r};i.hpBar={bg:e("#3a0d12",0),fg:e("#58e05e",1)}}function RE(i,e){CE(i,e),IE(i,e),PE(e)}function CE(i,e){var n,s,r;const t=new Set;for(const a of i.enemies){t.add(a.id);let o=Pa.get(a.id);if(!o){const u=rf[a.def.id]??rf.grunt;o=Wp(u),o.ghostly=u.ghostly,AE(o),(n=o.walk)==null||n.play(),o.yaw=Eo(a.angle),Pa.set(a.id,o),qr.add(o.root),o.root.scale.setScalar(.01)}o.root.position.set(a.x*bo,0,a.y*bo);const c=Eo(a.angle);o.yaw+=Xp(o.yaw,c)*Math.min(1,e*10),o.root.rotation.y=o.yaw;const l=o.root.scale.x;l<1&&o.root.scale.setScalar(Math.min(1,l+e*5));let d=1;if(a.statuses.frozen?d=0:a.statuses.chill&&(d=Math.max(.25,1-a.statuses.chill.pct*(.6+.2*a.statuses.chill.stacks))),o.walk&&(o.walk.timeScale=a.def.speed/60*d),(s=o.mixer)==null||s.update(e),o.wheels&&o.wheels.length>0){for(const u of o.wheels)u.rotation.x=a.animT*a.def.speed*.09;o.inner.rotation.z=Math.sin(a.animT*5)*.02}if(o.ghostly){const u=a.phased?.22:.95;for(const f of o.mats)f.opacity+=(u-f.opacity)*Math.min(1,e*8)}if(o.hpBar){const u=Math.max(0,a.hp/a.maxHp);o.hpBar.fg.scale.x=.8*u;const f=u>.5?"#58e05e":u>.25?"#ffd75e":"#ff5e5e";o.hpBar.fg.material.color.set(f),o.hpBar.bg.visible=o.hpBar.fg.visible=u<1}for(const u of o.mats)a.hitFlash>0?(u.emissive.setRGB(1,1,1),u.emissiveIntensity=.7):a.statuses.burn?(u.emissive.set("#ff6a1e"),u.emissiveIntensity=.45+Math.sin(performance.now()/90)*.15):a.statuses.wet?(u.emissive.set("#2277ff"),u.emissiveIntensity=.3):a.statuses.chill?(u.emissive.set("#66ccff"),u.emissiveIntensity=.25):(u.emissive.copy(o.baseEmissive),u.emissiveIntensity=o.baseEmissive.getHex()===0?0:.35);const h=(a.armorHp??0)>0;if(h&&!o.armorShell){const u=new Oe(new Kr(.62,12,10),new bt({color:"#9aa6b5",transparent:!0,opacity:.4,roughness:.35,metalness:.6}));u.scale.set(1,(o.height+.2)/1.24,1),u.position.y=(o.height+.2)/2,o.root.add(u),o.armorShell=u}else!h&&o.armorShell&&(o.root.remove(o.armorShell),To(o.armorShell),o.armorShell=void 0);if(o.armorShell){const u=Math.max(.15,(a.armorHp??0)/(a.def.armor??1));o.armorShell.material.opacity=.18+u*.3+Math.sin(performance.now()/300)*.04}if(a.statuses.frozen&&!o.iceCube){const u=new Oe(new un(.7,o.height+.15,.7),new bt({color:"#9fdcff",transparent:!0,opacity:.45,roughness:.1}));u.position.y=(o.height+.15)/2,o.root.add(u),o.iceCube=u}else!a.statuses.frozen&&o.iceCube&&(o.root.remove(o.iceCube),To(o.iceCube),o.iceCube=void 0)}for(const[a,o]of Pa)if(!t.has(a)){Pa.delete(a);const c=o.root.position.distanceTo(Hp)<1.2;o.death&&!c?((r=o.walk)==null||r.fadeOut(.08),o.death.reset().setEffectiveTimeScale(1.5).fadeIn(.05).play(),o.hpBar&&(o.hpBar.bg.visible=o.hpBar.fg.visible=!1),Fs.push({view:o,t:TE,mode:"anim"})):Fs.push({view:o,t:Kd,mode:"shrink"})}}function IE(i,e){var n,s,r,a,o,c,l,d;const t=new Set;for(const h of i.wizards){t.add(h.id);let u=dr.get(h.id);u&&u.defId!==h.def.id&&(qr.remove(u.root),u.root.traverse(m=>To(m)),dr.delete(h.id),u=void 0),u||(u=Wp(sf[h.def.id]??sf.generic_wizard),u.defId=h.def.id,(n=u.idle)==null||n.play(),u.yaw=Eo(h.aim),dr.set(h.id,u),qr.add(u.root),u.root.position.set(h.x*bo,0,h.y*bo),u.root.scale.setScalar(.01));const f=u.root.scale.x;f<1&&u.root.scale.setScalar(Math.min(1,f+e*4));const g=Eo(h.aim);u.yaw+=Xp(u.yaw,g)*Math.min(1,e*12),u.root.rotation.y=u.yaw;const y=!!h.becalmed;if(y!==u.becalmed&&(u.becalmed=y,u.mats.forEach((m,p)=>{m.color.copy(u.origColors[p]),y&&m.color.lerp(new z("#777777"),.6)}),u.idle&&(u.idle.timeScale=y?.35:1)),i.phase==="won"&&u.cheer&&!u.cheering?(u.cheering=!0,(s=u.idle)==null||s.fadeOut(.2),(r=u.attack)==null||r.fadeOut(.2),u.cheer.reset().fadeIn(.2).play()):i.phase!=="won"&&u.cheering&&(u.cheering=!1,(a=u.cheer)==null||a.fadeOut(.2),(o=u.idle)==null||o.reset().fadeIn(.2).play()),!u.cheering&&u.attack&&h.recoil>u.prevRecoil+.01){const m=u.attack.getClip().duration;u.attack.reset(),u.attack.timeScale=m/Math.min(Math.max(h.stats.rate*.85,.35),1.1),u.attack.play(),(c=u.idle)==null||c.fadeOut(.08),u.casting=!0}if(u.casting&&u.attack&&!u.attack.isRunning()&&(u.casting=!1,(l=u.idle)==null||l.reset().fadeIn(.15).play()),u.prevRecoil=h.recoil,(d=u.mixer)==null||d.update(e),u.watery){const m=.72+Math.sin(performance.now()/380+h.id)*.06;for(const p of u.mats)p.opacity=m}}for(const[h,u]of dr)t.has(h)||(dr.delete(h),Fs.push({view:u,t:Kd,mode:"shrink"}))}function PE(i){var e;for(let t=Fs.length-1;t>=0;t--){const n=Fs[t];if(n.t-=i,n.mode==="anim"){if((e=n.view.mixer)==null||e.update(i),n.t<.3){const s=Math.max(.01,n.t/.3);n.view.root.position.y=-(1-s)*.5}}else{const s=Math.max(.01,n.t/Kd);n.view.root.scale.setScalar(s),n.view.root.position.y=-(1-s)*.4}n.t<=0&&(qr.remove(n.view.root),n.view.root.traverse(s=>To(s)),Fs.splice(t,1))}}function Xp(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function To(i){var t;if(!i.isMesh)return;(t=i.geometry)==null||t.dispose();const e=i.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e==null||e.dispose()}const mn=1/Nr,La=.45;let Mr,qp,wo;const $l=800;let eo,Ao,Ro;const LE=["orb","rock","stick","arrow","bolt","needle"],af={orb:[],rock:[],stick:[],arrow:[],bolt:[],needle:[]};let $p;const DE={orb:null,rock:"#8d8578",stick:"#c8452e",arrow:"#e6d7b0",bolt:"#cdd7e0",needle:"#7fce6a"};let Da=0,Co,Io;const Na=new Map;let to;function NE(i,e,t){Mr=i,qp=e,wo=t;const n=new vt;Ao=new Xt(new Float32Array($l*3),3),Ro=new Xt(new Float32Array($l*3),3),n.setAttribute("position",Ao),n.setAttribute("color",Ro);const s=new zd({size:.13,vertexColors:!0,transparent:!0,opacity:.95,blending:ho,depthWrite:!1});eo=new mp(n,s),eo.frustumCulled=!1,Mr.add(eo),$p={orb:new Kr(.11,10,8),rock:new Gd(.12),stick:new Dn(.05,.05,.28,8).rotateZ(Math.PI/2),arrow:new Ar(.04,.44,6).rotateZ(-Math.PI/2),bolt:new Ar(.06,.34,6).rotateZ(-Math.PI/2),needle:new Ar(.022,.22,5).rotateZ(-Math.PI/2)},Co=new xt,Mr.add(Co),Io=new xt,Mr.add(Io),to=document.createElement("div"),to.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;font-family:Segoe UI,sans-serif;",wo.appendChild(to)}const Ua=new z;function UE(i){let e=0;for(const a of te.particles){if(e>=$l)break;Ao.setXYZ(e,a.x*mn,La+(1-a.life/a.maxLife)*.3,a.y*mn),Ua.set(a.color),Ro.setXYZ(e,Ua.r,Ua.g,Ua.b),e++}Ao.needsUpdate=!0,Ro.needsUpdate=!0,eo.geometry.setDrawRange(0,e),Da+=.22;const t={orb:0,rock:0,stick:0,arrow:0,bolt:0,needle:0};for(const a of i.projectiles){const o=a.visual??"orb",c=af[o];let l=c[t[o]];l||(l=new Oe($p[o],new dn({color:"#ffffff"})),Mr.add(l),c.push(l)),t[o]++,l.visible=!0;let d=0;if((o==="rock"||o==="stick")&&a.sx!==void 0&&a.sy!==void 0){const f=Math.hypot(a.tx-a.sx,a.ty-a.sy)||1,g=Math.hypot(a.x-a.sx,a.y-a.sy),y=Math.min(1,g/f),m=Math.min(.95,.35+f*mn*.05);d=Math.sin(y*Math.PI)*m}l.position.set(a.x*mn,La+d,a.y*mn),l.material.color.set(DE[o]??Mn[a.element].color);const u=Math.atan2(a.ty-a.y,a.tx-a.x);l.rotation.set(0,-u,0),o==="orb"?l.scale.set(1.8,1,1):o==="rock"?(l.scale.setScalar(1),l.rotation.x=Da,l.rotation.z=Da*.7):o==="stick"?(l.scale.setScalar(1),l.rotation.z=Da*1.6,Math.random()<.5&&te.burst(a.x,a.y,"#ffd75e",1,20,1.5,.2)):l.scale.setScalar(1)}for(const a of LE){const o=af[a];for(let c=t[a];c<o.length;c++)o[c].visible=!1}Co.clear();for(const a of te.arcs){const o=a.life/a.maxLife,c=a.pts.map(h=>new C(h.x*mn,La+.15,h.y*mn)),l=new vt().setFromPoints(c),d=new kd({color:a.color,transparent:!0,opacity:o,blending:ho,depthWrite:!1});Co.add(new Bo(l,d))}Io.clear();for(const a of te.rings){const o=1-a.life/a.maxLife,c=Math.max(.02,a.maxR*o*mn),l=new zo(c*.82,c,28),d=new dn({color:a.color,transparent:!0,opacity:(1-o)*.7,side:Wt,depthWrite:!1}),h=new Oe(l,d);h.rotation.x=-Math.PI/2,h.position.set(a.x*mn,.02,a.y*mn),Io.add(h)}const n=new Set,s={w:wo.clientWidth,h:wo.clientHeight},r=new C;for(const a of te.floaters){n.add(a);let o=Na.get(a);o||(o=document.createElement("div"),o.textContent=a.text,o.style.cssText=`position:absolute;transform:translate(-50%,-50%);font-weight:700;font-size:${a.size}px;color:${a.color};text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;`,to.appendChild(o),Na.set(a,o)),r.set(a.x*mn,La+.3,a.y*mn).project(qp),o.style.left=`${(r.x+1)/2*s.w}px`,o.style.top=`${(1-r.y)/2*s.h-(1-a.life/a.maxLife)*26}px`,o.style.opacity=String(Math.min(1,a.life/a.maxLife*2))}for(const[a,o]of Na)n.has(a)||(o.remove(),Na.delete(a))}const Rt=1/Nr,zi=Ur*Rt,ys=Fr*Rt;let Gn,Gt,Rs,Yl,Yp,no,Fa,Kl=[],Zl=[],Po,tn,Lr,Jl,li,An,Ii,Wi,Sr,io,Ql=0;async function FE(i,e){Gn=new Ob({canvas:i,antialias:!0,preserveDrawingBuffer:!0}),Gn.setSize(Ur,Fr,!1),Gn.setPixelRatio(Math.min(2,window.devicePixelRatio)),Gn.shadowMap.enabled=!0,Gn.shadowMap.type=Er,Gn.toneMapping=Md,Gn.toneMappingExposure=1.25,Gt=new v_,Gt.background=new z("#1a2419");const t=Ur/Fr,n=zi/2+.3,s=n/t;Rs=new Zr(-n,n,s,-s,.1,100);const r=new C(zi/2,0,ys/2-.2),a=ap.degToRad(52),o=30;Rs.position.set(r.x,Math.sin(a)*o,r.z+Math.cos(a)*o),Rs.lookAt(r),Po=new yx("#cfe8ff","#3a4a30",1.6),Gt.add(Po),tn=new Tp("#fff4d6",2.4),tn.position.set(zi*.3,14,ys*.15),tn.target.position.copy(r),tn.castShadow=!0,tn.shadow.mapSize.set(2048,2048);const c=15;tn.shadow.camera.left=-c,tn.shadow.camera.right=c,tn.shadow.camera.top=c,tn.shadow.camera.bottom=-c,tn.shadow.camera.far=60,Gt.add(tn,tn.target),Lr=new bt({roughness:1});const l=new Oe(new Kn(zi,ys),Lr);l.rotation.x=-Math.PI/2,l.position.set(zi/2,0,ys/2),l.receiveShadow=!0,Gt.add(l),Jl=new bt({color:"#1c2b1c",roughness:1});const d=new Oe(new Kn(zi*4,ys*4),Jl);d.rotation.x=-Math.PI/2,d.position.set(zi/2,-.02,ys/2),d.receiveShadow=!0,Gt.add(d),Kp(e.map.theme??od),await Zp(e),An=new Oe(new zo(.97,1,48),new dn({color:"#c9b8ff",transparent:!0,opacity:.5,side:Wt,depthWrite:!1})),An.rotation.x=-Math.PI/2,An.position.y=.03,An.visible=!1,Gt.add(An),Ii=new xt,Wi=An.clone(),Wi.material=An.material.clone(),Wi.visible=!0,Wi.position.set(0,.03,0),Sr=new Oe(new Kn(1,1),new dn({color:"#7dff9b",transparent:!0,opacity:.3,side:Wt,depthWrite:!1})),Sr.rotation.x=-Math.PI/2,Sr.position.y=.02,io=new Oe(new Dn(.28,.36,1,12),new bt({color:"#ffffff",transparent:!0,opacity:.45})),io.position.y=.5,Ii.add(Wi,Sr,io),Ii.visible=!1,Gt.add(Ii),Yl=new Vx,Yp=new Ai(new C(0,1,0),0);const h=e.track.posAt(e.track.total);Gp(Gt,new C(h.x*Rt,0,h.y*Rt)),NE(Gt,Rs,i.parentElement),await vE(),Ql=performance.now(),window.__scene=Gt}function Kp(i){Po.color.set(i.hemiSky),Po.groundColor.set(i.hemiGround),tn.color.set(i.sun),tn.intensity=i.sunIntensity,Gn.toneMappingExposure=i.exposure,Gt.fog=new Ud(i.fog,34,62),Gt.background=new z(i.fog).multiplyScalar(.35),Jl.color.set(i.grassB).multiplyScalar(.75)}async function Zp(i){var s;const e=i.map.theme??od,t=new F_(Em(i.track,i.map.water??[],e));t.colorSpace=kt,t.anisotropy=8,(s=Lr.map)==null||s.dispose(),Lr.map=t,Lr.needsUpdate=!0,li=new xt,Gt.add(li),of(i.track.posAt(0),"#b14aed"),of(i.track.posAt(i.track.total),"#3a86ff"),no=new xt;for(const[r,a]of i.map.water??[]){const o=new Oe(new Kn(1.02,1.02),new bt({color:new z(e.water).lerp(new z("#4f9fe4"),.4),transparent:!0,opacity:.72,roughness:.15,metalness:.25}));o.rotation.x=-Math.PI/2,o.position.set(r+.5,.04,a+.5),no.add(o)}li.add(no),Fa=new xt,Zl=[],Kl=[];const n=new bt({color:"#f4f9ff",transparent:!0,opacity:.88,roughness:.9});for(let r=0;r<i.clouds.length;r++){const a=new xt,o=[[0,0,0,.65],[.6,.1,.15,.45],[-.55,.05,-.1,.5],[.15,.35,-.2,.4]];for(const[l,d,h,u]of o){const f=new Oe(new Kr(u,12,10),n);f.position.set(l,d,h),a.add(f)}a.position.y=3.1,Fa.add(a),Zl.push(a);const c=new Oe(new Vd(1.05,24),new dn({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.03,Fa.add(c),Kl.push(c)}li.add(Fa),await BE(i)}function OE(i){li&&(Gt.remove(li),li.traverse(t=>{var s;const n=t;if(n.isMesh){(s=n.geometry)==null||s.dispose();const r=n.material;Array.isArray(r)?r.forEach(a=>a.dispose()):r==null||r.dispose()}})),Kp(i.map.theme??od);const e=i.track.posAt(i.track.total);Gp(Gt,new C(e.x*Rt,0,e.y*Rt)),Zp(i).catch(t=>console.warn("map rebuild failed",t))}async function BE(i){const e=i.map.props??[];if(e.length===0)return;const t=new Fp,n=new Map;for(const s of new Set(e.map(r=>r.model))){const r=gf[s];if(r)try{const a=await t.loadAsync(r.file);a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const o=new Sn().setFromObject(a.scene),c=Math.max(.001,o.max.y-o.min.y);n.set(s,{scene:a.scene,unitScale:r.height/c})}catch(a){console.warn(`prop model failed to load: ${s}`,a)}}for(const s of e){const r=n.get(s.model);if(!r)continue;const a=r.scene.clone(!0);a.scale.setScalar(r.unitScale*s.scale),a.position.set(s.x*Rt,0,s.y*Rt),a.rotation.y=-s.rot,li.add(a)}}function of(i,e){const t=new xt,n=new Oe(new Xd(.55,.09,10,24),new dn({color:e}));n.position.y=.7,n.rotation.y=i.angle+Math.PI/2;const s=new Ep(e,6,4);s.position.y=.7,t.add(n,s),t.position.set(i.x*Rt,0,i.y*Rt),li.add(t)}function Jp(i,e){const t=Gn.domElement,n=t.clientWidth||Ur,s=t.clientHeight||Fr,r=new xe(i/n*2-1,-(e/s)*2+1);Yl.setFromCamera(r,Rs);const a=new C;if(!Yl.ray.intersectPlane(Yp,a))return null;const o=a.x*Nr,c=a.z*Nr;return o<0||c<0||o>=Ur||c>=Fr?null:{x:o,y:c}}function kE(i){const e=performance.now(),t=Math.min(.1,(e-Ql)/1e3);Ql=e,RE(i,t),UE(i);const n=e/1e3;no.children.forEach((r,a)=>{r.position.y=.04+Math.sin(n*1.8+a*1.3)*.012,r.material.opacity=.68+Math.sin(n*2.4+a*.7)*.07}),i.clouds.forEach((r,a)=>{const o=Zl[a],c=Kl[a];o&&(o.position.set(r.x*Rt,3.1+Math.sin(n*.9+a)*.12,r.y*Rt),c.position.set(r.x*Rt,.03,r.y*Rt))});const s=Fo(i,i.selectedWizardId);if(s){An.visible=!0,An.position.set(s.x*Rt,.03,s.y*Rt);const r=s.stats.range*Rt;An.scale.setScalar(r)}else An.visible=!1;if(i.placingType&&i.mouseOnBoard){const r=bn[i.placingType],{cx:a,cy:o}=rd(i.mouseX,i.mouseY);if(vf(a,o)){const c=oo(i,a,o,r),l=_f(a,o);Ii.visible=!0,Ii.position.set(l.x*Rt,0,l.y*Rt),Wi.scale.setScalar(r.range*Rt);const d=c?"#7dff9b":"#ff6b6b";Wi.material.color.set(d),Sr.material.color.set(d),io.material.color.set(Mn[r.element].color)}else Ii.visible=!1}else Ii.visible=!1;Gn.render(Gt,Rs)}const ur=[[220,261.63,329.63],[174.61,220,261.63],[196,261.63,329.63],[196,246.94,293.66]],br=7.5,cf=.14;let Vc=!1,Hc=!0,Zi=0,Gc=0,Dr=0,so=0,Rn=null,ri=null,wi=null,Oa=null;const Cs={start(){if(Vc)return;const i=Ae.bus();i&&(Vc=!0,Rn=i.ctx.createGain(),Rn.gain.value=Hc?cf:0,Rn.connect(i.target),Dr=i.ctx.currentTime+.1,so=Dr,Oa=setInterval(()=>lf(i.ctx),500),lf(i.ctx))},setEnabled(i){Hc=i;const e=Ae.bus();Rn&&e&&(Rn.gain.cancelScheduledValues(e.ctx.currentTime),Rn.gain.linearRampToValueAtTime(i?cf:0,e.ctx.currentTime+.8))},isEnabled(){return Hc},setIntensity(i){i!==Zi&&(Zi=i,HE())},stop(){Oa&&clearInterval(Oa),Oa=null,Vc=!1}};function lf(i){if(!Rn)return;const e=i.currentTime+2.6;for(;Dr<e;)zE(i,ur[Gc%ur.length],Dr),Gc++,Dr+=br;const t=Zi>=2?.375:.5;for(;so<e;){if(Zi>=1){const n=ur[(Gc-1+ur.length)%ur.length][0]/2;VE(i,n,so)}so+=t}}function zE(i,e,t){const n=Zi>=2;for(const s of e)for(const r of[-3,3]){const a=i.createOscillator();a.type="triangle",a.frequency.value=s,a.detune.value=r;const o=i.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.055,t+2.2),o.gain.setValueAtTime(.055,t+br-2),o.gain.linearRampToValueAtTime(1e-4,t+br+.6);const c=i.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(n?500:750,t),c.frequency.linearRampToValueAtTime(n?380:950,t+br),a.connect(c),c.connect(o),o.connect(Rn),a.start(t),a.stop(t+br+.8)}}function VE(i,e,t){const n=i.createOscillator();n.type="sine",n.frequency.value=e;const s=i.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.09,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),n.connect(s),s.connect(Rn),n.start(t),n.stop(t+.35)}function HE(){const i=Ae.bus();if(!i||!Rn)return;const{ctx:e}=i;if(Zi>=2&&!ri){ri=e.createOscillator(),ri.type="sawtooth",ri.frequency.value=55;const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=160,wi=e.createGain(),wi.gain.setValueAtTime(1e-4,e.currentTime),wi.gain.linearRampToValueAtTime(.06,e.currentTime+2.5),ri.connect(t),t.connect(wi),wi.connect(Rn),ri.start()}else if(Zi<2&&ri&&wi){const t=ri;wi.gain.linearRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>t.stop(),1800),ri=null,wi=null}}let Qp,jp,jl,Jt,em,tm,nm,im,ai,df="";function GE(i){Qp=document.getElementById("hud-gold"),jp=document.getElementById("hud-lives"),jl=document.getElementById("hud-round"),Jt=document.getElementById("btn-start"),em=document.getElementById("wave-preview"),Jt.addEventListener("click",i),tm=document.getElementById("qb-gold"),nm=document.getElementById("qb-lives"),im=document.getElementById("qb-round"),ai=document.getElementById("qb-start"),ai.addEventListener("click",i)}function WE(i){var s;const e=`${i.gold}|${i.lives}|${i.round}|${i.act}|${i.phase}|${((s=i.waveModifier)==null?void 0:s.id)??""}|${i.nodeChoice}|${i.nodePicked}`;if(e===df)return;df=e;const t=wf(i)?`Act ${["I","II","III"][i.act]??i.act+1} · `:"";Qp.textContent=String(i.gold),jp.textContent=String(i.lives),jl.textContent=`${t}${Math.min(i.round+1,bs)}/${bs}`,tm.textContent=String(i.gold),nm.textContent=String(i.lives),im.textContent=jl.textContent;const n=i.round===bs-1;if(i.phase==="build"&&i.round<bs){const r=!i.nodePicked&&i.nextNodes.length>1;Jt.disabled=r;const a=n?" 👹 BOSS":i.nodeChoice==="elite"?" ★":i.nodeChoice==="treasure"?" 💎":"";Jt.textContent=r?"Choose your path…":`Start Wave ${i.round+1}${a}`,em.innerHTML=XE(i)}else i.phase==="wave"?(Jt.disabled=!0,Jt.textContent=i.waveModifier?`W${i.round+1} ★ ${i.waveModifier.name} (${i.waveModifier.desc})`:n?"👹 BOSS — hold the line!":`Wave ${i.round+1} — Defend!`):i.phase==="draft"?(Jt.disabled=!0,Jt.textContent="Choose a card…"):i.phase==="relic"?(Jt.disabled=!0,Jt.textContent="Claim your relic…"):i.phase==="actClear"?(Jt.disabled=!0,Jt.textContent=`Act ${["I","II","III"][i.act]} complete!`):(Jt.disabled=!0,Jt.textContent=i.phase==="won"?"Victory!":"Defeat");if(ai.disabled=Jt.disabled,i.phase==="build"){const r=!i.nodePicked&&i.nextNodes.length>1,a=n?" 👹":i.nodeChoice==="elite"?" ★":i.nodeChoice==="treasure"?" 💎":"";ai.textContent=r?"🗺️ path…":`▶ Wave ${i.round+1}${a}`}else i.phase==="wave"?ai.textContent=n?"👹 BOSS!":`⚔ Wave ${i.round+1}`:i.phase==="draft"?ai.textContent="🃏 pick a card":i.phase==="relic"?ai.textContent="💎 pick a relic":i.phase==="actClear"?ai.textContent="🏰 act complete":ai.textContent=i.phase==="won"?"🏆":"💀"}function XE(i){const e=cd(i.act)[i.round];if(!e)return"";const t=new Map;for(const s of e)t.set(s.type,(t.get(s.type)??0)+s.count);const n=[];for(const[s,r]of t){const a=pd[s];n.push(`${r}× ${a.name}${qE(s)}`)}return`<b>Next wave:</b> ${n.join(", ")}`}function qE(i){switch(i){case"knight":return" <i>(armored — burn them!)</i>";case"shade":return" <i>(fire-immune!)</i>";case"runner":return" <i>(fast — chill them!)</i>";case"golem":return" <i>(BOSS)</i>";case"golemling":return" <i>(mini-boss)</i>";case"warlord":return" <i>(BOSS — armor breaks to PHYSICAL only!)</i>";case"pyretitan":return" <i>(BOSS — fire-immune, cannot be chilled!)</i>";case"colossus":return" <i>(THE BOSS — armored, fire-hardened, cold-proof)</i>";case"orcbrute":return" <i>(armored — physical!)</i>";case"troll":return" <i>(armored + REGENERATES — crack, then burst!)</i>";case"warwagon":return" <i>(carrier — kill it EARLY, leaks -8!)</i>";case"siegetower":return" <i>(unloads orcs as it rolls, leaks -10!)</i>";case"orcshaman":return" <i>(HEALER — focus him first!)</i>";case"wardrummer":return" <i>(hastens the horde — silence the drums)</i>";case"wraith":return" <i>(phases out — spread your damage)</i>";default:return""}}const sm=new Map;function $E(i){const e=document.getElementById("shop");e.innerHTML="";for(const t of qc){const n=bn[t],s=Mn[n.element],r=document.createElement("div");r.className="shop-card",r.innerHTML=`
      <div class="shop-icon" style="background:${s.color}22;border:2px solid ${s.color}">
        <img src="${cn(`icons/portrait_${n.id}.png`)}" onerror="this.remove()" alt="" /><span>${n.icon}</span>
      </div>
      <div class="shop-info">
        <div class="shop-name">${n.name}</div>
        <div class="shop-desc">${n.desc}</div>
      </div>
      <div class="shop-cost">${n.cost}</div>
    `,r.addEventListener("click",()=>i(t)),e.appendChild(r),sm.set(t,r)}}function YE(i){for(const[e,t]of sm){const n=bn[e];t.classList.toggle("unaffordable",i.gold<n.cost),t.classList.toggle("selected",i.placingType===e)}}const KE=["first","last","strong","close"],ZE={first:"First",last:"Last",strong:"Strong",close:"Close"};let $i,Ba="",rm,am,om,cm;function JE(i){$i=document.getElementById("tower-panel"),rm=i.upgrade,am=i.sell,om=i.mode,cm=i.evolve}function QE(i){const e=Fo(i,i.selectedWizardId);if(!e||e.pendingSpecialize){Ba!==""&&($i.classList.add("hidden"),Ba="");return}const t=fd(i,e),n=`${e.id}|${e.def.id}|${e.tiers[0]}|${e.tiers[1]}|${e.mode}|${jE(i,e)}|${t?`${t.ok}${t.cost}`:""}`;n!==Ba&&(Ba=n,$i.classList.remove("hidden"),eT(i,e))}function jE(i,e){return[0,1].map(t=>{const n=e.def.upgrades[t].tiers[e.tiers[t]];return n?i.gold>=n.cost?"y":"n":"x"}).join("")}function eT(i,e){const t=e.stats,n=[`Dmg <b>${Math.round(t.damage)}</b>`,`Rate <b>${t.rate.toFixed(2)}s</b>`,`Range <b>${Math.round(t.range)}</b>`];t.splash>0&&n.push(`Splash <b>${Math.round(t.splash)}</b>`),t.chains>0&&n.push(`Chains <b>${t.chains}</b>`),t.burnDps>0&&n.push(`Burn <b>${t.burnDps}/s × ${t.burnDuration.toFixed(0)}s</b>`),t.chillPct>0&&n.push(`Chill <b>${Math.round(t.chillPct*100)}%</b>`),e.def.pierce&&n.push("<b>Pierces</b>"),t.entangleDur>0&&n.push(`Root <b>${t.entangleDur.toFixed(1)}s</b>`),t.rootSlow>0&&n.push(`Slow <b>${Math.round(t.rootSlow*100)}%</b>`),$i.innerHTML=`
    <div class="tp-title">${e.def.icon} ${e.def.name}</div>
    <div class="tp-stats">${n.join(" · ")}</div>
    <div class="tp-modes">${KE.map(r=>`<button class="tp-mode${e.mode===r?" active":""}" data-mode="${r}">${ZE[r]}</button>`).join("")}</div>
    <div id="tp-upgrades"></div>
    <button class="tp-sell">Sell for ${Vf(e)} ◉</button>
  `,$i.querySelectorAll(".tp-mode").forEach(r=>{r.addEventListener("click",()=>om(e,r.dataset.mode))}),$i.querySelector(".tp-sell").addEventListener("click",()=>am(e));const s=$i.querySelector("#tp-upgrades");if(e.def.isEvolved){const r=document.createElement("div");r.className="tp-evolved-tag",r.textContent="★ EVOLVED ★",s.appendChild(r)}else{[0,1].forEach(a=>{const o=e.def.upgrades[a],c=e.tiers[a],l=o.tiers[c],d=document.createElement("div");d.className="tp-upgrade";const h=l?c:o.tiers.length-1,u=`<img class="tp-upg-icon" src="${cn(`icons/upg_${e.def.id}_${a}_${h}.png`)}" onerror="this.style.display='none'" alt="" />`;if(!l)d.classList.add("maxed"),d.innerHTML=`
          ${u}<div><div class="tp-upg-name">${o.name} ★MAX</div>
          <div class="tp-upg-desc">All ${o.tiers.length} tiers owned</div></div>`;else{const f=i.gold>=l.cost;f||d.classList.add("unaffordable"),d.innerHTML=`
          ${u}<div style="flex:1"><div class="tp-upg-name">${o.name} ${c+1}/${o.tiers.length}: ${l.name}</div>
          <div class="tp-upg-desc">${l.desc}</div></div>
          <div class="tp-upg-cost">${l.cost}</div>`,f&&d.addEventListener("click",()=>rm(e,a))}s.appendChild(d),s.appendChild(document.createTextNode(" "))});const r=fd(i,e);if(r&&(r.ok||e.tiers[0]+e.tiers[1]>0)){const a=document.createElement("button");a.className="tp-evolve",a.disabled=!r.ok,a.innerHTML=r.ok?`⬆ EVOLVE — ${r.cost} ◉${r.discounted?" (card bonus!)":""}`:`⬆ Evolve: ${r.reason} (${r.cost} ◉${r.discounted?", card bonus":""})`,r.ok&&a.addEventListener("click",()=>cm(e)),s.appendChild(a)}}}let ed,td,nd,uf="";function tT(i){ed=document.getElementById("overlay"),td=document.getElementById("overlay-title"),nd=document.getElementById("overlay-text"),document.getElementById("btn-restart").addEventListener("click",i)}function nT(i){const e=i.phase==="won"||i.phase==="lost"?i.phase:"";if(e!==uf){if(uf=e,!e){ed.classList.add("hidden");return}ed.classList.remove("hidden"),xd(),e==="won"?(td.textContent="🏆 Victory!",nd.innerHTML=`The realm stands! ${i.lives} lives to spare.${hf(i)}`):(td.textContent="💀 Defeat",nd.innerHTML=`The horde broke through on wave ${i.round+1}.${hf(i)}`)}}function hf(i){var o;const e=i.stats,t=Object.entries(e.dmgByElement).filter(([,c])=>c>0);t.sort((c,l)=>l[1]-c[1]);const n=((o=t[0])==null?void 0:o[1])??1,s=t.map(([c,l])=>`
      <div class="sum-bar-row">
        <span class="sum-bar-label">${Mn[c].name}</span>
        <div class="sum-bar"><div style="width:${Math.max(4,l/n*100)}%;background:${Mn[c].color}"></div></div>
        <span class="sum-bar-val">${Math.round(l)}</span>
      </div>`).join(""),r=e.cardIds.map(c=>ld.find(l=>l.id===c)).filter(Boolean).map(c=>`<span class="sum-card" title="${c.name}">${c.icon}</span>`).join(""),a=e.reactions;return`
    <div id="run-summary">
      <div class="sum-line">Waves <b>${e.wavesCleared}</b> · Kills <b>${e.kills}</b> · Leaks <b>${e.leaks}</b></div>
      <div class="sum-line">💫 Conduct ×${a.conduct} · 💎 Shatter ×${a.shatter} · ♨️ Evaporate ×${a.evaporate} · 🧊 Frozen ×${a.frozen}</div>
      ${s?`<div class="sum-section">Damage by element</div>${s}`:""}
      ${r?`<div class="sum-section">Cards drafted (${e.cardIds.length})</div><div class="sum-cards">${r}</div>`:""}
    </div>`}const Lo=new URLSearchParams(location.search).get("map"),Zd=Lo&&xf(Lo)||void 0,Wc=Tg(),Do=Wc&&(!Lo||Lo===Wc.mapId)?wg(Wc):null;let ee=Do??Uo(Zd);const Ws=document.getElementById("board");Ws.addEventListener("mousemove",i=>{const e=Jp(i.offsetX,i.offsetY);e?(ee.mouseX=e.x,ee.mouseY=e.y,ee.mouseOnBoard=!0):ee.mouseOnBoard=!1});Ws.addEventListener("mouseleave",()=>{ee.mouseOnBoard=!1});const iT=window.matchMedia("(pointer: coarse)").matches;let Ss=null;Ws.addEventListener("click",i=>{const e=Jp(i.offsetX,i.offsetY);if(!e)return;const{cx:t,cy:n}=rd(e.x,e.y);if(!vf(t,n))return;if(ee.placingType){const r=bn[ee.placingType],a=Tu(ee,r.cost);if(iT){if(ee.mouseX=e.x,ee.mouseY=e.y,ee.mouseOnBoard=!0,!Ss||Ss.cx!==t||Ss.cy!==n){Ss={cx:t,cy:n},oo(ee,t,n,r)?te.floater(e.x,e.y-26,"tap again to build","#c9b8ff",12):te.floater(e.x,e.y-26,"can't build here","#ff9db5",12);return}Ss=null}if(oo(ee,t,n,r)&&uo(ee,a)){zf(ee,a);const o=hd(ee,r,t,n);o.invested=a,ee.wizards.push(o),te.burst(o.x,o.y,r.color,14,120,3),Ae.place(),(!i.shiftKey||!uo(ee,Tu(ee,r.cost)))&&(ee.placingType=null),ee.selectedWizardId=o.id}return}const s=Rf(ee,t,n);ee.selectedWizardId=s?s.id:null});Ws.addEventListener("contextmenu",i=>{i.preventDefault(),ee.placingType=null,ee.selectedWizardId=null});window.addEventListener("keydown",i=>{i.key==="Escape"?(ee.placingType=null,ee.selectedWizardId=null):i.key===" "?(i.preventDefault(),vd(ee)):i.key>="1"&&i.key<=String(qc.length)&&lm(qc[Number(i.key)-1])});function lm(i){if(ee.phase==="won"||ee.phase==="lost")return;const e=bn[i];uo(ee,e.cost)&&(ee.placingType=ee.placingType===i?null:i,ee.selectedWizardId=null,Ss=null)}$E(lm);GE(()=>vd(ee));Lg(()=>{Ji(ee),ee.autoplay&&(ee.autoplayTimer=1.2)});Ug(()=>{Ji(ee)});kg(()=>{Ji(ee),ee.autoplay&&(ee.autoplayTimer=1.2)});qg(()=>{Ji(ee)});Kg();e0(i=>{zm(i)&&(OE(i),te.clear(),te.floater(480,120,`⚑ ${i.map.name} — Act ${["I","II","III"][i.act]}`,"#7dff9b",16),Ji(i))});var mf;(mf=document.getElementById("btn-newrun"))==null||mf.addEventListener("click",()=>{xd(),ee=Uo(Zd??(Do?ee.map:void 0)),te.clear(),Ae.click()});Do&&te.floater(480,120,`▶ Run resumed — Wave ${Do.round+1}`,"#7dff9b",15);tT(()=>{xd(),ee=Uo(Zd),te.clear()});const id=document.getElementById("map-select");for(const i of Tm()){const e=document.createElement("option");e.value=i.id,e.textContent=(i.custom?"✏️ ":"")+i.name,i.id===(ee.map.id??"vale")&&(e.selected=!0),id.appendChild(e)}id.addEventListener("change",()=>{location.href=`${location.pathname}?map=${encodeURIComponent(id.value)}`});JE({upgrade(i,e){const t=i.def.upgrades[e].tiers[i.tiers[e]];!t||!zf(ee,t.cost)||(i.tiers[e]++,i.invested+=t.cost,i.stats=Li(i.def,i.tiers),te.burst(i.x,i.y,"#c9b8ff",12,110,3),te.floater(i.x,i.y-24,t.name+"!","#c9b8ff",12),Ae.upgrade())},sell(i){Ig(ee,i),Ae.sell()},mode(i,e){i.mode=e,Ae.click()},evolve(i){const e=i.def.name;qm(ee,i)&&(te.ring(i.x,i.y,"#ffd75e",60),te.burst(i.x,i.y,"#ffd75e",24,180,4,.7),te.floater(i.x,i.y-34,`${e} → ${i.def.name}!`,"#ffd75e",15),Ae.win(),Ji(ee))}});function dm(i){ee.speed=i,document.querySelectorAll(".btn-speed").forEach(e=>e.classList.toggle("active",Number(e.dataset.speed)===i)),um.textContent=`${i}×`}document.querySelectorAll(".btn-speed").forEach(i=>{i.addEventListener("click",()=>dm(Number(i.dataset.speed)))});const um=document.getElementById("qb-speed"),ff=document.getElementById("qb-auto");um.addEventListener("click",()=>dm(ee.speed>=3?1:ee.speed+1));ff.addEventListener("click",()=>{ee.autoplay=!ee.autoplay,ff.classList.toggle("active",ee.autoplay),document.getElementById("chk-auto").checked=ee.autoplay,ee.autoplay&&ee.phase==="build"&&(ee.autoplayTimer=.8)});const hm=()=>{Ae.init(),Cs.start()};window.addEventListener("pointerdown",hm,{once:!0});window.addEventListener("keydown",hm,{once:!0});const Xc=document.getElementById("btn-music");Xc.addEventListener("click",()=>{Cs.setEnabled(!Cs.isEnabled()),Xc.textContent=Cs.isEnabled()?"🎵":"🎵̸",Xc.style.opacity=Cs.isEnabled()?"1":"0.4"});const pf=document.getElementById("btn-mute");pf.addEventListener("click",()=>{Ae.setMuted(!Ae.isMuted()),pf.textContent=Ae.isMuted()?"🔇":"🔊"});document.getElementById("vol-slider").addEventListener("input",i=>{Ae.setVolume(Number(i.target.value)/100)});document.getElementById("chk-auto").addEventListener("change",i=>{ee.autoplay=i.target.checked,ee.autoplay&&ee.phase==="build"&&(ee.autoplayTimer=.8)});function fm(i){ee.phase==="build"&&Pf(ee);const e=ee.phase==="build"&&!ee.nodePicked&&ee.nextNodes.length>1;if(ee.phase==="won"||ee.phase==="lost"||ee.phase==="draft"||ee.phase==="relic"||ee.phase==="actClear"||ee.pendingEvent!==null||e){te.update(i);return}Rg(ee,i),cg(ee,i),dg(ee,i),xg(ee,i),bg(ee,i),te.update(i)}function pm(){Cs.setIntensity(ee.phase!=="wave"?0:ee.round===bs-1?2:1),kE(ee),WE(ee),YE(ee),QE(ee),Dg(ee),Fg(ee),zg(ee),$g(ee),Zg(ee),t0(ee),nT(ee)}FE(Ws,ee).then(()=>{Rm(fm,pm,()=>ee.speed)}).catch(i=>{console.error("renderer failed to initialize",i);const e=Ws.parentElement,t=document.createElement("div");t.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#ff9db5;font-size:15px;text-align:center;padding:20px;",t.textContent=`Failed to load game assets: ${(i==null?void 0:i.message)??i}. Try refreshing.`,e.appendChild(t)});Object.defineProperty(window,"__game",{get:()=>ee});window.__fx=te;window.__computeStats=Li;window.__place=(i,e,t)=>{const n=bn[i];if(!n||!oo(ee,e,t,n))return null;const s=hd(ee,n,e,t);return ee.wizards.push(s),s.id};window.__specialize=(i,e)=>{var s;const t=Fo(ee,i),n=((s=t==null?void 0:t.specializeOptions)==null?void 0:s.find(r=>r.id===e))??bn[e];return!t||!n?!1:(Cf(ee,t,n),!0)};window.__step=i=>{const e=.016666666666666666,t=Math.min(60*600,Math.round(i/e));for(let n=0;n<t;n++)fm(e);return pm(),{phase:ee.phase,enemies:ee.enemies.length,round:ee.round}};
