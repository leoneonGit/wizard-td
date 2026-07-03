import{M as Ed,D as jm,g as yo,T as Pu,P as Vf,h as eg,j as Td,k as Hf,A as wd,c as Gf,m as un,b as $r,a as rs,B as Ks,n as Ad,C as Tr,R as wr,p as tg,o as Wf,l as ng}from"./mapio-DkjbxsB7.js";const cc=1/60,Lu=300,ig=350,sg=250;function rg(n,e,t){let i=performance.now(),s=0,r=performance.now();function a(c,l){const d=Math.min((c-i)/1e3,.25);i=c,s+=d*t();let h=0;for(;s>=cc&&h<Lu;)n(cc),s-=cc,h++;h===Lu&&(s=0),e()}function o(c){r=c,a(c),requestAnimationFrame(o)}requestAnimationFrame(o),setInterval(()=>{const c=performance.now();c-r>ig&&a(c)},sg)}const jt={fire:{id:"fire",name:"Fire Mage",element:"fire",placement:"ground",family:"wizard",cost:100,desc:"Hurls fireballs. Splash damage, ignites enemies (Burn). Shatters Frozen foes.",range:130,rate:.95,damage:14,projSpeed:340,splash:34,chains:0,chainFalloff:0,color:"#ff6b35",icon:"🔥",upgrades:[{name:"Inferno",tiers:[{name:"Hotter Flames",cost:70,desc:"+6 damage",mod:{damage:6}},{name:"Searing Burn",cost:140,desc:"Burn +8 dps, +1s",mod:{burnDps:8,burnDuration:1}},{name:"Blast Wave",cost:320,desc:"+22 splash radius, +10 dmg",mod:{splash:22,damage:10}}]},{name:"Pyromancy",tiers:[{name:"Quick Cast",cost:80,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Far Sight",cost:120,desc:"+30 range",mod:{range:30}},{name:"Rapid Fire",cost:300,desc:"30% faster attacks",mod:{rateMul:.7}}]}]},ice:{id:"ice",name:"Frost Mage",element:"ice",placement:"ground",family:"wizard",cost:110,desc:"Chills and Soaks (Wet) enemies; stacked Chill Freezes. Enables Conduct & Shatter.",range:120,rate:.75,damage:7,projSpeed:300,splash:0,chains:0,chainFalloff:0,color:"#5bc8f5",icon:"❄️",upgrades:[{name:"Deep Freeze",tiers:[{name:"Bitter Cold",cost:70,desc:"Chill slows +15%",mod:{chillPct:.15}},{name:"Lasting Soak",cost:110,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Permafrost",cost:280,desc:"Chill slows +20%, +6 dmg",mod:{chillPct:.2,damage:6}}]},{name:"Glacier",tiers:[{name:"Ice Shards",cost:80,desc:"+5 damage",mod:{damage:5}},{name:"Frost Nova",cost:160,desc:"Attacks splash (26)",mod:{splash:26}},{name:"Winter Reach",cost:240,desc:"+35 range, faster cast",mod:{range:35,rateMul:.85}}]}]},lightning:{id:"lightning",name:"Storm Mage",element:"lightning",placement:"ground",family:"wizard",cost:140,desc:"Chain lightning arcs between enemies. Conducts brutally through Wet targets.",range:145,rate:1.15,damage:18,projSpeed:0,splash:0,chains:2,chainFalloff:.65,color:"#c77dff",icon:"⚡",upgrades:[{name:"Tempest",tiers:[{name:"Forked Bolt",cost:90,desc:"+1 chain target",mod:{chains:1}},{name:"High Voltage",cost:150,desc:"+10 damage",mod:{damage:10}},{name:"Storm Front",cost:340,desc:"+2 chain targets",mod:{chains:2}}]},{name:"Stormcalling",tiers:[{name:"Static Charge",cost:80,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Long Arc",cost:130,desc:"+35 range",mod:{range:35}},{name:"Overload",cost:320,desc:"+14 dmg, 15% faster",mod:{damage:14,rateMul:.85}}]}]},water:{id:"water",name:"Water Mage",element:"water",placement:"water",family:"wizard",auraKind:"tide",cost:120,desc:"Builds ONLY on water. Pulsing tide Soaks (Wet) and slows everything in range — the reaction engine.",range:115,rate:1.6,damage:8,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#3a86ff",icon:"🌊",upgrades:[{name:"Tides",tiers:[{name:"Undertow",cost:70,desc:"Slow +10%",mod:{soakSlow:.1}},{name:"Deep Soak",cost:120,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Riptide",cost:280,desc:"Slow +15%, +8 dmg",mod:{soakSlow:.15,damage:8}}]},{name:"Depths",tiers:[{name:"Swell",cost:80,desc:"+25 range",mod:{range:25}},{name:"Surge",cost:140,desc:"25% faster pulses",mod:{rateMul:.75}},{name:"Tsunami",cost:300,desc:"+12 dmg, +20 range",mod:{damage:12,range:20}}]}]},wind:{id:"wind",name:"Cloud Mage",element:"wind",placement:"ground",needsCloud:!0,family:"wizard",auraKind:"gust",cost:160,desc:"Rides the wind: only attacks while a cloud drifts nearby. Gusts hurl enemies BACKWARD along the path.",range:130,rate:2.2,damage:6,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#b8d8d0",icon:"☁️",upgrades:[{name:"Gale",tiers:[{name:"Stiff Breeze",cost:80,desc:"+25px knockback",mod:{knockback:25}},{name:"Squall",cost:150,desc:"+10 dmg",mod:{damage:10}},{name:"Hurricane",cost:320,desc:"+45px knockback",mod:{knockback:45}}]},{name:"Zephyr",tiers:[{name:"Second Wind",cost:90,desc:"20% faster gusts",mod:{rateMul:.8}},{name:"High Winds",cost:140,desc:"+30 range",mod:{range:30}},{name:"Jetstream",cost:300,desc:"30% faster gusts",mod:{rateMul:.7}}]}]},slingshot:{id:"slingshot",name:"Slingshot Goblin",element:"physical",placement:"ground",family:"goblin",cost:75,desc:"Cheap, fast, reliable. Physical damage always lands at full strength — no resistances apply.",range:110,rate:.6,damage:8,projSpeed:380,splash:0,chains:0,chainFalloff:0,color:"#a08060",icon:"🪨",upgrades:[{name:"Quickdraw",tiers:[{name:"Taut Cord",cost:60,desc:"+3 damage",mod:{damage:3}},{name:"Rapid Sling",cost:110,desc:"18% faster attacks",mod:{rateMul:.82}},{name:"Iron Shot",cost:240,desc:"+7 damage",mod:{damage:7}}]},{name:"Marksmanship",tiers:[{name:"Keen Eye",cost:60,desc:"+20 range",mod:{range:20}},{name:"Steady Hand",cost:100,desc:"+5 damage",mod:{damage:5}},{name:"Deadeye",cost:220,desc:"15% faster, +25 range",mod:{rateMul:.85,range:25}}]}]},dynamite:{id:"dynamite",name:"Dynamite Goblin",element:"fire",placement:"ground",family:"goblin",cost:95,desc:"Lobs sputtering dynamite for big splash damage and Burn. Shares fire’s strengths — and its counters.",range:100,rate:1.5,damage:10,projSpeed:220,splash:42,chains:0,chainFalloff:0,color:"#e0522f",icon:"🧨",upgrades:[{name:"Bigger Bangs",tiers:[{name:"Extra Fuse",cost:65,desc:"+5 damage",mod:{damage:5}},{name:"Shrapnel",cost:120,desc:"+16 splash radius",mod:{splash:16}},{name:"Volatile Mix",cost:260,desc:"Burn +6 dps, +1s",mod:{burnDps:6,burnDuration:1}}]},{name:"Munitions",tiers:[{name:"Quick Fuse",cost:70,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Long Toss",cost:100,desc:"+20 range",mod:{range:20}},{name:"Blasting Cap",cost:250,desc:"+9 damage, +14 splash",mod:{damage:9,splash:14}}]}]},gong:{id:"gong",name:"Gong Goblin",element:"physical",placement:"ground",family:"goblin",auraKind:"rattle",cost:85,desc:"Support, not a damage dealer. Pulses a Rattling gong that makes nearby foes take extra damage from everything.",range:105,rate:3,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a63f",icon:"🔔",upgrades:[{name:"Resonance",tiers:[{name:"Bigger Gong",cost:65,desc:"Rattled +8% damage taken",mod:{rattlePct:.08}},{name:"Echo",cost:110,desc:"+25 range",mod:{range:25}},{name:"Thunderous Peal",cost:240,desc:"Rattled +10% damage taken",mod:{rattlePct:.1}}]},{name:"Cadence",tiers:[{name:"Steady Beat",cost:70,desc:"20% faster pulses",mod:{rateMul:.8}},{name:"War Rhythm",cost:110,desc:"+20 range",mod:{range:20}},{name:"Relentless Toll",cost:230,desc:"25% faster pulses",mod:{rateMul:.75}}]}]},longbow:{id:"longbow",name:"Elf Longbow",element:"physical",placement:"ground",family:"archer",cost:110,desc:"Elven marksman. Enormous range, heavy single arrows — the sniper of the realm.",range:195,rate:2,damage:34,projSpeed:560,splash:0,chains:0,chainFalloff:0,color:"#7dc98f",icon:"🏹",upgrades:[{name:"Marksman",tiers:[{name:"Heavy Draw",cost:80,desc:"+12 damage",mod:{damage:12}},{name:"Eagle Eye",cost:130,desc:"+35 range",mod:{range:35}},{name:"Heartseeker",cost:320,desc:"+24 damage",mod:{damage:24}}]},{name:"Fleetness",tiers:[{name:"Swift Nock",cost:75,desc:"15% faster shots",mod:{rateMul:.85}},{name:"Windrunner",cost:140,desc:"20% faster shots",mod:{rateMul:.8}},{name:"Arrowstorm",cost:300,desc:"+10 dmg, 15% faster",mod:{damage:10,rateMul:.85}}]}]},ballesta:{id:"ballesta",name:"Human Ballesta",element:"physical",placement:"ground",family:"archer",pierce:!0,cost:100,desc:"Crank-loaded crossbow. Short range, but bolts PIERCE clean through everything in a line.",range:95,rate:1.2,damage:12,projSpeed:480,splash:0,chains:0,chainFalloff:0,color:"#5b7fc9",icon:"🎯",upgrades:[{name:"Penetration",tiers:[{name:"Steel Bolts",cost:70,desc:"+5 damage",mod:{damage:5}},{name:"Windlass",cost:130,desc:"20% faster reload",mod:{rateMul:.8}},{name:"Arbalest",cost:300,desc:"+12 damage",mod:{damage:12}}]},{name:"Fieldcraft",tiers:[{name:"Braced Stock",cost:65,desc:"+18 range",mod:{range:18}},{name:"Quick Hands",cost:120,desc:"15% faster reload",mod:{rateMul:.85}},{name:"Siege Position",cost:260,desc:"+30 range, +6 dmg",mod:{range:30,damage:6}}]}]},bolas:{id:"bolas",name:"Orc Trapper",element:"physical",placement:"ground",family:"archer",entangles:!0,cost:115,desc:"Hurls bolas that ENTANGLE — roots enemies in place. Pure lockdown; never disturbs your Freeze combos.",range:125,rate:1.8,damage:6,projSpeed:320,splash:0,chains:0,chainFalloff:0,color:"#8c9c72",icon:"🪢",upgrades:[{name:"Snares",tiers:[{name:"Heavier Weights",cost:75,desc:"Entangle +0.4s",mod:{entangleDur:.4}},{name:"Barbed Cords",cost:130,desc:"+8 damage",mod:{damage:8}},{name:"Master Trapper",cost:300,desc:"Entangle +0.6s",mod:{entangleDur:.6}}]},{name:"Warcraft",tiers:[{name:"Strong Arm",cost:70,desc:"+25 range",mod:{range:25}},{name:"Rapid Toss",cost:125,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Twin Bolas",cost:280,desc:"25% faster, +5 dmg",mod:{rateMul:.75,damage:5}}]}]},rootgrasp:{id:"rootgrasp",name:"Rootgrasp Tree",element:"physical",placement:"ground",family:"tree",groundAttack:!0,cost:90,desc:"Roots erupt beneath enemies — no projectile to dodge, and every strike SLOWS.",range:110,rate:1.4,damage:9,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#6a8f4f",icon:"🌳",upgrades:[{name:"Deep Roots",tiers:[{name:"Gnarled Grip",cost:70,desc:"Slow +10% stronger",mod:{rootSlow:.1}},{name:"Thick Taproot",cost:120,desc:"+6 damage",mod:{damage:6}},{name:"Strangleroot",cost:280,desc:"Slow +15%, +6 dmg",mod:{rootSlow:.15,damage:6}}]},{name:"Overgrowth",tiers:[{name:"Spreading Roots",cost:75,desc:"+22 range",mod:{range:22}},{name:"Quickened Sap",cost:130,desc:"20% faster strikes",mod:{rateMul:.8}},{name:"Ancient Reach",cost:260,desc:"+30 range, +5 dmg",mod:{range:30,damage:5}}]}]},boulder:{id:"boulder",name:"Boulder Tree",element:"physical",placement:"ground",family:"tree",cost:105,desc:"An old ent that hurls boulders. Slow, furious, and the splash flattens whole clumps.",range:135,rate:2.6,damage:24,projSpeed:210,splash:46,chains:0,chainFalloff:0,color:"#8d7a5e",icon:"🪨",upgrades:[{name:"Avalanche",tiers:[{name:"Bigger Rocks",cost:80,desc:"+10 damage",mod:{damage:10}},{name:"Wide Impact",cost:140,desc:"+16 splash radius",mod:{splash:16}},{name:"Meteor Toss",cost:320,desc:"+18 dmg, +12 splash",mod:{damage:18,splash:12}}]},{name:"Old Growth",tiers:[{name:"Long Arms",cost:70,desc:"+25 range",mod:{range:25}},{name:"Limber Boughs",cost:130,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Wrath of Ages",cost:300,desc:"25% faster throws",mod:{rateMul:.75}}]}]},thornspitter:{id:"thornspitter",name:"Thornspitter",element:"physical",placement:"ground",family:"tree",cost:95,desc:'A bristling bush that machine-guns needles — the fastest attacker in the realm. Loves "every Nth shot" cards.',range:100,rate:.25,damage:3,projSpeed:450,splash:0,chains:0,chainFalloff:0,color:"#4f8f5c",icon:"🌵",upgrades:[{name:"Bristles",tiers:[{name:"Sharper Thorns",cost:70,desc:"+2 damage",mod:{damage:2}},{name:"Dense Quills",cost:130,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Ironwood Barbs",cost:300,desc:"+4 damage",mod:{damage:4}}]},{name:"Wildgrowth",tiers:[{name:"Tall Canes",cost:65,desc:"+20 range",mod:{range:20}},{name:"Feverish Growth",cost:125,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Bramble Storm",cost:280,desc:"+2 dmg, +20 range",mod:{damage:2,range:20}}]}]},generic_wizard:{id:"generic_wizard",name:"Wizard",element:"physical",placement:"any",family:"wizard",isGeneric:!0,cost:90,desc:"An unproven apprentice. Place, then click to specialize into a random draw of elements.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#8a7aff",icon:"🧙",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_goblin:{id:"generic_goblin",name:"Goblin",element:"physical",placement:"ground",family:"goblin",isGeneric:!0,cost:75,desc:"A goblin recruit, itching for a job. Place, then click to specialize into a random draw of roles.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#7da35c",icon:"👺",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_archer:{id:"generic_archer",name:"Archer",element:"physical",placement:"ground",family:"archer",isGeneric:!0,cost:85,desc:"A fresh recruit with a training bow. Place, then click to specialize into a random draw of marksmen.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a55b",icon:"🏹",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_tree:{id:"generic_tree",name:"Sapling",element:"physical",placement:"ground",family:"tree",isGeneric:!0,cost:70,desc:"A drowsy young ent. Place, then click to awaken it into a random draw of tree-folk.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#5f9e57",icon:"🌱",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]}},dl=["generic_wizard","generic_goblin","generic_archer","generic_tree"];function ag(n){return Object.values(jt).filter(e=>e.family===n&&!e.isGeneric&&!e.isEvolved)}const og=[{name:"—",tiers:[]},{name:"—",tiers:[]}],cg={fire:{to:"phoenix",cost:380,cardId:"pr_wildfire"},ice:{to:"wintercourt",cost:380,cardId:"pr_executioner"},lightning:{to:"tempest",cost:400,cardId:"rx_conduct2"},water:{to:"tidelord",cost:350,cardId:"pr_soaked"},wind:{to:"zephyr",cost:350,cardId:"rx_evap1"},slingshot:{to:"warlord",cost:340,cardId:"pr_firstblood"},dynamite:{to:"sapperking",cost:380,cardId:"pr_powder"},gong:{to:"doomgong",cost:360,cardId:"pr_opportunist"},longbow:{to:"stormpiercer",cost:400,cardId:"arc_crit1"},ballesta:{to:"ironstorm",cost:360,cardId:"arc_root1"},bolas:{to:"chainwarden",cost:350,cardId:"arc_root1"},rootgrasp:{to:"elderroot",cost:360,cardId:"tre_crit1"},boulder:{to:"mountain",cost:400,cardId:"pr_harvest"},thornspitter:{to:"bramblehydra",cost:380,cardId:"tre_crit1"}};function tn(n,e){const t=jt[n];return{element:t.element,placement:t.placement,family:t.family,cost:0,range:t.range,rate:t.rate,damage:t.damage,projSpeed:t.projSpeed,splash:t.splash,chains:t.chains,chainFalloff:t.chainFalloff,needsCloud:t.needsCloud,auraKind:t.auraKind,pierce:t.pierce,entangles:t.entangles,groundAttack:t.groundAttack,isEvolved:!0,upgrades:og,...e}}Object.assign(jt,{phoenix:tn("fire",{id:"phoenix",name:"Phoenix Herald",icon:"🐦‍🔥",color:"#ff8c42",desc:"EVOLVED. Fire made flesh — victims pass their flames on death, forever.",damage:26,rate:.75,splash:44,range:145,projSpeed:340,baseMods:{burnDps:5,burnDuration:1},innateFx:{spreadBurnOnDeath:!0}}),wintercourt:tn("ice",{id:"wintercourt",name:"Winter Court Sage",icon:"👑",color:"#a8e6ff",desc:"EVOLVED. The deep cold answers — Frozen enemies take +60% from her hand.",damage:15,rate:.6,range:155,projSpeed:400,baseMods:{chillPct:.15},innateFx:{bonusVsStatus:{status:"frozen",mult:1.6}}}),tempest:tn("lightning",{id:"tempest",name:"Tempest Lord",icon:"🌩️",color:"#d9a8ff",desc:"EVOLVED. The storm has opinions. Every 5th bolt is a CRIT; chains run long.",damage:32,rate:.9,range:165,chains:4,chainFalloff:.8,innateFx:{critEveryN:{n:5,mult:2}}}),tidelord:tn("water",{id:"tidelord",name:"Tidelord",icon:"🔱",color:"#26c2e8",desc:"EVOLVED. The pond obeys. Wet enemies take +50% from the tide.",damage:11,rate:.8,range:150,baseMods:{soakSlow:.1,wetDuration:2},innateFx:{bonusVsStatus:{status:"wet",mult:1.5}}}),zephyr:tn("wind",{id:"zephyr",name:"Zephyr Sovereign",icon:"🌀",color:"#bcd9ce",desc:"EVOLVED. Commands the wind itself — no cloud required, and the gusts hit like walls.",damage:9,rate:1,range:140,needsCloud:!1,baseMods:{knockback:40}}),warlord:tn("slingshot",{id:"warlord",name:"Goblin Warlord",icon:"👹",color:"#7da35c",desc:"EVOLVED. His shots pierce through the whole column. The lads cheer every volley.",damage:18,rate:.7,range:130,pierce:!0,projSpeed:460}),sapperking:tn("dynamite",{id:"sapperking",name:"Sapper King",icon:"💥",color:"#ffb163",desc:"EVOLVED. Everything he kills becomes a bomb. Chain reactions are the point.",damage:32,rate:1,splash:62,range:135,innateFx:{onKillExplode:{damage:26,radius:52}}}),doomgong:tn("gong",{id:"doomgong",name:"Gong of Doom",icon:"🛎️",color:"#f4d98a",desc:"EVOLVED. One strike and the whole field flinches — Rattled +40%, huge reach.",rate:1.6,range:160,baseMods:{rattlePct:.15}}),stormpiercer:tn("longbow",{id:"stormpiercer",name:"Stormpiercer",icon:"🏹",color:"#7dc98f",desc:"EVOLVED. An elven legend. Every 3rd arrow CRITS for double across half the map.",damage:55,rate:1.5,range:240,projSpeed:650,innateFx:{critEveryN:{n:3,mult:2}}}),ironstorm:tn("ballesta",{id:"ironstorm",name:"Ironstorm Arbalest",icon:"🎯",color:"#5b7fc9",desc:"EVOLVED. A crank-fed storm of bolts, each punching through the entire line.",damage:20,rate:.65,range:115,projSpeed:540}),chainwarden:tn("bolas",{id:"chainwarden",name:"Warden of Chains",icon:"⛓️",color:"#8c9c72",desc:"EVOLVED. Longer roots, crueler hits — Entangled enemies take +50% from him.",damage:12,rate:1.3,range:145,baseMods:{entangleDur:.5},innateFx:{bonusVsStatus:{status:"entangled",mult:1.5}}}),elderroot:tn("rootgrasp",{id:"elderroot",name:"Elderroot Colossus",icon:"🌲",color:"#4c6b38",desc:"EVOLVED. The forest remembers. Wider eruptions, crushing grip.",damage:17,rate:1.1,range:135,baseMods:{rootSlow:.15}}),mountain:tn("boulder",{id:"mountain",name:"The Walking Mountain",icon:"⛰️",color:"#8d7a5e",desc:"EVOLVED. Every kill splinters into shrapnel. Whole waves vanish under the rubble.",damage:42,rate:2.2,splash:62,range:150,projSpeed:240,innateFx:{onKillExplode:{damage:20,radius:48}}}),bramblehydra:tn("thornspitter",{id:"bramblehydra",name:"Bramble Hydra",icon:"🐉",color:"#6fcf5f",desc:"EVOLVED. Two heads, twice the needles, zero mercy. The ultimate proc machine.",damage:4,rate:.125,range:115,projSpeed:500})});function Xf(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ul=[[[{type:"grunt",count:8,gap:.9,delay:0}],[{type:"grunt",count:13,gap:.7,delay:0}],[{type:"grunt",count:10,gap:.65,delay:0},{type:"runner",count:5,gap:.8,delay:3}],[{type:"runner",count:15,gap:.5,delay:0}],[{type:"knight",count:6,gap:1.3,delay:0},{type:"grunt",count:9,gap:.55,delay:4}],[{type:"golemling",count:1,gap:0,delay:0},{type:"grunt",count:10,gap:.7,delay:2}],[{type:"shade",count:9,gap:.85,delay:0},{type:"runner",count:6,gap:.65,delay:5}],[{type:"grunt",count:10,gap:.5,delay:0},{type:"orcraider",count:6,gap:.7,delay:2},{type:"knight",count:5,gap:1.1,delay:5},{type:"shade",count:5,gap:.9,delay:8}],[{type:"runner",count:14,gap:.42,delay:0},{type:"orcbrute",count:1,gap:0,delay:3},{type:"knight",count:6,gap:1.1,delay:4},{type:"shade",count:5,gap:.9,delay:9}],[{type:"warlord",count:1,gap:0,delay:0},{type:"knight",count:4,gap:1.6,delay:5},{type:"grunt",count:8,gap:.6,delay:9}]],[[{type:"orcraider",count:12,gap:.55,delay:0},{type:"runner",count:6,gap:.6,delay:4}],[{type:"shade",count:10,gap:.7,delay:0},{type:"orcbrute",count:2,gap:3,delay:4},{type:"slime_big",count:2,gap:5,delay:2}],[{type:"orcraider",count:10,gap:.5,delay:0},{type:"orcshaman",count:1,gap:0,delay:2},{type:"gargoyle",count:4,gap:1.2,delay:3},{type:"knight",count:6,gap:.9,delay:4}],[{type:"runner",count:24,gap:.32,delay:0},{type:"thief",count:1,gap:0,delay:5}],[{type:"warwagon",count:1,gap:0,delay:0},{type:"hexer",count:1,gap:0,delay:2},{type:"shade",count:8,gap:.7,delay:3}],[{type:"knight",count:8,gap:.8,delay:0},{type:"orcshaman",count:2,gap:6,delay:2},{type:"gargoyle",count:5,gap:1,delay:3},{type:"orcraider",count:12,gap:.45,delay:4}],[{type:"runner",count:14,gap:.4,delay:0},{type:"orcbrute",count:3,gap:2.5,delay:3},{type:"slime_big",count:2,gap:4,delay:5},{type:"thief",count:1,gap:0,delay:6},{type:"golemling",count:1,gap:0,delay:7}],[{type:"warwagon",count:2,gap:9,delay:0},{type:"hexer",count:2,gap:7,delay:2},{type:"shade",count:10,gap:.6,delay:3}],[{type:"orcraider",count:16,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"gargoyle",count:6,gap:.9,delay:3},{type:"shieldbearer",count:1,gap:0,delay:4},{type:"orcbrute",count:3,gap:2.2,delay:5},{type:"knight",count:6,gap:.9,delay:9}],[{type:"pyretitan",count:1,gap:0,delay:0},{type:"orcshaman",count:1,gap:0,delay:4},{type:"gargoyle",count:4,gap:1.1,delay:5},{type:"orcraider",count:10,gap:.5,delay:6}]],[[{type:"orcraider",count:14,gap:.5,delay:0},{type:"wardrummer",count:1,gap:0,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"orcbrute",count:2,gap:3,delay:4}],[{type:"wraith",count:6,gap:1,delay:0},{type:"banshee",count:2,gap:4,delay:2},{type:"runner",count:12,gap:.4,delay:4}],[{type:"troll",count:1,gap:0,delay:0},{type:"hexer",count:2,gap:6,delay:2},{type:"knight",count:8,gap:.8,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"drake",count:3,gap:1.4,delay:3},{type:"shade",count:10,gap:.6,delay:4}],[{type:"orcraider",count:18,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"necromancer",count:1,gap:0,delay:3},{type:"slime_big",count:2,gap:4,delay:4},{type:"wardrummer",count:1,gap:0,delay:5},{type:"orcbrute",count:3,gap:2.5,delay:6}],[{type:"troll",count:2,gap:8,delay:0},{type:"drake",count:4,gap:1.2,delay:2},{type:"banshee",count:2,gap:4,delay:3},{type:"wraith",count:6,gap:.9,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"warwagon",count:1,gap:0,delay:8},{type:"necromancer",count:2,gap:8,delay:2},{type:"thief",count:2,gap:5,delay:3},{type:"knight",count:8,gap:.7,delay:4}],[{type:"wraith",count:8,gap:.7,delay:0},{type:"drake",count:4,gap:1.1,delay:1},{type:"orcshaman",count:2,gap:5,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"troll",count:1,gap:0,delay:6},{type:"runner",count:12,gap:.4,delay:8}],[{type:"siegetower",count:2,gap:12,delay:0},{type:"wardrummer",count:2,gap:8,delay:2},{type:"necromancer",count:2,gap:9,delay:3},{type:"banshee",count:3,gap:3,delay:3},{type:"orcraider",count:16,gap:.35,delay:4},{type:"drake",count:5,gap:1,delay:6},{type:"orcbrute",count:4,gap:2.2,delay:8}],[{type:"colossus",count:1,gap:0,delay:0},{type:"orcshaman",count:2,gap:6,delay:4},{type:"shieldbearer",count:2,gap:8,delay:5},{type:"troll",count:1,gap:0,delay:8},{type:"drake",count:4,gap:1.2,delay:10},{type:"wraith",count:6,gap:.8,delay:12}]]],Us=10,qf=ul.length,Zs=[{hp:1,speed:1,bounty:1},{hp:2,speed:1.08,bounty:1.35},{hp:3.4,speed:1.15,bounty:1.7}],lg=.08;function Rd(n){return ul[Math.min(n,ul.length-1)]}const dg=25,ug=3,Mo=[{id:"enraged",name:"Enraged",desc:"+40% speed",speedMult:1.4},{id:"stoneskin",name:"Stoneskin",desc:"+60% health",hpMult:1.6},{id:"slippery",name:"Slippery",desc:"Immune to Wet",immune:["wet"]},{id:"fireproof",name:"Fireproof",desc:"Immune to Burn",immune:["burn"]},{id:"steadfast",name:"Steadfast",desc:"Immune to knockback",gustImmune:!0}],Cd=[{id:"fire_dmg1",name:"Searing Flames",desc:"All Fire Mages +4 damage",icon:"🔥",element:"fire",rarity:"common",mod:{damage:4}},{id:"fire_rate1",name:"Kindled Haste",desc:"Fire Mages attack 12% faster",icon:"🔥",element:"fire",rarity:"common",mod:{rateMul:.88}},{id:"fire_burn1",name:"Lingering Embers",desc:"Burn +4/s and lasts +1s",icon:"🔥",element:"fire",rarity:"uncommon",mod:{burnDps:4,burnDuration:1}},{id:"fire_splash1",name:"Bigger Booms",desc:"Fire splash radius +14",icon:"🔥",element:"fire",rarity:"uncommon",mod:{splash:14}},{id:"fire_dmg2",name:"Inferno Core",desc:"All Fire Mages +9 damage",icon:"🔥",element:"fire",rarity:"rare",mod:{damage:9}},{id:"ice_chill1",name:"Deeper Cold",desc:"Chill slows +8% more",icon:"❄️",element:"ice",rarity:"common",mod:{chillPct:.08}},{id:"ice_dmg1",name:"Jagged Icicles",desc:"All Frost Mages +3 damage",icon:"❄️",element:"ice",rarity:"common",mod:{damage:3}},{id:"ice_wet1",name:"Soaking Sleet",desc:"Frost Wet lasts +2s",icon:"❄️",element:"ice",rarity:"common",mod:{wetDuration:2}},{id:"ice_rate1",name:"Flash Freeze",desc:"Frost Mages attack 15% faster",icon:"❄️",element:"ice",rarity:"uncommon",mod:{rateMul:.85}},{id:"ice_range1",name:"Glacial Reach",desc:"Frost Mages +22 range",icon:"❄️",element:"ice",rarity:"uncommon",mod:{range:22}},{id:"ltn_dmg1",name:"Amped Bolts",desc:"All Storm Mages +5 damage",icon:"⚡",element:"lightning",rarity:"common",mod:{damage:5}},{id:"ltn_chain1",name:"Forked Streams",desc:"Chain lightning +1 target",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{chains:1}},{id:"ltn_range1",name:"Skyline Arcs",desc:"Storm Mages +25 range",icon:"⚡",element:"lightning",rarity:"common",mod:{range:25}},{id:"ltn_rate1",name:"Static Rhythm",desc:"Storm Mages attack 12% faster",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{rateMul:.88}},{id:"wat_slow1",name:"Heavy Currents",desc:"Tide slow +8% stronger",icon:"🌊",element:"water",rarity:"common",mod:{soakSlow:.08}},{id:"wat_dmg1",name:"Crashing Waves",desc:"All Water Mages +4 damage",icon:"🌊",element:"water",rarity:"common",mod:{damage:4}},{id:"wat_range1",name:"High Tide",desc:"Water Mages +20 range",icon:"🌊",element:"water",rarity:"uncommon",mod:{range:20}},{id:"wat_wet1",name:"Drenching Pulse",desc:"Tide Wet lasts +2s",icon:"🌊",element:"water",rarity:"common",mod:{wetDuration:2}},{id:"wnd_kb1",name:"Tailwind",desc:"Gust knockback +20px",icon:"☁️",element:"wind",rarity:"common",mod:{knockback:20}},{id:"wnd_rate1",name:"Brisk Gales",desc:"Cloud Mages gust 15% faster",icon:"☁️",element:"wind",rarity:"uncommon",mod:{rateMul:.85}},{id:"wnd_range1",name:"Far Horizons",desc:"Cloud Mages +25 range",icon:"☁️",element:"wind",rarity:"common",mod:{range:25}},{id:"rx_conduct1",name:"Overcharge",desc:"Conduct deals 2.0x (was 1.6x)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{conductMult:2}},{id:"rx_conduct2",name:"Superconductor",desc:"Conduct extends chains by 3 (was 1)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{chainBonus:3}},{id:"rx_shatter1",name:"Brittle Frost",desc:"Shatter deals 2.6x (was 2.0x)",icon:"💎",element:"all",rarity:"rare",unique:!0,reaction:{shatterMult:2.6}},{id:"rx_freeze1",name:"Permafrost Grip",desc:"Freeze lasts 1.7s (was 1.1s)",icon:"🧊",element:"all",rarity:"uncommon",unique:!0,reaction:{freezeDuration:1.7}},{id:"rx_evap1",name:"Steam Burst",desc:"Evaporate burst 10 → 26 damage",icon:"♨️",element:"all",rarity:"uncommon",unique:!0,reaction:{evaporateBurst:26}},{id:"eco_gold1",name:"Windfall",desc:"+60 gold, right now",icon:"💰",element:"all",rarity:"common",econ:{goldNow:60}},{id:"eco_gold2",name:"Royal Grant",desc:"+140 gold, right now",icon:"💰",element:"all",rarity:"uncommon",econ:{goldNow:140}},{id:"eco_bounty1",name:"Bounty Board",desc:"+1 gold per kill",icon:"🪙",element:"all",rarity:"uncommon",econ:{bountyBonus:1}},{id:"eco_bounty2",name:"Head Hunter",desc:"+2 gold per kill",icon:"🪙",element:"all",rarity:"rare",unique:!0,econ:{bountyBonus:2}},{id:"eco_disc1",name:"Guild Discount",desc:"Towers cost 12% less",icon:"🏷️",element:"all",rarity:"uncommon",unique:!0,econ:{towerDiscountPct:12}},{id:"eco_interest1",name:"Compound Interest",desc:"Wave end: +1 gold per 15 held (max +30)",icon:"🏦",element:"all",rarity:"rare",unique:!0,fx:{interest:{per:15,cap:30}}},{id:"eco_trophy1",name:"Trophy Hunter",desc:"Kills have a 15% chance to drop +3 bonus gold",icon:"🏆",element:"all",rarity:"uncommon",unique:!0,fx:{onKillGold:{chance:.15,amount:3}}},{id:"arc_dmg1",name:"Bodkin Points",desc:"All Archers +4 damage",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{damage:4}},{id:"arc_range1",name:"Watchtower Drills",desc:"All Archers +18 range",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{range:18}},{id:"arc_rate1",name:"Nimble Fingers",desc:"Archers attack 12% faster",icon:"🏹",element:"physical",family:"archer",rarity:"uncommon",mod:{rateMul:.88}},{id:"arc_crit1",name:"Overdraw",desc:"Every 4th Archer shot CRITS for 2.5x",icon:"🎯",element:"physical",family:"archer",rarity:"rare",unique:!0,fx:{critEveryN:{n:4,mult:2.5}}},{id:"arc_root1",name:"Cruel Snares",desc:"Archer damage +40% vs Entangled enemies",icon:"🪢",element:"physical",family:"archer",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"entangled",mult:1.4}}},{id:"tre_dmg1",name:"Heartwood",desc:"All Tree-folk +3 damage",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{damage:3}},{id:"tre_range1",name:"Elder Boughs",desc:"All Tree-folk +16 range",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{range:16}},{id:"tre_rate1",name:"Rising Sap",desc:"Tree-folk attack 12% faster",icon:"🌳",element:"physical",family:"tree",rarity:"uncommon",mod:{rateMul:.88}},{id:"tre_crit1",name:"Thorn Volley",desc:"Every 6th Tree-folk attack CRITS for 3x",icon:"🌵",element:"physical",family:"tree",rarity:"rare",unique:!0,fx:{critEveryN:{n:6,mult:3}}},{id:"pr_adrenaline",name:"Adrenaline Surge",desc:"Every 10s, ALL towers frenzy: 2x attack speed for 3s",icon:"🫀",element:"all",rarity:"rare",unique:!0,fx:{frenzy:{period:10,duration:3,rateMul:.5}}},{id:"pr_warhymn",name:"Goblin War-Hymn",desc:"Every 8s, Goblins frenzy: 2x attack speed for 2.5s",icon:"🥁",element:"physical",family:"goblin",rarity:"uncommon",unique:!0,fx:{frenzy:{period:8,duration:2.5,rateMul:.5}}},{id:"pr_powder",name:"Powder Trail",desc:"Enemies killed by Goblins EXPLODE (30 dmg, small area)",icon:"🧨",element:"physical",family:"goblin",rarity:"rare",unique:!0,fx:{onKillExplode:{damage:30,radius:55}}},{id:"pr_wildfire",name:"Wildfire",desc:"Burning enemies pass their Burn to a neighbor on death",icon:"🔥",element:"fire",rarity:"rare",unique:!0,fx:{spreadBurnOnDeath:!0}},{id:"pr_harvest",name:"Soul Harvest",desc:"Every kill: ALL damage +0.2%, forever (max +30%)",icon:"👻",element:"all",rarity:"rare",unique:!0,fx:{onKillStackDamage:{pct:.2,capPct:30}}},{id:"pr_opportunist",name:"Opportunist",desc:"All damage +40% vs Rattled enemies",icon:"🎯",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"rattled",mult:1.4}}},{id:"pr_executioner",name:"Executioner",desc:"All damage +75% vs Frozen enemies",icon:"⚔️",element:"all",rarity:"rare",unique:!0,fx:{bonusVsStatus:{status:"frozen",mult:1.75}}},{id:"pr_firstblood",name:"First Blood",desc:"Physical damage +30% vs full-health enemies",icon:"🩸",element:"physical",rarity:"uncommon",unique:!0,fx:{bonusVsHealthy:{threshold:.99,mult:1.3}}},{id:"pr_soaked",name:"Riptide Predator",desc:"Lightning damage +35% vs Wet enemies",icon:"🌩️",element:"lightning",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"wet",mult:1.35}}},{id:"pr_skywatch",name:"Skywatch",desc:"ALL towers deal +25% damage to FLYING enemies",icon:"🦅",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsFlying:{mult:1.25}}}],hg={common:60,uncommon:30,rare:10},$f=25,Yf=[{id:"frozen_core",name:"Frozen Core",icon:"🧊",rarity:"rare",desc:"Enemies arrive with a chill in their bones (1 chill stack on spawn).",special:["spawnChill"]},{id:"cursed_hourglass",name:"Cursed Hourglass",icon:"⏳",rarity:"rare",desc:"Drafts show 4 cards — but enemies move 10% faster.",special:["draft4","hasteEnemies"]},{id:"blood_chalice",name:"Blood Chalice",icon:"🍷",rarity:"rare",desc:"Every 40 kills restores 1 life.",special:["killLives"]},{id:"sharpening_stone",name:"Sharpening Stone",icon:"🪨",rarity:"uncommon",desc:"ALL towers +2 damage.",payload:{id:"relic_sharp",name:"Sharpening Stone",desc:"",icon:"🪨",element:"all",rarity:"rare",mod:{damage:2}}},{id:"eagle_standard",name:"Eagle Standard",icon:"🦅",rarity:"uncommon",desc:"ALL towers +12 range.",payload:{id:"relic_eagle",name:"Eagle Standard",desc:"",icon:"🦅",element:"all",rarity:"rare",mod:{range:12}}},{id:"war_banner",name:"War Banner",icon:"🚩",rarity:"uncommon",desc:"Physical towers (goblins, archers, tree-folk) attack 8% faster.",payload:{id:"relic_banner",name:"War Banner",desc:"",icon:"🚩",element:"physical",rarity:"rare",mod:{rateMul:.92}}},{id:"molten_heart",name:"Molten Heart",icon:"🌋",rarity:"rare",desc:"Burn ticks +3/s and last +1s.",payload:{id:"relic_molten",name:"Molten Heart",desc:"",icon:"🌋",element:"fire",rarity:"rare",mod:{burnDps:3,burnDuration:1}}},{id:"storm_prism",name:"Storm Prism",icon:"🔮",rarity:"rare",desc:"Conduct deals 2.0x (up from 1.6x).",payload:{id:"relic_prism",name:"Storm Prism",desc:"",icon:"🔮",element:"all",rarity:"rare",reaction:{conductMult:2}}},{id:"golden_idol",name:"Golden Idol",icon:"🗿",rarity:"uncommon",desc:"+1 gold per kill.",payload:{id:"relic_idol",name:"Golden Idol",desc:"",icon:"🗿",element:"all",rarity:"rare",econ:{bountyBonus:1}}},{id:"beggars_bowl",name:"Beggar's Bowl",icon:"🥣",rarity:"uncommon",desc:"Wave end: +1 gold per 20 held (max +20).",payload:{id:"relic_bowl",name:"Beggar's Bowl",desc:"",icon:"🥣",element:"all",rarity:"rare",fx:{interest:{per:20,cap:20}}}},{id:"headsman_seal",name:"Headsman's Seal",icon:"🪓",rarity:"rare",desc:"All damage +35% vs Frozen enemies.",payload:{id:"relic_seal",name:"Headsman's Seal",desc:"",icon:"🪓",element:"all",rarity:"rare",fx:{bonusVsStatus:{status:"frozen",mult:1.35}}}},{id:"ancient_acorn",name:"Ancient Acorn",icon:"🌰",rarity:"uncommon",desc:"Tree-folk +2 damage and +15 range.",payload:{id:"relic_acorn",name:"Ancient Acorn",desc:"",icon:"🌰",element:"physical",family:"tree",rarity:"rare",mod:{damage:2,range:15}}}],Du={uncommon:65,rare:35},Kf=[{id:"cursed_chest",name:"The Cursed Chest",icon:"🗝️",desc:"A chest hums with power in the treeline. The lock is warm to the touch, and something out there noticed you noticing it.",choices:[{label:"Open it",desc:"Gain a random relic — but the next wave becomes an ELITE.",effect:"chest_open"},{label:"Leave it",desc:"Walk away. Nothing happens.",effect:"skip"}]},{id:"blood_pact",name:"The Blood Pact",icon:"🩸",desc:'A hooded figure offers power for pain. "The realm remembers sacrifice," it whispers.',choices:[{label:"Sign the pact",desc:"Lose 3 lives → choose from a RARE card draft.",effect:"blood_pact"},{label:"Refuse",desc:"Keep your blood where it is.",effect:"skip"}]},{id:"merchant",name:"The Wandering Merchant",icon:"🧳",desc:'A cart rattles up the road, sagging under trinkets. "Artifacts! Genuine! Mostly."',choices:[{label:"Buy a relic (130 ◉)",desc:"Pay 130 gold for a random relic.",effect:"merchant_buy"},{label:"Decline",desc:"His prices are theft anyway.",effect:"skip"}]},{id:"training",name:"The Training Grounds",icon:"🎯",desc:'A veteran drillmaster sizes up your towers. "Give me one of them for an hour and 60 gold."',choices:[{label:"Pay 60 ◉",desc:"A random tower gains a free upgrade tier.",effect:"training"},{label:"Skip",desc:"They train themselves. Probably.",effect:"skip"}]},{id:"gambler",name:"The Gambler's Coin",icon:"🪙",desc:'A grinning imp flips a coin that never seems to land the same way twice. "Double or... well. You know."',choices:[{label:"Flip it",desc:"50%: DOUBLE your gold. 50%: lose half.",effect:"gamble"},{label:"Walk away",desc:"Your gold stays boring and safe.",effect:"skip"}]},{id:"storm_blessing",name:"The Storm Blessing",icon:"⛈️",desc:"A sky-spirit offers to drench the next wave in glory: slower, tougher foes — worth twice the bounty.",choices:[{label:"Accept",desc:"Next wave: enemies 20% slower, +30% HP, 2x bounty.",effect:"blessing"},{label:"Decline",desc:"The spirit shrugs and drifts off.",effect:"skip"}]}],fg=230,pg=20,Id=.7,mg={conductMult:1.6,shatterMult:2,chainBonus:1,freezeDuration:1.1,evaporateBurst:10};function gg(){return{kills:0,leaks:0,wavesCleared:0,dmgByElement:{fire:0,ice:0,lightning:0,water:0,wind:0,physical:0},reactions:{conduct:0,shatter:0,evaporate:0,frozen:0},cardIds:[]}}function Zf(n){const e=new Pu(n),t=(n.cloudPaths??[]).map(a=>new Pu({id:"",name:"",waypoints:[...a,a[0]]})),i=(n.props??[]).map(a=>{var o;return{x:a.x,y:a.y,r:(((o=Vf[a.model])==null?void 0:o.blockRadius)??12)*a.scale}}),s=eg(e);for(const a of i){const{cx:o,cy:c}=Td(a.x,a.y);s.add(yo(o,c))}const r=t.flatMap((a,o)=>[0,a.total/2].map(c=>{const l=a.posAt(c);return{pathIdx:o,dist:c,x:l.x,y:l.y}}));return{map:n,track:e,blocked:s,water:new Set((n.water??[]).map(([a,o])=>yo(a,o))),blockers:i,clouds:r,cloudTracks:t}}function Ko(n=Ed[jm],e=Date.now()){return{...Zf(n),phase:"build",gold:fg,lives:pg,round:0,act:0,speed:1,autoplay:!1,autoplayTimer:0,seed:e,rng:Xf(e),draftMods:[],pendingDraft:null,eliteDraft:!1,reaction:{...mg},bountyBonus:0,towerDiscountPct:0,waveModifier:null,lastEliteRound:-5,stats:gg(),clock:0,killStackPct:0,relics:[],nextNodes:["normal"],nodesForRound:-1,nodeChoice:"normal",nodePicked:!0,waveKind:"normal",forcedModifier:null,pendingRelicDraft:null,pendingEvent:null,seenEvents:[],enemies:[],wizards:[],projectiles:[],waveTime:0,pendingSpawns:[],selectedWizardId:null,placingType:null,mouseX:0,mouseY:0,mouseOnBoard:!1,nextId:1}}function Jf(n){return wd.includes(n.map.id)}function _g(n){if(n.act>=qf-1)return!1;let e=0;for(const t of n.wizards)e+=Math.round(t.invested*Id);return n.gold+=e,n.wizards=[],n.enemies=[],n.projectiles=[],n.selectedWizardId=null,n.placingType=null,n.act++,Object.assign(n,Zf(Ed[wd[n.act]])),n.round=0,n.lastEliteRound=-5,n.nodesForRound=-1,n.nodeChoice="normal",n.nodePicked=!0,n.waveModifier=null,n.forcedModifier=null,n.phase="build",!0}function lc(n,e){e.damage&&(n.damage+=e.damage),e.rateMul&&(n.rate*=e.rateMul),e.range&&(n.range+=e.range),e.splash&&(n.splash+=e.splash),e.chains&&(n.chains+=e.chains),e.burnDps&&(n.burnDps+=e.burnDps),e.burnDuration&&(n.burnDuration+=e.burnDuration),e.chillPct&&(n.chillPct+=e.chillPct),e.wetDuration&&(n.wetDuration+=e.wetDuration),e.projSpeed&&(n.projSpeed+=e.projSpeed),e.soakSlow&&(n.soakSlow+=e.soakSlow),e.knockback&&(n.knockback+=e.knockback),e.rattlePct&&(n.rattlePct+=e.rattlePct),e.entangleDur&&(n.entangleDur+=e.entangleDur),e.rootSlow&&(n.rootSlow+=e.rootSlow)}function zi(n,e,t=[]){const i={range:n.range,rate:n.rate,damage:n.damage,projSpeed:n.projSpeed,splash:n.splash,chains:n.chains,chainFalloff:n.chainFalloff,burnDps:n.element==="fire"?6:0,burnDuration:n.element==="fire"?3:0,chillPct:n.element==="ice"?.3:0,wetDuration:n.element==="ice"?4:n.element==="water"?5:0,soakSlow:n.auraKind==="tide"?.2:0,knockback:n.auraKind==="gust"?70:0,rattlePct:n.auraKind==="rattle"?.25:0,entangleDur:n.entangles?1:0,rootSlow:n.groundAttack?.25:0};n.baseMods&&lc(i,n.baseMods);for(let s=0;s<2;s++)for(let r=0;r<e[s];r++)lc(i,n.upgrades[s].tiers[r].mod);for(const s of t){if(!s.mod)continue;const r=s.element===n.element||s.element==="all",a=!s.family||s.family===n.family;r&&a&&lc(i,s.mod)}return i}function Qf(n,e){const t=n.element===e.element||n.element==="all",i=!n.family||n.family===e.family;return t&&i}function Pd(n,e){if(n.draftMods.push(e),n.stats.cardIds.push(e.id),e.reaction)for(const[t,i]of Object.entries(e.reaction))n.reaction[t]=i;e.econ&&(e.econ.goldNow&&(n.gold+=e.econ.goldNow),e.econ.bountyBonus&&(n.bountyBonus+=e.econ.bountyBonus),e.econ.towerDiscountPct&&(n.towerDiscountPct+=e.econ.towerDiscountPct));for(const t of n.wizards)t.stats=zi(t.def,t.tiers,n.draftMods)}function Zo(n,e){if(e!==null)return n.wizards.find(t=>t.id===e)}function jf(n,e,t){return n.wizards.find(i=>i.cx===e&&i.cy===t)}function Js(n,e,t,i){const s=yo(e,t);if(n.blocked.has(s)||jf(n,e,t))return!1;if((i==null?void 0:i.placement)==="any")return!0;const r=n.water.has(s),a=(i==null?void 0:i.placement)==="water";return r===a}function Ld(n,e,t,i){const s=[0,0],r=Hf(t,i),a={id:n.nextId++,def:e,cx:t,cy:i,x:r.x,y:r.y,cooldown:0,mode:"first",aim:-Math.PI/2,tiers:s,invested:e.cost,stats:zi(e,s,n.draftMods),recoil:0,attackCount:0,family:e.family};if(e.isGeneric){a.pendingSpecialize=!0;const o=n.water.has(yo(t,i));a.specializeOptions=xg(n,e.family,o)}return a}function ep(n,e,t){e.def=t,e.pendingSpecialize=!1,e.specializeOptions=void 0,e.stats=zi(t,e.tiers,n.draftMods),e.cooldown=0}function xg(n,e,t,i=3){const{specializationsFor:s}=vg();let r=s(e),a;e==="wizard"&&(t?(a=r.find(l=>l.placement==="water"),r=r.filter(l=>l.placement!=="water")):r=r.filter(l=>l.placement!=="water"));const o=a?[a]:[],c=Math.max(0,i-o.length);for(let l=0;l<c&&r.length>0;l++){const d=Math.floor(n.rng()*r.length);o.push(r[d]),r.splice(d,1)}for(let l=o.length-1;l>0;l--){const d=Math.floor(n.rng()*(l+1));[o[l],o[d]]=[o[d],o[l]]}return o}function vg(){return{specializationsFor:ag}}function tp(n,e=3,t=!1){const{CARDS:i,RARITY_WEIGHT:s}=yg(),r=new Set(n.draftMods.filter(c=>c.unique).map(c=>c.id));let a=i.filter(c=>!r.has(c.id));if(t){const c=a.filter(l=>l.rarity==="rare");c.length>=e&&(a=c)}const o=[];for(let c=0;c<e&&a.length>0;c++){const l=a.reduce((u,f)=>u+s[f.rarity],0);let d=n.rng()*l,h=a[0];for(const u of a)if(d-=s[u.rarity],d<=0){h=u;break}o.push(h),a=a.filter(u=>u.id!==h.id)}return o}function yg(){return{CARDS:Cd,RARITY_WEIGHT:hg}}function So(n,e){n.relics.some(t=>t.id===e.id)||(n.relics.push(e),e.payload&&Pd(n,e.payload))}function bo(n,e){return n.relics.some(t=>{var i;return(i=t.special)==null?void 0:i.includes(e)})}function hl(n,e=2){const t=new Set(n.relics.map(r=>r.id));let i=Yf.filter(r=>!t.has(r.id));const s=[];for(let r=0;r<e&&i.length>0;r++){const a=i.reduce((l,d)=>l+Du[d.rarity],0);let o=n.rng()*a,c=i[0];for(const l of i)if(o-=Du[l.rarity],o<=0){c=l;break}s.push(c),i=i.filter(l=>l.id!==c.id)}return s}const Mg=2,Nu=3;function np(n){if(n.nodesForRound===n.round)return;if(n.nodesForRound=n.round,n.nodeChoice="normal",n.round>=Us-1){n.nextNodes=["normal"],n.nodePicked=!0;return}const e=["normal"];if(n.round>=Mg){const t=n.seenEvents.length<Sg();if(n.round>=Nu&&n.rng()<.5&&e.push("elite"),n.rng()<.35&&e.push("treasure"),n.rng()<.4&&t&&e.push("event"),e.length===1){const s=(n.round>=Nu?["treasure","event","elite"]:["treasure","event"]).filter(r=>r!=="event"||t);e.push(s[Math.floor(n.rng()*s.length)])}}n.nextNodes=e.slice(0,3),n.nodePicked=n.nextNodes.length<=1}function Sg(){return Kf.length}function ip(n){const e=Kf.filter(i=>!n.seenEvents.includes(i.id));if(e.length===0)return null;const t=e[Math.floor(n.rng()*e.length)];return n.seenEvents.push(t.id),t}function Dd(n,e){const t=sp()[e.def.id];if(!t)return null;const i=e.tiers[0]>=e.def.upgrades[0].tiers.length&&e.tiers[1]>=e.def.upgrades[1].tiers.length,s=n.draftMods.some(a=>a.id===t.cardId),r=s?Math.floor(t.cost/2):t.cost;return i?n.gold<r?{ok:!1,cost:r,discounted:s,reason:"Not enough gold"}:{ok:!0,cost:r,discounted:s}:{ok:!1,cost:r,discounted:s,reason:"Max both paths first"}}function bg(n,e){const t=Dd(n,e),i=sp()[e.def.id];return!(t!=null&&t.ok)||!i?!1:(n.gold-=t.cost,e.invested+=t.cost,e.def=Eg(i.to),e.tiers=[0,0],e.stats=zi(e.def,e.tiers,n.draftMods),e.cooldown=0,!0)}function sp(){return cg}function Eg(n){return jt[n]}const Tn={fire:{id:"fire",name:"Fire",color:"#ff6b35",glow:"#ffb163"},ice:{id:"ice",name:"Ice",color:"#5bc8f5",glow:"#b3ecff"},lightning:{id:"lightning",name:"Lightning",color:"#c77dff",glow:"#e8c3ff"},water:{id:"water",name:"Water",color:"#3a86ff",glow:"#8fc0ff"},wind:{id:"wind",name:"Wind",color:"#b8d8d0",glow:"#e6f7f1"},physical:{id:"physical",name:"Physical",color:"#a08060",glow:"#d4b896"}},Nd={grunt:{id:"grunt",name:"Grunt",hp:34,speed:68,radius:12,bounty:4,color:"#7da35c",resist:{}},runner:{id:"runner",name:"Runner",hp:22,speed:128,radius:10,bounty:5,color:"#d9a648",resist:{ice:1.4}},knight:{id:"knight",name:"Armored Knight",hp:110,speed:52,radius:13,bounty:10,color:"#8d99ae",resist:{ice:.5,lightning:.75,fire:1.5}},shade:{id:"shade",name:"Ember Shade",hp:60,speed:80,radius:11,bounty:8,color:"#b35442",resist:{fire:0,lightning:1.3}},golem:{id:"golem",name:"Obsidian Golem",hp:2600,speed:30,radius:22,bounty:200,color:"#5e4b8b",resist:{fire:.75,ice:.75},boss:!0,leakCost:10},golemling:{id:"golemling",name:"Golemling",hp:500,speed:42,radius:16,bounty:50,color:"#7a68a6",resist:{fire:.75,ice:.75},boss:!0},orcraider:{id:"orcraider",name:"Orc Raider",hp:55,speed:75,radius:12,bounty:6,color:"#5e7a3a",resist:{}},orcbrute:{id:"orcbrute",name:"Orc Brute",hp:260,speed:46,radius:15,bounty:14,color:"#4a5d33",resist:{},armor:120},troll:{id:"troll",name:"Troll",hp:1300,speed:34,radius:19,bounty:60,color:"#6a7d5e",resist:{},armor:320,regen:.015},warwagon:{id:"warwagon",name:"War Wagon",hp:900,speed:40,radius:20,bounty:45,color:"#7a5c38",resist:{},vehicle:"wagon",leakCost:8,deathSpawns:["orcraider","orcraider","orcraider","orcraider","orcraider"]},siegetower:{id:"siegetower",name:"Siege Tower",hp:1600,speed:30,radius:22,bounty:80,color:"#6b4f30",resist:{},vehicle:"tower",leakCost:10,dropSpawns:{type:"orcraider",count:2,period:5}},orcshaman:{id:"orcshaman",name:"Orc Shaman",hp:140,speed:60,radius:11,bounty:18,color:"#3f8f5c",resist:{},aura:{kind:"heal",radius:110,power:.03,period:2}},wardrummer:{id:"wardrummer",name:"War Drummer",hp:300,speed:55,radius:13,bounty:22,color:"#8a5c3a",resist:{},aura:{kind:"haste",radius:120,power:.18}},wraith:{id:"wraith",name:"Wraith",hp:220,speed:95,radius:11,bounty:20,color:"#9db8c9",resist:{},phase:{period:5,duration:1.6}},gargoyle:{id:"gargoyle",name:"Gargoyle",hp:90,speed:85,radius:11,bounty:12,color:"#8d99ae",resist:{ice:.8},flying:!0},drake:{id:"drake",name:"Ember Drake",hp:380,speed:110,radius:14,bounty:30,color:"#c25a2e",resist:{fire:.5},flying:!0,innateImmune:["burn"]},hexer:{id:"hexer",name:"Hexer",hp:160,speed:55,radius:11,bounty:20,color:"#7a4a9e",resist:{},hexes:{period:6,duration:3,radius:150}},banshee:{id:"banshee",name:"Banshee",hp:130,speed:90,radius:10,bounty:18,color:"#cfd8e8",resist:{},deathSilence:{radius:100,duration:2.5}},slime_big:{id:"slime_big",name:"Great Slime",hp:320,speed:45,radius:16,bounty:10,color:"#5fbf4a",resist:{},deathSpawns:["slime_mid","slime_mid"]},slime_mid:{id:"slime_mid",name:"Slime",hp:120,speed:55,radius:12,bounty:6,color:"#74d15e",resist:{},deathSpawns:["slime_small","slime_small"]},slime_small:{id:"slime_small",name:"Slimeling",hp:45,speed:70,radius:8,bounty:3,color:"#8ce276",resist:{}},necromancer:{id:"necromancer",name:"Necromancer",hp:200,speed:50,radius:12,bounty:25,color:"#3a2f4e",resist:{},dropSpawns:{type:"risen",count:2,period:5}},risen:{id:"risen",name:"Risen",hp:40,speed:60,radius:10,bounty:2,color:"#9a92b5",resist:{}},thief:{id:"thief",name:"Thief",hp:100,speed:130,radius:10,bounty:15,color:"#d9c148",resist:{},stealsGold:25},shieldbearer:{id:"shieldbearer",name:"Shieldbearer",hp:350,speed:48,radius:14,bounty:22,color:"#5b7fc9",resist:{},aura:{kind:"ward",radius:110,power:60}},warlord:{id:"warlord",name:"Ironhide Warlord",hp:2100,speed:26,radius:24,bounty:250,color:"#6e7b8a",resist:{ice:.8},boss:!0,armor:700,leakCost:10},pyretitan:{id:"pyretitan",name:"Pyre Titan",hp:4800,speed:24,radius:26,bounty:350,color:"#c25a2e",resist:{fire:0,lightning:1.15},boss:!0,leakCost:10,innateImmune:["burn","chill"]},colossus:{id:"colossus",name:"Dread Colossus",hp:8600,speed:20,radius:30,bounty:600,color:"#3d2f5e",resist:{fire:.5},boss:!0,armor:1600,leakCost:25,innateImmune:["chill"],armorBreakSpawns:["golemling","golemling","golemling"]}},te={particles:[],floaters:[],arcs:[],rings:[],ring(n,e,t,i=26){this.rings.push({x:n,y:e,maxR:i,life:.35,maxLife:.35,color:t})},burst(n,e,t,i,s,r=3,a=.45){for(let o=0;o<i;o++){const c=Math.random()*Math.PI*2,l=s*(.4+Math.random()*.6);this.particles.push({x:n,y:e,vx:Math.cos(c)*l,vy:Math.sin(c)*l,life:a,maxLife:a,size:r*(.6+Math.random()*.8),color:t,drag:3.5,gravity:0})}},floater(n,e,t,i,s=12){this.floaters.push({x:n+(Math.random()-.5)*10,y:e,text:t,color:i,life:.9,maxLife:.9,size:s})},arc(n,e,t,i,s,r=2.5){const o=t-n,c=i-e,l=Math.hypot(o,c)||1,d=-c/l,h=o/l,u=[{x:n,y:e}];for(let f=1;f<7;f++){const g=f/7,y=(Math.random()-.5)*l*.22;u.push({x:n+o*g+d*y,y:e+c*g+h*y})}u.push({x:t,y:i}),this.arcs.push({pts:u,life:.18,maxLife:.18,color:s,width:r})},update(n){for(const e of this.particles){e.life-=n;const t=Math.max(0,1-e.drag*n);e.vx*=t,e.vy=e.vy*t+e.gravity*n,e.x+=e.vx*n,e.y+=e.vy*n}this.particles=this.particles.filter(e=>e.life>0);for(const e of this.floaters)e.life-=n,e.y-=28*n;this.floaters=this.floaters.filter(e=>e.life>0);for(const e of this.arcs)e.life-=n;this.arcs=this.arcs.filter(e=>e.life>0);for(const e of this.rings)e.life-=n;this.rings=this.rings.filter(e=>e.life>0)},clear(){this.particles.length=0,this.floaters.length=0,this.arcs.length=0,this.rings.length=0},draw(n){n.save();for(const e of this.rings){const t=1-e.life/e.maxLife;n.globalAlpha=(1-t)*.7,n.strokeStyle=e.color,n.lineWidth=2.5*(1-t)+.5,n.beginPath(),n.arc(e.x,e.y,e.maxR*t,0,Math.PI*2),n.stroke()}n.globalAlpha=1;for(const e of this.particles){const t=e.life/e.maxLife;n.globalAlpha=t,n.fillStyle=e.color,n.beginPath(),n.arc(e.x,e.y,e.size*t,0,Math.PI*2),n.fill()}for(const e of this.arcs){const t=e.life/e.maxLife;n.globalAlpha=t,n.strokeStyle=e.color,n.lineWidth=e.width,n.shadowColor=e.color,n.shadowBlur=8,n.beginPath(),n.moveTo(e.pts[0].x,e.pts[0].y);for(let i=1;i<e.pts.length;i++)n.lineTo(e.pts[i].x,e.pts[i].y);n.stroke(),n.shadowBlur=0}n.globalAlpha=1,n.textAlign="center";for(const e of this.floaters){const t=e.life/e.maxLife;n.globalAlpha=Math.min(1,t*2),n.font=`bold ${e.size}px 'Segoe UI', sans-serif`,n.lineWidth=3,n.strokeStyle="rgba(0,0,0,0.6)",n.strokeText(e.text,e.x,e.y),n.fillStyle=e.color,n.fillText(e.text,e.x,e.y)}n.restore()}};let gt=null,Xn=null,rp=null,fa=!1,dc=.5;function mt(n,e=.04){return n*(1+(Math.random()*2-1)*e)}function Tg(n){const e=Math.floor(n.sampleRate*1.4),t=n.createBuffer(2,e,n.sampleRate);for(let i=0;i<2;i++){const s=t.getChannelData(i);for(let r=0;r<e;r++)s[r]=(Math.random()*2-1)*Math.pow(1-r/e,2.4)}return t}const Uu=new Map;function Pt(n,e){if(!gt)return null;const t=performance.now();return t-(Uu.get(n)??-1/0)<e?null:(Uu.set(n,t),gt.state==="suspended"&&gt.resume(),gt)}function nn(){return gt?(gt.state==="suspended"&&gt.resume(),gt):null}function wg(n){const e=n.sampleRate*1.5,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;return t}function _e(n,e,t,i){const s=n.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(1e-4,t),e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+i),s.connect(Xn),s}function nt(n,e,t,i,s,r){const a=n.createOscillator();a.type=e,a.frequency.setValueAtTime(t,i),a.connect(r),a.start(i),a.stop(i+s)}function wt(n,e,t,i,s,r,a){const o=n.createOscillator();o.type=e,o.frequency.setValueAtTime(Math.max(1,t),s),o.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r),o.connect(a),o.start(s),o.stop(s+r)}function At(n,e,t,i,s){const r=n.createBufferSource();if(r.buffer=rp,r.loop=!0,s){const a=n.createBiquadFilter();a.type=s.type,a.frequency.setValueAtTime(s.f0,e),s.f1&&a.frequency.exponentialRampToValueAtTime(Math.max(1,s.f1),e+t),a.Q.value=s.q??1,r.connect(a),a.connect(i)}else r.connect(i);r.start(e),r.stop(e+t)}const Se={init(){if(gt){gt.resume();return}try{gt=new AudioContext,Xn=gt.createGain(),Xn.gain.value=fa?0:dc;const n=gt.createBiquadFilter();n.type="lowpass",n.frequency.value=11e3;const e=gt.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4;const t=gt.createConvolver();t.buffer=Tg(gt);const i=gt.createGain();i.gain.value=.18,Xn.connect(n),n.connect(e),e.connect(gt.destination),e.connect(t),t.connect(i),i.connect(gt.destination),rp=wg(gt)}catch{gt=null}},bus(){return gt&&Xn?{ctx:gt,target:Xn}:null},setVolume(n){dc=n,Xn&&!fa&&(Xn.gain.value=n)},setMuted(n){fa=n,Xn&&(Xn.gain.value=n?0:dc)},isMuted(){return fa},fireCast(){const n=Pt("fire",90);if(!n)return;const e=n.currentTime;At(n,e,.28,_e(n,e,.5,.28),{type:"bandpass",f0:mt(400),f1:1600,q:1.2}),wt(n,"sawtooth",mt(160),60,e,.25,_e(n,e,.15,.25))},iceCast(){const n=Pt("ice",90);if(!n)return;const e=n.currentTime;nt(n,"triangle",mt(1320),e,.3,_e(n,e,.25,.3)),nt(n,"triangle",mt(1980),e+.03,.25,_e(n,e+.03,.15,.25))},boltCast(){const n=Pt("bolt",90);if(!n)return;const e=n.currentTime;At(n,e,.16,_e(n,e,.55,.16),{type:"highpass",f0:2e3,q:.7}),wt(n,"square",mt(800),90,e,.12,_e(n,e,.2,.12))},waterPulse(){const n=nn();if(!n)return;const e=n.currentTime;wt(n,"sine",90,220,e,.35,_e(n,e,.45,.4)),At(n,e+.05,.3,_e(n,e+.05,.18,.3),{type:"lowpass",f0:700,f1:250})},windGust(){const n=nn();if(!n)return;const e=n.currentTime;At(n,e,.5,_e(n,e,.4,.5),{type:"bandpass",f0:300,f1:1200,q:.6})},gongPulse(){const n=Pt("gong",200);if(!n)return;const e=n.currentTime;nt(n,"sine",55,e,1.4,_e(n,e,.3,1.4)),nt(n,"sine",110,e,1.1,_e(n,e,.4,1.1)),nt(n,"triangle",187,e,.9,_e(n,e,.18,.9)),nt(n,"triangle",266,e,.7,_e(n,e,.1,.7))},bowTwang(){const n=Pt("bow",80);if(!n)return;const e=n.currentTime;wt(n,"triangle",mt(900,.07),320,e,.12,_e(n,e,.35,.12)),At(n,e+.02,.14,_e(n,e+.02,.12,.14),{type:"bandpass",f0:2200,f1:900,q:1.5})},thud(){const n=Pt("thud",110);if(!n)return;const e=n.currentTime;wt(n,"sine",mt(140,.08),45,e,.22,_e(n,e,.5,.22)),At(n,e,.1,_e(n,e,.25,.1),{type:"lowpass",f0:500,f1:120})},explosion(){const n=Pt("boom",120);if(!n)return;const e=n.currentTime;wt(n,"sine",mt(64),26,e,.5,_e(n,e,.9,.5)),At(n,e,.45,_e(n,e,.55,.45),{type:"lowpass",f0:3e3,f1:300});for(let t=0;t<3;t++){const i=.1+Math.random()*.22;At(n,e+i,.06,_e(n,e+i,.16,.06),{type:"bandpass",f0:mt(1600,.3),q:2})}},armorClank(){const n=Pt("clank",100);if(!n)return;const e=n.currentTime;nt(n,"triangle",mt(1180,.06),e,.09,_e(n,e,.3,.09)),nt(n,"triangle",mt(1730,.06),e,.07,_e(n,e,.18,.07)),At(n,e,.05,_e(n,e,.2,.05),{type:"highpass",f0:3500,q:1})},armorBreak(){const n=nn();if(!n)return;const e=n.currentTime;At(n,e,.5,_e(n,e,.7,.5),{type:"bandpass",f0:2400,f1:500,q:.8}),wt(n,"sine",90,35,e,.4,_e(n,e,.6,.4));for(let t=0;t<5;t++){const i=.06+t*.07;nt(n,"triangle",mt(2200-t*320,.1),e+i,.12,_e(n,e+i,.14,.12))}},bossRoar(){const n=Pt("roar",800);if(!n)return;const e=n.currentTime,t=_e(n,e,.5,1.2),i=n.createBiquadFilter();i.type="bandpass",i.Q.value=1.4,i.frequency.setValueAtTime(280,e),i.frequency.exponentialRampToValueAtTime(900,e+.45),i.frequency.exponentialRampToValueAtTime(320,e+1.1);for(const s of[55,82.5,110.5]){const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(mt(s,.02),e),r.connect(i),r.start(e),r.stop(e+1.2)}i.connect(t),wt(n,"sine",60,38,e,1,_e(n,e,.4,1))},actFanfare(){const n=nn();if(!n)return;const e=n.currentTime;[262,330,392,523,659].forEach((i,s)=>{const r=s*.16;nt(n,"sawtooth",i,e+r,.34,_e(n,e+r,.16,.34)),nt(n,"triangle",i*2,e+r,.3,_e(n,e+r,.08,.3))}),nt(n,"sawtooth",262,e+.85,.9,_e(n,e+.85,.14,.9)),nt(n,"sawtooth",392,e+.85,.9,_e(n,e+.85,.12,.9)),nt(n,"sawtooth",523,e+.85,.9,_e(n,e+.85,.12,.9))},healChime(){const n=Pt("heal",250);if(!n)return;const e=n.currentTime;nt(n,"sine",mt(880,.02),e,.25,_e(n,e,.14,.25)),nt(n,"sine",mt(1320,.02),e+.09,.3,_e(n,e+.09,.1,.3))},drumBeat(){const n=Pt("drum",850);if(!n)return;const e=n.currentTime;wt(n,"sine",120,55,e,.18,_e(n,e,.45,.18)),wt(n,"sine",110,50,e+.22,.18,_e(n,e+.22,.3,.18)),At(n,e,.05,_e(n,e,.12,.05),{type:"lowpass",f0:900})},phaseShimmer(){const n=Pt("phase",300);if(!n)return;const e=n.currentTime;At(n,e,.35,_e(n,e,.16,.35),{type:"bandpass",f0:3200,f1:6800,q:3}),nt(n,"sine",mt(2093,.05),e,.3,_e(n,e,.05,.3))},woodCrash(){const n=Pt("wood",300);if(!n)return;const e=n.currentTime;At(n,e,.3,_e(n,e,.5,.3),{type:"bandpass",f0:700,f1:250,q:1}),wt(n,"sine",110,45,e,.25,_e(n,e,.4,.25));for(let t=0;t<2;t++){const i=.08+Math.random()*.12;At(n,e+i,.04,_e(n,e+i,.2,.04),{type:"bandpass",f0:mt(1400,.2),q:3})}},hexZap(){const n=Pt("hex",200);if(!n)return;const e=n.currentTime;wt(n,"square",mt(620,.05),110,e,.3,_e(n,e,.3,.3)),At(n,e,.25,_e(n,e,.15,.25),{type:"bandpass",f0:900,f1:300,q:2})},wail(){const n=Pt("wail",400);if(!n)return;const e=n.currentTime;wt(n,"sine",mt(1180,.04),320,e,.9,_e(n,e,.3,.9)),wt(n,"sine",mt(1580,.04),420,e+.05,.85,_e(n,e+.05,.2,.85)),At(n,e,.7,_e(n,e,.1,.7),{type:"bandpass",f0:2400,f1:900,q:3})},squish(){const n=Pt("squish",100);if(!n)return;const e=n.currentTime;At(n,e,.12,_e(n,e,.35,.12),{type:"lowpass",f0:900,f1:250}),wt(n,"sine",mt(300,.15),90,e,.1,_e(n,e,.25,.1))},hit(){const n=Pt("hit",70);if(!n)return;const e=n.currentTime;wt(n,"sine",220,70,e,.09,_e(n,e,.3,.09))},shatter(){const n=Pt("shatter",110);if(!n)return;const e=n.currentTime;At(n,e,.25,_e(n,e,.5,.25),{type:"highpass",f0:3e3,q:1.5}),nt(n,"triangle",2640,e,.12,_e(n,e,.2,.12))},conduct(){const n=Pt("conduct",110);if(!n)return;const e=n.currentTime;wt(n,"square",1400,200,e,.18,_e(n,e,.3,.18)),At(n,e,.14,_e(n,e,.25,.14),{type:"highpass",f0:2500})},evaporate(){const n=nn();if(!n)return;const e=n.currentTime;At(n,e,.4,_e(n,e,.3,.4),{type:"bandpass",f0:4500,f1:900,q:.8})},freeze(){const n=nn();if(!n)return;const e=n.currentTime;wt(n,"triangle",1500,3200,e,.2,_e(n,e,.25,.22)),nt(n,"triangle",990,e+.05,.2,_e(n,e+.05,.12,.2))},coin(){const n=Pt("coin",80);if(!n)return;const e=n.currentTime;nt(n,"square",mt(1046,.02),e,.06,_e(n,e,.12,.06)),nt(n,"square",mt(1568,.02),e+.06,.1,_e(n,e+.06,.12,.1)),nt(n,"sine",3136,e+.1,.12,_e(n,e+.1,.05,.12))},place(){const n=nn();if(!n)return;const e=n.currentTime;wt(n,"sine",300,500,e,.12,_e(n,e,.3,.14)),nt(n,"triangle",750,e+.08,.12,_e(n,e+.08,.15,.12))},sell(){const n=nn();if(!n)return;const e=n.currentTime;wt(n,"sine",500,280,e,.16,_e(n,e,.25,.18))},upgrade(){const n=nn();if(!n)return;const e=n.currentTime;[523,659,784].forEach((t,i)=>nt(n,"triangle",t,e+i*.06,.12,_e(n,e+i*.06,.2,.14)))},leak(){const n=nn();if(!n)return;const e=n.currentTime;wt(n,"sawtooth",180,60,e,.3,_e(n,e,.35,.3)),At(n,e,.2,_e(n,e,.15,.2),{type:"lowpass",f0:300})},waveStart(){const n=nn();if(!n)return;const e=n.currentTime;nt(n,"sawtooth",262,e,.22,_e(n,e,.18,.24)),nt(n,"sawtooth",392,e+.18,.3,_e(n,e+.18,.2,.32))},win(){const n=nn();if(!n)return;const e=n.currentTime;[523,659,784,1046].forEach((t,i)=>nt(n,"triangle",t,e+i*.13,.3,_e(n,e+i*.13,.25,.34)))},lose(){const n=nn();if(!n)return;const e=n.currentTime;[392,330,262].forEach((t,i)=>nt(n,"sawtooth",t,e+i*.18,.32,_e(n,e+i*.18,.2,.36)))},click(){const n=nn();if(!n)return;const e=n.currentTime;nt(n,"square",660,e,.04,_e(n,e,.08,.045))}};function Ag(n){return!n.groundAttack&&n.auraKind!=="tide"}function oa(n,e,t,i){const s=[];for(const r of n.enemies){if(r.hp<=0||r.phased)continue;const a=r.x-e,o=r.y-t,c=i+r.def.radius;a*a+o*o<=c*c&&s.push(r)}return s}function ap(n,e,t,i,s){for(const r of n.blockers){const a=i-e,o=s-t,c=a*a+o*o,l=c===0?0:Math.max(0,Math.min(1,((r.x-e)*a+(r.y-t)*o)/c)),d=e+l*a,h=t+l*o;if((r.x-d)**2+(r.y-h)**2<r.r*r.r)return!1}return!0}function Rg(n,e){const t=Ag(e.def),i=oa(n,e.x,e.y,e.stats.range).filter(s=>(t||!s.def.flying)&&(s.def.flying||ap(n,e.x,e.y,s.x,s.y)));if(i.length!==0)switch(e.mode){case"first":return i.reduce((s,r)=>r.dist>s.dist?r:s);case"last":return i.reduce((s,r)=>r.dist<s.dist?r:s);case"strong":return i.reduce((s,r)=>r.hp>s.hp?r:s);case"close":{const s=r=>(r.x-e.x)**2+(r.y-e.y)**2;return i.reduce((r,a)=>s(a)<s(r)?a:r)}}}function Ud(n,e){const t=n.draftMods.filter(i=>i.fx&&Qf(i,e.def)).map(i=>i.fx);return e.def.innateFx&&t.push(e.def.innateFx),t}function Cg(n,e){return n.clock%e.period<e.duration}function op(n,e){e.attackCount++;let t=1+n.killStackPct/100;for(const i of Ud(n,e)){const s=i.critEveryN;s&&e.attackCount%s.n===0&&(t*=s.mult,te.floater(e.x,e.y-28,"CRIT!","#ffd75e",13),te.burst(e.x,e.y-10,"#ffd75e",6,90,2.5,.3))}return t}function Fu(n,e){let t=1;for(const i of Ud(n,e))i.frenzy&&Cg(n,i.frenzy)&&(t*=i.frenzy.rateMul);return t}function Ou(n,e,t){if(!e)return 1;let i=1;for(const s of Ud(n,e)){const r=s.bonusVsStatus;r&&t.statuses[r.status]&&(i*=r.mult);const a=s.bonusVsHealthy;a&&t.hp>=t.maxHp*a.threshold&&(i*=a.mult),s.bonusVsFlying&&t.def.flying&&(i*=s.bonusVsFlying.mult)}return i}const Bu=95,ku=3,Ig=.35,zu=165,Pg=26,Lg=1.5,Dg=.25,Ng=1.5,Ug=2.5,Fg=.3,Og=1.4,Bg=14,Vu=30,kg=1.6;function zg(n,e){for(const t of n.clouds){const i=n.cloudTracks[t.pathIdx];t.dist=(t.dist+Pg*e)%i.total;const s=i.posAt(t.dist);t.x=s.x,t.y=s.y}}function Vg(n,e){return n.clouds.some(t=>(t.x-e.x)**2+(t.y-e.y)**2<=zu*zu)}function Hg(n,e){n.clock+=e;for(const t of n.wizards){if(t.pendingSpecialize)continue;if(t.recoil>0&&(t.recoil-=e),t.cooldown>0&&(t.cooldown-=e),t.silencedT!==void 0&&t.silencedT>0){t.silencedT-=e;continue}if(t.def.needsCloud&&(t.becalmed=!Vg(n,t),t.becalmed)){Math.random()<e*.5&&te.floater(t.x,t.y-30,"≋ no wind","#cfd8dc",10);continue}if(t.def.auraKind){if(t.cooldown<=0&&oa(n,t.x,t.y,t.stats.range).length>0){t.cooldown=t.stats.rate*Fu(n,t),t.recoil=.18;const s=op(n,t);t.def.auraKind==="tide"?Gg(n,t,s):t.def.auraKind==="gust"?Wg(n,t,s):Xg(n,t,s)}continue}const i=Rg(n,t);i&&(t.aim=Math.atan2(i.y-t.y,i.x-t.x),t.cooldown<=0&&(t.cooldown=t.stats.rate*Fu(n,t),t.recoil=.18,qg(n,t,i)))}}function Gg(n,e,t=1){var i;Se.waterPulse(),te.ring(e.x,e.y,"#3a86ff",e.stats.range);for(const s of oa(n,e.x,e.y,e.stats.range))if(!s.def.flying&&(Fn(n,s,e.stats.damage*t,"water",e),!(s.hp<=0)&&!((i=s.immunities)!=null&&i.includes("wet")))){if(s.statuses.burn){if(delete s.statuses.burn,n.stats.reactions.evaporate++,te.floater(s.x,s.y-18,"Evaporate!","#ffffff",12),Se.evaporate(),Fn(n,s,n.reaction.evaporateBurst,"water",e),s.hp<=0)continue}else s.statuses.wet={t:e.stats.wetDuration};lp(n,s,e.stats.soakSlow),s.statuses.chill&&(s.statuses.chill.t=Ng)}}function Wg(n,e,t=1){Se.windGust(),te.ring(e.x,e.y,"#e6f7f1",e.stats.range*.7);for(const i of oa(n,e.x,e.y,e.stats.range)){if(Fn(n,i,e.stats.damage*t,"wind",e),i.hp<=0||i.gustImmune||(i.gustCd??0)>0)continue;const s=e.stats.knockback*(i.def.boss?Dg:1);if(i.dist=Math.max(0,i.dist-s),i.gustCd=Lg,te.burst(i.x,i.y,"#e6f7f1",6,90,2.5,.35),!i.def.flying){const r=n.track.posAt(i.dist);i.x=r.x,i.y=r.y}}}function Xg(n,e,t=1){Se.gongPulse(),te.ring(e.x,e.y,"#c9a63f",e.stats.range);for(const i of oa(n,e.x,e.y,e.stats.range)){if(e.stats.damage>0&&Fn(n,i,e.stats.damage*t,"physical",e),i.hp<=0)continue;const s=i.statuses.rattled;i.statuses.rattled={t:3,pct:Math.max((s==null?void 0:s.pct)??0,e.stats.rattlePct)},s||te.floater(i.x,i.y-14,"Rattled!","#c9a63f",11)}}function qg(n,e,t){const i=Tn[e.def.element],s=e.x+Math.cos(e.aim)*16,r=e.y+Math.sin(e.aim)*16;te.burst(s,r,i.glow,4,60,2,.25),e.def.element==="fire"?Se.fireCast():e.def.element==="ice"?Se.iceCast():e.def.element==="lightning"?Se.boltCast():e.def.family==="archer"?Se.bowTwang():e.def.family==="tree"&&Se.thud();const a=op(n,e);if(e.def.element==="lightning")Yg(n,e,t,a);else if(e.def.groundAttack)$g(n,e,t,a);else if(e.def.pierce){const o=t.x-s,c=t.y-r,l=Math.hypot(o,c)||1;n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:0,targetId:-1,tx:t.x,ty:t.y,wizardId:e.id,visual:e.def.family==="archer"?"bolt":Hu(e.def),pierce:{dirX:o/l,dirY:c/l,traveled:0,maxDist:e.stats.range*Og,hitIds:[]}})}else n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:e.stats.splash,targetId:t.id,tx:t.x,ty:t.y,wizardId:e.id,visual:Hu(e.def),sx:s,sy:r})}function Hu(n){return n.family==="archer"?"arrow":n.id==="dynamite"||n.id==="sapperking"?"stick":n.id==="slingshot"||n.id==="boulder"||n.id==="mountain"?"rock":n.id==="thornspitter"||n.id==="bramblehydra"?"needle":"orb"}function $g(n,e,t,i=1){te.burst(t.x,t.y+4,"#6a8f4f",10,80,3,.4),te.ring(t.x,t.y,"#4c6b38",Vu);for(const s of n.enemies){if(s.hp<=0||s.def.flying)continue;const r=s.x-t.x,a=s.y-t.y;if(r*r+a*a>(Vu+s.def.radius)**2||(Fn(n,s,e.stats.damage*i,e.def.element,e),s.hp<=0))continue;const o=s.statuses.snared;s.statuses.snared={t:kg,pct:Math.max((o==null?void 0:o.pct)??0,e.stats.rootSlow)}}}function Yg(n,e,t,i=1){const s=Tn.lightning;let r=1+e.stats.chains,a=e.stats.damage*i;const o=new Set;let c=t,l=e.x,d=e.y;for(;c&&r>0;)te.arc(l,d,c.x,c.y,s.glow),c.statuses.wet?(delete c.statuses.wet,r+=n.reaction.chainBonus,n.stats.reactions.conduct++,te.floater(c.x,c.y-18,"Conduct!","#e8c3ff",13),te.burst(c.x,c.y,"#c77dff",10,120,3),Se.conduct(),Fn(n,c,a*n.reaction.conductMult,"lightning",e)):Fn(n,c,a,"lightning",e),cp(n,e,c),o.add(c.id),r--,a*=e.stats.chainFalloff,l=c.x,d=c.y,c=Kg(n,l,d,o)}function Kg(n,e,t,i){let s,r=Bu*Bu;for(const a of n.enemies){if(a.hp<=0||a.phased||i.has(a.id))continue;const o=(a.x-e)**2+(a.y-t)**2;o<=r&&ap(n,e,t,a.x,a.y)&&(r=o,s=a)}return s}function Zg(n,e){for(const t of n.projectiles){if(t.pierce){Jg(n,t,e);continue}const i=n.enemies.find(c=>c.id===t.targetId&&c.hp>0);i&&(t.tx=i.x,t.ty=i.y);const s=t.tx-t.x,r=t.ty-t.y,a=Math.hypot(s,r),o=t.speed*e;a<=Math.max(10,o)?(Qg(n,t,i),t.speed=-1):(t.x+=s/a*o,t.y+=r/a*o,Math.random()<.6&&te.burst(t.x,t.y,Tn[t.element].glow,1,15,2,.3))}n.projectiles=n.projectiles.filter(t=>t.speed>=0)}function Jg(n,e,t){const i=e.pierce,s=Math.min(e.speed*t,i.maxDist-i.traveled);e.x+=i.dirX*s,e.y+=i.dirY*s,i.traveled+=s,e.tx=e.x+i.dirX*20,e.ty=e.y+i.dirY*20;const r=n.wizards.find(a=>a.id===e.wizardId);for(const a of n.enemies){if(a.hp<=0||a.phased||i.hitIds.includes(a.id))continue;const o=a.x-e.x,c=a.y-e.y,l=Bg+a.def.radius;o*o+c*c>l*l||(i.hitIds.push(a.id),te.burst(a.x,a.y,Tn[e.element].glow,5,80,2.5,.3),fl(n,r,a,e.damage,e.element))}i.traveled>=i.maxDist?e.speed=-1:Math.random()<.5&&te.burst(e.x,e.y,Tn[e.element].glow,1,12,1.5,.2)}function Qg(n,e,t){const i=Tn[e.element];te.burst(e.tx,e.ty,i.color,e.splash>0?14:7,e.splash>0?150:90,3),e.splash>=40&&(Se.explosion(),te.ring(e.tx,e.ty,"#ff7b00",e.splash),te.burst(e.tx,e.ty,"#9a9086",12,35,4,1.3));const s=n.wizards.find(r=>r.id===e.wizardId);if(t&&t.hp>0&&fl(n,s,t,e.damage,e.element),e.splash>0)for(const r of n.enemies){if(r.hp<=0||r===t)continue;const a=r.x-e.tx,o=r.y-e.ty;a*a+o*o<=(e.splash+r.def.radius)**2&&fl(n,s,r,e.damage*.6,e.element)}}function fl(n,e,t,i,s){s==="fire"&&(t.statuses.chill||t.statuses.frozen)&&(delete t.statuses.chill,delete t.statuses.frozen,i*=n.reaction.shatterMult,n.stats.reactions.shatter++,te.floater(t.x,t.y-18,"Shatter!","#b3ecff",13),te.burst(t.x,t.y,"#b3ecff",12,140,3),Se.shatter()),Fn(n,t,i,s,e),e&&t.hp>0&&cp(n,e,t)}function ja(n,e){var t;return((t=n.immunities)==null?void 0:t.includes(e))??!1}function cp(n,e,t){const i=e.stats;if(e.def.element==="fire"&&i.burnDps>0&&!ja(t,"burn"))if(t.statuses.wet)delete t.statuses.wet,n.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Se.evaporate(),Fn(n,t,n.reaction.evaporateBurst,"fire",e);else{const s=t.statuses.burn;t.statuses.burn={t:i.burnDuration,dps:Math.max((s==null?void 0:s.dps)??0,i.burnDps)}}if(e.def.entangles&&e.stats.entangleDur>0&&(t.entangleCd??0)<=0){const s=t.def.boss?e.stats.entangleDur*Fg:e.stats.entangleDur;t.statuses.entangled={t:s},t.entangleCd=s+Ug,te.floater(t.x,t.y-14,"Rooted!","#8c9c72",11),te.burst(t.x,t.y+6,"#6b7a52",8,70,2.5,.4)}if(e.def.element==="ice"){if(t.statuses.burn&&!ja(t,"wet")?(delete t.statuses.burn,n.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Se.evaporate(),Fn(n,t,n.reaction.evaporateBurst,"ice",e)):ja(t,"wet")||(t.statuses.wet={t:i.wetDuration}),t.hp<=0)return;lp(n,t,i.chillPct)}}function lp(n,e,t){if(e.statuses.frozen||ja(e,"chill"))return;const i=e.statuses.chill??{t:0,pct:0,stacks:0};if(i.stacks=Math.min(ku,i.stacks+1),i.pct=Math.max(i.pct,t),i.t=2.5,e.statuses.chill=i,i.stacks>=ku){delete e.statuses.chill;const s=e.def.boss?n.reaction.freezeDuration*Ig:n.reaction.freezeDuration;e.statuses.frozen={t:s},n.stats.reactions.frozen++,te.floater(e.x,e.y-18,"Frozen!","#e6f9ff",12),te.burst(e.x,e.y,"#b3ecff",10,100,3),Se.freeze()}}function Fn(n,e,t,i,s){var d,h;if(e.hp<=0)return;if(e.armorHp!==void 0&&e.armorHp>0){const u=1+(((d=e.statuses.rattled)==null?void 0:d.pct)??0),f=Ou(n,s,e),g=t*u*f*(i==="physical"?1:.1);e.armorHp-=g,e.hitFlash=.12,n.stats.dmgByElement[i]+=g,g>=1&&te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(g)),i==="physical"?"#cdd7e0":"#6b7684",i==="physical"?11:9),i==="physical"&&Se.armorClank(),e.armorHp<=0&&jg(n,e);return}const r=e.def.resist[i]??1;if(r===0){te.floater(e.x,e.y-14,"Immune!","#999999",11);return}const a=1+(((h=e.statuses.rattled)==null?void 0:h.pct)??0),o=Ou(n,s,e),c=e.def.flying&&(s==null?void 0:s.def.family)==="archer"?1.5:1;let l=t*r*a*o*c;if(e.wardCap!==void 0&&l>e.wardCap&&(l=e.wardCap,te.floater(e.x,e.y-16,"warded","#8fb4ff",9)),e.hp-=l,e.hitFlash=.12,n.stats.dmgByElement[i]+=l,l>=1){const u=r>1?"#ffe08a":r<1?"#8899aa":"#ffffff";te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(l)),u,r>1?12:10)}e.hp<=0&&dp(n,e,s)}function Fd(n,e,t){const i=Nd[e];if(!i)return null;const s=Zs[Math.min(n.act,Zs.length-1)],r=i.hp*s.hp,a=Math.max(0,t),o=n.track.posAt(a),c={id:n.nextId++,def:i,hp:r,maxHp:r,dist:a,x:o.x,y:o.y,statuses:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:o.angle,hitFlash:0,speedMult:s.speed,armorHp:i.armor};return n.enemies.push(c),te.burst(o.x,o.y,i.color,10,120,3,.4),c}function jg(n,e){e.armorHp=0,te.floater(e.x,e.y-30,"ARMOR SHATTERED!","#ffd75e",15),te.burst(e.x,e.y,"#cdd7e0",22,190,4,.6),te.ring(e.x,e.y,"#cdd7e0",55),Se.armorBreak();for(const t of e.def.armorBreakSpawns??[])Fd(n,t,e.dist-20-Math.random()*30)}function dp(n,e,t){var r;const i=Zs[Math.min(n.act,Zs.length-1)].bounty,s=Math.round(e.def.bounty*(((r=n.waveModifier)==null?void 0:r.bountyMult)??1)*i)+n.bountyBonus;if(n.gold+=s,n.stats.kills++,te.floater(e.x,e.y-22,`+${s}`,"#ffd75e",12),te.burst(e.x,e.y,e.def.color,12,130,3.5,.5),te.ring(e.x,e.y,e.def.color,e.def.boss?46:24),Se.coin(),n.stats.kills%40===0&&bo(n,"killLives")&&(n.lives++,te.floater(e.x,e.y-40,"🍷 +1 ❤","#ff9db5",14)),e.returning&&e.def.stealsGold&&(n.gold+=e.def.stealsGold,te.floater(e.x,e.y-34,`💰 +${e.def.stealsGold} recovered!`,"#7dff9b",13)),e.def.deathSilence){const a=e.def.deathSilence;te.ring(e.x,e.y,"#cfd8e8",a.radius),Se.wail();for(const o of n.wizards)o.pendingSpecialize||(o.x-e.x)**2+(o.y-e.y)**2<=a.radius*a.radius&&(o.silencedT=Math.max(o.silencedT??0,a.duration),te.floater(o.x,o.y-28,"silenced!","#cfd8e8",12))}e.def.deathSpawns&&(e.def.id.startsWith("slime")?(Se.squish(),te.burst(e.x,e.y,e.def.color,12,110,4,.5)):(Se.woodCrash(),te.floater(e.x,e.y-34,"The wagon breaks open!","#e0b070",13),te.burst(e.x,e.y,"#7a5c38",18,150,4,.6)),e.def.deathSpawns.forEach((o,c)=>Fd(n,o,e.dist-8-c*14))),e0(n,e,t)}function e0(n,e,t){for(const i of n.draftMods){if(!i.fx)continue;const s=i.element!=="all"||!!i.family,r=t?Qf(i,t.def):!s;Gu(n,e,t,i.fx,r)}t!=null&&t.def.innateFx&&Gu(n,e,t,t.def.innateFx,!0)}function Gu(n,e,t,i,s){var c;if(i.spreadBurnOnDeath&&e.statuses.burn){let l,d=8100;for(const h of n.enemies){if(h===e||h.hp<=0||h.statuses.burn||(c=h.immunities)!=null&&c.includes("burn"))continue;const u=(h.x-e.x)**2+(h.y-e.y)**2;u<=d&&(d=u,l=h)}l&&(l.statuses.burn={t:Math.max(e.statuses.burn.t,1.5),dps:e.statuses.burn.dps},te.arc(e.x,e.y,l.x,l.y,"#ff7b00"),te.floater(l.x,l.y-16,"Wildfire!","#ff9b4a",11))}if(!s)return;const r=i.onKillExplode;if(r){Se.explosion(),te.burst(e.x,e.y,"#ffab5e",14,160,3.5),te.burst(e.x,e.y,"#9a9086",8,30,4,1.2),te.ring(e.x,e.y,"#ff7b00",r.radius);for(const l of n.enemies){if(l===e||l.hp<=0)continue;const d=l.x-e.x,h=l.y-e.y;d*d+h*h<=(r.radius+l.def.radius)**2&&Fn(n,l,r.damage,"physical",t)}}const a=i.onKillGold;a&&n.rng()<a.chance&&(n.gold+=a.amount,te.floater(e.x,e.y-36,`+${a.amount} bonus`,"#ffd75e",11));const o=i.onKillStackDamage;o&&n.killStackPct<o.capPct&&(n.killStackPct=Math.min(o.capPct,n.killStackPct+o.pct))}function t0(n,e){for(const t of n.enemies)t.hasteMul=1,t.wardCap=void 0;for(const t of n.enemies){const i=t.def.aura;if(!(!i||t.hp<=0)){if(i.kind==="ward"){for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.wardCap=Math.min(s.wardCap??1/0,i.power))}continue}if(i.kind==="heal"){if(t.auraCd=(t.auraCd??i.period??2)-e,t.auraCd<=0){t.auraCd=i.period??2;let s=!1;for(const r of n.enemies){if(r===t||r.hp<=0||r.hp>=r.maxHp||(r.x-t.x)**2+(r.y-t.y)**2>i.radius*i.radius)continue;const o=r.maxHp*i.power;r.hp=Math.min(r.maxHp,r.hp+o),te.floater(r.x,r.y-12,`+${Math.round(o)}`,"#7dff9b",10),s=!0}s&&(te.ring(t.x,t.y,"#3fae5a",i.radius),Se.healChime())}}else{Se.drumBeat();for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.hasteMul=Math.max(s.hasteMul??1,1+i.power))}}}}for(const t of n.enemies){if(t.hp<=0)continue;const i=t.statuses;if(t.def.regen&&!i.frozen&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.def.regen*e)),t.def.dropSpawns&&(t.dropCd=(t.dropCd??t.def.dropSpawns.period)-e,t.dropCd<=0)){t.dropCd=t.def.dropSpawns.period,Se.woodCrash(),te.floater(t.x,t.y-30,"The tower unloads!","#e0b070",12);for(let a=0;a<t.def.dropSpawns.count;a++)Fd(n,t.def.dropSpawns.type,t.dist-18-a*14)}if(t.def.hexes&&(t.hexCd=(t.hexCd??t.def.hexes.period*.6)-e,t.hexCd<=0)){t.hexCd=t.def.hexes.period;const a=t.def.hexes.radius*t.def.hexes.radius,o=n.wizards.filter(c=>!c.pendingSpecialize&&(c.silencedT??0)<=0&&(c.x-t.x)**2+(c.y-t.y)**2<=a);if(o.length>0){const c=o[Math.floor(Math.random()*o.length)];c.silencedT=t.def.hexes.duration,te.arc(t.x,t.y,c.x,c.y,"#b06bff"),te.ring(c.x,c.y,"#7a4a9e",30),te.floater(c.x,c.y-30,"HEXED!","#b06bff",14),Se.hexZap()}}if(t.def.phase){t.phaseT=(t.phaseT??0)+e;const a=t.phaseT%t.def.phase.period,o=t.phased;t.phased=a>t.def.phase.period-t.def.phase.duration,t.phased!==o&&Se.phaseShimmer()}if(i.burn&&(n0(n,t,i.burn.dps*e),i.burn.t-=e,i.burn.t<=0&&delete i.burn),i.wet&&(i.wet.t-=e,i.wet.t<=0&&delete i.wet),i.chill&&(i.chill.t-=e,i.chill.t<=0&&delete i.chill),i.frozen&&(i.frozen.t-=e,i.frozen.t<=0&&delete i.frozen),i.rattled&&(i.rattled.t-=e,i.rattled.t<=0&&delete i.rattled),i.entangled&&(i.entangled.t-=e,i.entangled.t<=0&&delete i.entangled),i.snared&&(i.snared.t-=e,i.snared.t<=0&&delete i.snared),t.hp<=0)continue;let s=1;i.frozen||i.entangled?s=0:i.chill&&(s=Math.max(.25,1-i.chill.pct*(.6+.2*i.chill.stacks))),s>0&&i.snared&&(s*=Math.max(.2,1-i.snared.pct)),s*=t.hasteMul??1,t.animT+=s*e,t.hitFlash>0&&(t.hitFlash-=e),t.gustCd&&t.gustCd>0&&(t.gustCd-=e),t.entangleCd&&t.entangleCd>0&&(t.entangleCd-=e);const r=t.def.speed*(t.speedMult??1)*s*e;if(t.dist+=t.returning?-r:r,t.def.flying){const a=n.track.posAt(0),o=n.track.posAt(n.track.total),c=Math.hypot(o.x-a.x,o.y-a.y)||1,l=Math.max(0,Math.min(1,t.dist/c));t.x=a.x+(o.x-a.x)*l,t.y=a.y+(o.y-a.y)*l,t.angle=Math.atan2(o.y-a.y,o.x-a.x),t.dist>=c&&Wu(n,t)}else{const a=n.track.posAt(t.dist);t.x=a.x,t.y=a.y,t.angle=a.angle,t.returning?(t.angle+=Math.PI,t.dist<=0&&(t.hp=0)):t.dist>=n.track.total&&Wu(n,t)}}n.enemies=n.enemies.filter(t=>t.hp>0)}function Wu(n,e){if(e.def.stealsGold&&!e.returning){const i=Math.min(n.gold,e.def.stealsGold);n.gold-=i,e.returning=!0,te.floater(e.x,e.y-20,`💰 -${i} stolen!`,"#ffd75e",15),Se.leak();return}e.hp=0;const t=e.def.leakCost??(e.def.boss?5:1);n.lives-=t,n.stats.leaks++,te.floater(e.x-20,e.y,`-${t} ❤`,"#ff6b81",t>1?16:14),Se.leak(),n.lives<=0&&(n.lives=0,n.phase="lost",Se.lose())}function n0(n,e,t){var a;if(e.armorHp!==void 0&&e.armorHp>0)return;const i=e.def.resist.fire??1,s=1+(((a=e.statuses.rattled)==null?void 0:a.pct)??0),r=t*i*s;e.hp-=r,n.stats.dmgByElement.fire+=r,e.hp<=0&&dp(n,e)}const Od="wizardtd.run";function us(n){if(n.phase==="won"||n.phase==="lost")return;const e={mapId:n.map.id,seed:n.seed,gold:n.gold,lives:n.lives,round:n.round,act:n.act,lastEliteRound:n.lastEliteRound,cardIds:n.draftMods.map(t=>t.id),wizards:n.wizards.map(t=>({defId:t.def.id,cx:t.cx,cy:t.cy,tiers:[...t.tiers],mode:t.mode,invested:t.invested})),stats:n.stats,killStackPct:n.killStackPct,relicIds:n.relics.map(t=>t.id),seenEvents:[...n.seenEvents]};try{localStorage.setItem(Od,JSON.stringify(e))}catch{}}function i0(){try{const n=localStorage.getItem(Od);if(!n)return null;const e=JSON.parse(n);return e.round>0||e.wizards.length>0?e:null}catch{return null}}function Bd(){try{localStorage.removeItem(Od)}catch{}}function s0(n){const e=Gf(n.mapId);if(!e)return null;const t=Ko(e,n.seed);for(const i of n.cardIds){const s=Cd.find(r=>r.id===i);s&&Pd(t,s)}for(const i of n.relicIds??[]){const s=Yf.find(r=>r.id===i);s&&So(t,s)}t.seenEvents=[...n.seenEvents??[]];for(const i of n.wizards){const s=jt[i.defId];if(!s)continue;const r=Ld(t,s,i.cx,i.cy);r.tiers=i.tiers,r.mode=i.mode,r.invested=i.invested,r.stats=zi(s,r.tiers,t.draftMods),t.wizards.push(r)}return t.gold=n.gold,t.lives=n.lives,t.round=n.round,t.lastEliteRound=n.lastEliteRound,t.stats=n.stats,t.killStackPct=n.killStackPct??0,t.act=n.act??0,t.rng=Xf(n.seed+n.round*101),t}const Xu={id:"guarded",name:"Guarded",desc:"+25% HP — a relic awaits",hpMult:1.25};function kd(n){const e=Rd(n.act);if(n.phase!=="build"||n.round>=e.length||!n.nodePicked&&n.nextNodes.length>1)return!1;us(n);const t=e[n.round];n.waveKind=n.nodeChoice,n.waveModifier=null,n.forcedModifier?(n.waveModifier=n.forcedModifier,n.forcedModifier=null,n.waveModifier!==Xu&&n.waveModifier.id!=="blessed"&&(n.waveKind="elite"),te.floater(480,80,`★ ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="elite"?(n.waveModifier=r0(n),n.lastEliteRound=n.round,te.floater(480,80,`★ ELITE: ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="treasure"&&(n.waveModifier=Xu,te.floater(480,80,"💎 GUARDED: clear the wave to claim a relic","#7fd8ff",15)),n.pendingSpawns=[];for(const i of t)for(let s=0;s<i.count;s++)n.pendingSpawns.push({t:i.delay+s*i.gap,type:i.type});return n.pendingSpawns.sort((i,s)=>i.t-s.t),n.waveTime=0,n.phase="wave",Se.waveStart(),!0}function r0(n){const e=()=>Mo[Math.floor(n.rng()*Mo.length)],t=e();if(n.act<2)return t;let i=e();for(let s=0;s<5&&i.id===t.id;s++)i=e();return i.id===t.id?t:{id:`${t.id}+${i.id}`,name:`${t.name} ${i.name}`,desc:`${t.desc} & ${i.desc}`,speedMult:(t.speedMult??1)*(i.speedMult??1),hpMult:(t.hpMult??1)*(i.hpMult??1),immune:[...t.immune??[],...i.immune??[]],gustImmune:t.gustImmune||i.gustImmune}}function a0(n,e){var t;if(n.phase!=="wave"){n.phase==="build"&&n.autoplay&&n.autoplayTimer>0&&(n.autoplayTimer-=e,n.autoplayTimer<=0&&kd(n));return}for(n.waveTime+=e;n.pendingSpawns.length>0&&n.pendingSpawns[0].t<=n.waveTime;){const i=n.pendingSpawns.shift();o0(n,i.type)}if(n.pendingSpawns.length===0&&n.enemies.length===0){const i=n.waveKind==="elite",s=n.waveKind==="treasure";if(n.waveModifier=null,n.waveKind="normal",n.round++,n.stats.wavesCleared++,n.round>=Rd(n.act).length)Jf(n)&&n.act<qf-1?(n.phase="actClear",Se.actFanfare()):(n.phase="won",Se.win());else{const r=dg+ug*n.round;n.gold+=r;for(const a of n.draftMods){const o=(t=a.fx)==null?void 0:t.interest;if(!o)continue;const c=Math.min(o.cap,Math.floor(n.gold/o.per));c>0&&(n.gold+=c,te.floater(480,110,`+${c} interest 🏦`,"#ffd75e",13))}if(s)n.pendingRelicDraft=hl(n,2),n.phase="relic";else{const a=bo(n,"draft4")?4:3;n.pendingDraft=tp(n,a,i),n.eliteDraft=i,n.phase="draft"}}}}function o0(n,e){const t=Nd[e],i=n.track.posAt(0),s=n.waveModifier,r=Zs[Math.min(n.act,Zs.length-1)],a=t.boss?1:1+n.round*lg,o=t.hp*((s==null?void 0:s.hpMult)??1)*r.hp*a,c=bo(n,"hasteEnemies")?1.1:1,l=[...t.innateImmune??[],...(s==null?void 0:s.immune)??[]];n.enemies.push({id:n.nextId++,def:t,hp:o,maxHp:o,dist:0,x:i.x,y:i.y,statuses:bo(n,"spawnChill")&&!l.includes("chill")?{chill:{t:2.5,pct:.15,stacks:1}}:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:i.angle,hitFlash:0,speedMult:((s==null?void 0:s.speedMult)??1)*c*r.speed,immunities:l.length>0?l:void 0,gustImmune:s==null?void 0:s.gustImmune,armorHp:t.armor}),t.boss&&(te.floater(i.x+30,i.y-20,`${t.name}!`,"#ff9db5",14),(t.armor||t.hp>=1500)&&Se.bossRoar())}function Yr(n,e){return n.gold>=e}function pl(n,e){return Math.round(e*(1-n.towerDiscountPct/100))}function up(n,e){return Yr(n,e)?(n.gold-=e,!0):!1}function hp(n){return Math.floor(n.invested*Id)}function c0(n,e){n.gold+=hp(e),n.wizards=n.wizards.filter(t=>t.id!==e.id),n.selectedWizardId===e.id&&(n.selectedWizardId=null)}const l0={common:"#9a92b5",uncommon:"#5bc8f5",rare:"#ffd75e"};let es,Ar=null,eo=null;function d0(n){eo=n,es=document.getElementById("draft-modal")}function u0(n){if(n.phase!=="draft"||!n.pendingDraft){Ar&&(es.classList.add("hidden"),Ar=null);return}Ar!==n.pendingDraft&&(Ar=n.pendingDraft,h0(n))}function h0(n){const e=n.pendingDraft;es.classList.remove("hidden"),es.innerHTML=`
    <div id="draft-inner">
      <h2>${n.eliteDraft?"★ Elite Spoils — choose a RARE":"Choose a card"}</h2>
      <div id="draft-cards"></div>
      <button id="draft-skip">Skip — take ${$f} ◉</button>
    </div>`;const t=es.querySelector("#draft-cards");for(const i of e){const s=i.element==="all"?"#c9b8ff":Tn[i.element].color,r=document.createElement("button");r.className="draft-card",r.style.borderColor=s,r.innerHTML=`
      <div class="dc-icon" style="background:${s}22">${i.icon}</div>
      <div class="dc-name">${i.name}</div>
      <div class="dc-desc">${i.desc}</div>
      <div class="dc-rarity" style="color:${l0[i.rarity]}">◆ ${i.rarity}</div>`,r.addEventListener("click",()=>qu(n,i)),t.appendChild(r)}es.querySelector("#draft-skip").addEventListener("click",()=>qu(n,null))}function qu(n,e){e?(Pd(n,e),Se.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#c9b8ff",16)):(n.gold+=$f,Se.coin()),n.pendingDraft=null,n.eliteDraft=!1,n.phase="build",es.classList.add("hidden"),Ar=null,eo==null||eo()}let zs,Rr=null,to=null;function f0(n){to=n,zs=document.getElementById("specialize-modal")}function p0(n){const e=Zo(n,n.selectedWizardId),t=e!=null&&e.pendingSpecialize?e:void 0;if(!t){Rr&&(zs.classList.add("hidden"),Rr=null);return}Rr!==t&&(Rr=t,m0(n,t))}function m0(n,e){const t=e.specializeOptions??[];zs.classList.remove("hidden"),zs.innerHTML=`
    <div id="draft-inner">
      <h2>Specialize your ${e.family==="wizard"?"Wizard":"Goblin"}</h2>
      <div id="draft-cards"></div>
      <div id="spec-hint">Click elsewhere to decide later — it'll wait, idle, until you choose.</div>
    </div>`;const i=zs.querySelector("#draft-cards");for(const s of t){const r=document.createElement("button");r.className="draft-card",r.style.borderColor=s.color,r.innerHTML=`
      <div class="dc-icon" style="background:${s.color}22">${s.icon}</div>
      <div class="dc-name">${s.name}</div>
      <div class="dc-desc">${s.desc}</div>`,r.addEventListener("click",()=>g0(n,e,s)),i.appendChild(r)}}function g0(n,e,t){ep(n,e,t),Se.upgrade(),te.burst(e.x,e.y,t.color,14,120,3),te.floater(e.x,e.y-24,`${t.icon} ${t.name}!`,t.color,14),zs.classList.add("hidden"),Rr=null,to==null||to()}let Vs,ml,Cr=null,no=null,$u="";function _0(n){no=n,Vs=document.getElementById("relic-modal"),ml=document.getElementById("relic-bar")}function x0(n){n.phase!=="relic"||!n.pendingRelicDraft?Cr&&(Vs.classList.add("hidden"),Cr=null):Cr!==n.pendingRelicDraft&&(Cr=n.pendingRelicDraft,v0(n));const e=n.relics.map(t=>t.id).join(",");if(e!==$u){$u=e,ml.innerHTML="";for(const t of n.relics){const i=document.createElement("div");i.className=`relic-chip ${t.rarity}`,i.textContent=t.icon,i.title=`${t.name} — ${t.desc}`,ml.appendChild(i)}}}function v0(n){const e=n.pendingRelicDraft;Vs.classList.remove("hidden"),Vs.innerHTML=`
    <div id="draft-inner">
      <h2>💎 Treasure! Choose a relic</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Vs.querySelector("#draft-cards");for(const i of e){const s=document.createElement("button");s.className="draft-card",s.style.borderColor=i.rarity==="rare"?"#ffd75e":"#5bc8f5",s.innerHTML=`
      <div class="dc-icon" style="background:#ffd75e22">${i.icon}</div>
      <div class="dc-name">${i.name}</div>
      <div class="dc-desc">${i.desc}</div>
      <div class="dc-rarity" style="color:${i.rarity==="rare"?"#ffd75e":"#5bc8f5"}">◆ ${i.rarity} relic</div>`,s.addEventListener("click",()=>y0(n,i)),t.appendChild(s)}}function y0(n,e){So(n,e),Se.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#ffd75e",16),n.pendingRelicDraft=null,n.phase="build",Vs.classList.add("hidden"),Cr=null,no==null||no()}const M0={id:"blessed",name:"Storm-Blessed",desc:"20% slower, +30% HP, 2x bounty",speedMult:.8,hpMult:1.3,bountyMult:2};function S0(n,e){switch(e){case"chest_open":{const t=hl(n,1)[0];t&&(So(n,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),n.forcedModifier=Mo[Math.floor(n.rng()*Mo.length)],te.floater(480,210,"⚠ Something stirs... next wave is ELITE","#ff9db5",13),Se.upgrade();break}case"blood_pact":{n.lives=Math.max(1,n.lives-3),n.pendingDraft=tp(n,3,!0),n.eliteDraft=!0,n.phase="draft",Se.leak();break}case"merchant_buy":{if(n.gold<130){te.floater(480,180,"Not enough gold — he scoffs and rolls on.","#9a92b5",12);break}n.gold-=130;const t=hl(n,1)[0];t&&(So(n,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),Se.coin();break}case"training":{if(n.gold<60){te.floater(480,180,"Not enough gold for the drillmaster.","#9a92b5",12);break}const t=n.wizards.filter(a=>!a.pendingSpecialize&&(a.tiers[0]<a.def.upgrades[0].tiers.length||a.tiers[1]<a.def.upgrades[1].tiers.length));if(t.length===0){te.floater(480,180,"No tower can be trained further.","#9a92b5",12);break}n.gold-=60;const i=t[Math.floor(n.rng()*t.length)],s=i.tiers[0]<i.def.upgrades[0].tiers.length?0:1,r=i.def.upgrades[s].tiers[i.tiers[s]];i.tiers[s]++,i.stats=b0(n,i),te.burst(i.x,i.y,"#c9b8ff",12,110,3),te.floater(i.x,i.y-24,`${r.name} — free!`,"#c9b8ff",12),Se.upgrade();break}case"gamble":{n.rng()<.5?(n.gold*=2,te.floater(480,180,`🪙 DOUBLE! ${n.gold} gold`,"#ffd75e",16),Se.coin()):(n.gold=Math.floor(n.gold/2),te.floater(480,180,`🪙 The imp cackles. ${n.gold} gold left`,"#ff9db5",14),Se.leak());break}case"blessing":{n.forcedModifier=M0,te.floater(480,180,"⛈️ The next wave is Storm-Blessed","#7fd8ff",14),Se.waterPulse();break}}n.pendingEvent=null,n.nodeChoice="normal",n.nodePicked=!0,n.nextNodes=n.nextNodes.filter(t=>t!=="event")}function b0(n,e){return zi(e.def,e.tiers,n.draftMods)}let Fs,Ir=null,io=null;function E0(n){io=n,Fs=document.getElementById("event-modal")}function T0(n){if(!n.pendingEvent){Ir&&(Fs.classList.add("hidden"),Ir=null);return}Ir!==n.pendingEvent&&(Ir=n.pendingEvent,w0(n))}function w0(n){const e=n.pendingEvent;Fs.classList.remove("hidden"),Fs.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">${e.icon}</div>
      <h2>${e.name}</h2>
      <div class="ev-desc">${e.desc}</div>
      <div id="event-choices"></div>
    </div>`;const t=Fs.querySelector("#event-choices");for(const i of e.choices){const s=document.createElement("button");s.className="ev-choice",s.innerHTML=`
      <div class="evc-label">${i.label}</div>
      <div class="evc-desc">${i.desc}</div>`,s.addEventListener("click",()=>{Se.click(),S0(n,i.effect),Fs.classList.add("hidden"),Ir=null,io==null||io()}),t.appendChild(s)}}const fp={normal:{icon:"⚔️",label:"Normal",hint:"A standard wave. No surprises."},elite:{icon:"★",label:"Elite",hint:"A modified, harder wave — clear it for a RARE-only card draft."},treasure:{icon:"💎",label:"Treasure",hint:"Guarded wave (+25% HP) — clear it to claim a RELIC."},event:{icon:"❓",label:"Event",hint:"Something is happening on the road..."}};let so,Ki,ro="",uc=-1;function A0(){so=document.getElementById("node-picker"),Ki=document.getElementById("path-modal")}function R0(n){n.phase==="build"&&np(n),C0(n),P0(n)}function C0(n){if(!(n.phase==="build"&&!n.nodePicked&&n.nextNodes.length>1&&!n.pendingEvent)){if(uc===n.round)return;Ki.classList.add("hidden");return}if(uc===n.round&&!Ki.classList.contains("hidden"))return;uc=n.round,Ki.classList.remove("hidden"),Ki.innerHTML=`
    <div id="draft-inner">
      <h2>🗺️ Choose your path — Wave ${n.round+1}</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Ki.querySelector("#draft-cards");for(const i of n.nextNodes){const s=fp[i],r=document.createElement("button");r.className=`draft-card path-card ${i}`,r.innerHTML=`
      <div class="dc-icon">${s.icon}</div>
      <div class="dc-name">${s.label}</div>
      <div class="dc-desc">${s.hint}</div>`,r.addEventListener("click",()=>I0(n,i)),t.appendChild(r)}}function I0(n,e){Se.click(),e==="event"?(n.pendingEvent=ip(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(t=>t!=="event"),n.nodeChoice="normal",n.nodePicked=!0)):(n.nodeChoice=e,n.nodePicked=!0),Ki.classList.add("hidden"),ro=""}function P0(n){const e=n.phase==="build"&&n.nodePicked&&n.nextNodes.length>1,t=`${e}|${n.nextNodes.join(",")}|${n.nodeChoice}|${n.nodesForRound}`;if(t!==ro&&(ro=t,so.classList.toggle("hidden",!e),!!e)){so.innerHTML="";for(const i of n.nextNodes){const s=fp[i],r=document.createElement("button");r.className=`node-btn ${i}${n.nodeChoice===i?" active":""}`,r.title=s.hint,r.innerHTML=`<span class="nb-icon">${s.icon}</span>${s.label}`,r.addEventListener("click",()=>{if(Se.click(),i==="event"){n.pendingEvent=ip(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(a=>a!=="event"));return}n.nodeChoice=i,ro=""}),so.appendChild(r)}}}let Os,Pr=-1,ao=null;function L0(n){ao=n,Os=document.getElementById("actclear-modal")}function D0(n){if(n.phase!=="actClear"){Pr!==-1&&(Os.classList.add("hidden"),Pr=-1);return}Pr!==n.act&&(Pr=n.act,N0(n))}function N0(n){const e=Ed[wd[n.act+1]],t=n.wizards.reduce((i,s)=>i+Math.round(s.invested*Id),0);Os.classList.remove("hidden"),Os.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">🏰</div>
      <h2>Act ${["I","II","III"][n.act]} Complete!</h2>
      <div class="ev-desc">
        The ${n.map.name} is safe. The horde regroups ahead at <b>${e.name}</b>.<br/>
        Your towers are packed up and sold for <b>+${t} ◉</b> — cards, relics and gold
        travel with you. Build anew.
      </div>
      <div id="event-choices">
        <button class="ev-choice" id="btn-travel">
          <div class="evc-label">Travel onward ➤</div>
          <div class="evc-desc">Cross into ${e.name} (Act ${["I","II","III"][n.act+1]})</div>
        </button>
      </div>
    </div>`,Os.querySelector("#btn-travel").addEventListener("click",()=>{Os.classList.add("hidden"),Pr=-1,ao==null||ao(n)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="185",U0=0,Yu=1,F0=2,oo=1,pp=2,Lr=3,_i=0,on=1,Nt=2,pi=0,Hs=1,Eo=2,Ku=3,Zu=4,O0=5,Zi=100,B0=101,k0=102,z0=103,V0=104,H0=200,G0=201,W0=202,X0=203,gl=204,_l=205,q0=206,$0=207,Y0=208,K0=209,Z0=210,J0=211,Q0=212,j0=213,e_=214,xl=0,vl=1,yl=2,Qs=3,Ml=4,Sl=5,bl=6,El=7,mp=0,t_=1,n_=2,Jn=0,gp=1,_p=2,xp=3,Vd=4,vp=5,yp=6,Mp=7,Ju="attached",i_="detached",Sp=300,as=301,js=302,hc=303,fc=304,Jo=306,er=1e3,Kn=1001,To=1002,Ut=1003,bp=1004,Dr=1005,Ft=1006,co=1007,ui=1008,hn=1009,Ep=1010,Tp=1011,Kr=1012,Hd=1013,jn=1014,Mn=1015,xi=1016,Gd=1017,Wd=1018,Zr=1020,wp=35902,Ap=35899,Rp=1021,Cp=1022,Sn=1023,vi=1026,ts=1027,Xd=1028,qd=1029,os=1030,$d=1031,Yd=1033,lo=33776,uo=33777,ho=33778,fo=33779,Tl=35840,wl=35841,Al=35842,Rl=35843,Cl=36196,Il=37492,Pl=37496,Ll=37488,Dl=37489,wo=37490,Nl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,zl=37813,Vl=37814,Hl=37815,Gl=37816,Wl=37817,Xl=37818,ql=37819,$l=37820,Yl=37821,Kl=36492,Zl=36494,Jl=36495,Ql=36283,jl=36284,Ao=36285,ed=36286,td=2200,s_=2201,r_=2202,Jr=2300,Qr=2301,pc=2302,Qu=2303,Bs=2400,ks=2401,Ro=2402,Kd=2500,a_=2501,o_=0,Ip=1,nd=2,c_=3200,id=0,l_=1,Di="",Gt="srgb",pn="srgb-linear",Co="linear",it="srgb",ps=7680,ju=519,d_=512,u_=513,h_=514,Zd=515,f_=516,p_=517,Jd=518,m_=519,sd=35044,eh="300 es",Zn=2e3,jr=2001;function g_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function __(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x_(){const n=ea("canvas");return n.style.display="block",n}const th={};function Io(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function we(...n){n=Pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=Pp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Gs(...n){const e=n.join(" ");e in th||(th[e]=!0,we(...n))}function v_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const y_={[xl]:vl,[yl]:bl,[Ml]:El,[Qs]:Sl,[vl]:xl,[bl]:yl,[El]:Ml,[Sl]:Qs};class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const kr=Math.PI/180,tr=180/Math.PI;function Nn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Qd(n,e){return(n%e+e)%e}function M_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function S_(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function b_(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function E_(n,e=1){return e-Math.abs(Qd(n,e*2)-e)}function T_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function A_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function R_(n,e){return n+Math.random()*(e-n)}function C_(n){return n*(.5-Math.random())}function I_(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(n){return n*kr}function L_(n){return n*tr}function D_(n){return(n&n-1)===0&&n!==0}function N_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function U_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function F_(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),d=a((e+i)/2),h=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,c*h,c*u,o*l);break;case"YZY":n.set(c*u,o*d,c*h,o*l);break;case"ZXZ":n.set(c*h,c*u,o*d,o*l);break;case"XZX":n.set(o*d,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*d,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*d,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lp={DEG2RAD:kr,RAD2DEG:tr,generateUUID:Nn,clamp:We,euclideanModulo:Qd,mapLinear:M_,inverseLerp:S_,lerp:zr,damp:b_,pingpong:E_,smoothstep:T_,smootherstep:w_,randInt:A_,randFloat:R_,randFloatSpread:C_,seededRandom:I_,degToRad:P_,radToDeg:L_,isPowerOfTwo:D_,ceilPowerOfTwo:N_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:F_,normalize:st,denormalize:Dn},_u=class _u{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_u.prototype.isVector2=!0;let ve=_u;class En{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],h=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||c!==u||l!==f||d!==g){let m=c*u+l*f+d*g+h*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),w=Math.sin(E);p=Math.sin(p*E)/w,o=Math.sin(o*E)/w,c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+y*o}else{c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+y*o;const E=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=E,l*=E,d*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),h=o(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xu=class xu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),d=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*d,this.y=i+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;let C=xu;const mc=new C,ih=new En,vu=class vu{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],h=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],E=s[1],w=s[4],v=s[7],b=s[2],S=s[5],A=s[8];return r[0]=a*y+o*E+c*b,r[3]=a*m+o*w+c*S,r[6]=a*p+o*v+c*A,r[1]=l*y+d*E+h*b,r[4]=l*m+d*w+h*S,r[7]=l*p+d*v+h*A,r[2]=u*y+f*E+g*b,r[5]=u*m+f*w+g*S,r[8]=u*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*l-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(d*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vu.prototype.isMatrix3=!0;let Be=vu;const gc=new Be,sh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const n={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pn]:{primaries:e,whitePoint:i,transfer:Co,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const qe=O_();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class B_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=ea("canvas")),ms.width=e.width,ms.height=e.height;const s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_c(s[a].image)):r.push(_c(s[a]))}else r=_c(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let z_=0;const xc=new C;class Ot extends Vi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Kn,s=Kn,r=Ft,a=ui,o=Sn,c=hn,l=Ot.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Nn(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Sp;Ot.DEFAULT_ANISOTROPY=1;const yu=class yu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,v=(f+1)/2,b=(p+1)/2,S=(d+u)/4,A=(h+y)/4,_=(g+m)/4;return w>v&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=A/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=_/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-y)/E,this.z=(u-d)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yu.prototype.isVector4=!0;let at=yu;class V_ extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Ot(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new jd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends V_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dp extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yo=class Yo{constructor(e,t,i,s,r,a,o,c,l,d,h,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,d,h,u,f,g,y,m)}set(e,t,i,s,r,a,o,c,l,d,h,u,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,y=l*h;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,y=l*h;t[0]=u-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,y=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*h,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=y-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-y*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+y,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=y*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,i){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ei.crossVectors(i,ln),Ei.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ei.crossVectors(i,ln)),Ei.normalize(),pa.crossVectors(ln,Ei),s[0]=Ei.x,s[4]=pa.x,s[8]=ln.x,s[1]=Ei.y,s[5]=pa.y,s[9]=ln.y,s[2]=Ei.z,s[6]=pa.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],h=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],E=i[3],w=i[7],v=i[11],b=i[15],S=s[0],A=s[4],_=s[8],T=s[12],I=s[1],P=s[5],N=s[9],G=s[13],X=s[2],B=s[6],q=s[10],W=s[14],j=s[3],ne=s[7],fe=s[11],xe=s[15];return r[0]=a*S+o*I+c*X+l*j,r[4]=a*A+o*P+c*B+l*ne,r[8]=a*_+o*N+c*q+l*fe,r[12]=a*T+o*G+c*W+l*xe,r[1]=d*S+h*I+u*X+f*j,r[5]=d*A+h*P+u*B+f*ne,r[9]=d*_+h*N+u*q+f*fe,r[13]=d*T+h*G+u*W+f*xe,r[2]=g*S+y*I+m*X+p*j,r[6]=g*A+y*P+m*B+p*ne,r[10]=g*_+y*N+m*q+p*fe,r[14]=g*T+y*G+m*W+p*xe,r[3]=E*S+w*I+v*X+b*j,r[7]=E*A+w*P+v*B+b*ne,r[11]=E*_+w*N+v*q+b*fe,r[15]=E*T+w*G+v*W+b*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],E=c*f-l*u,w=o*f-l*h,v=o*u-c*h,b=a*f-l*d,S=a*u-c*d,A=a*h-o*d;return t*(y*E-m*w+p*v)-i*(g*E-m*b+p*S)+s*(g*w-y*b+p*A)-r*(g*v-y*S+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-i*(r*d-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],E=t*o-i*a,w=t*c-s*a,v=t*l-r*a,b=i*c-s*o,S=i*l-r*o,A=s*l-r*c,_=d*y-h*g,T=d*m-u*g,I=d*p-f*g,P=h*m-u*y,N=h*p-f*y,G=u*p-f*m,X=E*G-w*N+v*P+b*I-S*T+A*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=(o*G-c*N+l*P)*B,e[1]=(s*N-i*G-r*P)*B,e[2]=(y*A-m*S+p*b)*B,e[3]=(u*S-h*A-f*b)*B,e[4]=(c*I-a*G-l*T)*B,e[5]=(t*G-s*I+r*T)*B,e[6]=(m*v-g*A-p*w)*B,e[7]=(d*A-u*v+f*w)*B,e[8]=(a*N-o*I+l*_)*B,e[9]=(i*I-t*N-r*_)*B,e[10]=(g*S-y*v+p*E)*B,e[11]=(h*v-d*S-f*E)*B,e[12]=(o*T-a*P-c*_)*B,e[13]=(t*P-i*T+s*_)*B,e[14]=(y*w-g*b-m*E)*B,e[15]=(d*b-h*w+u*E)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,y=a*d,m=a*h,p=o*h,E=c*l,w=c*d,v=c*h,b=i.x,S=i.y,A=i.z;return s[0]=(1-(y+p))*b,s[1]=(f+v)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(u+p))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(g+w)*A,s[9]=(m-E)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);const l=1/a,d=1/o,h=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Zn,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===jr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Zn,c=!1){const l=this.elements,d=2/(t-e),h=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Zn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===jr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Yo.prototype.isMatrix4=!0;let Oe=Yo;const gs=new C,Rn=new Oe,G_=new C(0,0,0),W_=new C(1,1,1),Ei=new C,pa=new C,ln=new C,ah=new Oe,oh=new En;class Bi{constructor(e=0,t=0,i=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const ch=new C,_s=new En,ni=new Oe,ma=new C,lr=new C,q_=new C,$_=new En,lh=new C(1,0,0),dh=new C(0,1,0),uh=new C(0,0,1),hh={type:"added"},Y_={type:"removed"},xs={type:"childadded",child:null},vc={type:"childremoved",child:null};class pt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new C,t=new Bi,i=new En,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(dh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(dh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(lr,ma,this.up):ni.lookAt(ma,lr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ni),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new C(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ft extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Mc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class D{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=Qd(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Mc(a,r,e+1/3),this.g=Mc(a,r,e),this.b=Mc(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=Np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return qe.workingToColorSpace(Yt.copy(this),e),Math.round(We(Yt.r*255,0,255))*65536+Math.round(We(Yt.g*255,0,255))*256+Math.round(We(Yt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Gt){qe.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(ga);const i=zr(Ti.h,ga.h,t),s=zr(Ti.s,ga.s,t),r=zr(Ti.l,ga.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new D;D.NAMES=Np;class tu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new D(e),this.near=t,this.far=i}clone(){return new tu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Z_ extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new C,ii=new C,Sc=new C,si=new C,vs=new C,ys=new C,fh=new C,bc=new C,Ec=new C,Tc=new C,wc=new at,Ac=new at,Rc=new at;class yn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ii.subVectors(i,t),Sc.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ii),c=Cn.dot(Sc),l=ii.dot(ii),d=ii.dot(Sc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return wc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),wc.fromBufferAttribute(e,t),Ac.fromBufferAttribute(e,i),Rc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Ac,r.y),a.addScaledVector(Rc,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ii.subVectors(e,t),Cn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Cn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;vs.subVectors(s,i),ys.subVectors(r,i),bc.subVectors(e,i);const c=vs.dot(bc),l=ys.dot(bc);if(c<=0&&l<=0)return t.copy(i);Ec.subVectors(e,s);const d=vs.dot(Ec),h=ys.dot(Ec);if(d>=0&&h<=d)return t.copy(s);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(vs,a);Tc.subVectors(e,r);const f=vs.dot(Tc),g=ys.dot(Tc);if(g>=0&&f<=g)return t.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(ys,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return fh.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(fh,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(i).addScaledVector(vs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),xa.subVectors(this.max,dr),Ms.subVectors(e.a,dr),Ss.subVectors(e.b,dr),bs.subVectors(e.c,dr),wi.subVectors(Ss,Ms),Ai.subVectors(bs,Ss),Gi.subVectors(Ms,bs);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Gi.z,Gi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Gi.z,0,-Gi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Gi.y,Gi.x,0];return!Cc(t,Ms,Ss,bs,xa)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Ms,Ss,bs,xa))?!1:(va.crossVectors(wi,Ai),t=[va.x,va.y,va.z],Cc(t,Ms,Ss,bs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,_a=new wn,Ms=new C,Ss=new C,bs=new C,wi=new C,Ai=new C,Gi=new C,dr=new C,xa=new C,va=new C,Wi=new C;function Cc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Lt=new C,ya=new ve;let J_=0;class Xt extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Up extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fp extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Q_=new wn,ur=new C,Ic=new C;class ti{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ic)),this.expandByPoint(ur.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let j_=0;const gn=new Oe,Pc=new pt,Es=new C,dn=new wn,hr=new wn,Vt=new C;class _t extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?Fp:Up)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(dn.min,hr.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,hr.max),dn.expandByPoint(Vt)):(dn.expandByPoint(hr.min),dn.expandByPoint(hr.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Vt.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(e,l),Vt.add(Es)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new C,c[_]=new C;const l=new C,d=new C,h=new C,u=new ve,f=new ve,g=new ve,y=new C,m=new C;function p(_,T,I){l.fromBufferAttribute(i,_),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),o[_].add(y),o[T].add(y),o[I].add(y),c[_].add(m),c[T].add(m),c[I].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,T=E.length;_<T;++_){const I=E[_],P=I.start,N=I.count;for(let G=P,X=P+N;G<X;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new C,v=new C,b=new C,S=new C;function A(_){b.fromBufferAttribute(s,_),S.copy(b);const T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(S,T);const P=v.dot(c[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,T=E.length;_<T;++_){const I=E[_],P=I.start,N=I.count;for(let G=P,X=P+N;G<X;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new Xt(u,d,h)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Op{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new C;class ta{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ex=0;class Un extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Hs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new D(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new D().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bp extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new D(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const fr=new C,ws=new C,As=new C,Rs=new ve,pr=new ve,kp=new Oe,Ma=new C,mr=new C,Sa=new C,ph=new ve,Lc=new ve,mh=new ve;class tx extends pt{constructor(e=new Bp){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Op(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new ta(i,3,0,!1)),Ts.setAttribute("uv",new ta(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),kp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ba(Ma.set(-.5,-.5,0),As,a,ws,s,r),ba(mr.set(.5,-.5,0),As,a,ws,s,r),ba(Sa.set(.5,.5,0),As,a,ws,s,r),ph.set(0,0),Lc.set(1,0),mh.set(1,1);let o=e.ray.intersectTriangle(Ma,mr,Sa,!1,fr);if(o===null&&(ba(mr.set(-.5,.5,0),As,a,ws,s,r),Lc.set(0,1),o=e.ray.intersectTriangle(Ma,Sa,mr,!1,fr),o===null))return;const c=e.ray.origin.distanceTo(fr);c<e.near||c>e.far||t.push({distance:c,point:fr.clone(),uv:yn.getInterpolation(fr,Ma,mr,Sa,ph,Lc,mh,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(n,e,t,i,s,r){Rs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(pr.x=r*Rs.x-s*Rs.y,pr.y=s*Rs.x+r*Rs.y):pr.copy(Rs),n.copy(e),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(kp)}const ai=new C,Dc=new C,Ea=new C,Ri=new C,Nc=new C,Ta=new C,Uc=new C;class ca{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Dc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Dc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ea),o=Ri.dot(this.direction),c=-Ri.dot(Ea),l=Ri.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const y=1/d;h*=y,u*=y,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dc).addScaledVector(Ea,u),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){Nc.subVectors(t,e),Ta.subVectors(i,e),Uc.crossVectors(Nc,Ta);let a=this.direction.dot(Uc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Ta.crossVectors(Ri,Ta));if(c<0)return null;const l=o*this.direction.dot(Nc.cross(Ri));if(l<0||c+l>a)return null;const d=-o*Ri.dot(Uc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new D(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gh=new Oe,Xi=new ca,wa=new ti,_h=new C,Aa=new C,Ra=new C,Ca=new C,Fc=new C,Ia=new C,xh=new C,Pa=new C;class Ue extends pt{constructor(e=new _t,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Fc.fromBufferAttribute(h,e),a?Ia.addScaledVector(Fc,d):Ia.addScaledVector(Fc.sub(t),d))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(wa.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(wa,_h)===null||Xi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,b=w;v<b;v+=3){const S=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=La(this,p,e,i,l,d,h,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=La(this,a,e,i,l,d,h,E,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,b=w;v<b;v+=3){const S=v,A=v+1,_=v+2;s=La(this,p,e,i,l,d,h,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const E=m,w=m+1,v=m+2;s=La(this,a,e,i,l,d,h,E,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function nx(n,e,t,i,s,r,a,o){let c;if(e.side===on?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Pa);return l<t.near||l>t.far?null:{distance:l,point:Pa.clone(),object:n}}function La(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Aa),n.getVertexPosition(c,Ra),n.getVertexPosition(l,Ca);const d=nx(n,e,t,i,Aa,Ra,Ca,xh);if(d){const h=new C;yn.getBarycoord(xh,Aa,Ra,Ca,h),s&&(d.uv=yn.getInterpolatedAttribute(s,o,c,l,h,new ve)),r&&(d.uv1=yn.getInterpolatedAttribute(r,o,c,l,h,new ve)),a&&(d.normal=yn.getInterpolatedAttribute(a,o,c,l,h,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};yn.getNormal(Aa,Ra,Ca,u.normal),d.face=u,d.barycoord=h}return d}const gr=new at,vh=new at,yh=new at,ix=new at,Mh=new Oe,Da=new C,Oc=new ti,Sh=new Oe,Bc=new ca;class sx extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ju,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(s),e.ray.intersectsSphere(Oc)!==!1&&(Sh.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Sh),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ju?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===i_?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;vh.fromBufferAttribute(s.attributes.skinIndex,e),yh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(gr.copy(t),t.set(0,0,0,0)):(gr.set(...t,1),t.set(0,0,0)),gr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=yh.getComponent(r);if(a!==0){const o=vh.getComponent(r);Mh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(ix.copy(gr).applyMatrix4(Mh),a)}}return t.isVector4&&(t.w=gr.w),t.applyMatrix4(this.bindMatrixInverse)}}class zp extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nu extends Ot{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ut,d=Ut,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new Oe,rx=new Oe;class iu{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Oe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:rx;bh.multiplyMatrices(o,t[r]),bh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new iu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new nu(t,e,e,Sn,Mn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new zp),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class rd extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new Oe,Eh=new Oe,Na=[],Th=new wn,ax=new Oe,_r=new Ue,xr=new ti;class Vp extends Ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ax)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Th.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),xr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Eh.multiplyMatrices(i,Cs),_r.matrixWorld=Eh,_r.raycast(e,Na);for(let a=0,o=Na.length;a<o;a++){const c=Na[a];c.instanceId=r,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(s*this.count),s,this.count,Xd,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kc=new C,ox=new C,cx=new Be;class Li{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=kc.subVectors(i,t).cross(ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(kc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cx.getNormalMatrix(e),s=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new ti,lx=new ve(.5,.5),Ua=new C;class su{constructor(e=new Li,t=new Li,i=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],w=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-a,f-d,p-g,b-E).normalize(),s[1].setComponents(l+a,f+d,p+g,b+E).normalize(),s[2].setComponents(l+o,f+h,p+y,b+w).normalize(),s[3].setComponents(l-o,f-h,p-y,b-w).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,b-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-v).normalize(),t===Zn)s[5].setComponents(l+c,f+u,p+m,b+v).normalize();else if(t===jr)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=lx.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qo extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new D(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new C,Lo=new C,wh=new Oe,vr=new ca,Fa=new ti,zc=new C,Ah=new C;class jo extends pt{constructor(e=new _t,t=new Qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Po.distanceTo(Lo);e.setAttribute("lineDistance",new Ze(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;wh.copy(s).invert(),vr.copy(e.ray).applyMatrix4(wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=d.getX(y),E=d.getX(y+1),w=Oa(this,e,vr,c,p,E,y);w&&t.push(w)}if(this.isLineLoop){const y=d.getX(g-1),m=d.getX(f),p=Oa(this,e,vr,c,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){const p=Oa(this,e,vr,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Oa(this,e,vr,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Lo.fromBufferAttribute(o,r),t.distanceSqToSegment(Po,Lo,zc,Ah)>i)return;zc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(zc);if(!(l<e.near||l>e.far))return{distance:l,point:Ah.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Rh=new C,Ch=new C;class Hp extends jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new Ze(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dx extends jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ru extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new D(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new Oe,ad=new ca,Ba=new ti,ka=new C;class Gp extends pt{constructor(e=new _t,t=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Ih.copy(s).invert(),ad.copy(e.ray).applyMatrix4(Ih);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,y=f;g<y;g++){const m=l.getX(g);ka.fromBufferAttribute(h,m),Ph(ka,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,y=f;g<y;g++)ka.fromBufferAttribute(h,g),Ph(ka,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ph(n,e,t,i,s,r,a){const o=ad.distanceSqToPoint(n);if(o<t){const c=new C;ad.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wp extends Ot{constructor(e=[],t=as,i,s,r,a,o,c,l,d){super(e,t,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ux extends Ot{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Ot{constructor(e,t,i=jn,s,r,a,o=Ut,c=Ut,l,d=vi,h=1){if(d!==vi&&d!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hx extends nr{constructor(e,t=jn,i=as,s,r,a=Ut,o=Ut,c,l=vi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xp extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends _t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(h,2));function g(y,m,p,E,w,v,b,S,A,_,T){const I=v/A,P=b/_,N=v/2,G=b/2,X=S/2,B=A+1,q=_+1;let W=0,j=0;const ne=new C;for(let fe=0;fe<q;fe++){const xe=fe*P-G;for(let be=0;be<B;be++){const Je=be*I-N;ne[y]=Je*E,ne[m]=xe*w,ne[p]=X,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[p]=S>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(be/A),h.push(1-fe/_),W+=1}}for(let fe=0;fe<_;fe++)for(let xe=0;xe<A;xe++){const be=u+xe+B*fe,Je=u+xe+B*(fe+1),xt=u+(xe+1)+B*(fe+1),Qe=u+(xe+1)+B*fe;c.push(be,Je,Qe),c.push(Je,xt,Qe),j+=6}o.addGroup(f,j,T),f+=j,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class au extends _t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,d=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class On extends _t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const y=[],m=i/2;let p=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function E(){const v=new C,b=new C;let S=0;const A=(t-e)/i;for(let _=0;_<=r;_++){const T=[],I=_/r,P=I*(t-e)+e;for(let N=0;N<=s;N++){const G=N/s,X=G*c+o,B=Math.sin(X),q=Math.cos(X);b.x=P*B,b.y=-I*i+m,b.z=P*q,h.push(b.x,b.y,b.z),v.set(B,A,q).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-I),T.push(g++)}y.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const I=y[T][_],P=y[T+1][_],N=y[T+1][_+1],G=y[T][_+1];(e>0||T!==0)&&(d.push(I,P,G),S+=3),(t>0||T!==r-1)&&(d.push(P,N,G),S+=3)}l.addGroup(p,S,0),p+=S}function w(v){const b=g,S=new ve,A=new C;let _=0;const T=v===!0?e:t,I=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=s;N++){const X=N/s*c+o,B=Math.cos(X),q=Math.sin(X);A.x=T*q,A.y=m*I,A.z=T*B,h.push(A.x,A.y,A.z),u.push(0,I,0),S.x=B*.5+.5,S.y=q*.5*I+.5,f.push(S.x,S.y),g++}for(let N=0;N<s;N++){const G=b+N,X=P+N;v===!0?d.push(X,X+1,G):d.push(X+1,X,G),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xs extends On{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ou extends _t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const w=new C,v=new C,b=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],w),f(t[S+1],v),f(t[S+2],b),c(w,v,b,E)}function c(E,w,v,b){const S=b+1,A=[];for(let _=0;_<=S;_++){A[_]=[];const T=E.clone().lerp(v,_/S),I=w.clone().lerp(v,_/S),P=S-_;for(let N=0;N<=P;N++)N===0&&_===S?A[_][N]=T:A[_][N]=T.clone().lerp(I,N/P)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){const I=Math.floor(T/2);T%2===0?(u(A[_][I+1]),u(A[_+1][I]),u(A[_][I])):(u(A[_][I+1]),u(A[_+1][I+1]),u(A[_+1][I]))}}function l(E){const w=new C;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(E),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function d(){const E=new C;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const v=m(E)/2/Math.PI+.5,b=p(E)/Math.PI+.5;a.push(v,1-b)}g(),h()}function h(){for(let E=0;E<a.length;E+=6){const w=a[E+0],v=a[E+2],b=a[E+4],S=Math.max(w,v,b),A=Math.min(w,v,b);S>.9&&A<.1&&(w<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),b<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function f(E,w){const v=E*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function g(){const E=new C,w=new C,v=new C,b=new C,S=new ve,A=new ve,_=new ve;for(let T=0,I=0;T<r.length;T+=9,I+=6){E.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(a[I+0],a[I+1]),A.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),b.copy(E).add(w).add(v).divideScalar(3);const P=m(b);y(S,I+0,E,P),y(A,I+2,w,P),y(_,I+4,v,P)}}function y(E,w,v,b){b<0&&E.x===1&&(a[w]=E.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.vertices,e.indices,e.radius,e.detail)}}class cu extends ou{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cu(e.radius,e.detail)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const d=i[s],u=i[s+1]-d,f=(a-d)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,s=[],r=[],a=[],o=new C,c=new Oe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qp extends yi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*d-f*h+this.aX,l=u*h+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fx extends qp{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function lu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,h){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,f*=d,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Lh=new C,Dh=new C,Vc=new lu,Hc=new lu,Gc=new lu;class px extends yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Dh.subVectors(s[0],s[1]).add(s[0]),l=Dh);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Lh.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Lh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Vc.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,y,m),Hc.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,y,m),Gc.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Hc.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),Gc.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return i.set(Vc.calc(c),Hc.calc(c),Gc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function mx(n,e){const t=1-n;return t*t*e}function gx(n,e){return 2*(1-n)*n*e}function _x(n,e){return n*n*e}function Vr(n,e,t,i){return mx(n,e)+gx(n,t)+_x(n,i)}function xx(n,e){const t=1-n;return t*t*t*e}function vx(n,e){const t=1-n;return 3*t*t*n*e}function yx(n,e){return 3*(1-n)*n*n*e}function Mx(n,e){return n*n*n*e}function Hr(n,e,t,i,s){return xx(n,e)+vx(n,t)+yx(n,i)+Mx(n,s)}class Sx extends yi{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bx extends yi{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y),Hr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ex extends yi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tx extends yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wx extends yi{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ec extends yi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ax extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Nh(o,c.x,l.x,d.x,h.x),Nh(o,c.y,l.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var Rx=Object.freeze({__proto__:null,ArcCurve:fx,CatmullRomCurve3:px,CubicBezierCurve:Sx,CubicBezierCurve3:bx,EllipseCurve:qp,LineCurve:Ex,LineCurve3:Tx,QuadraticBezierCurve:wx,QuadraticBezierCurve3:ec,SplineCurve:Ax});class bn extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<d;p++){const E=p*u-a;for(let w=0;w<l;w++){const v=w*h-r;g.push(v,-E,0),y.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const w=E+l*p,v=E+l*(p+1),b=E+1+l*(p+1),S=E+1+l*p;f.push(w,v,S),f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}class tc extends _t{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let h=e;const u=(t-e)/s,f=new C,g=new ve;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let y=0;y<s;y++){const m=y*(i+1);for(let p=0;p<i;p++){const E=p+m,w=E,v=E+i+1,b=E+i+2,S=E+1;o.push(w,v,S),o.push(v,b,S)}}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ki extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new C,u=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const E=[],w=p/i,v=a+w*o,b=e*Math.cos(v),S=Math.sqrt(e*e-b*b);let A=0;p===0&&a===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){const T=_/t,I=s+T*r;h.x=-S*Math.cos(I),h.y=b,h.z=S*Math.sin(I),g.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),m.push(T+A,1-w),E.push(l++)}d.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const w=d[p][E+1],v=d[p][E],b=d[p+1][E],S=d[p+1][E+1];(p!==0||a>0)&&f.push(w,v,S),(p!==i-1||c<Math.PI)&&f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class du extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],d=[],h=[],u=new C,f=new C,g=new C;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let p=0;p<=s;p++){const E=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(E),f.y=(e+t*Math.cos(m))*Math.sin(E),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),g.subVectors(f,u).normalize(),d.push(g.x,g.y,g.z),h.push(p/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){const p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,E,v),c.push(E,w,v)}this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nc extends _t{constructor(e=new ec(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new ve;let d=new C;const h=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function y(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),E(),p()}function m(w){d=e.getPointAt(w/t,d);const v=a.normals[w],b=a.binormals[w];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);c.x=T*v.x+_*b.x,c.y=T*v.y+_*b.y,c.z=T*v.z+_*b.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=d.x+i*c.x,o.y=d.y+i*c.y,o.z=d.z+i*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let v=1;v<=s;v++){const b=(s+1)*(w-1)+(v-1),S=(s+1)*w+(v-1),A=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(b,S,_),g.push(S,A,_)}}function E(){for(let w=0;w<=t;w++)for(let v=0;v<=s;v++)l.x=w/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nc(new Rx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Uh(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const s in i)e[s]=i[s]}return e}function Uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $p(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Ix={clone:ir,merge:Zt};var Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new D().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new at().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dx extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new D(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new D(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new D(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new D(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nx extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ux extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function za(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Fx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function Ox(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class sr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Bx extends sr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ks:r=e,o=2*t-i;break;case Ro:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ks:a=e,c=2*i-t;break;case Ro:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}const l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let b=0;b!==o;++b)r[b]=p*a[d+b]+E*a[l+b]+w*a[c+b]+v*a[h+b];return r}}class Yp extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(i-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class kx extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zx extends sr{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,h=this.outTangents;if(!d||!h){const g=(i-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const y=a[l+g],m=a[c+g],p=f*u+g*2,E=h[p],w=h[p+1],v=e*u+g*2,b=d[v],S=d[v+1];let A=(i-t)/(s-t),_,T,I,P,N;for(let G=0;G<8;G++){_=A*A,T=_*A,I=1-A,P=I*I,N=P*I;const B=N*t+3*P*A*E+3*I*_*b+T*s-i;if(Math.abs(B)<1e-10)break;const q=3*P*(E-t)+6*I*A*(b-E)+3*_*(s-b);if(Math.abs(q)<1e-10)break;A=A-B/q,A=Math.max(0,Math.min(1,A))}r[g]=N*y+3*P*A*w+3*I*_*S+T*m}return r}}class kn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new zx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break;case Qu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&__(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*i,u=h-i,f=h+i;for(let g=0;g!==i;++g){const y=t[h+g];if(y!==t[u+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Qr;class rr extends kn{constructor(e,t,i){super(e,t,i)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Jr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kp extends kn{constructor(e,t,i,s){super(e,t,i,s)}}Kp.prototype.ValueTypeName="color";class na extends kn{constructor(e,t,i,s){super(e,t,i,s)}}na.prototype.ValueTypeName="number";class Vx extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)En.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ia extends kn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Vx(this.times,this.values,this.getValueSize(),e)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends kn{constructor(e,t,i){super(e,t,i)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Jr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends kn{constructor(e,t,i,s){super(e,t,i,s)}}Do.prototype.ValueTypeName="vector";class No{constructor(e="",t=-1,i=[],s=Kd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Gx(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(kn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=Fx(c);c=Fh(c,1,d),l=Fh(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new na(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=s[h];u||(s[h]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Hx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return Do;case"color":return Kp;case"quaternion":return ia;case"bool":case"boolean":return rr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Gx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hx(n.type);if(n.times===void 0){const t=[],i=[];Ox(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Oh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Oh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Oh(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Wx{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xx=new Wx;class or{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}or.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class qx extends Error{constructor(e,t){super(e),this.response=t}}class Zp extends or{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=oi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:w,value:v})=>{if(w)p.close();else{y+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let S=0,A=d.length;S<A;S++){const _=d[S];_.onProgress&&_.onProgress(b)}p.enqueue(v),E()}},w=>{p.error(w)})}}});return new Response(m)}else throw new qx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hi.add(`file:${e}`,l);const d=oi[e];delete oi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=oi[e];if(d===void 0)throw this.manager.itemError(e),l;delete oi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Is=new WeakMap;class $x extends or{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Is.get(a);h===void 0&&(h=[],Is.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=ea("img");function c(){d(),t&&t(this);const h=Is.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function l(h){d(),s&&s(h),hi.remove(`image:${e}`);const u=Is.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Yx extends or{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,a=new $x(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ic extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new D(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Kx extends ic{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new D(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wc=new Oe,Bh=new C,kh=new C;class uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new su,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new C,Ha=new En,Gn=new C;class Jp extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ha,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Va,Ha,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new C,zh=new ve,Vh=new ve;class rn extends Jp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Vh),t.subVectors(Vh,zh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zx extends uu{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jx extends ic{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Qx extends uu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class Qp extends ic{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class la extends Jp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jx extends uu{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jp extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new jx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xc=new WeakMap;class ev extends or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Xc.has(a)===!0?(s&&s(Xc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Xc.set(c,l),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ps=-90,Ls=1;class tv extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ps,Ls,e,t);s.layers=this.layers,this.add(s);const r=new rn(Ps,Ls,e,t);r.layers=this.layers,this.add(r);const a=new rn(Ps,Ls,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ps,Ls,e,t);o.layers=this.layers,this.add(o);const c=new rn(Ps,Ls,e,t);c.layers=this.layers,this.add(c);const l=new rn(Ps,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iv{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){En.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;En.multiplyQuaternionsFlat(e,a,e,t,e,i),En.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const hu="\\[\\]\\.:\\/",sv=new RegExp("["+hu+"]","g"),fu="[^"+hu+"]",rv="[^"+hu.replace("\\.","")+"]",av=/((?:WC+[\/:])*)/.source.replace("WC",fu),ov=/(WCOD+)?/.source.replace("WCOD",rv),cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),dv=new RegExp("^"+av+ov+cv+lv+"$"),uv=["material","materials","bones","map"];class hv{constructor(e,t,i){const s=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(e){const t=dv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);uv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=hv;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fv{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Bs,endingEnd:Bs};for(let l=0;l!==a;++l){const d=r[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=s_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case a_:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case Kd:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===r_;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===td){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=ks,s.endingEnd=ks):(e?s.endingStart=this.zeroSlopeAtStart?ks:Bs:s.endingStart=Ro,t?s.endingEnd=this.zeroSlopeAtEnd?ks:Bs:s.endingEnd=Ro)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=i,this}}const pv=new Float32Array(1);class mv extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==r;++h){const u=s[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;g=new iv(et.create(i,f,y),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Yp(new Float32Array(2),new Float32Array(2),1,pv),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?No.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Kd),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new fv(this,a,t,i);return this._bindAction(d,l),this._addInactiveAction(d,o,r),d}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?No.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Hh=new Oe;class gv{constructor(e,t,i=0,s=1/0){this.ray=new ca(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return od(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)od(e[s],this,i,t);return i.sort(Gh),i}}function Gh(n,e){return n.distance-e.distance}function od(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)od(r[a],e,t,!0)}}const Mu=class Mu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Mu.prototype.isMatrix2=!0;let Wh=Mu;function Xh(n,e,t,i){const s=_v(i);switch(t){case Rp:return n*e;case Xd:return n*e/s.components*s.byteLength;case qd:return n*e/s.components*s.byteLength;case os:return n*e*2/s.components*s.byteLength;case $d:return n*e*2/s.components*s.byteLength;case Cp:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case Yd:return n*e*4/s.components*s.byteLength;case lo:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Il:case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:case wo:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ql:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ao:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(n){switch(n){case hn:case Ep:return{byteLength:1,components:1};case Kr:case Tp:case xi:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case jn:case Hd:case Mn:return{byteLength:4,components:1};case wp:case Ap:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function em(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xv(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const d=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const y=h[f];n.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
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
#endif`,Dv=`#ifdef USE_BUMPMAP
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
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
}`,oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uy=`#ifdef USE_ENVMAP
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
#endif`,hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gy=`PhysicalMaterial material;
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
#endif`,_y=`uniform sampler2D dfgLUT;
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
}`,xy=`
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
#endif`,vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,by=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cy=`#if defined( USE_POINTS_UV )
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
#endif`,Iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,By=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
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
#endif`,Gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sM=`float getShadowMask() {
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
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cM=`#ifdef USE_SKINNING
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
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`#include <common>
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
}`,wM=`#if DEPTH_PACKING == 3200
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
}`,AM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,NM=`uniform vec3 diffuse;
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
}`,UM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,BM=`#define MATCAP
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
}`,kM=`#define NORMAL
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
}`,zM=`#define NORMAL
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
}`,VM=`#define PHONG
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
}`,HM=`#define PHONG
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
}`,GM=`#define STANDARD
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
}`,WM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,qM=`#define TOON
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
}`,$M=`uniform float size;
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
}`,YM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 color;
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
}`,JM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:vv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:Tv,aomap_pars_fragment:wv,batching_pars_vertex:Av,batching_vertex:Rv,begin_vertex:Cv,beginnormal_vertex:Iv,bsdfs:Pv,iridescence_fragment:Lv,bumpmap_pars_fragment:Dv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:kv,color_pars_vertex:zv,color_vertex:Vv,common:Hv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:qv,emissivemap_fragment:$v,emissivemap_pars_fragment:Yv,colorspace_fragment:Kv,colorspace_pars_fragment:Zv,envmap_fragment:Jv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:jv,envmap_pars_vertex:ey,envmap_physical_pars_fragment:uy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:sy,fog_pars_fragment:ry,gradientmap_pars_fragment:ay,lightmap_pars_fragment:oy,lights_lambert_fragment:cy,lights_lambert_pars_fragment:ly,lights_pars_begin:dy,lights_toon_fragment:hy,lights_toon_pars_fragment:fy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:_y,lights_fragment_begin:xy,lights_fragment_maps:vy,lights_fragment_end:yy,lightprobes_pars_fragment:My,logdepthbuf_fragment:Sy,logdepthbuf_pars_fragment:by,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:Ty,map_fragment:wy,map_pars_fragment:Ay,map_particle_fragment:Ry,map_particle_pars_fragment:Cy,metalnessmap_fragment:Iy,metalnessmap_pars_fragment:Py,morphinstance_vertex:Ly,morphcolor_vertex:Dy,morphnormal_vertex:Ny,morphtarget_pars_vertex:Uy,morphtarget_vertex:Fy,normal_fragment_begin:Oy,normal_fragment_maps:By,normal_pars_fragment:ky,normal_pars_vertex:zy,normal_vertex:Vy,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Gy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:Xy,iridescence_pars_fragment:qy,opaque_fragment:$y,packing:Yy,premultiplied_alpha_fragment:Ky,project_vertex:Zy,dithering_fragment:Jy,dithering_pars_fragment:Qy,roughnessmap_fragment:jy,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:sM,skinbase_vertex:rM,skinning_pars_vertex:aM,skinning_vertex:oM,skinnormal_vertex:cM,specularmap_fragment:lM,specularmap_pars_fragment:dM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:fM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:_M,worldpos_vertex:xM,background_vert:vM,background_frag:yM,backgroundCube_vert:MM,backgroundCube_frag:SM,cube_vert:bM,cube_frag:EM,depth_vert:TM,depth_frag:wM,distance_vert:AM,distance_frag:RM,equirect_vert:CM,equirect_frag:IM,linedashed_vert:PM,linedashed_frag:LM,meshbasic_vert:DM,meshbasic_frag:NM,meshlambert_vert:UM,meshlambert_frag:FM,meshmatcap_vert:OM,meshmatcap_frag:BM,meshnormal_vert:kM,meshnormal_frag:zM,meshphong_vert:VM,meshphong_frag:HM,meshphysical_vert:GM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:qM,points_vert:$M,points_frag:YM,shadow_vert:KM,shadow_frag:ZM,sprite_vert:JM,sprite_frag:QM},he={common:{diffuse:{value:new D(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new D(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new D(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new D(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},$n={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new D(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new D(0)},specular:{value:new D(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new D(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new D(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new D(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};$n.physical={uniforms:Zt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new D(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new D(0)},specularColor:{value:new D(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ga={r:0,b:0,g:0},jM=new Oe,tm=new Be;tm.set(-1,0,0,0,1,0,0,0,1);function eS(n,e,t,i,s,r){const a=new D(0);let o=s===!0?0:1,c,l,d=null,h=0,u=null;function f(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const v=E.backgroundBlurriness>0;w=e.get(w,v)}return w}function g(E){let w=!1;const v=f(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(E,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===Jo)?(l===void 0&&(l=new Ue(new fn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ir($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jM.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tm),l.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,(d!==v||h!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ue(new bn(2,2),new ei({name:"BackgroundMaterial",uniforms:ir($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,w){E.getRGB(Ga,$p(n)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:y,dispose:p}}function tS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(P,N,G,X,B){let q=!1;const W=h(P,X,G,N);r!==W&&(r=W,l(r.object)),q=f(P,X,G,B),q&&g(P,X,G,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(P,N,G,X),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function d(P){return n.deleteVertexArray(P)}function h(P,N,G,X){const B=X.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const W=P.isInstancedMesh===!0?P.id:0;let j=q[W];j===void 0&&(j={},q[W]=j);let ne=j[G.id];ne===void 0&&(ne={},j[G.id]=ne);let fe=ne[B];return fe===void 0&&(fe=u(c()),ne[B]=fe),fe}function u(P){const N=[],G=[],X=[];for(let B=0;B<t;B++)N[B]=0,G[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:X,object:P,attributes:{},index:null}}function f(P,N,G,X){const B=r.attributes,q=N.attributes;let W=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){const xe=B[ne];let be=q[ne];if(be===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),xe===void 0||xe.attribute!==be||be&&xe.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==X}function g(P,N,G,X){const B={},q=N.attributes;let W=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){let xe=q[ne];xe===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor));const be={};be.attribute=xe,xe&&xe.data&&(be.data=xe.data),B[ne]=be,W++}r.attributes=B,r.attributesNum=W,r.index=X}function y(){const P=r.newAttributes;for(let N=0,G=P.length;N<G;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){const G=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;G[P]=1,X[P]===0&&(n.enableVertexAttribArray(P),X[P]=1),B[P]!==N&&(n.vertexAttribDivisor(P,N),B[P]=N)}function E(){const P=r.newAttributes,N=r.enabledAttributes;for(let G=0,X=N.length;G<X;G++)N[G]!==P[G]&&(n.disableVertexAttribArray(G),N[G]=0)}function w(P,N,G,X,B,q,W){W===!0?n.vertexAttribIPointer(P,N,G,B,q):n.vertexAttribPointer(P,N,G,X,B,q)}function v(P,N,G,X){y();const B=X.attributes,q=G.getAttributes(),W=N.defaultAttributeValues;for(const j in q){const ne=q[j];if(ne.location>=0){let fe=B[j];if(fe===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const xe=fe.normalized,be=fe.itemSize,Je=e.get(fe);if(Je===void 0)continue;const xt=Je.buffer,Qe=Je.type,J=Je.bytesPerElement,ae=Qe===n.INT||Qe===n.UNSIGNED_INT||fe.gpuType===Hd;if(fe.isInterleavedBufferAttribute){const ie=fe.data,Fe=ie.stride,ke=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<ne.locationSize;Le++)p(ne.location+Le,ie.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<ne.locationSize;Le++)m(ne.location+Le);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Le=0;Le<ne.locationSize;Le++)w(ne.location+Le,be/ne.locationSize,Qe,xe,Fe*J,(ke+be/ne.locationSize*Le)*J,ae)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)p(ne.location+ie,fe.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let ie=0;ie<ne.locationSize;ie++)w(ne.location+ie,be/ne.locationSize,Qe,xe,be*J,be/ne.locationSize*ie*J,ae)}}else if(W!==void 0){const xe=W[j];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(ne.location,xe);break;case 3:n.vertexAttrib3fv(ne.location,xe);break;case 4:n.vertexAttrib4fv(ne.location,xe);break;default:n.vertexAttrib1fv(ne.location,xe)}}}}E()}function b(){T();for(const P in i){const N=i[P];for(const G in N){const X=N[G];for(const B in X){const q=X[B];for(const W in q)d(q[W].object),delete q[W];delete X[B]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const G in N){const X=N[G];for(const B in X){const q=X[B];for(const W in q)d(q[W].object),delete q[W];delete X[B]}}delete i[P.id]}function A(P){for(const N in i){const G=i[N];for(const X in G){const B=G[X];if(B[P.id]===void 0)continue;const q=B[P.id];for(const W in q)d(q[W].object),delete q[W];delete B[P.id]}}}function _(P){for(const N in i){const G=i[N],X=P.isInstancedMesh===!0?P.id:0,B=G[X];if(B!==void 0){for(const q in B){const W=B[q];for(const j in W)d(W[j].object),delete W[j];delete B[q]}delete G[X],Object.keys(G).length===0&&delete i[N]}}}function T(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function nS(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function iS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Sn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!_)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(we("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:S}}function sS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Li,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||i!==0||s;return s=u,i=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const E=r?0:i,w=E*4;let v=p.clippingState||null;c.value=v,v=d(g,u,w,f);for(let b=0;b!==w;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(h[w]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Ni=4,qh=[.125,.215,.35,.446,.526,.582],Ji=20,rS=256,yr=new la,$h=new D;let qc=null,$c=0,Yc=0,Kc=!1;const aS=new C;class Yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=aS}=r;qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Yc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:xi,format:Sn,colorSpace:pn,depthBuffer:!1},s=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oS(r)),this._blurMaterial=lS(r,e,t),this._ggxMaterial=cS(r,e,t)}return s}_compileMaterial(e){const t=new Ue(new _t,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,s,r){const c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=Jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new fn,new an({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy($h),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));const b=this._cubeSize;Ds(s,v*b,w>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===as||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ds(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=0+l*1.25,f=h*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ni?i-g+Ni:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ds(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ds(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,yr)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[s];h.material=l;const u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):Ji;m>Ji&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let E=0;for(let A=0;A<Ji;++A){const _=A/y,T=Math.exp(-_*_/2);p.push(T),A===0?E+=T:A<m&&(E+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const v=this._sizeLods[s],b=3*v*(s>w-Ni?s-w+Ni:0),S=4*(this._cubeSize-v);Ds(t,b,S,3*v,2*v),c.setRenderTarget(t),c.render(h,yr)}}function oS(n){const e=[],t=[],i=[];let s=n;const r=n-Ni+1+qh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Ni?c=qh[a-n+Ni-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),w=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){const A=S%3*2/3-1,_=S>2?0:-1,T=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];E.set(T,y*g*S),w.set(u,m*g*S);const I=[S,S,S,S,S,S];v.set(I,p*g*S)}const b=new _t;b.setAttribute("position",new Xt(E,y)),b.setAttribute("uv",new Xt(w,m)),b.setAttribute("faceIndex",new Xt(v,p)),i.push(new Ue(b,null)),s>Ni&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Kh(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cS(n,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lS(n,e,t){const i=new Float32Array(Ji),s=new C(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Jh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}class nm extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:pi});r.uniforms.tEquirect.value=t;const a=new Ue(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Ft),new tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function dS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hc||f===fc)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new nm(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===hc||f===fc,y=f===as||f===js;if(g||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Yh(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return g&&E&&E.height>0||y&&E&&c(E)?(i===null&&(i=new Yh(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===hc?u.mapping=as:f===fc&&(u.mapping=js),u}function c(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function uS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Gs("WebGLRenderer: "+i+" extension not supported."),s}}}function hS(n,e,t,i){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const E=f.array;y=f.version;for(let w=0,v=E.length;w<v;w+=3){const b=E[w+0],S=E[w+1],A=E[w+2];u.push(b,S,S,A,A,b)}}else{const E=g.array;y=g.version;for(let w=0,v=E.length/3-1;w<v;w+=3){const b=w+0,S=w+1,A=w+2;u.push(b,S,S,A,A,b)}}const m=new(g.count>=65535?Fp:Up)(u,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function fS(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){n.drawElements(i,u,r,h*a),t.update(u,i,1)}function l(h,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,h*a,f),t.update(u,i,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function pS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mS(n,e,t){const i=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*b*4*h),A=new Dp(S,v,b,h);A.type=Mn,A.needsUpdate=!0;const _=w*4;for(let I=0;I<h;I++){const P=m[I],N=p[I],G=E[I],X=v*b*4*I;for(let B=0;B<P.count;B++){const q=B*_;f===!0&&(s.fromBufferAttribute(P,B),S[X+q+0]=s.x,S[X+q+1]=s.y,S[X+q+2]=s.z,S[X+q+3]=0),g===!0&&(s.fromBufferAttribute(N,B),S[X+q+4]=s.x,S[X+q+5]=s.y,S[X+q+6]=s.z,S[X+q+7]=0),y===!0&&(s.fromBufferAttribute(G,B),S[X+q+8]=s.x,S[X+q+9]=s.y,S[X+q+10]=s.z,S[X+q+11]=G.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new ve(v,b)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function gS(n,e,t,i,s){let r=new WeakMap;function a(l){const d=s.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const _S={[gp]:"LINEAR_TONE_MAPPING",[_p]:"REINHARD_TONE_MAPPING",[xp]:"CINEON_TONE_MAPPING",[Vd]:"ACES_FILMIC_TONE_MAPPING",[yp]:"AGX_TONE_MAPPING",[Mp]:"NEUTRAL_TONE_MAPPING",[vp]:"CUSTOM_TONE_MAPPING"};function xS(n,e,t,i,s,r){const a=new Qn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new nr(e,t):void 0}),o=new Qn(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new _t;c.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const l=new Dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(c,l),h=new la(-1,1,1,-1,0,1);let u=null,f=null,g=!1,y,m=null,p=[],E=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let b=0;b<p.length;b++){const S=p[b];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){p=w,E=p.length>0&&p[0].isRenderPass===!0;const v=a.width,b=a.height;for(let S=0;S<p.length;S++){const A=p[S];A.setSize&&A.setSize(v,b)}},this.begin=function(w,v){if(g||w.toneMapping===Jn&&p.length===0)return!1;if(m=v,v!==null){const b=v.width,S=v.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return E===!1&&w.setRenderTarget(a),y=w.toneMapping,w.toneMapping=Jn,!0},this.hasRenderPass=function(){return E},this.end=function(w,v){w.toneMapping=y,g=!0;let b=a,S=o;for(let A=0;A<p.length;A++){const _=p[A];if(_.enabled!==!1&&(_.render(w,S,b,v),_.needsSwap!==!1)){const T=b;b=S,S=T}}if(u!==w.outputColorSpace||f!==w.toneMapping){u=w.outputColorSpace,f=w.toneMapping,l.defines={},qe.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const A=_S[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,w.setRenderTarget(m),w.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const im=new Ot,cd=new nr(1,1),sm=new Dp,rm=new H_,am=new Wp,Qh=[],jh=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function bS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;nf.set(i),n.uniformMatrix2fv(this.addr,!1,nf),kt(t,i)}}function ES(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;tf.set(i),n.uniformMatrix3fv(this.addr,!1,tf),kt(t,i)}}function TS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),kt(t,i)}}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function IS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function NS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cd.compareFunction=t.isReversedDepthBuffer()?Jd:Zd,r=cd):r=im,t.setTexture2D(e||r,s)}function US(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rm,s)}function FS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||am,s)}function OS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sm,s)}function BS(n){switch(n){case 5126:return vS;case 35664:return yS;case 35665:return MS;case 35666:return SS;case 35674:return bS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return IS;case 36294:return PS;case 36295:return LS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function kS(n,e){n.uniform1fv(this.addr,e)}function zS(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function VS(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function HS(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function GS(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WS(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XS(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qS(n,e){n.uniform1iv(this.addr,e)}function $S(n,e){n.uniform2iv(this.addr,e)}function YS(n,e){n.uniform3iv(this.addr,e)}function KS(n,e){n.uniform4iv(this.addr,e)}function ZS(n,e){n.uniform1uiv(this.addr,e)}function JS(n,e){n.uniform2uiv(this.addr,e)}function QS(n,e){n.uniform3uiv(this.addr,e)}function jS(n,e){n.uniform4uiv(this.addr,e)}function eb(n,e,t){const i=this.cache,s=e.length,r=rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=cd:a=im;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tb(n,e,t){const i=this.cache,s=e.length,r=rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rm,r[a])}function nb(n,e,t){const i=this.cache,s=e.length,r=rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||am,r[a])}function ib(n,e,t){const i=this.cache,s=e.length,r=rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sm,r[a])}function sb(n){switch(n){case 5126:return kS;case 35664:return zS;case 35665:return VS;case 35666:return HS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return $S;case 35668:case 35672:return YS;case 35669:case 35673:return KS;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}class rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BS(t.type)}}class ab{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sb(t.type)}}class ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function sf(n,e){n.seq.push(e),n.map[e.id]=e}function cb(n,e,t){const i=n.name,s=i.length;for(Zc.lastIndex=0;;){const r=Zc.exec(i),a=Zc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sf(t,l===void 0?new rb(o,n,e):new ab(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new ob(o),sf(t,h)),t=h}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);cb(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function rf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lb=37297;let db=0;function ub(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const af=new Be;function hb(n){qe._getMatrix(af,qe.workingColorSpace,n);const e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Co:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ub(n.getShaderSource(e),o)}else return r}function fb(n,e){const t=hb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const pb={[gp]:"Linear",[_p]:"Reinhard",[xp]:"Cineon",[Vd]:"ACESFilmic",[yp]:"AgX",[Mp]:"Neutral",[vp]:"Custom"};function mb(n,e){const t=pb[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new C;function gb(){qe.getLuminanceCoefficients(Wa);const n=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function xb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Nr(n){return n!==""}function cf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(yb,Sb)}const Mb=new Map;function Sb(n,e){let t=He[e];if(t===void 0){const i=Mb.get(e);if(i!==void 0)t=He[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ld(t)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(bb,Eb)}function Eb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tb={[oo]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function wb(n){return Tb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ab={[as]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function Rb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ab[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cb={[js]:"ENVMAP_MODE_REFRACTION"};function Ib(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Cb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pb={[mp]:"ENVMAP_BLENDING_MULTIPLY",[t_]:"ENVMAP_BLENDING_MIX",[n_]:"ENVMAP_BLENDING_ADD"};function Lb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[n.combine]||"ENVMAP_BLENDING_NONE"}function Db(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Nb(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wb(t),l=Rb(t),d=Ib(t),h=Lb(t),u=Db(t),f=_b(t),g=xb(r),y=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?He.tonemapping_pars_fragment:"",t.toneMapping!==Jn?mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,fb("linearToOutputTexel",t.outputColorSpace),gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=ld(a),a=cf(a,t),a=lf(a,t),o=ld(o),o=cf(o,t),o=lf(o,t),a=df(a),o=df(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=E+m+a,v=E+p+o,b=rf(s,s.VERTEX_SHADER,w),S=rf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,b),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(S)||"",B=N.trim(),q=G.trim(),W=X.trim();let j=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,S);else{const fe=of(s,b,"vertex"),xe=of(s,S,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+fe+`
`+xe)}else B!==""?we("WebGLProgram: Program Info Log:",B):(q===""||W==="")&&(ne=!1);ne&&(P.diagnostics={runnable:j,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(b),s.deleteShader(S),_=new po(s,y),T=vb(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,lb)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}let Ub=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ob(e),t.set(e,i)),i}}class Ob{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Bb(n){return n===os||n===wo||n===Ao}function kb(n,e,t,i,s,r){const a=new eu,o=new Fb,c=new Set,l=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,T,I,P,N,G){const X=P.fog,B=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||q,W),ne=j&&j.mapping===Jo?j.image.height:null,fe=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&we("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,be=xe!==void 0?xe.length:0;let Je=0;B.morphAttributes.position!==void 0&&(Je=1),B.morphAttributes.normal!==void 0&&(Je=2),B.morphAttributes.color!==void 0&&(Je=3);let xt,Qe,J,ae;if(fe){const Ee=$n[fe];xt=Ee.vertexShader,Qe=Ee.fragmentShader}else{xt=_.vertexShader,Qe=_.fragmentShader;const Ee=o.getVertexShaderStage(_),yt=o.getFragmentShaderStage(_);o.update(_,Ee,yt),J=Ee.id,ae=yt.id}const ie=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,bt=!!_.map,$e=!!_.matcap,ot=!!j,je=!!_.aoMap,Ye=!!_.lightMap,Ct=!!_.bumpMap&&_.wireframe===!1,Dt=!!_.normalMap,zt=!!_.displacementMap,Wt=!!_.emissiveMap,vt=!!_.metalnessMap,It=!!_.roughnessMap,U=_.anisotropy>0,en=_.clearcoat>0,tt=_.dispersion>0,R=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,V=U&&!!_.anisotropyMap,$=en&&!!_.clearcoatMap,se=en&&!!_.clearcoatNormalMap,oe=en&&!!_.clearcoatRoughnessMap,Y=R&&!!_.iridescenceMap,Z=R&&!!_.iridescenceThicknessMap,ce=x&&!!_.sheenColorMap,Re=x&&!!_.sheenRoughnessMap,ue=!!_.specularMap,le=!!_.specularColorMap,Pe=!!_.specularIntensityMap,De=O&&!!_.transmissionMap,ze=O&&!!_.thicknessMap,L=!!_.gradientMap,re=!!_.alphaMap,K=_.alphaTest>0,de=!!_.alphaHash,ge=!!_.extensions;let ee=Jn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ae={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:xt,fragmentShader:Qe,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:$e,envMap:ot,envMapMode:ot&&j.mapping,envMapCubeUVHeight:ne,aoMap:je,lightMap:Ye,bumpMap:Ct,normalMap:Dt,displacementMap:zt,emissiveMap:Wt,normalMapObjectSpace:Dt&&_.normalMapType===l_,normalMapTangentSpace:Dt&&_.normalMapType===id,packedNormalMap:Dt&&_.normalMapType===id&&Bb(_.normalMap.format),metalnessMap:vt,roughnessMap:It,anisotropy:U,anisotropyMap:V,clearcoat:en,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:tt,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:ue,specularColorMap:le,specularIntensityMap:Pe,transmission:O,transmissionMap:De,thicknessMap:ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:K,alphaHash:de,combine:_.combine,mapUv:bt&&g(_.map.channel),aoMapUv:je&&g(_.aoMap.channel),lightMapUv:Ye&&g(_.lightMap.channel),bumpMapUv:Ct&&g(_.bumpMap.channel),normalMapUv:Dt&&g(_.normalMap.channel),displacementMapUv:zt&&g(_.displacementMap.channel),emissiveMapUv:Wt&&g(_.emissiveMap.channel),metalnessMapUv:vt&&g(_.metalnessMap.channel),roughnessMapUv:It&&g(_.roughnessMap.channel),anisotropyMapUv:V&&g(_.anisotropyMap.channel),clearcoatMapUv:$&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(_.sheenRoughnessMap.channel),specularMapUv:ue&&g(_.specularMap.channel),specularColorMapUv:le&&g(_.specularColorMap.channel),specularIntensityMapUv:Pe&&g(_.specularIntensityMap.channel),transmissionMapUv:De&&g(_.transmissionMap.channel),thicknessMapUv:ze&&g(_.thicknessMap.channel),alphaMapUv:re&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Dt||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(bt||re),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Fe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Nt,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(T,_),E(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function E(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const T=f[_.type];let I;if(T){const P=$n[T];I=Ix.clone(P.uniforms)}else I=_.uniforms;return I}function v(_,T){let I=d.get(T);return I!==void 0?++I.usedTimes:(I=new Nb(n,T,_,s),l.push(I),d.set(T,I)),I}function b(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:A}}function zb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Vb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ff(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let E=n[e];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[e]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=p),e++,E}function c(u,f,g,y,m,p){const E=o(u,f,g,y,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(u,f,g,y,m,p){const E=o(u,f,g,y,m,p);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function d(u,f,g){t.length>1&&t.sort(u||Vb),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf),g&&(t.reverse(),i.reverse(),s.reverse())}function h(){for(let u=e,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:d}}function Hb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new ff,n.set(i,[a])):s>=r.length?(a=new ff,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new D};break;case"SpotLight":t={position:new C,direction:new C,color:new D,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new D,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new D,groundColor:new D};break;case"RectAreaLight":t={color:new D,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Wb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xb=0;function qb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $b(n){const e=new Gb,t=Wb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new Oe,a=new Oe;function o(l){let d=0,h=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,w=0,v=0,b=0,S=0,A=0;l.sort(qb);for(let T=0,I=l.length;T<I;T++){const P=l[T],N=P.color,G=P.intensity,X=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===os?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*G,h+=N.g*G,u+=N.b*G;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],G);A++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=P.shadow.matrix,E++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[y]=q;const W=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,W.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[y]=W.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[y]=j,i.spotShadowMap[y]=B,v++}y++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(N).multiplyScalar(G),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const W=P.shadow,j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(G),q.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==w||_.numSpotShadows!==v||_.numSpotMaps!==b||_.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=w,_.numSpotShadows=v,_.numSpotMaps=b,_.numLightProbes=A,i.version=Xb++)}function c(l,d){let h=0,u=0,f=0,g=0,y=0;const m=d.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const w=l[p];if(w.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(w.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function pf(n){const e=new $b(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Yb(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pf(n),e.set(s,[o])):r>=a.length?(o=new pf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`,Jb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Qb=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],mf=new Oe,Mr=new C,Jc=new C;function jb(n,e,t){let i=new su;const s=new ve,r=new ve,a=new at,o=new Nx,c=new Ux,l={},d=t.maxTextureSize,h={[_i]:on,[on]:_i,[Nt]:Nt},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ue(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let p=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===pp&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oo);const T=n.getRenderTarget(),I=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(pi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=p!==this.type;G&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=S.length;X<B;X++){const q=S[X],W=q.shadow;if(W===void 0){we("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));const ne=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ne,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Lr){if(q.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qn(s.x,s.y,{format:os,type:xi,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new nr(s.x,s.y,Mn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=vi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut}else q.isPointLight?(W.map=new nm(s.x),W.map.depthTexture=new hx(s.x,jn)):(W.map=new Qn(s.x,s.y),W.map.depthTexture=new nr(s.x,s.y,jn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=vi,this.type===oo?(W.map.depthTexture.compareFunction=ne?Jd:Zd,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut);W.camera.updateProjectionMatrix()}const fe=W.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<fe;xe++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(W.map),n.clear());const be=W.getViewport(xe);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(a)}if(q.isPointLight){const be=W.camera,Je=W.matrix,xt=q.distance||be.far;xt!==be.far&&(be.far=xt,be.updateProjectionMatrix()),Mr.setFromMatrixPosition(q.matrixWorld),be.position.copy(Mr),Jc.copy(be.position),Jc.add(Jb[xe]),be.up.copy(Qb[xe]),be.lookAt(Jc),be.updateMatrixWorld(),Je.makeTranslation(-Mr.x,-Mr.y,-Mr.z),mf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mf,be.coordinateSystem,be.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),v(A,_,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Lr&&E(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,P)};function E(S,A){const _=e.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qn(s.x,s.y,{format:os,type:xi})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,_,u,y,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,_,f,y,null)}function w(S,A,_,T){let I=null;const P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)I=P;else if(I=_.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=I.uuid,G=A.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let B=X[G];B===void 0&&(B=I.clone(),X[G]=B,A.addEventListener("dispose",b)),I=B}if(I.visible=A.visible,I.wireframe=A.wireframe,T===Lr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:h[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=n.properties.get(I);N.light=_}return I}function v(S,A,_,T,I){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Lr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const G=e.update(S),X=S.material;if(Array.isArray(X)){const B=G.groups;for(let q=0,W=B.length;q<W;q++){const j=B[q],ne=X[j.materialIndex];if(ne&&ne.visible){const fe=w(S,ne,T,I);S.onBeforeShadow(n,S,A,_,G,fe,j),n.renderBufferDirect(_,null,G,fe,S,j),S.onAfterShadow(n,S,A,_,G,fe,j)}}}else if(X.visible){const B=w(S,X,T,I);S.onBeforeShadow(n,S,A,_,G,B,null),n.renderBufferDirect(_,null,G,B,S,null),S.onAfterShadow(n,S,A,_,G,B,null)}}const N=S.children;for(let G=0,X=N.length;G<X;G++)v(N[G],A,_,T,I)}function b(S){S.target.removeEventListener("dispose",b);for(const _ in l){const T=l[_],I=S.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function eE(n,e){function t(){let L=!1;const re=new at;let K=null;const de=new at(0,0,0,0);return{setMask:function(ge){K!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){L=ge},setClear:function(ge,ee,Ae,Ee,yt){yt===!0&&(ge*=Ee,ee*=Ee,Ae*=Ee),re.set(ge,ee,Ae,Ee),de.equals(re)===!1&&(n.clearColor(ge,ee,Ae,Ee),de.copy(re))},reset:function(){L=!1,K=null,de.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,K=null,de=null,ge=null;return{setReversed:function(ee){if(re!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const Ee=ge;ge=null,this.setClear(Ee)}},getReversed:function(){return re},setTest:function(ee){ee?ie(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ee){K!==ee&&!L&&(n.depthMask(ee),K=ee)},setFunc:function(ee){if(re&&(ee=y_[ee]),de!==ee){switch(ee){case xl:n.depthFunc(n.NEVER);break;case vl:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case Sl:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ge!==ee&&(ge=ee,re&&(ee=1-ee),n.clearDepth(ee))},reset:function(){L=!1,K=null,de=null,ge=null,re=!1}}}function s(){let L=!1,re=null,K=null,de=null,ge=null,ee=null,Ae=null,Ee=null,yt=null;return{setTest:function(dt){L||(dt?ie(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(dt){re!==dt&&!L&&(n.stencilMask(dt),re=dt)},setFunc:function(dt,zn,Vn){(K!==dt||de!==zn||ge!==Vn)&&(n.stencilFunc(dt,zn,Vn),K=dt,de=zn,ge=Vn)},setOp:function(dt,zn,Vn){(ee!==dt||Ae!==zn||Ee!==Vn)&&(n.stencilOp(dt,zn,Vn),ee=dt,Ae=zn,Ee=Vn)},setLocked:function(dt){L=dt},setClear:function(dt){yt!==dt&&(n.clearStencil(dt),yt=dt)},reset:function(){L=!1,re=null,K=null,de=null,ge=null,ee=null,Ae=null,Ee=null,yt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,w=null,v=null,b=null,S=null,A=null,_=new D(0,0,0),T=0,I=!1,P=null,N=null,G=null,X=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),W=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),W=j>=2);let fe=null,xe={};const be=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),xt=new at().fromArray(be),Qe=new at().fromArray(Je);function J(L,re,K,de){const ge=new Uint8Array(4),ee=n.createTexture();n.bindTexture(L,ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<K;Ae++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(re+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ee}const ae={};ae[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Qs),Ct(!1),Dt(Yu),ie(n.CULL_FACE),je(pi);function ie(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Fe(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function ke(L,re){return u[L]!==re?(n.bindFramebuffer(L,re),u[L]=re,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Le(L,re){let K=g,de=!1;if(L){K=f.get(re),K===void 0&&(K=[],f.set(re,K));const ge=L.textures;if(K.length!==ge.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=ge.length;ee<Ae;ee++)K[ee]=n.COLOR_ATTACHMENT0+ee;K.length=ge.length,de=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,de=!0);de&&n.drawBuffers(K)}function bt(L){return y!==L?(n.useProgram(L),y=L,!0):!1}const $e={[Zi]:n.FUNC_ADD,[B0]:n.FUNC_SUBTRACT,[k0]:n.FUNC_REVERSE_SUBTRACT};$e[z0]=n.MIN,$e[V0]=n.MAX;const ot={[H0]:n.ZERO,[G0]:n.ONE,[W0]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[Z0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[X0]:n.ONE_MINUS_SRC_COLOR,[_l]:n.ONE_MINUS_SRC_ALPHA,[K0]:n.ONE_MINUS_DST_COLOR,[$0]:n.ONE_MINUS_DST_ALPHA,[J0]:n.CONSTANT_COLOR,[Q0]:n.ONE_MINUS_CONSTANT_COLOR,[j0]:n.CONSTANT_ALPHA,[e_]:n.ONE_MINUS_CONSTANT_ALPHA};function je(L,re,K,de,ge,ee,Ae,Ee,yt,dt){if(L===pi){m===!0&&(Fe(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),L!==O0){if(L!==p||dt!==I){if((E!==Zi||b!==Zi)&&(n.blendEquation(n.FUNC_ADD),E=Zi,b=Zi),dt)switch(L){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eo:n.blendFunc(n.ONE,n.ONE);break;case Ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ku:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zu:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}w=null,v=null,S=null,A=null,_.set(0,0,0),T=0,p=L,I=dt}return}ge=ge||re,ee=ee||K,Ae=Ae||de,(re!==E||ge!==b)&&(n.blendEquationSeparate($e[re],$e[ge]),E=re,b=ge),(K!==w||de!==v||ee!==S||Ae!==A)&&(n.blendFuncSeparate(ot[K],ot[de],ot[ee],ot[Ae]),w=K,v=de,S=ee,A=Ae),(Ee.equals(_)===!1||yt!==T)&&(n.blendColor(Ee.r,Ee.g,Ee.b,yt),_.copy(Ee),T=yt),p=L,I=!1}function Ye(L,re){L.side===Nt?Fe(n.CULL_FACE):ie(n.CULL_FACE);let K=L.side===on;re&&(K=!K),Ct(K),L.blending===Hs&&L.transparent===!1?je(pi):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){P!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),P=L)}function Dt(L){L!==U0?(ie(n.CULL_FACE),L!==N&&(L===Yu?n.cullFace(n.BACK):L===F0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),N=L}function zt(L){L!==G&&(W&&n.lineWidth(L),G=L)}function Wt(L,re,K){L?(ie(n.POLYGON_OFFSET_FILL),(X!==re||B!==K)&&(X=re,B=K,a.getReversed()&&(re=-re),n.polygonOffset(re,K))):Fe(n.POLYGON_OFFSET_FILL)}function vt(L){L?ie(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function It(L){L===void 0&&(L=n.TEXTURE0+q-1),fe!==L&&(n.activeTexture(L),fe=L)}function U(L,re,K){K===void 0&&(fe===null?K=n.TEXTURE0+q-1:K=fe);let de=xe[K];de===void 0&&(de={type:void 0,texture:void 0},xe[K]=de),(de.type!==L||de.texture!==re)&&(fe!==K&&(n.activeTexture(K),fe=K),n.bindTexture(L,re||ae[L]),de.type=L,de.texture=re)}function en(){const L=xe[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function x(){try{n.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Z(){try{n.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ce(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function Re(L,re){h[L]!==re&&(n.pixelStorei(L,re),h[L]=re)}function ue(L){xt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),xt.copy(L))}function le(L){Qe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function Pe(L,re){let K=l.get(re);K===void 0&&(K=new WeakMap,l.set(re,K));let de=K.get(L);de===void 0&&(de=n.getUniformBlockIndex(re,L.name),K.set(L,de))}function De(L,re){const de=l.get(re).get(L);c.get(re)!==de&&(n.uniformBlockBinding(re,de,L.__bindingPointIndex),c.set(re,de))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},fe=null,xe={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,w=null,v=null,b=null,S=null,A=null,_=new D(0,0,0),T=0,I=!1,P=null,N=null,G=null,X=null,B=null,xt.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Fe,bindFramebuffer:ke,drawBuffers:Le,useProgram:bt,setBlending:je,setMaterial:Ye,setFlipSided:Ct,setCullFace:Dt,setLineWidth:zt,setPolygonOffset:Wt,setScissorTest:vt,activeTexture:It,bindTexture:U,unbindTexture:en,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:Y,texImage3D:Z,pixelStorei:Re,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:ue,viewport:le,reset:ze}}function tE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return g?new OffscreenCanvas(R,x):ea("canvas")}function m(R,x,O){let V=1;const $=tt(R);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(V*$.width),oe=Math.floor(V*$.height);u===void 0&&(u=y(se,oe));const Y=x?y(se,oe):u;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(R,0,0,se,oe),we("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+oe+")."),Y}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function E(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,x,O,V,$,se=!1){if(R!==null){if(n[R]!==void 0)return n[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe;V&&(oe=e.get("EXT_texture_norm16"),oe||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8),O===n.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),O===n.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),x===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8),O===n.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),O===n.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),O===n.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Z=se?Co:qe.getTransfer($);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Z===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),O===n.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(R,x){let O;return R?x===null||x===jn||x===Zr?O=n.DEPTH24_STENCIL8:x===Mn?O=n.DEPTH32F_STENCIL8:x===Kr&&(O=n.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===jn||x===Zr?O=n.DEPTH_COMPONENT24:x===Mn?O=n.DEPTH_COMPONENT32F:x===Kr&&(O=n.DEPTH_COMPONENT16),O}function S(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function _(R){const x=R.target;x.removeEventListener("dispose",_),P(x)}function T(R){const x=i.get(R);if(x.__webglInit===void 0)return;const O=R.source,V=f.get(O);if(V){const $=V[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(R),Object.keys(V).length===0&&f.delete(O)}i.remove(R)}function I(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const O=R.source,V=f.get(O);delete V[x.__cacheKey],a.memory.textures--}function P(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let $=0;$<x.__webglFramebuffer[V].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[V][$]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=R.textures;for(let V=0,$=O.length;V<$;V++){const se=i.get(O[V]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(O[V])}i.remove(R)}let N=0;function G(){N=0}function X(){return N}function B(R){N=R}function q(){const R=N;return R>=s.maxTextures&&we("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function W(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function j(R,x){const O=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const V=R.image;if(V===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,R,x);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function ne(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Fe(O,R,x);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function fe(R,x){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Fe(O,R,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function xe(R,x){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){ke(O,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const be={[er]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},Je={[Ut]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},xt={[d_]:n.NEVER,[m_]:n.ALWAYS,[u_]:n.LESS,[Zd]:n.LEQUAL,[h_]:n.EQUAL,[Jd]:n.GEQUAL,[f_]:n.GREATER,[p_]:n.NOTEQUAL};function Qe(R,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ft||x.magFilter===co||x.magFilter===Dr||x.magFilter===ui||x.minFilter===Ft||x.minFilter===co||x.minFilter===Dr||x.minFilter===ui)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,be[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,be[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,be[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Je[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Je[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ut||x.minFilter!==Dr&&x.minFilter!==ui||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(R,x){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const V=x.source;let $=f.get(V);$===void 0&&($={},f.set(V,$));const se=W(x);if(se!==R.__cacheKey){$[se]===void 0&&($[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[se].usedTimes++;const oe=$[R.__cacheKey];oe!==void 0&&($[R.__cacheKey].usedTimes--,oe.usedTimes===0&&I(x)),R.__cacheKey=se,R.__webglTexture=$[se].texture}return O}function ae(R,x,O){return Math.floor(Math.floor(R/O)/x)}function ie(R,x,O,V){const se=R.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,V,x.data);else{se.sort((Re,ue)=>Re.start-ue.start);let oe=0;for(let Re=1;Re<se.length;Re++){const ue=se[oe],le=se[Re],Pe=ue.start+ue.count,De=ae(le.start,x.width,4),ze=ae(ue.start,x.width,4);le.start<=Pe+1&&De===ze&&ae(le.start+le.count-1,x.width,4)===De?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++oe,se[oe]=le)}se.length=oe+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ue=se.length;Re<ue;Re++){const le=se[Re],Pe=Math.floor(le.start/4),De=Math.ceil(le.count/4),ze=Pe%x.width,L=Math.floor(Pe/x.width),re=De,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,re,K,O,V,x.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Fe(R,x,O){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const $=J(R,x),se=x.source;t.bindTexture(V,R.__webglTexture,n.TEXTURE0+O);const oe=i.get(se);if(se.version!==oe.__version||$===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=qe.getPrimaries(qe.workingColorSpace),de=x.colorSpace===Di?null:qe.getPrimaries(x.colorSpace),ge=x.colorSpace===Di||K===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=m(x.image,!1,s.maxTextureSize);Z=en(x,Z);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ue=v(x.internalFormat,ce,Re,x.normalized,x.colorSpace,x.isVideoTexture);Qe(V,x);let le;const Pe=x.mipmaps,De=x.isVideoTexture!==!0,ze=oe.__version===void 0||$===!0,L=se.dataReady,re=S(x,Z);if(x.isDepthTexture)ue=b(x.format===ts,x.type),ze&&(De?t.texStorage2D(n.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,ce,Re,null));else if(x.isDataTexture)if(Pe.length>0){De&&ze&&t.texStorage2D(n.TEXTURE_2D,re,ue,Pe[0].width,Pe[0].height);for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],De?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(n.TEXTURE_2D,K,ue,le.width,le.height,0,ce,Re,le.data);x.generateMipmaps=!1}else De?(ze&&t.texStorage2D(n.TEXTURE_2D,re,ue,Z.width,Z.height),L&&ie(x,Z,ce,Re)):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,ce,Re,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ue,Pe[0].width,Pe[0].height,Z.depth);for(let K=0,de=Pe.length;K<de;K++)if(le=Pe[K],x.format!==Sn)if(ce!==null)if(De){if(L)if(x.layerUpdates.size>0){const ge=Xh(le.width,le.height,x.format,x.type);for(const ee of x.layerUpdates){const Ae=le.data.subarray(ee*ge/le.data.BYTES_PER_ELEMENT,(ee+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ee,le.width,le.height,1,ce,Ae)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,ce,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,Z.depth,0,le.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,ce,Re,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ue,le.width,le.height,Z.depth,0,ce,Re,le.data)}else{De&&ze&&t.texStorage2D(n.TEXTURE_2D,re,ue,Pe[0].width,Pe[0].height);for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],x.format!==Sn?ce!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ue,le.width,le.height,0,le.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(n.TEXTURE_2D,K,ue,le.width,le.height,0,ce,Re,le.data)}else if(x.isDataArrayTexture)if(De){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ue,Z.width,Z.height,Z.depth),L)if(x.layerUpdates.size>0){const K=Xh(Z.width,Z.height,x.format,x.type);for(const de of x.layerUpdates){const ge=Z.data.subarray(de*K/Z.data.BYTES_PER_ELEMENT,(de+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Z.width,Z.height,1,ce,Re,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,Re,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,ce,Re,Z.data);else if(x.isData3DTexture)De?(ze&&t.texStorage3D(n.TEXTURE_3D,re,ue,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,Re,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,ce,Re,Z.data);else if(x.isFramebufferTexture){if(ze)if(De)t.texStorage2D(n.TEXTURE_2D,re,ue,Z.width,Z.height);else{let K=Z.width,de=Z.height;for(let ge=0;ge<re;ge++)t.texImage2D(n.TEXTURE_2D,ge,ue,K,de,0,ce,Re,null),K>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),h.add(x),K.onpaint=de=>{const ge=de.changedElements;for(const ee of h)ge.includes(ee.image)&&(ee.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ge=n.RGBA,ee=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,ee,Ae,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(De&&ze){const K=tt(Pe[0]);t.texStorage2D(n.TEXTURE_2D,re,ue,K.width,K.height)}for(let K=0,de=Pe.length;K<de;K++)le=Pe[K],De?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce,Re,le):t.texImage2D(n.TEXTURE_2D,K,ue,ce,Re,le);x.generateMipmaps=!1}else if(De){if(ze){const K=tt(Z);t.texStorage2D(n.TEXTURE_2D,re,ue,K.width,K.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Re,Z)}else t.texImage2D(n.TEXTURE_2D,0,ue,ce,Re,Z);p(x)&&E(V),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ke(R,x,O){if(x.image.length!==6)return;const V=J(R,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const se=i.get($);if($.version!==se.__version||V===!0){t.activeTexture(n.TEXTURE0+O);const oe=qe.getPrimaries(qe.workingColorSpace),Y=x.colorSpace===Di?null:qe.getPrimaries(x.colorSpace),Z=x.colorSpace===Di||oe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!ce&&!Re?ue[ee]=m(x.image[ee],!0,s.maxCubemapSize):ue[ee]=Re?x.image[ee].image:x.image[ee],ue[ee]=en(x,ue[ee]);const le=ue[0],Pe=r.convert(x.format,x.colorSpace),De=r.convert(x.type),ze=v(x.internalFormat,Pe,De,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,re=se.__version===void 0||V===!0,K=$.dataReady;let de=S(x,le);Qe(n.TEXTURE_CUBE_MAP,x);let ge;if(ce){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,le.width,le.height);for(let ee=0;ee<6;ee++){ge=ue[ee].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){const Ee=ge[Ae];x.format!==Sn?Pe!==null?L?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,ze,Ee.width,Ee.height,0,Ee.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ee.width,Ee.height,Pe,De,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,ze,Ee.width,Ee.height,0,Pe,De,Ee.data)}}}else{if(ge=x.mipmaps,L&&re){ge.length>0&&de++;const ee=tt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Re){L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Pe,De,ue[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,ue[ee].width,ue[ee].height,0,Pe,De,ue[ee].data);for(let Ae=0;Ae<ge.length;Ae++){const yt=ge[Ae].image[ee].image;L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,yt.width,yt.height,Pe,De,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,ze,yt.width,yt.height,0,Pe,De,yt.data)}}else{L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,De,ue[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Pe,De,ue[ee]);for(let Ae=0;Ae<ge.length;Ae++){const Ee=ge[Ae];L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Pe,De,Ee.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,ze,Pe,De,Ee.image[ee])}}}p(x)&&E(n.TEXTURE_CUBE_MAP),se.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Le(R,x,O,V,$,se){const oe=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),Z=v(O.internalFormat,oe,Y,O.normalized,O.colorSpace),ce=i.get(x),Re=i.get(O);if(Re.__renderTarget=x,!ce.__hasExternalTextures){const ue=Math.max(1,x.width>>se),le=Math.max(1,x.height>>se);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,se,Z,ue,le,x.depth,0,oe,Y,null):t.texImage2D($,se,Z,ue,le,0,oe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,$,Re.__webglTexture,0,vt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,$,Re.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(R,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const V=x.depthTexture,$=V&&V.isDepthTexture?V.type:null,se=b(x.stencilBuffer,$),oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;It(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(x),se,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(x),se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,R)}else{const V=x.textures;for(let $=0;$<V.length;$++){const se=V[$],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),Z=v(se.internalFormat,oe,Y,se.normalized,se.colorSpace);It(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(x),Z,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $e(R,x,O){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x.depthTexture);const ce=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===vi?ue=n.DEPTH_COMPONENT24:x.depthTexture.format===ts&&(ue=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,ce,Re,null)}}else j(x.depthTexture,0);const se=$.__webglTexture,oe=vt(x),Y=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Z=x.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===vi)It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,se,0);else if(x.depthTexture.format===ts)It(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Y,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(R){const x=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=V}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)$e(x.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?$e(x.__webglFramebuffer[0],R,0):$e(x.__webglFramebuffer,R,0)}else if(O){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),bt(x.__webglDepthbuffer[V],R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),bt(x.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(R,x,O){const V=i.get(R);x!==void 0&&Le(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ot(R)}function Ye(R){const x=R.texture,O=i.get(R),V=i.get(x);R.addEventListener("dispose",_);const $=R.textures,se=R.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(oe)for(let Y=0,Z=$.length;Y<Z;Y++){const ce=i.get($[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const Z=$[Y];O.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ce=r.convert(Z.format,Z.colorSpace),Re=r.convert(Z.type),ue=v(Z.internalFormat,ce,Re,Z.normalized,Z.colorSpace,R.isXRRenderTarget===!0),le=vt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ue,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Le(O.__webglFramebuffer[Y][Z],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Le(O.__webglFramebuffer[Y],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,Z=$.length;Y<Z;Y++){const ce=$[Y],Re=i.get(ce);let ue=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),Qe(ue,ce),Le(O.__webglFramebuffer,R,ce,n.COLOR_ATTACHMENT0+Y,ue,0),p(ce)&&E(ue)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,V.__webglTexture),Qe(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Le(O.__webglFramebuffer[Z],R,x,n.COLOR_ATTACHMENT0,Y,Z);else Le(O.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,Y,0);p(x)&&E(Y),t.unbindTexture()}R.depthBuffer&&ot(R)}function Ct(R){const x=R.textures;for(let O=0,V=x.length;O<V;O++){const $=x[O];if(p($)){const se=w(R),oe=i.get($).__webglTexture;t.bindTexture(se,oe),E(se),t.unbindTexture()}}}const Dt=[],zt=[];function Wt(R){if(R.samples>0){if(It(R)===!1){const x=R.textures,O=R.width,V=R.height;let $=n.COLOR_BUFFER_BIT;const se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(R),Y=x.length>1;if(Y)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=R.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,O,V,0,0,O,V,$,n.NEAREST),c===!0&&(Dt.length=0,zt.length=0,Dt.push(n.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push(se),zt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=i.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function vt(R){return Math.min(s.maxSamples,R.samples)}function It(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(R){const x=a.render.frame;d.get(R)!==x&&(d.set(R,x),R.update())}function en(R,x){const O=R.colorSpace,V=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==pn&&O!==Di&&(qe.getTransfer(O)===it?(V!==Sn||$!==hn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",O)),x}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=xe,this.rebindTextures=je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nE(n,e){function t(i,s=Di){let r;const a=qe.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===Gd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ap)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ep)return n.BYTE;if(i===Tp)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===Hd)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Rp)return n.ALPHA;if(i===Cp)return n.RGB;if(i===Sn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===Xd)return n.RED;if(i===qd)return n.RED_INTEGER;if(i===os)return n.RG;if(i===$d)return n.RG_INTEGER;if(i===Yd)return n.RGBA_INTEGER;if(i===lo||i===uo||i===ho||i===fo)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===wl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Il||i===Pl||i===Ll||i===Dl||i===wo||i===Nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Il)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wo)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===$l||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ul)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Zl||i===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ql||i===jl||i===Ao||i===ed)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ed)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const iE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Xp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:iE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aE extends Vi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new rE,p={},E=t.getContextAttributes();let w=null,v=null;const b=[],S=[],A=new ve;let _=null;const T=new rn;T.viewport=new at;const I=new rn;I.viewport=new at;const P=[T,I],N=new nv;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=b[J];return ae===void 0&&(ae=new yc,b[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=b[J];return ae===void 0&&(ae=new yc,b[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=b[J];return ae===void 0&&(ae=new yc,b[J]=ae),ae.getHandSpace()};function B(J){const ae=S.indexOf(J.inputSource);if(ae===-1)return;const ie=b[ae];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||a),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",W);for(let J=0;J<b.length;J++){const ae=S[J];ae!==null&&(S[J]=null,b[J].disconnect(ae))}G=null,X=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(w),f=null,u=null,h=null,s=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Fe=null,ke=null;E.depth&&(ke=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?ts:vi,Fe=E.stencil?Zr:jn);const Le={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Qn(u.textureWidth,u.textureHeight,{format:Sn,type:hn,depthTexture:new nr(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(J){for(let ae=0;ae<J.removed.length;ae++){const ie=J.removed[ae],Fe=S.indexOf(ie);Fe>=0&&(S[Fe]=null,b[Fe].disconnect(ie))}for(let ae=0;ae<J.added.length;ae++){const ie=J.added[ae];let Fe=S.indexOf(ie);if(Fe===-1){for(let Le=0;Le<b.length;Le++)if(Le>=S.length){S.push(ie),Fe=Le;break}else if(S[Le]===null){S[Le]=ie,Fe=Le;break}if(Fe===-1)break}const ke=b[Fe];ke&&ke.connect(ie)}}const j=new C,ne=new C;function fe(J,ae,ie){j.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Fe=j.distanceTo(ne),ke=ae.projectionMatrix.elements,Le=ie.projectionMatrix.elements,bt=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),ot=(ke[9]+1)/ke[5],je=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],Ct=(Le[8]+1)/Le[0],Dt=bt*Ye,zt=bt*Ct,Wt=Fe/(-Ye+Ct),vt=Wt*-Ye;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vt),J.translateZ(Wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const It=bt+Wt,U=$e+Wt,en=Dt-vt,tt=zt+(Fe-vt),R=ot*$e/U*It,x=je*$e/U*It;J.projectionMatrix.makePerspective(en,tt,R,x,It,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function xe(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,ie=J.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),N.near=I.near=T.near=ae,N.far=I.far=T.far=ie,(G!==N.near||X!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,X=N.far),N.layers.mask=J.layers.mask|6,T.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Fe=J.parent,ke=N.cameras;xe(N,Fe);for(let Le=0;Le<ke.length;Le++)xe(ke[Le],Fe);ke.length===2?fe(N,T,I):N.projectionMatrix.copy(T.projectionMatrix),be(J,N,Fe)};function be(J,ae,ie){ie===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=tr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let Je=null;function xt(J,ae){if(d=ae.getViewerPose(l||a),g=ae,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let $e=0;$e<ie.length;$e++){const ot=ie[$e];let je=null;if(f!==null)je=f.getViewport(ot);else{const Ct=h.getViewSubImage(u,ot);je=Ct.viewport,$e===0&&(e.setRenderTargetTextures(v,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(v))}let Ye=P[$e];Ye===void 0&&(Ye=new rn,Ye.layers.enable($e),Ye.viewport=new at,P[$e]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(je.x,je.y,je.width,je.height),$e===0&&(N.matrix.copy(Ye.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(Ye)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const $e=h.getDepthInformation(ie[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ke&&ke.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<ie.length;$e++){const ot=ie[$e].camera;if(ot){let je=p[ot];je||(je=new Xp,p[ot]=je);const Ye=h.getCameraImage(ot);je.sourceTexture=Ye}}}}for(let ie=0;ie<b.length;ie++){const Fe=S[ie],ke=b[ie];Fe!==null&&ke!==void 0&&ke.update(Fe,ae,l||a)}Je&&Je(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Qe=new em;Qe.setAnimationLoop(xt),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}}const oE=new Oe,om=new Be;om.set(-1,0,0,0,1,0,0,0,1);function cE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$p(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),w=E.envMap,v=E.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(om),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const S=b.program;i.uniformBlockBinding(v,S)}function l(v,b){let S=s[v.id];S===void 0&&(m(v),S=d(v),s[v.id]=S,v.addEventListener("dispose",E));const A=b.program;i.updateUBOMapping(v,A);const _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function d(v){const b=h();v.__bindingPointIndex=b;const S=n.createBuffer(),A=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=s[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){const I=S[_];if(Array.isArray(I))for(let P=0,N=I.length;P<N;P++)f(I[P],_,P,A);else f(I,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,b,S,A){if(y(v,b,S,A)===!0){const _=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let P=0;P<T.length;P++){const N=T[P],G=p(N);g(N,v.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function y(v,b,S,A){const _=v.value,T=b+"_"+S;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{const I=A[T];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(v){const b=v.uniforms;let S=0;const A=16;for(let T=0,I=b.length;T<I;T++){const P=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,G=P.length;N<G;N++){const X=P[N],B=Array.isArray(X.value)?X.value:[X.value];for(let q=0,W=B.length;q<W;q++){const j=B[q],ne=p(j),fe=S%A,xe=fe%ne.boundary,be=fe+xe;S+=xe,be!==0&&A-be<ne.storage&&(S+=A-be),X.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=ne.storage}}}const _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):we("WebGLRenderer: Unsupported uniform value type.",v),b}function E(v){const b=v.target;b.removeEventListener("dispose",E);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}const dE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function uE(){return Wn===null&&(Wn=new nu(dE,16,16,os,xi),Wn.name="DFG_LUT",Wn.minFilter=Ft,Wn.magFilter=Ft,Wn.wrapS=Kn,Wn.wrapT=Kn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class hE{constructor(e={}){const{canvas:t=x_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=f,m=new Set([Yd,$d,qd]),p=new Set([hn,jn,Kr,Zr,Gd,Wd]),E=new Uint32Array(4),w=new Int32Array(4),v=new C;let b=null,S=null;const A=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,N=null,G=null,X=null,B=null;this._outputColorSpace=Gt;let q=0,W=0,j=null,ne=-1,fe=null;const xe=new at,be=new at;let Je=null;const xt=new D(0);let Qe=0,J=t.width,ae=t.height,ie=1,Fe=null,ke=null;const Le=new at(0,0,J,ae),bt=new at(0,0,J,ae);let $e=!1;const ot=new su;let je=!1,Ye=!1;const Ct=new Oe,Dt=new C,zt=new at,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function It(){return j===null?ie:1}let U=i;function en(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",zn,!1),U===null){const F="webgl2";if(U=en(F,M),U===null)throw en(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ne("WebGLRenderer: "+M.message),M}let tt,R,x,O,V,$,se,oe,Y,Z,ce,Re,ue,le,Pe,De,ze,L,re,K,de,ge,ee;function Ae(){tt=new uS(U),tt.init(),de=new nE(U,tt),R=new iS(U,tt,e,de),x=new eE(U,tt),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),G=U.createFramebuffer(),X=U.createFramebuffer(),B=U.createFramebuffer(),O=new pS(U),V=new zb,$=new tE(U,tt,x,V,R,de,O),se=new dS(I),oe=new xv(U),ge=new tS(U,oe),Y=new hS(U,oe,O,ge),Z=new gS(U,Y,oe,ge,O),L=new mS(U,R,$),Pe=new sS(V),ce=new kb(I,se,tt,R,ge,Pe),Re=new cE(I,V),ue=new Hb,le=new Yb(tt),ze=new eS(I,se,x,Z,g,c),De=new jb(I,Z,R),ee=new lE(U,O,R,x),re=new nS(U,tt,O),K=new fS(U,tt,O),O.programs=ce.programs,I.capabilities=R,I.extensions=tt,I.properties=V,I.renderLists=ue,I.shadowMap=De,I.state=x,I.info=O}Ae(),y!==hn&&(T=new xS(y,t.width,t.height,o,s,r));const Ee=new aE(I,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(J,ae,!1))},this.getSize=function(M){return M.set(J,ae)},this.setSize=function(M,F,H=!0){if(Ee.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,ae=F,t.width=Math.floor(M*ie),t.height=Math.floor(F*ie),H===!0&&(t.style.width=M+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(J*ie,ae*ie).floor()},this.setDrawingBufferSize=function(M,F,H){J=M,ae=F,ie=H,t.width=Math.floor(M*H),t.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(y===hn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(xe)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,F,H,k){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,F,H,k),x.viewport(xe.copy(Le).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(bt)},this.setScissor=function(M,F,H,k){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,F,H,k),x.scissor(be.copy(bt).multiplyScalar(ie).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){x.setScissorTest($e=M)},this.setOpaqueSort=function(M){Fe=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,H=!0){let k=0;if(M){let z=!1;if(j!==null){const me=j.texture.format;z=m.has(me)}if(z){const me=j.texture.type,Me=p.has(me),pe=ze.getClearColor(),Te=ze.getClearAlpha(),Ce=pe.r,Ve=pe.g,Ge=pe.b;Me?(E[0]=Ce,E[1]=Ve,E[2]=Ge,E[3]=Te,U.clearBufferuiv(U.COLOR,0,E)):(w[0]=Ce,w[1]=Ve,w[2]=Ge,w[3]=Te,U.clearBufferiv(U.COLOR,0,w))}else k|=U.COLOR_BUFFER_BIT}F&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",zn,!1),ze.dispose(),ue.dispose(),le.dispose(),V.dispose(),se.dispose(),Z.dispose(),ge.dispose(),ee.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",bu),Ee.removeEventListener("sessionend",Eu),Hi.stop()};function yt(M){M.preventDefault(),Io("WebGLRenderer: Context Lost."),P=!0}function dt(){Io("WebGLRenderer: Context Restored."),P=!1;const M=O.autoReset,F=De.enabled,H=De.autoUpdate,k=De.needsUpdate,z=De.type;Ae(),O.autoReset=M,De.enabled=F,De.autoUpdate=H,De.needsUpdate=k,De.type=z}function zn(M){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Vn(M){const F=M.target;F.removeEventListener("dispose",Vn),qm(F)}function qm(M){$m(M),V.remove(M)}function $m(M){const F=V.get(M).programs;F!==void 0&&(F.forEach(function(H){ce.releaseProgram(H)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,k,z,me){F===null&&(F=Wt);const Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=Zm(M,F,H,k,z);x.setMaterial(k,Me);let Te=H.index,Ce=1;if(k.wireframe===!0){if(Te=Y.getWireframeAttribute(H),Te===void 0)return;Ce=2}const Ve=H.drawRange,Ge=H.attributes.position;let Ie=Ve.start*Ce,rt=(Ve.start+Ve.count)*Ce;me!==null&&(Ie=Math.max(Ie,me.start*Ce),rt=Math.min(rt,(me.start+me.count)*Ce)),Te!==null?(Ie=Math.max(Ie,0),rt=Math.min(rt,Te.count)):Ge!=null&&(Ie=Math.max(Ie,0),rt=Math.min(rt,Ge.count));const Et=rt-Ie;if(Et<0||Et===1/0)return;ge.setup(z,k,pe,H,Te);let Mt,ct=re;if(Te!==null&&(Mt=oe.get(Te),ct=K,ct.setIndex(Mt)),z.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*It()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(z.isLine){let qt=k.linewidth;qt===void 0&&(qt=1),x.setLineWidth(qt*It()),z.isLineSegments?ct.setMode(U.LINES):z.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else z.isPoints?ct.setMode(U.POINTS):z.isSprite&&ct.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qt=z._multiDrawStarts,ye=z._multiDrawCounts,cn=z._multiDrawCount,Ke=Te?oe.get(Te).bytesPerElement:1,mn=V.get(k).currentProgram.getUniforms();for(let Hn=0;Hn<cn;Hn++)mn.setValue(U,"_gl_DrawID",Hn),ct.render(qt[Hn]/Ke,ye[Hn])}else if(z.isInstancedMesh)ct.renderInstances(Ie,Et,z.count);else if(H.isInstancedBufferGeometry){const qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,qt);ct.renderInstances(Ie,Et,ye)}else ct.render(Ie,Et)};function Su(M,F,H){M.transparent===!0&&M.side===Nt&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,ha(M,F,H),M.side=_i,M.needsUpdate=!0,ha(M,F,H),M.side=Nt):ha(M,F,H)}this.compile=function(M,F,H=null){H===null&&(H=M),S=le.get(H),S.init(F),_.push(S),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();const k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){const pe=me[Me];Su(pe,H,z),k.add(pe)}else Su(me,H,z),k.add(me)}),S=_.pop(),k},this.compileAsync=function(M,F,H=null){const k=this.compile(M,F,H);return new Promise(z=>{function me(){if(k.forEach(function(Me){V.get(Me).currentProgram.isReady()&&k.delete(Me)}),k.size===0){z(M);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ac=null;function Ym(M){ac&&ac(M)}function bu(){Hi.stop()}function Eu(){Hi.start()}const Hi=new em;Hi.setAnimationLoop(Ym),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){ac=M,Ee.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},Ee.addEventListener("sessionstart",bu),Ee.addEventListener("sessionend",Eu),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(M,F);const H=Ee.enabled===!0&&Ee.isPresenting===!0,k=T!==null&&(j===null||H)&&T.begin(I,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(F),F=Ee.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,F,j),S=le.get(M,_.length),S.init(F),S.state.textureUnits=$.getTextureUnits(),_.push(S),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ot.setFromProjectionMatrix(Ct,Zn,F.reversedDepth),Ye=this.localClippingEnabled,je=Pe.init(this.clippingPlanes,Ye),b=ue.get(M,A.length),b.init(),A.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const Me=I.xr.getDepthSensingMesh();Me!==null&&oc(Me,F,-1/0,I.sortObjects)}oc(M,F,0,I.sortObjects),b.finish(),I.sortObjects===!0&&b.sort(Fe,ke,F.reversedDepth),vt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,vt&&ze.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Pe.beginShadows();const z=S.state.shadowsArray;if(De.render(z,M,F),je===!0&&Pe.endShadows(),(k&&T.hasRenderPass())===!1){const Me=b.opaque,pe=b.transmissive;if(S.setupLights(),F.isArrayCamera){const Te=F.cameras;if(pe.length>0)for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const Ge=Te[Ce];wu(Me,pe,M,Ge)}vt&&ze.render(M);for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const Ge=Te[Ce];Tu(b,M,Ge,Ge.viewport)}}else pe.length>0&&wu(Me,pe,M,F),vt&&ze.render(M),Tu(b,M,F)}j!==null&&W===0&&($.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j)),k&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,F),ge.resetDefaultState(),ne=-1,fe=null,_.pop(),_.length>0?(S=_[_.length-1],$.setTextureUnits(S.state.textureUnits),je===!0&&Pe.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function oc(M,F,H,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){k&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const Me=Z.update(M),pe=M.material;pe.visible&&b.push(M,Me,pe,H,zt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const Me=Z.update(M),pe=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),zt.copy(Me.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(pe)){const Te=Me.groups;for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const Ge=Te[Ce],Ie=pe[Ge.materialIndex];Ie&&Ie.visible&&b.push(M,Me,Ie,H,zt.z,Ge)}}else pe.visible&&b.push(M,Me,pe,H,zt.z,null)}}const me=M.children;for(let Me=0,pe=me.length;Me<pe;Me++)oc(me[Me],F,H,k)}function Tu(M,F,H,k){const{opaque:z,transmissive:me,transparent:Me}=M;S.setupLightsView(H),je===!0&&Pe.setGlobalState(I.clippingPlanes,H),k&&x.viewport(xe.copy(k)),z.length>0&&ua(z,F,H),me.length>0&&ua(me,F,H),Me.length>0&&ua(Me,F,H),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function wu(M,F,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[k.id]===void 0){const Ie=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[k.id]=new Qn(1,1,{generateMipmaps:!0,type:Ie?xi:hn,minFilter:ui,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=S.state.transmissionRenderTarget[k.id],Me=k.viewport||xe;me.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);const pe=I.getRenderTarget(),Te=I.getActiveCubeFace(),Ce=I.getActiveMipmapLevel();I.setRenderTarget(me),I.getClearColor(xt),Qe=I.getClearAlpha(),Qe<1&&I.setClearColor(16777215,.5),I.clear(),vt&&ze.render(H);const Ve=I.toneMapping;I.toneMapping=Jn;const Ge=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),S.setupLightsView(k),je===!0&&Pe.setGlobalState(I.clippingPlanes,k),ua(M,H,k),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let rt=0,Et=F.length;rt<Et;rt++){const Mt=F[rt],{object:ct,geometry:qt,material:ye,group:cn}=Mt;if(ye.side===Nt&&ct.layers.test(k.layers)){const Ke=ye.side;ye.side=on,ye.needsUpdate=!0,Au(ct,H,k,qt,ye,cn),ye.side=Ke,ye.needsUpdate=!0,Ie=!0}}Ie===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}I.setRenderTarget(pe,Te,Ce),I.setClearColor(xt,Qe),Ge!==void 0&&(k.viewport=Ge),I.toneMapping=Ve}function ua(M,F,H){const k=F.isScene===!0?F.overrideMaterial:null;for(let z=0,me=M.length;z<me;z++){const Me=M[z],{object:pe,geometry:Te,group:Ce}=Me;let Ve=Me.material;Ve.allowOverride===!0&&k!==null&&(Ve=k),pe.layers.test(H.layers)&&Au(pe,F,H,Te,Ve,Ce)}}function Au(M,F,H,k,z,me){M.onBeforeRender(I,F,H,k,z,me),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(I,F,H,k,M,me),z.transparent===!0&&z.side===Nt&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,I.renderBufferDirect(H,F,k,z,M,me),z.side=_i,z.needsUpdate=!0,I.renderBufferDirect(H,F,k,z,M,me),z.side=Nt):I.renderBufferDirect(H,F,k,z,M,me),M.onAfterRender(I,F,H,k,z,me)}function ha(M,F,H){F.isScene!==!0&&(F=Wt);const k=V.get(M),z=S.state.lights,me=S.state.shadowsArray,Me=z.state.version,pe=ce.getParameters(M,z.state,me,F,H,S.state.lightProbeGridArray),Te=ce.getProgramCacheKey(pe);let Ce=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=se.get(M.envMap||k.environment,Ve),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Vn),Ce=new Map,k.programs=Ce);let Ge=Ce.get(Te);if(Ge!==void 0){if(k.currentProgram===Ge&&k.lightsStateVersion===Me)return Cu(M,pe),Ge}else pe.uniforms=ce.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,H,pe),M.onBeforeCompile(pe,I),Ge=ce.acquireProgram(pe,Te),Ce.set(Te,Ge),k.uniforms=pe.uniforms;const Ie=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=Pe.uniform),Cu(M,pe),k.needsLights=Qm(M),k.lightsStateVersion=Me,k.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=S.state.lightProbeGridArray.length>0,k.currentProgram=Ge,k.uniformsList=null,Ge}function Ru(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=po.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Cu(M,F){const H=V.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Km(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let H=0,k=M.length;H<k;H++){const z=M[H];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Zm(M,F,H,k,z){F.isScene!==!0&&(F=Wt),$.resetTextureUnits();const me=F.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,pe=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ce=se.get(k.envMap||Me,Te),Ve=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ie=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color;let Mt=Jn;k.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Mt=I.toneMapping);const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=ct!==void 0?ct.length:0,ye=V.get(k),cn=S.state.lights;if(je===!0&&(Ye===!0||M!==fe)){const ut=M===fe&&k.id===ne;Pe.setState(k,M,ut)}let Ke=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==cn.state.version||ye.outputColorSpace!==pe||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Ce||k.fog===!0&&ye.fog!==me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Pe.numPlanes||ye.numIntersection!==Pe.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==Ge||ye.morphTargets!==Ie||ye.morphNormals!==rt||ye.morphColors!==Et||ye.toneMapping!==Mt||ye.morphTargetsCount!==qt||!!ye.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,ye.__version=k.version);let mn=ye.currentProgram;Ke===!0&&(mn=ha(k,F,z),N&&k.isNodeMaterial&&N.onUpdateProgram(k,mn,ye));let Hn=!1,Mi=!1,hs=!1;const lt=mn.getUniforms(),Tt=ye.uniforms;if(x.useProgram(mn.program)&&(Hn=!0,Mi=!0,hs=!0),k.id!==ne&&(ne=k.id,Mi=!0),ye.needsLights){const ut=Km(S.state.lightProbeGridArray,z);ye.lightProbeGrid!==ut&&(ye.lightProbeGrid=ut,Mi=!0)}if(Hn||fe!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(U,"projectionMatrix",M.projectionMatrix),lt.setValue(U,"viewMatrix",M.matrixWorldInverse);const bi=lt.map.cameraPosition;bi!==void 0&&bi.setValue(U,Dt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),fe!==M&&(fe=M,Mi=!0,hs=!0)}if(ye.needsLights&&(cn.state.directionalShadowMap.length>0&&lt.setValue(U,"directionalShadowMap",cn.state.directionalShadowMap,$),cn.state.spotShadowMap.length>0&&lt.setValue(U,"spotShadowMap",cn.state.spotShadowMap,$),cn.state.pointShadowMap.length>0&&lt.setValue(U,"pointShadowMap",cn.state.pointShadowMap,$)),z.isSkinnedMesh){lt.setOptional(U,z,"bindMatrix"),lt.setOptional(U,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(U,"boneTexture",ut.boneTexture,$))}z.isBatchedMesh&&(lt.setOptional(U,z,"batchingTexture"),lt.setValue(U,"batchingTexture",z._matricesTexture,$),lt.setOptional(U,z,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",z._indirectTexture,$),lt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",z._colorsTexture,$));const Si=H.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&L.update(z,H,mn),(Mi||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,lt.setValue(U,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Tt.envMapIntensity.value=F.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=uE()),Mi){if(lt.setValue(U,"toneMappingExposure",I.toneMappingExposure),ye.needsLights&&Jm(Tt,hs),me&&k.fog===!0&&Re.refreshFogUniforms(Tt,me),Re.refreshMaterialUniforms(Tt,k,ie,ae,S.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){const ut=ye.lightProbeGrid;Tt.probesSH.value=ut.texture,Tt.probesMin.value.copy(ut.boundingBox.min),Tt.probesMax.value.copy(ut.boundingBox.max),Tt.probesResolution.value.copy(ut.resolution)}po.upload(U,Ru(ye),Tt,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(po.upload(U,Ru(ye),Tt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(U,"center",z.center),lt.setValue(U,"modelViewMatrix",z.modelViewMatrix),lt.setValue(U,"normalMatrix",z.normalMatrix),lt.setValue(U,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){const ut=k.uniformsGroups;for(let bi=0,fs=ut.length;bi<fs;bi++){const Iu=ut[bi];ee.update(Iu,mn),ee.bind(Iu,mn)}}return mn}function Jm(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Qm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,F,H){const k=V.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=F,V.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const H=V.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,H=0){j=M,q=F,W=H;let k=null,z=!1,me=!1;if(M){const pe=V.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),xe.copy(M.viewport),be.copy(M.scissor),Je=M.scissorTest,x.viewport(xe),x.scissor(be),x.setScissorTest(Je),ne=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(pe.__hasExternalTextures)$.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(pe.__boundDepthTexture!==Ve){if(Ve!==null&&V.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ce=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?k=Ce[F][H]:k=Ce[F],z=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?k=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[H]:k=Ce,xe.copy(M.viewport),be.copy(M.scissor),Je=M.scissorTest}else xe.copy(Le).multiplyScalar(ie).floor(),be.copy(bt).multiplyScalar(ie).floor(),Je=$e;if(H!==0&&(k=G),x.bindFramebuffer(U.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(xe),x.scissor(be),x.setScissorTest(Je),z){const pe=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,H)}else if(me){const pe=F;for(let Te=0;Te<M.textures.length;Te++){const Ce=V.get(M.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,H,pe)}}else if(M!==null&&H!==0){const pe=V.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,H)}ne=-1},this.readRenderTargetPixels=function(M,F,H,k,z,me,Me,pe=0){if(!(M&&M.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){x.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=M.textures[pe],Ve=Ce.format,Ge=Ce.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Ve)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&H>=0&&H<=M.height-z&&U.readPixels(F,H,k,z,de.convert(Ve),de.convert(Ge),me)}finally{const Ce=j!==null?V.get(j).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,F,H,k,z,me,Me,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(F>=0&&F<=M.width-k&&H>=0&&H<=M.height-z){x.bindFramebuffer(U.FRAMEBUFFER,Te);const Ce=M.textures[pe],Ve=Ce.format,Ge=Ce.type;if(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe),!R.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(F,H,k,z,de.convert(Ve),de.convert(Ge),0);const rt=j!==null?V.get(j).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,rt);const Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await v_(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.deleteBuffer(Ie),U.deleteSync(Et),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,H=0){const k=Math.pow(2,-H),z=Math.floor(M.image.width*k),me=Math.floor(M.image.height*k),Me=F!==null?F.x:0,pe=F!==null?F.y:0;$.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,Me,pe,z,me),x.unbindTexture()},this.copyTextureToTexture=function(M,F,H=null,k=null,z=0,me=0){let Me,pe,Te,Ce,Ve,Ge,Ie,rt,Et;const Mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(H!==null)Me=H.max.x-H.min.x,pe=H.max.y-H.min.y,Te=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ve=H.min.y,Ge=H.isBox3?H.min.z:0;else{const Tt=Math.pow(2,-z);Me=Math.floor(Mt.width*Tt),pe=Math.floor(Mt.height*Tt),M.isDataArrayTexture?Te=Mt.depth:M.isData3DTexture?Te=Math.floor(Mt.depth*Tt):Te=1,Ce=0,Ve=0,Ge=0}k!==null?(Ie=k.x,rt=k.y,Et=k.z):(Ie=0,rt=0,Et=0);const ct=de.convert(F.format),qt=de.convert(F.type);let ye;F.isData3DTexture?($.setTexture3D(F,0),ye=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($.setTexture2DArray(F,0),ye=U.TEXTURE_2D_ARRAY):($.setTexture2D(F,0),ye=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const cn=x.getParameter(U.UNPACK_ROW_LENGTH),Ke=x.getParameter(U.UNPACK_IMAGE_HEIGHT),mn=x.getParameter(U.UNPACK_SKIP_PIXELS),Hn=x.getParameter(U.UNPACK_SKIP_ROWS),Mi=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const hs=M.isDataArrayTexture||M.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Tt=V.get(M),Si=V.get(F),ut=V.get(Tt.__renderTarget),bi=V.get(Si.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,ut.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let fs=0;fs<Te;fs++)hs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(M).__webglTexture,z,Ge+fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(F).__webglTexture,me,Et+fs)),U.blitFramebuffer(Ce,Ve,Me,pe,Ie,rt,Me,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||V.has(M)){const Tt=V.get(M),Si=V.get(F);x.bindFramebuffer(U.READ_FRAMEBUFFER,X),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let ut=0;ut<Te;ut++)hs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,z,Ge+ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tt.__webglTexture,z),lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Si.__webglTexture,me,Et+ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Si.__webglTexture,me),z!==0?U.blitFramebuffer(Ce,Ve,Me,pe,Ie,rt,Me,pe,U.COLOR_BUFFER_BIT,U.NEAREST):lt?U.copyTexSubImage3D(ye,me,Ie,rt,Et+ut,Ce,Ve,Me,pe):U.copyTexSubImage2D(ye,me,Ie,rt,Ce,Ve,Me,pe);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ye,me,Ie,rt,Et,Me,pe,Te,ct,qt,Mt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,me,Ie,rt,Et,Me,pe,Te,ct,Mt.data):U.texSubImage3D(ye,me,Ie,rt,Et,Me,pe,Te,ct,qt,Mt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,Ie,rt,Me,pe,ct,qt,Mt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,Ie,rt,Mt.width,Mt.height,ct,Mt.data):U.texSubImage2D(U.TEXTURE_2D,me,Ie,rt,Me,pe,ct,qt,Mt);x.pixelStorei(U.UNPACK_ROW_LENGTH,cn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),x.pixelStorei(U.UNPACK_SKIP_PIXELS,mn),x.pixelStorei(U.UNPACK_SKIP_ROWS,Hn),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Mi),me===0&&F.generateMipmaps&&U.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,W=0,j=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}function gf(n,e){if(e===o_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===nd||e===Ip){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===nd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function cm(n){const e=new Map,t=new Map,i=n.clone();return lm(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function lm(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)lm(n.children[i],e.children[i],t)}class dm extends or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _E(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new _f(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _f(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new IE(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Gr.extractUrlBase(e);a=Gr.resolveURL(l,this.path)}else a=Gr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===um){try{a[Xe.KHR_BINARY_GLTF]=new PE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new WE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new mE;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new LE(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new DE;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new NE;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function fE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Rt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pE{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new D(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],pn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new jp(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Qp(d),l.distance=h;break;case"spot":l=new Jx(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),qn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class mE{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,i){const s=[];e.color=new D(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class gE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class _E{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(r,r)}return Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class vE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class yE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new D(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Gt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class ME{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new D().setRGB(r[0],r[1],r[2],pn),Promise.all(s)}}class bE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class EE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new D().setRGB(r[0],r[1],r[2],pn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Gt)),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class wE{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class AE{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class RE{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class CE{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class _f{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}}class IE{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const y=new Oe,m=new C,p=new En,E=new C(1,1,1),w=new Vp(g.geometry,g.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&E.fromBufferAttribute(c.SCALE,v),w.setMatrixAt(v,y.compose(m,p,E));for(const v in c)if(v==="_COLOR_0"){const b=c[v];w.instanceColor=new rd(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);pt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const um="glTF",Sr=12,xf={JSON:1313821514,BIN:5130562};class PE{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==um)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Sr,r=new DataView(e,Sr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===xf.JSON){const l=new Uint8Array(e,Sr+a,o);this.content=i.decode(l)}else if(c===xf.BIN){const l=Sr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class LE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=dd[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=dd[d]||d.toLowerCase();if(a[d]!==void 0){const u=i.accessors[e.attributes[d]],f=qs[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}h(f)},o,l,pn,u)})})}}class DE{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class NE{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class hm extends sr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,h=(i-t)/d,u=h*h,f=u*h,g=e*l,y=g-l,m=-2*f+3*u,p=f-u,E=1-m,w=p-u+h;for(let v=0;v!==o;v++){const b=a[y+v+o],S=a[y+v+c]*d,A=a[g+v+o],_=a[g+v]*d;r[v]=E*b+w*S+m*A+p*_}return r}}const UE=new En;class FE extends hm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return UE.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vf={9728:Ut,9729:Ft,9984:bp,9985:co,9986:Dr,9987:ui},yf={33071:Kn,33648:To,10497:er},Qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},OE={CUBICSPLINE:void 0,LINEAR:Qr,STEP:Jr},jc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),n.DefaultMaterial}function $i(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function qn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kE(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(i){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function zE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VE(n){let e;const t=n.extensions&&n.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+el(t.attributes):e=n.indices+":"+el(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+el(n.targets[i]);return e}function el(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ud(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const GE=new Oe;class WE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Yx(this.options.manager):this.textureLoader=new ev(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return $i(r,o,s),qn(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Gr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Qc[s.type],o=qs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Xt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Qc[s.type],l=qs[s.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(f&&f!==h){const p=Math.floor(u/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let w=t.cache.get(E);w||(y=new l(o,p*f,s.count*f/d),w=new Op(y,f/d),t.cache.add(E,w)),m=new ta(w,c,u%f/d,g)}else o===null?y=new l(s.count*c):y=new l(o,u,s.count*c),m=new Xt(y,c,g);if(s.sparse!==void 0){const p=Qc.SCALAR,E=qs[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new E(a[1],w,s.sparse.count*p),S=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=b.length;A<_;A++){const T=b[A];if(m.setX(T,S[A*c]),c>=2&&m.setY(T,S[A*c+1]),c>=3&&m.setZ(T,S[A*c+2]),c>=4&&m.setW(T,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=vf[u.magFilter]||Ft,d.minFilter=vf[u.minFilter]||ui,d.wrapS=yf[u.wrapS]||er,d.wrapT=yf[u.wrapT]||er,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Ut&&d.minFilter!==Ft,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Ot(y);m.needsUpdate=!0,u(m)}),t.load(Gr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),qn(h,a),h.userData.mimeType=a.mimeType||HE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new ru,Un.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Qo,Un.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return ht}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){const h=s[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new D(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],pn),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Gt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nt);const d=r.alphaMode||jc.OPAQUE;if(d===jc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===jc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==an){const h=r.emissiveFactor;o.emissive=new D().setRGB(h[0],h[1],h[2],pn)}return r.emissiveTexture!==void 0&&a!==an&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&$i(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Mf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=VE(l),h=s[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Mf(new _t,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?BE(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const y=d[f],m=a[f];let p;const E=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new sx(y,E):new Ue(y,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=gf(p.geometry,Ip):m.mode===xn.TRIANGLE_FAN&&(p.geometry=gf(p.geometry,nd));else if(m.mode===xn.LINES)p=new Hp(y,E);else if(m.mode===xn.LINE_STRIP)p=new jo(y,E);else if(m.mode===xn.LINE_LOOP)p=new dx(y,E);else if(m.mode===xn.POINTS)p=new Gp(y,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qn(p,r),m.extensions&&$i(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&$i(s,h[0],r),h[0];const u=new ft;r.extensions&&$i(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new rn(Lp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new la(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),qn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new Oe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new iu(o,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){const f=s.channels[h],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(g),d.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let w=0,v=u.length;w<v;w++){const b=u[w],S=f[w],A=g[w],_=y[w],T=m[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const I=i._createAnimationTracks(b,S,A,_,T);if(I)for(let P=0;P<I.length;P++)p.push(I[P])}const E=new No(r,void 0,p);return qn(E,s),E})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(i.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,GE)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){const f=d.userData.pivot,g=h[0];d.pivot=new C().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new zp:l.length>1?d=new ft:l.length===1?d=l[0]:d=new pt,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),qn(d,r),r.extensions&&$i(i,d,r),r.matrix!==void 0){const h=new Oe;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(d);s.associations.set(d,{...h})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ft;i.name&&(r.name=s.createUniqueName(i.name)),qn(r,i),i.extensions&&$i(t,r,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++){const u=c[d];u.parent!==null?r.add(cm(u)):r.add(u)}const l=d=>{const h=new Map;for(const[u,f]of s.associations)(u instanceof Un||u instanceof Ot)&&h.set(u,f);return d.traverse(u=>{const f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ii[r.path]===Ii.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let d;switch(Ii[r.path]){case Ii.weights:d=na;break;case Ii.rotation:d=ia;break;case Ii.translation:case Ii.scale:d=Do;break;default:switch(i.itemSize){case 1:d=na;break;case 2:case 3:default:d=Do;break}break}const h=s.interpolation!==void 0?OE[s.interpolation]:Qr,u=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){const y=new d(c[f]+"."+Ii[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ud(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ia?FE:hm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XE(n,e,t){const i=e.attributes,s=new wn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const d=ud(qs[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const y=ud(qs[u.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new ti;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Mf(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=dd[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return qe.workingColorSpace!==pn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),qn(n,e),XE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kE(n,e.targets,t):n})}const qE={mage:un("models/Mage.glb"),knight:un("models/Knight.glb"),goblin:un("models/Barbarian.glb"),ranger:un("models/Rogue_Hooded.glb"),skel_mage:un("models/Skeleton_Mage.glb"),skel_minion:un("models/Skeleton_Minion.glb"),skel_rogue:un("models/Skeleton_Rogue.glb"),skel_warrior:un("models/Skeleton_Warrior.glb")},$E={canopy_a:un("models/props/tree_single_A.gltf"),canopy_b:un("models/props/tree_single_B.gltf"),rock:un("models/props/rock_single_A.gltf")},Sf={default:[/spellcast.*shoot/i,/spellcast/i,/cast/i,/attack/i,/melee/i],goblin:[/^throw$/i,/throw/i,/melee.*attack/i,/attack/i],ranger:[/2h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],knight:[/1h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i]},Ur=new Map,Ns=new Map;function tl(n,e,t){var i;for(const s of e){const r=n.find(a=>s.test(a.name));if(r)return r.name}return((i=n[0])==null?void 0:i.name)??t}function bf(n,e){for(const t of e){const i=n.find(s=>t.test(s.name));if(i)return i.name}return null}async function YE(){const n=new dm;await Promise.all(Object.entries(qE).map(async([e,t])=>{const i=await n.loadAsync(t),s=i.scene;s.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.frustumCulled=!1)});const r=new wn().setFromObject(s),a=Math.max(.001,r.max.y-r.min.y),o=i.animations;Ur.set(e,{scene:s,clips:o,idle:tl(o,[/^idle$/i,/idle/i],"Idle"),walk:tl(o,[/^walking_a$/i,/walking/i,/walk/i,/running/i],"Walking_A"),attack:tl(o,Sf[e]??Sf.default,"Attack"),death:bf(o,[/^death_a$/i,/death/i]),cheer:bf(o,[/cheer/i]),unitScale:1/a}),console.log(`[3d] ${e}: ${o.length} clips (idle=${Ur.get(e).idle}, walk=${Ur.get(e).walk}, attack=${Ur.get(e).attack})`)})),await Promise.all(Object.entries($E).map(async([e,t])=>{try{const i=await n.loadAsync(t);i.scene.traverse(r=>{r.isMesh&&(r.castShadow=!0)});const s=new wn().setFromObject(i.scene);Ns.set(e,{scene:i.scene,rawHeight:Math.max(.001,s.max.y-s.min.y)})}catch(i){console.warn(`attachment prop failed to load: ${e}`,i)}})),Ns.set("bow",{scene:JE(),rawHeight:.9}),Ns.set("crossbow",{scene:QE(),rawHeight:.5}),Ns.set("vehicle_wagon",{scene:KE(),rawHeight:1}),Ns.set("vehicle_tower",{scene:ZE(),rawHeight:2.3})}const Wr=()=>new ht({color:"#4a3826",roughness:.85}),fm=()=>new ht({color:"#6b4f30",roughness:.8}),pm=()=>new ht({color:"#3a3f47",roughness:.5,metalness:.6});function mm(n){const e=new Ue(new On(n,n,.08,10),pm());return e.rotation.z=Math.PI/2,e.name="wheel",e.castShadow=!0,e}function KE(){const n=new ft,e=new Ue(new fn(.55,.34,.95),fm());e.position.y=.42,e.castShadow=!0;const t=new Ue(new fn(.62,.08,1.02),Wr());t.position.y=.6;const i=new Ue(new On(.3,.3,.6,10,1,!1,0,Math.PI),new ht({color:"#5e5346",roughness:.95,side:Nt}));i.rotation.z=Math.PI/2,i.rotation.y=Math.PI/2,i.position.set(0,.64,-.15);const s=new Ue(new On(.02,.02,.5,5),Wr());s.position.set(0,.95,.4);const r=new Ue(new bn(.24,.14),new ht({color:"#8a2f2f",side:Nt,roughness:.9}));r.position.set(.12,1.1,.4),n.add(e,t,i,s,r);for(const[a,o]of[[-.32,.3],[.32,.3],[-.32,-.32],[.32,-.32]]){const c=mm(.19);c.position.set(a,.19,o),n.add(c)}return n}function ZE(){const n=new ft,e=new Ue(new fn(.8,.24,1),Wr());e.position.y=.34,e.castShadow=!0;const t=new Ue(new fn(.62,1.5,.7),fm());t.position.y=1.2,t.castShadow=!0;const i=new Ue(new fn(.66,.07,.74),pm());i.position.y=1;const s=i.clone();s.position.y=1.6,n.add(e,t,i,s);for(const[o,c]of[[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]]){const l=new Ue(new fn(.14,.18,.14),Wr());l.position.set(o,2.03,c),n.add(l)}const r=new Ue(new On(.02,.02,.5,5),Wr());r.position.y=2.3;const a=new Ue(new bn(.3,.18),new ht({color:"#8a2f2f",side:Nt,roughness:.9}));a.position.set(.15,2.42,0),n.add(r,a);for(const[o,c]of[[-.44,.34],[.44,.34],[-.44,-.34],[.44,-.34]]){const l=mm(.22);l.position.set(o,.22,c),n.add(l)}return n}function JE(){const n=new ft,e=new ht({color:"#6b4a2f",roughness:.75}),t=new ec(new C(0,-.45,0),new C(.2,0,0),new C(0,.45,0)),i=new Ue(new nc(t,16,.028,6),e);i.castShadow=!0;const s=new Ue(new On(.007,.007,.9,4),new ht({color:"#e8e2d5",roughness:.4}));return n.add(i,s),n}function QE(){const n=new ft,e=new ht({color:"#5a4630",roughness:.75}),t=new ht({color:"#9aa6b5",roughness:.4,metalness:.5}),i=new Ue(new fn(.42,.05,.06),e);i.castShadow=!0;const s=new ec(new C(.18,0,-.25),new C(.3,0,0),new C(.18,0,.25)),r=new Ue(new nc(s,12,.02,6),t),a=new Ue(new On(.006,.006,.5,4),new ht({color:"#e8e2d5",roughness:.4}));return a.rotation.x=Math.PI/2,a.position.x=.18,n.add(i,r,a),n}function jE(n){const e=Ur.get(n);if(!e)throw new Error(`asset not loaded: ${n}`);return e}function mo(n){return Ns.get(n)}const Ef={fire:{model:"mage",height:1.45,tint:new D("#ff6a1e"),tintStrength:.75,mage:{hat:{sx:.78,sy:1.55,sz:.78,rotX:-.18},hatEmissive:new D("#ff5500")}},ice:{model:"mage",height:1.45,tint:new D("#5bc8f5"),tintStrength:.55,mage:{hat:{sx:1.4,sy:.62,sz:1.4},spellbook:!0,hatEmissive:new D("#7fd8ff")}},lightning:{model:"mage",height:1.45,tint:new D("#b06bff"),tintStrength:.55,mage:{hat:{sx:.92,sy:1.35,sz:.92,rotZ:.34},hatEmissive:new D("#d9a8ff")}},water:{model:"mage",height:1.45,tint:new D("#26c2e8"),tintStrength:.55,watery:!0,mage:{hat:{sx:1.15,sy:.85,sz:1.15,rotX:.35},hatEmissive:new D("#7fe8ff")}},wind:{model:"mage",height:1.45,tint:new D("#bcd9ce"),tintStrength:.5,mage:{hat:{sx:1.22,sy:1,sz:1.22},hatEmissive:new D("#eafff5")}},generic_wizard:{model:"mage",height:1.45,tint:new D("#8a8494"),tintStrength:.5},generic_goblin:{model:"goblin",height:1.15,tint:new D("#8a8494"),tintStrength:.55,goblin:{ears:"goblin",eyes:!0,headScale:1.14,greenFace:new D("#6f8f68")}},slingshot:{model:"goblin",height:1.15,tint:new D("#55a83f"),tintStrength:.7,goblin:{hatEmissive:new D("#c9e08a"),ears:"goblin",eyes:!0,headScale:1.14,greenFace:new D("#4f9e3f")}},dynamite:{model:"goblin",height:1.15,tint:new D("#6ba03c"),tintStrength:.7,emissive:new D("#ff6a1e"),goblin:{hatEmissive:new D("#ffb163"),ears:"goblin",eyes:!0,headScale:1.14,greenFace:new D("#579b38")}},gong:{model:"goblin",height:1.15,tint:new D("#4c9e59"),tintStrength:.7,goblin:{showShield:!0,hatEmissive:new D("#f4d98a"),ears:"goblin",eyes:!0,headScale:1.14,greenFace:new D("#4a9a4e")}},generic_archer:{model:"ranger",height:1.4,tint:new D("#8a8494"),tintStrength:.5,hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.55}},longbow:{model:"ranger",height:1.5,tint:new D("#4e8f4e"),tintStrength:.55,emissive:new D("#3fae5a"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.62}},ballesta:{model:"knight",height:1.35,tint:new D("#5b7fc9"),tintStrength:.5,hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.5}},bolas:{model:"goblin",height:1.3,tint:new D("#4a5548"),tintStrength:.65,goblin:{hatEmissive:new D("#c8d6b0"),ears:"orc",headScale:1.08,greenFace:new D("#5c6b4a")}},generic_tree:{model:"goblin",height:1.1,tint:new D("#6d6357"),tintStrength:.8,ent:{canopy:"canopy_a",canopyScale:.75,canopyTint:new D("#7a8a6a")}},rootgrasp:{model:"goblin",height:1.7,tint:new D("#5e4630"),tintStrength:.85,ent:{canopy:"canopy_a",canopyTint:new D("#3f6b33")}},boulder:{model:"goblin",height:1.95,tint:new D("#6b543c"),tintStrength:.85,ent:{canopy:"canopy_a",canopyScale:1,canopyTint:new D("#556b3a"),rock:!0}},thornspitter:{model:"goblin",height:1.35,tint:new D("#55663d"),tintStrength:.8,ent:{canopy:"canopy_b",canopyScale:.8,canopyTint:new D("#6fcf5f")}},phoenix:{model:"mage",height:1.7,tint:new D("#ff8c42"),tintStrength:.85,emissive:new D("#ff5500"),mage:{hat:{sx:.7,sy:1.9,sz:.7,rotX:-.3},hatEmissive:new D("#ffb163")}},wintercourt:{model:"mage",height:1.7,tint:new D("#a8e6ff"),tintStrength:.7,emissive:new D("#7fd8ff"),mage:{hat:{sx:1.6,sy:.7,sz:1.6},spellbook:!0,hatEmissive:new D("#ffffff")}},tempest:{model:"mage",height:1.7,tint:new D("#d9a8ff"),tintStrength:.7,emissive:new D("#b06bff"),mage:{hat:{sx:.95,sy:1.7,sz:.95,rotZ:.45},hatEmissive:new D("#f0dcff")}},tidelord:{model:"mage",height:1.7,tint:new D("#26c2e8"),tintStrength:.6,watery:!0,mage:{hat:{sx:1.3,sy:1,sz:1.3,rotX:.4},hatEmissive:new D("#bff4ff")}},zephyr:{model:"mage",height:1.7,tint:new D("#dff2ea"),tintStrength:.6,emissive:new D("#bcd9ce"),mage:{hat:{sx:1.4,sy:1.15,sz:1.4},hatEmissive:new D("#ffffff")}},warlord:{model:"goblin",height:1.45,tint:new D("#55a83f"),tintStrength:.75,emissive:new D("#c9e08a"),goblin:{hatEmissive:new D("#f4ffb0"),ears:"goblin",eyes:!0,headScale:1.16,greenFace:new D("#4f9e3f")}},sapperking:{model:"goblin",height:1.45,tint:new D("#6ba03c"),tintStrength:.75,emissive:new D("#ff6a1e"),goblin:{hatEmissive:new D("#ffd75e"),ears:"goblin",eyes:!0,headScale:1.16,greenFace:new D("#579b38")}},doomgong:{model:"goblin",height:1.45,tint:new D("#4c9e59"),tintStrength:.75,emissive:new D("#f4d98a"),goblin:{showShield:!0,hatEmissive:new D("#ffd75e"),ears:"goblin",eyes:!0,headScale:1.16,greenFace:new D("#4a9a4e")}},stormpiercer:{model:"ranger",height:1.75,tint:new D("#4e8f4e"),tintStrength:.65,emissive:new D("#7dff9b"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.7}},ironstorm:{model:"knight",height:1.55,tint:new D("#5b7fc9"),tintStrength:.65,emissive:new D("#8fb4ff"),hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.58}},chainwarden:{model:"goblin",height:1.55,tint:new D("#4a5548"),tintStrength:.75,emissive:new D("#c8d6b0"),goblin:{hatEmissive:new D("#e8f2d8"),ears:"orc",headScale:1.1,greenFace:new D("#5c6b4a")}},elderroot:{model:"goblin",height:2.15,tint:new D("#4a3624"),tintStrength:.9,emissive:new D("#3f6b33"),ent:{canopy:"canopy_a",canopyScale:1.1,canopyTint:new D("#2f5427")}},mountain:{model:"goblin",height:2.4,tint:new D("#5e4c38"),tintStrength:.9,emissive:new D("#8d7a5e"),ent:{canopy:"canopy_a",canopyScale:1.15,canopyTint:new D("#4c6b38"),rock:!0}},bramblehydra:{model:"goblin",height:1.7,tint:new D("#3f6b33"),tintStrength:.85,emissive:new D("#6fcf5f"),ent:{canopy:"canopy_b",canopyScale:1.05,canopyTint:new D("#8fff6f")}}},Tf={grunt:{model:"skel_minion",height:1.05,tint:new D("#7da35c"),tintStrength:.35},runner:{model:"skel_rogue",height:1.1,tint:new D("#d9a648"),tintStrength:.35},knight:{model:"knight",height:1.25,tint:new D("#8d99ae"),tintStrength:.25},shade:{model:"skel_mage",height:1.15,tint:new D("#b35442"),tintStrength:.45,emissive:new D("#ff5522")},golem:{model:"skel_warrior",height:2.6,tint:new D("#3d2f5e"),tintStrength:.6},golemling:{model:"skel_warrior",height:1.45,tint:new D("#7a68a6"),tintStrength:.5},orcraider:{model:"goblin",height:1.15,tint:new D("#5e7a3a"),tintStrength:.6,goblin:{ears:"orc",headScale:1.08,greenFace:new D("#5e7a3a"),keepWeapons:!0}},orcbrute:{model:"goblin",height:1.5,tint:new D("#4a5d33"),tintStrength:.7,goblin:{ears:"orc",headScale:1.1,greenFace:new D("#556b3a"),keepWeapons:!0}},troll:{model:"goblin",height:2.3,tint:new D("#6a7d5e"),tintStrength:.75,emissive:new D("#38553f"),goblin:{ears:"orc",headScale:1.12,greenFace:new D("#6a7d5e"),keepWeapons:!0}},orcshaman:{model:"skel_mage",height:1.2,tint:new D("#3f8f5c"),tintStrength:.6,emissive:new D("#3fae5a")},wardrummer:{model:"goblin",height:1.35,tint:new D("#8a5c3a"),tintStrength:.6,goblin:{showShield:!0,ears:"orc",headScale:1.08,greenFace:new D("#6b6b42")}},wraith:{model:"skel_rogue",height:1.15,tint:new D("#9db8c9"),tintStrength:.5,emissive:new D("#bcd9ff"),ghostly:!0},warwagon:{model:"goblin",height:1,vehicle:"vehicle_wagon",tint:new D("#7a5c38"),tintStrength:.2},siegetower:{model:"goblin",height:2.3,vehicle:"vehicle_tower",tint:new D("#6b4f30"),tintStrength:.2},gargoyle:{model:"skel_minion",height:1.05,tint:new D("#8d99ae"),tintStrength:.6,wings:!0},drake:{model:"skel_rogue",height:1.3,tint:new D("#c25a2e"),tintStrength:.65,emissive:new D("#ff5522"),wings:!0},hexer:{model:"skel_mage",height:1.25,tint:new D("#7a4a9e"),tintStrength:.65,emissive:new D("#b06bff")},banshee:{model:"skel_rogue",height:1.15,tint:new D("#cfd8e8"),tintStrength:.6,emissive:new D("#e8f2ff"),ghostly:!0},necromancer:{model:"skel_mage",height:1.35,tint:new D("#3a2f4e"),tintStrength:.7,emissive:new D("#7a4a9e")},risen:{model:"skel_minion",height:.95,tint:new D("#9a92b5"),tintStrength:.5},thief:{model:"skel_rogue",height:1.05,tint:new D("#d9c148"),tintStrength:.55},shieldbearer:{model:"knight",height:1.35,tint:new D("#5b7fc9"),tintStrength:.5,emissive:new D("#8fb4ff")},slime_big:{model:"goblin",height:.85,tint:new D("#5fbf4a"),blob:!0},slime_mid:{model:"goblin",height:.6,tint:new D("#74d15e"),blob:!0},slime_small:{model:"goblin",height:.42,tint:new D("#8ce276"),blob:!0},warlord:{model:"skel_warrior",height:3,tint:new D("#6e7b8a"),tintStrength:.55,emissive:new D("#8fa2b8")},pyretitan:{model:"skel_mage",height:3.1,tint:new D("#c25a2e"),tintStrength:.6,emissive:new D("#ff5522")},colossus:{model:"skel_warrior",height:3.6,tint:new D("#3d2f5e"),tintStrength:.7,emissive:new D("#b14aed")}},Uo=1/$r;function Fo(n){return Math.atan2(Math.cos(n),Math.sin(n))}const e1=1.05,pu=.28,Xa=new Map,br=new Map,$s=[];let sa,gm=new C;function _m(n,e){sa=n,gm=e}function t1(n){const e=new ft,t=new ft;e.add(t);const i=new ht({color:n.tint??new D("#5fbf4a"),roughness:.25,transparent:!0,opacity:.92}),s=new Ue(new ki(n.height/2,14,12),i);s.position.y=n.height/2,s.castShadow=!0,t.add(s);const r=new ht({color:"#1a2415"});for(const a of[-1,1]){const o=new Ue(new ki(n.height*.06,6,6),r);o.position.set(a*n.height*.14,n.height*.62,n.height*.4),t.add(o)}return{root:e,inner:t,mats:[i],origColors:[i.color.clone()],baseEmissive:new D(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,blob:!0,height:n.height}}function n1(n){const e=mo(n.vehicle),t=new ft,i=new ft;t.add(i);const s=[],r=[];if(e){const a=e.scene.clone(!0);a.scale.setScalar(n.height/e.rawHeight),i.add(a),a.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.clone();n.tint&&l.color.lerp(n.tint,n.tintStrength??.25),c.material=l,s.push(l),/wheel/i.test(c.name)&&r.push(c)})}return{root:t,inner:i,mats:s,origColors:s.map(a=>a.color.clone()),baseEmissive:new D(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,wheels:r,height:n.height}}function xm(n){var w;if(n.vehicle)return n1(n);if(n.blob)return t1(n);const e=jE(n.model),t=cm(e.scene),i=e.unitScale*n.height;t.scale.setScalar(i);const s=v=>{const b=new Set;return v==null||v.traverse(S=>{S.isMesh&&b.add(S)}),b};let r=new Set,a=new Set;if(n.mage){const v=t.getObjectByName("Mage_Hat");if(v){const A=n.mage.hat;v.scale.set(v.scale.x*A.sx,v.scale.y*A.sy,v.scale.z*A.sz),A.rotZ&&(v.rotation.z+=A.rotZ),A.rotX&&(v.rotation.x+=A.rotX),a=s(v)}const b=t.getObjectByName("Spellbook"),S=t.getObjectByName("Spellbook_open");b&&(b.visible=!1),S&&(S.visible=!!n.mage.spellbook),r=s(t.getObjectByName("Mage_Head"))}if(n.goblin){if(!n.goblin.keepWeapons)for(const A of["1H_Axe","2H_Axe","1H_Axe_Offhand","Mug"]){const _=t.getObjectByName(A);_&&(_.visible=!1)}const v=t.getObjectByName("Barbarian_Round_Shield");v&&(v.visible=!!n.goblin.showShield);const b=t.getObjectByName("Barbarian_Hat");b&&(a=s(b));const S=t.getObjectByName("Barbarian_Head");if(r=s(S),S){n.goblin.headScale&&S.scale.multiplyScalar(n.goblin.headScale),t.updateMatrixWorld(!0);const A=new C;S.getWorldScale(A);const _=1/Math.max(1e-6,A.y);if(n.goblin.ears){const I=(n.goblin.ears==="orc"?.14:.2)*n.height,P=new ht({color:(n.goblin.greenFace??n.tint??new D("#4f9e3f")).clone(),roughness:.85});for(const N of[-1,1]){const G=new Ue(new Xs(.045*n.height*_,I*_,6),P);G.position.set(N*.095*n.height*_,-.04*n.height*_,0),G.rotation.z=-N*1.25,G.castShadow=!0,S.add(G)}}if(n.goblin.eyes){const T=new ht({color:"#201a10",emissive:new D("#ffd75e"),emissiveIntensity:1.1});for(const I of[-1,1]){const P=new Ue(new ki(.026*n.height*_,8,6),T);P.position.set(I*.038*n.height*_,-.045*n.height*_,.085*n.height*_),S.add(P)}}}}if(n.hideRe&&t.traverse(v=>{n.hideRe.test(v.name)&&(v.visible=!1)}),n.held){const v=mo(n.held.key),b=t.getObjectByName(`handslot${n.held.hand}`)??t.getObjectByName(`hand${n.held.hand}`);if(v&&b){t.updateMatrixWorld(!0);const S=v.scene.clone(!0),A=new C;b.getWorldScale(A);const _=1/Math.max(1e-6,A.y),T=n.held.scale*n.height;S.scale.setScalar(T*_/v.rawHeight),S.rotation.set(n.held.rotX??0,n.held.rotY??Math.PI/2,n.held.rotZ??0),b.add(S)}}let o=new Set,c=new Set;if(n.ent){for(const S of["1H_Axe","2H_Axe","1H_Axe_Offhand","Mug","Barbarian_Round_Shield","Barbarian_Hat"]){const A=t.getObjectByName(S);A&&(A.visible=!1)}t.updateMatrixWorld(!0);const v=t.getObjectByName("Barbarian_Head")??t,b=mo(n.ent.canopy);if(b){const S=b.scene.clone(!0),A=new C;v.getWorldScale(A);const _=1/Math.max(1e-6,A.y),T=(n.ent.canopyScale??.9)*n.height;S.scale.setScalar(T*_/b.rawHeight),S.position.y=-.35*n.height*_,v.add(S),o=s(S)}if(n.ent.rock){const S=mo("rock"),A=t.getObjectByName("handslotr")??t.getObjectByName("handslot.r")??t.getObjectByName("handr")??((w=t.getObjectByName("1H_Axe"))==null?void 0:w.parent);if(S&&A){const _=S.scene.clone(!0),T=new C;A.getWorldScale(T);const I=1/Math.max(1e-6,T.y),P=.28*n.height;_.scale.setScalar(P*I/S.rawHeight),A.add(_),c=s(_)}}}const l=[];t.traverse(v=>{var T,I,P,N,G;const b=v;if(!b.isMesh)return;const S=b.material;let A;if(n.watery?A=new Bn({map:S.map??null,color:((T=S.color)==null?void 0:T.clone())??new D("#ffffff"),transparent:!0,opacity:.72,roughness:.08,metalness:.1,clearcoat:.6,side:Nt}):A=S.clone(),o.has(b))(I=n.ent)!=null&&I.canopyTint&&A.color.lerp(n.ent.canopyTint,.5);else if(!c.has(b)){if((P=n.goblin)!=null&&P.greenFace&&r.has(b))A.color.lerp(n.goblin.greenFace,.8);else if(n.tint){let X=n.tintStrength??.4;(n.mage||n.goblin)&&(r.has(b)?X=.08:a.has(b)&&(X=Math.min(1,X+.25))),A.color.lerp(n.tint,X)}}const _=((N=n.mage)==null?void 0:N.hatEmissive)??((G=n.goblin)==null?void 0:G.hatEmissive);_&&a.has(b)?(A.emissive.copy(_),A.emissiveIntensity=.18):n.emissive&&(A.emissive.copy(n.emissive),A.emissiveIntensity=.35),n.ghostly&&(A.transparent=!0),b.material=A,l.push(A)});let d;if(n.wings){const b=1/(e.unitScale*n.height),S=new ht({color:"#2e3238",roughness:.7,side:Nt,transparent:!0,opacity:.92});d=[];for(const A of[-1,1]){const _=new Ue(new bn(.55*n.height*b,.26*n.height*b),S);_.geometry.translate(A*.55*n.height*b/2,0,0),_.position.set(A*.06*n.height*b,.6*n.height*b,-.08*n.height*b),_.rotation.x=-.4,t.add(_),d.push(_)}}const h=new mv(t),u=v=>{const b=No.findByName(e.clips,v);return h.clipAction(b)},f=u(e.idle);n.ent&&(f.timeScale=.55);const g=u(e.walk),y=u(e.attack);y.setLoop(td,1);const m=e.death?u(e.death):null;m&&(m.setLoop(td,1),m.clampWhenFinished=!0);const p=e.cheer?u(e.cheer):null,E=new ft;return E.add(t),{root:E,inner:t,mixer:h,idle:f,walk:g,attack:y,death:m,cheer:p,mats:l,origColors:l.map(v=>v.color.clone()),baseEmissive:n.emissive?n.emissive.clone():new D(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!!n.watery,prevRecoil:0,flapWings:d,height:n.height}}function i1(n){const e=(t,i)=>{const s=new Bp({color:t,depthTest:!1}),r=new tx(s);return r.center.set(0,.5),r.scale.set(.8,.09,1),r.position.set(-.4,n.height+.25,0),r.renderOrder=10+i,n.root.add(r),r};n.hpBar={bg:e("#3a0d12",0),fg:e("#58e05e",1)}}function s1(n,e){r1(n,e),a1(n,e),o1(e)}function r1(n,e){var i,s,r;const t=new Set;for(const a of n.enemies){t.add(a.id);let o=Xa.get(a.id);if(!o){const f=Tf[a.def.id]??Tf.grunt;o=xm(f),o.ghostly=f.ghostly,i1(o),(i=o.walk)==null||i.play(),o.yaw=Fo(a.angle),Xa.set(a.id,o),sa.add(o.root),o.root.scale.setScalar(.01)}const c=a.def.flying?1.05+Math.sin(performance.now()/380+a.id)*.12:0;o.root.position.set(a.x*Uo,c,a.y*Uo);const l=Fo(a.angle);if(o.yaw+=vm(o.yaw,l)*Math.min(1,e*10),o.root.rotation.y=o.yaw,o.flapWings){const f=Math.sin(performance.now()/90+a.id)*.55;o.flapWings[0].rotation.y=-.35-f,o.flapWings[1].rotation.y=.35+f}if(o.blob){const f=Math.abs(Math.sin(a.animT*6));o.inner.scale.set(1+.14*f,1-.18*f,1+.14*f)}const d=o.root.scale.x;d<1&&o.root.scale.setScalar(Math.min(1,d+e*5));let h=1;if(a.statuses.frozen?h=0:a.statuses.chill&&(h=Math.max(.25,1-a.statuses.chill.pct*(.6+.2*a.statuses.chill.stacks))),o.walk&&(o.walk.timeScale=a.def.speed/60*h),(s=o.mixer)==null||s.update(e),o.wheels&&o.wheels.length>0){for(const f of o.wheels)f.rotation.x=a.animT*a.def.speed*.09;o.inner.rotation.z=Math.sin(a.animT*5)*.02}if(o.ghostly){const f=a.phased?.22:.95;for(const g of o.mats)g.opacity+=(f-g.opacity)*Math.min(1,e*8)}if(o.hpBar){const f=Math.max(0,a.hp/a.maxHp);o.hpBar.fg.scale.x=.8*f;const g=f>.5?"#58e05e":f>.25?"#ffd75e":"#ff5e5e";o.hpBar.fg.material.color.set(g),o.hpBar.bg.visible=o.hpBar.fg.visible=f<1}for(const f of o.mats)a.hitFlash>0?(f.emissive.setRGB(1,1,1),f.emissiveIntensity=.7):a.statuses.burn?(f.emissive.set("#ff6a1e"),f.emissiveIntensity=.45+Math.sin(performance.now()/90)*.15):a.statuses.wet?(f.emissive.set("#2277ff"),f.emissiveIntensity=.3):a.statuses.chill?(f.emissive.set("#66ccff"),f.emissiveIntensity=.25):(f.emissive.copy(o.baseEmissive),f.emissiveIntensity=o.baseEmissive.getHex()===0?0:.35);const u=(a.armorHp??0)>0;if(u&&!o.armorShell){const f=new Ue(new ki(.62,12,10),new ht({color:"#9aa6b5",transparent:!0,opacity:.4,roughness:.35,metalness:.6}));f.scale.set(1,(o.height+.2)/1.24,1),f.position.y=(o.height+.2)/2,o.root.add(f),o.armorShell=f}else!u&&o.armorShell&&(o.root.remove(o.armorShell),Oo(o.armorShell),o.armorShell=void 0);if(o.armorShell){const f=Math.max(.15,(a.armorHp??0)/(a.def.armor??1));o.armorShell.material.opacity=.18+f*.3+Math.sin(performance.now()/300)*.04}if(a.statuses.frozen&&!o.iceCube){const f=new Ue(new fn(.7,o.height+.15,.7),new ht({color:"#9fdcff",transparent:!0,opacity:.45,roughness:.1}));f.position.y=(o.height+.15)/2,o.root.add(f),o.iceCube=f}else!a.statuses.frozen&&o.iceCube&&(o.root.remove(o.iceCube),Oo(o.iceCube),o.iceCube=void 0)}for(const[a,o]of Xa)if(!t.has(a)){Xa.delete(a);const c=o.root.position.distanceTo(gm)<1.2;o.death&&!c?((r=o.walk)==null||r.fadeOut(.08),o.death.reset().setEffectiveTimeScale(1.5).fadeIn(.05).play(),o.hpBar&&(o.hpBar.bg.visible=o.hpBar.fg.visible=!1),$s.push({view:o,t:e1,mode:"anim"})):$s.push({view:o,t:pu,mode:"shrink"})}}function a1(n,e){var i,s,r,a,o,c,l,d;const t=new Set;for(const h of n.wizards){t.add(h.id);let u=br.get(h.id);u&&u.defId!==h.def.id&&(sa.remove(u.root),u.root.traverse(m=>Oo(m)),br.delete(h.id),u=void 0),u||(u=xm(Ef[h.def.id]??Ef.generic_wizard),u.defId=h.def.id,(i=u.idle)==null||i.play(),u.yaw=Fo(h.aim),br.set(h.id,u),sa.add(u.root),u.root.position.set(h.x*Uo,0,h.y*Uo),u.root.scale.setScalar(.01));const f=u.root.scale.x;f<1&&u.root.scale.setScalar(Math.min(1,f+e*4));const g=Fo(h.aim);u.yaw+=vm(u.yaw,g)*Math.min(1,e*12),u.root.rotation.y=u.yaw;const y=!!h.becalmed||(h.silencedT??0)>0;if(y!==u.becalmed&&(u.becalmed=y,u.mats.forEach((m,p)=>{m.color.copy(u.origColors[p]),y&&m.color.lerp(new D("#777777"),.6)}),u.idle&&(u.idle.timeScale=y?.35:1)),n.phase==="won"&&u.cheer&&!u.cheering?(u.cheering=!0,(s=u.idle)==null||s.fadeOut(.2),(r=u.attack)==null||r.fadeOut(.2),u.cheer.reset().fadeIn(.2).play()):n.phase!=="won"&&u.cheering&&(u.cheering=!1,(a=u.cheer)==null||a.fadeOut(.2),(o=u.idle)==null||o.reset().fadeIn(.2).play()),!u.cheering&&u.attack&&h.recoil>u.prevRecoil+.01){const m=u.attack.getClip().duration;u.attack.reset(),u.attack.timeScale=m/Math.min(Math.max(h.stats.rate*.85,.35),1.1),u.attack.play(),(c=u.idle)==null||c.fadeOut(.08),u.casting=!0}if(u.casting&&u.attack&&!u.attack.isRunning()&&(u.casting=!1,(l=u.idle)==null||l.reset().fadeIn(.15).play()),u.prevRecoil=h.recoil,(d=u.mixer)==null||d.update(e),u.watery){const m=.72+Math.sin(performance.now()/380+h.id)*.06;for(const p of u.mats)p.opacity=m}}for(const[h,u]of br)t.has(h)||(br.delete(h),$s.push({view:u,t:pu,mode:"shrink"}))}function o1(n){var e;for(let t=$s.length-1;t>=0;t--){const i=$s[t];if(i.t-=n,i.mode==="anim"){if((e=i.view.mixer)==null||e.update(n),i.t<.3){const s=Math.max(.01,i.t/.3);i.view.root.position.y=-(1-s)*.5}}else{const s=Math.max(.01,i.t/pu);i.view.root.scale.setScalar(s),i.view.root.position.y=-(1-s)*.4}i.t<=0&&(sa.remove(i.view.root),i.view.root.traverse(s=>Oo(s)),$s.splice(t,1))}}function vm(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Oo(n){var t;if(!n.isMesh)return;(t=n.geometry)==null||t.dispose();const e=n.material;Array.isArray(e)?e.forEach(i=>i.dispose()):e==null||e.dispose()}const _n=1/$r,qa=.45;let Fr,ym,Bo;const hd=800;let go,ko,zo;const c1=["orb","rock","stick","arrow","bolt","needle"],wf={orb:[],rock:[],stick:[],arrow:[],bolt:[],needle:[]};let Mm;const l1={orb:null,rock:"#8d8578",stick:"#c8452e",arrow:"#e6d7b0",bolt:"#cdd7e0",needle:"#7fce6a"};let $a=0,Vo,Ho;const Ya=new Map;let _o;function d1(n,e,t){Fr=n,ym=e,Bo=t;const i=new _t;ko=new Xt(new Float32Array(hd*3),3),zo=new Xt(new Float32Array(hd*3),3),i.setAttribute("position",ko),i.setAttribute("color",zo);const s=new ru({size:.15,vertexColors:!0,transparent:!0,opacity:.95,blending:Eo,depthWrite:!1});go=new Gp(i,s),go.frustumCulled=!1,Fr.add(go),Mm={orb:new ki(.11,10,8),rock:new cu(.12),stick:new On(.05,.05,.28,8).rotateZ(Math.PI/2),arrow:new Xs(.04,.44,6).rotateZ(-Math.PI/2),bolt:new Xs(.06,.34,6).rotateZ(-Math.PI/2),needle:new Xs(.022,.22,5).rotateZ(-Math.PI/2)},Vo=new ft,Fr.add(Vo),Ho=new ft,Fr.add(Ho),_o=document.createElement("div"),_o.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;font-family:Segoe UI,sans-serif;",Bo.appendChild(_o)}const Ka=new D;function u1(n){let e=0;for(const a of te.particles){if(e>=hd)break;ko.setXYZ(e,a.x*_n,qa+(1-a.life/a.maxLife)*.3,a.y*_n),Ka.set(a.color),zo.setXYZ(e,Ka.r,Ka.g,Ka.b),e++}ko.needsUpdate=!0,zo.needsUpdate=!0,go.geometry.setDrawRange(0,e),$a+=.22;const t={orb:0,rock:0,stick:0,arrow:0,bolt:0,needle:0};for(const a of n.projectiles){const o=a.visual??"orb",c=wf[o];let l=c[t[o]];l||(l=new Ue(Mm[o],new an({color:"#ffffff"})),Fr.add(l),c.push(l)),t[o]++,l.visible=!0;let d=0;if((o==="rock"||o==="stick")&&a.sx!==void 0&&a.sy!==void 0){const f=Math.hypot(a.tx-a.sx,a.ty-a.sy)||1,g=Math.hypot(a.x-a.sx,a.y-a.sy),y=Math.min(1,g/f),m=Math.min(.95,.35+f*_n*.05);d=Math.sin(y*Math.PI)*m}l.position.set(a.x*_n,qa+d,a.y*_n),l.material.color.set(l1[o]??Tn[a.element].color);const u=Math.atan2(a.ty-a.y,a.tx-a.x);l.rotation.set(0,-u,0),o==="orb"?l.scale.set(1.8,1,1):o==="rock"?(l.scale.setScalar(1),l.rotation.x=$a,l.rotation.z=$a*.7):o==="stick"?(l.scale.setScalar(1),l.rotation.z=$a*1.6,Math.random()<.5&&te.burst(a.x,a.y,"#ffd75e",1,20,1.5,.2)):l.scale.setScalar(1)}for(const a of c1){const o=wf[a];for(let c=t[a];c<o.length;c++)o[c].visible=!1}Vo.clear();for(const a of te.arcs){const o=a.life/a.maxLife,c=a.pts.map(h=>new C(h.x*_n,qa+.15,h.y*_n)),l=new _t().setFromPoints(c),d=new Qo({color:a.color,transparent:!0,opacity:o,blending:Eo,depthWrite:!1});Vo.add(new jo(l,d))}Ho.clear();for(const a of te.rings){const o=1-a.life/a.maxLife,c=Math.max(.02,a.maxR*o*_n),l=new tc(c*.82,c,28),d=new an({color:a.color,transparent:!0,opacity:(1-o)*.7,side:Nt,depthWrite:!1}),h=new Ue(l,d);h.rotation.x=-Math.PI/2,h.position.set(a.x*_n,.02,a.y*_n),Ho.add(h)}const i=new Set,s={w:Bo.clientWidth,h:Bo.clientHeight},r=new C;for(const a of te.floaters){i.add(a);let o=Ya.get(a);o||(o=document.createElement("div"),o.textContent=a.text,o.style.cssText=`position:absolute;transform:translate(-50%,-50%);font-weight:700;font-size:${a.size}px;color:${a.color};text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;`,_o.appendChild(o),Ya.set(a,o)),r.set(a.x*_n,qa+.3,a.y*_n).project(ym),o.style.left=`${(r.x+1)/2*s.w}px`,o.style.top=`${(1-r.y)/2*s.h-(1-a.life/a.maxLife)*26}px`,o.style.opacity=String(Math.min(1,a.life/a.maxLife*2))}for(const[a,o]of Ya)i.has(a)||(o.remove(),Ya.delete(a))}const St=1/$r,li=rs*St,Yi=Ks*St;let Pn,Ht,Ui,fd,Sm,xo,Za,pd=[],md=[],Go,sn,Xr,gd,fi,Ln,Qi,ns,nl="",Fi,ji,Or,vo,_d=0;const mu=li/2+.3,h1=mu/(rs/Ks),Af=Lp.degToRad(52),Rf=30,Cf=1,f1=3;let gi=1,cs=0,ls=0;function ra(){const n=new C(li/2+cs,0,Yi/2-.2+ls);Ui.position.set(n.x,Math.sin(Af)*Rf,n.z+Math.cos(Af)*Rf),Ui.lookAt(n),Ui.zoom=gi,Ui.updateProjectionMatrix()}function bm(){const n=mu*(1-1/gi),e=h1*(1-1/gi);cs=Math.max(-n,Math.min(n,cs)),ls=Math.max(-e,Math.min(e,ls))}function da(n,e,t){const i=e!==void 0&&t!==void 0?Wo(e,t):null,s=i?{x:i.x,y:i.y}:null;if(gi=Math.max(Cf,Math.min(f1,gi*n)),gi<=Cf+.001)cs=0,ls=0;else if(s&&e!==void 0&&t!==void 0){ra();const r=Wo(e,t);r&&(cs+=(s.x-r.x)*St,ls+=(s.y-r.y)*St)}bm(),ra()}function p1(n,e){const t=Pn.domElement,i=mu*2/(t.clientWidth||rs)/gi;cs-=n*i,ls-=e*i,bm(),ra()}function m1(){gi=1,cs=0,ls=0,ra()}function Em(){return gi}async function g1(n,e){Pn=new hE({canvas:n,antialias:!0,preserveDrawingBuffer:!0}),Pn.setSize(rs,Ks,!1),Pn.setPixelRatio(Math.min(2,window.devicePixelRatio)),Pn.shadowMap.enabled=!0,Pn.shadowMap.type=pp,Pn.toneMapping=Vd,Pn.toneMappingExposure=1.25,Ht=new Z_,Ht.background=new D("#1a2419");const t=rs/Ks,i=li/2+.3,s=i/t;Ui=new la(-i,i,s,-s,.1,100),ra(),Go=new Kx("#cfe8ff","#3a4a30",1.7),Ht.add(Go),sn=new jp("#fff4d6",2.4),sn.position.set(li*.3,14,Yi*.15),sn.target.position.set(li/2,0,Yi/2-.2),sn.castShadow=!0,sn.shadow.mapSize.set(2048,2048);const r=15;sn.shadow.camera.left=-r,sn.shadow.camera.right=r,sn.shadow.camera.top=r,sn.shadow.camera.bottom=-r,sn.shadow.camera.far=60,Ht.add(sn,sn.target),Xr=new ht({roughness:1});const a=new Ue(new bn(li,Yi),Xr);a.rotation.x=-Math.PI/2,a.position.set(li/2,0,Yi/2),a.receiveShadow=!0,Ht.add(a),gd=new ht({color:"#1c2b1c",roughness:1});const o=new Ue(new bn(li*4,Yi*4),gd);o.rotation.x=-Math.PI/2,o.position.set(li/2,-.02,Yi/2),o.receiveShadow=!0,Ht.add(o),Tm(e.map.theme??Ad),await wm(e),Ln=new Ue(new tc(.97,1,48),new an({color:"#c9b8ff",transparent:!0,opacity:.5,side:Nt,depthWrite:!1})),Ln.rotation.x=-Math.PI/2,Ln.position.y=.03,Ln.visible=!1,Ht.add(Ln),Qi=new ft;const c=[];for(let u=0;u<=Tr;u++)c.push(u,0,0,u,0,wr);for(let u=0;u<=wr;u++)c.push(0,0,u,Tr,0,u);const l=new _t;l.setAttribute("position",new Ze(c,3));const d=new Hp(l,new Qo({color:"#ffffff",transparent:!0,opacity:.13,depthWrite:!1}));d.position.y=.016,Qi.add(d),ns=new Vp(new bn(.92,.92),new an({transparent:!0,opacity:.14,depthWrite:!1,side:Nt}),Tr*wr);{const u=new Oe,f=new Oe().makeRotationX(-Math.PI/2);let g=0;for(let y=0;y<wr;y++)for(let m=0;m<Tr;m++)u.copy(f),u.setPosition(m+.5,.012,y+.5),ns.setMatrixAt(g,u),ns.setColorAt(g,new D("#59c96a")),g++}Qi.add(ns),Qi.visible=!1,Ht.add(Qi),Fi=new ft,ji=Ln.clone(),ji.material=Ln.material.clone(),ji.visible=!0,ji.position.set(0,.03,0),Or=new Ue(new bn(1,1),new an({color:"#7dff9b",transparent:!0,opacity:.3,side:Nt,depthWrite:!1})),Or.rotation.x=-Math.PI/2,Or.position.y=.02,vo=new Ue(new On(.28,.36,1,12),new ht({color:"#ffffff",transparent:!0,opacity:.45})),vo.position.y=.5,Fi.add(ji,Or,vo),Fi.visible=!1,Ht.add(Fi),fd=new gv,Sm=new Li(new C(0,1,0),0);const h=e.track.posAt(e.track.total);_m(Ht,new C(h.x*St,0,h.y*St)),d1(Ht,Ui,n.parentElement),await YE(),_d=performance.now(),window.__scene=Ht}function Tm(n){Go.color.set(n.hemiSky),Go.groundColor.set(n.hemiGround),sn.color.set(n.sun),sn.intensity=n.sunIntensity,Pn.toneMappingExposure=n.exposure,Ht.fog=new tu(n.fog,34,62),Ht.background=new D(n.fog).multiplyScalar(.35),gd.color.set(n.grassB).multiplyScalar(.75)}async function wm(n){var s;const e=n.map.theme??Ad,t=new ux(tg(n.track,n.map.water??[],e));t.colorSpace=Gt,t.anisotropy=8,(s=Xr.map)==null||s.dispose(),Xr.map=t,Xr.needsUpdate=!0,fi=new ft,Ht.add(fi),If(n.track.posAt(0),"#b14aed"),If(n.track.posAt(n.track.total),"#3a86ff"),xo=new ft;for(const[r,a]of n.map.water??[]){const o=new Ue(new bn(1.02,1.02),new ht({color:new D(e.water).lerp(new D("#4f9fe4"),.4),transparent:!0,opacity:.72,roughness:.12,metalness:.35}));o.rotation.x=-Math.PI/2,o.position.set(r+.5,.04,a+.5),xo.add(o)}fi.add(xo),Za=new ft,md=[],pd=[];const i=new ht({color:"#f4f9ff",transparent:!0,opacity:.88,roughness:.9});for(let r=0;r<n.clouds.length;r++){const a=new ft,o=[[0,0,0,.65],[.6,.1,.15,.45],[-.55,.05,-.1,.5],[.15,.35,-.2,.4]];for(const[l,d,h,u]of o){const f=new Ue(new ki(u,12,10),i);f.position.set(l,d,h),a.add(f)}a.position.y=3.1,Za.add(a),md.push(a);const c=new Ue(new au(1.05,24),new an({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.03,Za.add(c),pd.push(c)}fi.add(Za),await x1(n)}function _1(n){fi&&(Ht.remove(fi),fi.traverse(t=>{var s;const i=t;if(i.isMesh){(s=i.geometry)==null||s.dispose();const r=i.material;Array.isArray(r)?r.forEach(a=>a.dispose()):r==null||r.dispose()}})),Tm(n.map.theme??Ad);const e=n.track.posAt(n.track.total);_m(Ht,new C(e.x*St,0,e.y*St)),wm(n).catch(t=>console.warn("map rebuild failed",t))}async function x1(n){const e=n.map.props??[];if(e.length===0)return;const t=new dm,i=new Map;for(const s of new Set(e.map(r=>r.model))){const r=Vf[s];if(r)try{const a=await t.loadAsync(r.file);a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const o=new wn().setFromObject(a.scene),c=Math.max(.001,o.max.y-o.min.y);i.set(s,{scene:a.scene,unitScale:r.height/c})}catch(a){console.warn(`prop model failed to load: ${s}`,a)}}for(const s of e){const r=i.get(s.model);if(!r)continue;const a=r.scene.clone(!0);a.scale.setScalar(r.unitScale*s.scale),a.position.set(s.x*St,0,s.y*St),a.rotation.y=-s.rot,fi.add(a)}}function If(n,e){const t=new ft,i=new Ue(new du(.55,.09,10,24),new an({color:e}));i.position.y=.7,i.rotation.y=n.angle+Math.PI/2;const s=new Qp(e,6,4);s.position.y=.7,t.add(i,s),t.position.set(n.x*St,0,n.y*St),fi.add(t)}function Wo(n,e){const t=Pn.domElement,i=t.clientWidth||rs,s=t.clientHeight||Ks,r=new ve(n/i*2-1,-(e/s)*2+1);fd.setFromCamera(r,Ui);const a=new C;if(!fd.ray.intersectPlane(Sm,a))return null;const o=a.x*$r,c=a.z*$r;return o<0||c<0||o>=rs||c>=Ks?null:{x:o,y:c}}function v1(n){const e=performance.now(),t=Math.min(.1,(e-_d)/1e3);_d=e,s1(n,t),u1(n);const i=e/1e3;xo.children.forEach((r,a)=>{r.position.y=.04+Math.sin(i*1.8+a*1.3)*.012,r.material.opacity=.68+Math.sin(i*2.4+a*.7)*.07}),n.clouds.forEach((r,a)=>{const o=md[a],c=pd[a];o&&(o.position.set(r.x*St,3.1+Math.sin(i*.9+a)*.12,r.y*St),c.position.set(r.x*St,.03,r.y*St))});const s=Zo(n,n.selectedWizardId);if(s){Ln.visible=!0,Ln.position.set(s.x*St,.03,s.y*St);const r=s.stats.range*St;Ln.scale.setScalar(r)}else Ln.visible=!1;if(n.placingType){Qi.visible=!0;const r=`${n.placingType}|${n.wizards.length}|${n.map.id}|${n.act}`;if(r!==nl){nl=r;const a=jt[n.placingType],o=new D("#59c96a"),c=new D("#c94d4d");let l=0;for(let d=0;d<wr;d++)for(let h=0;h<Tr;h++)ns.setColorAt(l++,Js(n,h,d,a)?o:c);ns.instanceColor&&(ns.instanceColor.needsUpdate=!0)}}else Qi.visible=!1,nl="";if(n.placingType&&n.mouseOnBoard){const r=jt[n.placingType],{cx:a,cy:o}=Td(n.mouseX,n.mouseY);if(Wf(a,o)){const c=Js(n,a,o,r),l=Hf(a,o);Fi.visible=!0,Fi.position.set(l.x*St,0,l.y*St),ji.scale.setScalar(r.range*St);const d=c?"#7dff9b":"#ff6b6b";ji.material.color.set(d),Or.material.color.set(d),vo.material.color.set(Tn[r.element].color)}else Fi.visible=!1}else Fi.visible=!1;Pn.render(Ht,Ui)}const Er=[[220,261.63,329.63],[174.61,220,261.63],[196,261.63,329.63],[196,246.94,293.66]],Br=7.5,Pf=.5,Lf=.12,y1=.22,M1=.13;let il=!1,sl=!0,ds=0,rl=0,is=0,Ys=0,vn=null,ci=null,Pi=null,Ja=null;const Oi={start(){if(il)return;const n=Se.bus();n&&(il=!0,vn=n.ctx.createGain(),vn.gain.value=sl?Pf:0,vn.connect(n.target),is=n.ctx.currentTime+.1,Ys=is,Ja=setInterval(()=>al(n.ctx),500),al(n.ctx),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&vn){const e=Se.bus();e&&(is=Math.max(is,e.ctx.currentTime+.05),Ys=Math.max(Ys,e.ctx.currentTime+.05),al(e.ctx))}}))},setEnabled(n){sl=n,n&&Oi.start();const e=Se.bus();vn&&e&&(vn.gain.cancelScheduledValues(e.ctx.currentTime),vn.gain.linearRampToValueAtTime(n?Pf:0,e.ctx.currentTime+.8))},isEnabled(){return sl},setIntensity(n){n!==ds&&(ds=n,E1())},stop(){Ja&&clearInterval(Ja),Ja=null,il=!1}};function al(n){if(!vn)return;const e=n.currentTime+2.6;for(;is<e;)S1(n,Er[rl%Er.length],is),rl++,is+=Br;const t=ds>=2?.375:.5;for(;Ys<e;){if(ds>=1){const i=Er[(rl-1+Er.length)%Er.length][0]/2;b1(n,i,Ys)}Ys+=t}}function S1(n,e,t){const i=ds>=2;for(const s of e)for(const r of[-3,3]){const a=n.createOscillator();a.type="triangle",a.frequency.value=s,a.detune.value=r;const o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(Lf,t+2.2),o.gain.setValueAtTime(Lf,t+Br-2),o.gain.linearRampToValueAtTime(1e-4,t+Br+.6);const c=n.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(i?500:750,t),c.frequency.linearRampToValueAtTime(i?380:950,t+Br),a.connect(c),c.connect(o),o.connect(vn),a.start(t),a.stop(t+Br+.8)}}function b1(n,e,t){const i=n.createOscillator();i.type="sine",i.frequency.value=e;const s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(y1,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),i.connect(s),s.connect(vn),i.start(t),i.stop(t+.35)}function E1(){const n=Se.bus();if(!n||!vn)return;const{ctx:e}=n;if(ds>=2&&!ci){ci=e.createOscillator(),ci.type="sawtooth",ci.frequency.value=55;const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=160,Pi=e.createGain(),Pi.gain.setValueAtTime(1e-4,e.currentTime),Pi.gain.linearRampToValueAtTime(M1,e.currentTime+2.5),ci.connect(t),t.connect(Pi),Pi.connect(vn),ci.start()}else if(ds<2&&ci&&Pi){const t=ci;Pi.gain.linearRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>t.stop(),1800),ci=null,Pi=null}}let Am,Rm,xd,Jt,Cm,Im,Pm,Lm,di,Df="";function T1(n){Am=document.getElementById("hud-gold"),Rm=document.getElementById("hud-lives"),xd=document.getElementById("hud-round"),Jt=document.getElementById("btn-start"),Cm=document.getElementById("wave-preview"),Jt.addEventListener("click",n),Im=document.getElementById("qb-gold"),Pm=document.getElementById("qb-lives"),Lm=document.getElementById("qb-round"),di=document.getElementById("qb-start"),di.addEventListener("click",n)}function w1(n){var s;const e=`${n.gold}|${n.lives}|${n.round}|${n.act}|${n.phase}|${((s=n.waveModifier)==null?void 0:s.id)??""}|${n.nodeChoice}|${n.nodePicked}`;if(e===Df)return;Df=e;const t=Jf(n)?`Act ${["I","II","III"][n.act]??n.act+1} · `:"";Am.textContent=String(n.gold),Rm.textContent=String(n.lives),xd.textContent=`${t}${Math.min(n.round+1,Us)}/${Us}`,Im.textContent=String(n.gold),Pm.textContent=String(n.lives),Lm.textContent=xd.textContent;const i=n.round===Us-1;if(n.phase==="build"&&n.round<Us){const r=!n.nodePicked&&n.nextNodes.length>1;Jt.disabled=r;const a=i?" 👹 BOSS":n.nodeChoice==="elite"?" ★":n.nodeChoice==="treasure"?" 💎":"";Jt.textContent=r?"Choose your path…":`Start Wave ${n.round+1}${a}`,Cm.innerHTML=A1(n)}else n.phase==="wave"?(Jt.disabled=!0,Jt.textContent=n.waveModifier?`W${n.round+1} ★ ${n.waveModifier.name} (${n.waveModifier.desc})`:i?"👹 BOSS — hold the line!":`Wave ${n.round+1} — Defend!`):n.phase==="draft"?(Jt.disabled=!0,Jt.textContent="Choose a card…"):n.phase==="relic"?(Jt.disabled=!0,Jt.textContent="Claim your relic…"):n.phase==="actClear"?(Jt.disabled=!0,Jt.textContent=`Act ${["I","II","III"][n.act]} complete!`):(Jt.disabled=!0,Jt.textContent=n.phase==="won"?"Victory!":"Defeat");if(di.disabled=Jt.disabled,n.phase==="build"){const r=!n.nodePicked&&n.nextNodes.length>1,a=i?" 👹":n.nodeChoice==="elite"?" ★":n.nodeChoice==="treasure"?" 💎":"";di.textContent=r?"🗺️ path…":`▶ Wave ${n.round+1}${a}`}else n.phase==="wave"?di.textContent=i?"👹 BOSS!":`⚔ Wave ${n.round+1}`:n.phase==="draft"?di.textContent="🃏 pick a card":n.phase==="relic"?di.textContent="💎 pick a relic":n.phase==="actClear"?di.textContent="🏰 act complete":di.textContent=n.phase==="won"?"🏆":"💀"}function A1(n){const e=Rd(n.act)[n.round];if(!e)return"";const t=new Map;for(const s of e)t.set(s.type,(t.get(s.type)??0)+s.count);const i=[];for(const[s,r]of t){const a=Nd[s];i.push(`${r}× ${a.name}${R1(s)}`)}return`<b>Next wave:</b> ${i.join(", ")}`}function R1(n){switch(n){case"knight":return" <i>(armored — burn them!)</i>";case"shade":return" <i>(fire-immune!)</i>";case"runner":return" <i>(fast — chill them!)</i>";case"golem":return" <i>(BOSS)</i>";case"golemling":return" <i>(mini-boss)</i>";case"warlord":return" <i>(BOSS — armor breaks to PHYSICAL only!)</i>";case"pyretitan":return" <i>(BOSS — fire-immune, cannot be chilled!)</i>";case"colossus":return" <i>(THE BOSS — armored, fire-hardened, cold-proof)</i>";case"orcbrute":return" <i>(armored — physical!)</i>";case"troll":return" <i>(armored + REGENERATES — crack, then burst!)</i>";case"warwagon":return" <i>(carrier — kill it EARLY, leaks -8!)</i>";case"siegetower":return" <i>(unloads orcs as it rolls, leaks -10!)</i>";case"orcshaman":return" <i>(HEALER — focus him first!)</i>";case"wardrummer":return" <i>(hastens the horde — silence the drums)</i>";case"wraith":return" <i>(phases out — spread your damage)</i>";case"gargoyle":return" <i>(FLIES straight across — archers ready!)</i>";case"drake":return" <i>(fast FLYER, burn-proof — arrows up!)</i>";case"hexer":return" <i>(SILENCES towers — kill him first!)</i>";case"banshee":return" <i>(death-wail silences — kill her at range!)</i>";case"slime_big":return" <i>(splits, and splits again)</i>";case"necromancer":return" <i>(raises the dead as he walks)</i>";case"thief":return" <i>(steals GOLD and runs — catch him!)</i>";case"shieldbearer":return" <i>(ward caps your big hits)</i>";default:return""}}const Dm=new Map;function C1(n){const e=document.getElementById("shop");e.innerHTML="";for(const t of dl){const i=jt[t],s=Tn[i.element],r=document.createElement("div");r.className="shop-card",r.innerHTML=`
      <div class="shop-icon" style="background:${s.color}22;border:2px solid ${s.color}">
        <img src="${un(`icons/portrait_${i.id}.png`)}" onerror="this.remove()" alt="" /><span>${i.icon}</span>
      </div>
      <div class="shop-info">
        <div class="shop-name">${i.name}</div>
        <div class="shop-desc">${i.desc}</div>
      </div>
      <div class="shop-cost">${i.cost}</div>
    `,r.addEventListener("click",()=>n(t)),e.appendChild(r),Dm.set(t,r)}}function I1(n){for(const[e,t]of Dm){const i=jt[e];t.classList.toggle("unaffordable",n.gold<i.cost),t.classList.toggle("selected",n.placingType===e)}}const P1=["first","last","strong","close"],L1={first:"First",last:"Last",strong:"Strong",close:"Close"};let ss,Qa="",Nm,Um,Fm,Om;function D1(n){ss=document.getElementById("tower-panel"),Nm=n.upgrade,Um=n.sell,Fm=n.mode,Om=n.evolve}function N1(n){const e=Zo(n,n.selectedWizardId);if(!e||e.pendingSpecialize){Qa!==""&&(ss.classList.add("hidden"),Qa="");return}const t=Dd(n,e),i=`${e.id}|${e.def.id}|${e.tiers[0]}|${e.tiers[1]}|${e.mode}|${U1(n,e)}|${t?`${t.ok}${t.cost}`:""}`;i!==Qa&&(Qa=i,ss.classList.remove("hidden"),F1(n,e))}function U1(n,e){return[0,1].map(t=>{const i=e.def.upgrades[t].tiers[e.tiers[t]];return i?n.gold>=i.cost?"y":"n":"x"}).join("")}function F1(n,e){const t=e.stats,i=[`Dmg <b>${Math.round(t.damage)}</b>`,`Rate <b>${t.rate.toFixed(2)}s</b>`,`Range <b>${Math.round(t.range)}</b>`];t.splash>0&&i.push(`Splash <b>${Math.round(t.splash)}</b>`),t.chains>0&&i.push(`Chains <b>${t.chains}</b>`),t.burnDps>0&&i.push(`Burn <b>${t.burnDps}/s × ${t.burnDuration.toFixed(0)}s</b>`),t.chillPct>0&&i.push(`Chill <b>${Math.round(t.chillPct*100)}%</b>`),e.def.pierce&&i.push("<b>Pierces</b>"),t.entangleDur>0&&i.push(`Root <b>${t.entangleDur.toFixed(1)}s</b>`),t.rootSlow>0&&i.push(`Slow <b>${Math.round(t.rootSlow*100)}%</b>`),ss.innerHTML=`
    <div class="tp-title">${e.def.icon} ${e.def.name}</div>
    <div class="tp-stats">${i.join(" · ")}</div>
    <div class="tp-modes">${P1.map(r=>`<button class="tp-mode${e.mode===r?" active":""}" data-mode="${r}">${L1[r]}</button>`).join("")}</div>
    <div id="tp-upgrades"></div>
    <button class="tp-sell">Sell for ${hp(e)} ◉</button>
  `,ss.querySelectorAll(".tp-mode").forEach(r=>{r.addEventListener("click",()=>Fm(e,r.dataset.mode))}),ss.querySelector(".tp-sell").addEventListener("click",()=>Um(e));const s=ss.querySelector("#tp-upgrades");if(e.def.isEvolved){const r=document.createElement("div");r.className="tp-evolved-tag",r.textContent="★ EVOLVED ★",s.appendChild(r)}else{[0,1].forEach(a=>{const o=e.def.upgrades[a],c=e.tiers[a],l=o.tiers[c],d=document.createElement("div");d.className="tp-upgrade";const h=l?c:o.tiers.length-1,u=`<img class="tp-upg-icon" src="${un(`icons/upg_${e.def.id}_${a}_${h}.png`)}" onerror="this.style.display='none'" alt="" />`;if(!l)d.classList.add("maxed"),d.innerHTML=`
          ${u}<div><div class="tp-upg-name">${o.name} ★MAX</div>
          <div class="tp-upg-desc">All ${o.tiers.length} tiers owned</div></div>`;else{const f=n.gold>=l.cost;f||d.classList.add("unaffordable"),d.innerHTML=`
          ${u}<div style="flex:1"><div class="tp-upg-name">${o.name} ${c+1}/${o.tiers.length}: ${l.name}</div>
          <div class="tp-upg-desc">${l.desc}</div></div>
          <div class="tp-upg-cost">${l.cost}</div>`,f&&d.addEventListener("click",()=>Nm(e,a))}s.appendChild(d),s.appendChild(document.createTextNode(" "))});const r=Dd(n,e);if(r&&(r.ok||e.tiers[0]+e.tiers[1]>0)){const a=document.createElement("button");a.className="tp-evolve",a.disabled=!r.ok,a.innerHTML=r.ok?`⬆ EVOLVE — ${r.cost} ◉${r.discounted?" (card bonus!)":""}`:`⬆ Evolve: ${r.reason} (${r.cost} ◉${r.discounted?", card bonus":""})`,r.ok&&a.addEventListener("click",()=>Om(e)),s.appendChild(a)}}}let vd,yd,Md,Nf="";function O1(n){vd=document.getElementById("overlay"),yd=document.getElementById("overlay-title"),Md=document.getElementById("overlay-text"),document.getElementById("btn-restart").addEventListener("click",n)}function B1(n){const e=n.phase==="won"||n.phase==="lost"?n.phase:"";if(e!==Nf){if(Nf=e,!e){vd.classList.add("hidden");return}vd.classList.remove("hidden"),Bd(),e==="won"?(yd.textContent="🏆 Victory!",Md.innerHTML=`The realm stands! ${n.lives} lives to spare.${Uf(n)}`):(yd.textContent="💀 Defeat",Md.innerHTML=`The horde broke through on wave ${n.round+1}.${Uf(n)}`)}}function Uf(n){var o;const e=n.stats,t=Object.entries(e.dmgByElement).filter(([,c])=>c>0);t.sort((c,l)=>l[1]-c[1]);const i=((o=t[0])==null?void 0:o[1])??1,s=t.map(([c,l])=>`
      <div class="sum-bar-row">
        <span class="sum-bar-label">${Tn[c].name}</span>
        <div class="sum-bar"><div style="width:${Math.max(4,l/i*100)}%;background:${Tn[c].color}"></div></div>
        <span class="sum-bar-val">${Math.round(l)}</span>
      </div>`).join(""),r=e.cardIds.map(c=>Cd.find(l=>l.id===c)).filter(Boolean).map(c=>`<span class="sum-card" title="${c.name}">${c.icon}</span>`).join(""),a=e.reactions;return`
    <div id="run-summary">
      <div class="sum-line">Waves <b>${e.wavesCleared}</b> · Kills <b>${e.kills}</b> · Leaks <b>${e.leaks}</b></div>
      <div class="sum-line">💫 Conduct ×${a.conduct} · 💎 Shatter ×${a.shatter} · ♨️ Evaporate ×${a.evaporate} · 🧊 Frozen ×${a.frozen}</div>
      ${s?`<div class="sum-section">Damage by element</div>${s}`:""}
      ${r?`<div class="sum-section">Cards drafted (${e.cardIds.length})</div><div class="sum-cards">${r}</div>`:""}
    </div>`}const Xo=new URLSearchParams(location.search).get("map"),gu=Xo&&Gf(Xo)||void 0,ol=i0(),qo=ol&&(!Xo||Xo===ol.mapId)?s0(ol):null;let Q=qo??Ko(gu);const An=document.getElementById("board");An.addEventListener("mousemove",n=>{const e=Wo(n.offsetX,n.offsetY);e?(Q.mouseX=e.x,Q.mouseY=e.y,Q.mouseOnBoard=!0):Q.mouseOnBoard=!1});An.addEventListener("mouseleave",()=>{Q.mouseOnBoard=!1});const k1=window.matchMedia("(pointer: coarse)").matches;let Qt=null;function Bm(n,e,t=!1){if(!Q.placingType)return!1;const i=jt[Q.placingType],s=pl(Q,i.cost);if(!Js(Q,n,e,i)||!Yr(Q,s))return!1;up(Q,s);const r=Ld(Q,i,n,e);return r.invested=s,Q.wizards.push(r),te.burst(r.x,r.y,i.color,14,120,3),Se.place(),(!t||!Yr(Q,pl(Q,i.cost)))&&(Q.placingType=null),Q.selectedWizardId=r.id,Qt=null,!0}An.addEventListener("click",n=>{if(aa){aa=!1;return}const e=Wo(n.offsetX,n.offsetY);if(!e)return;const{cx:t,cy:i}=Td(e.x,e.y);if(!Wf(t,i))return;if(Q.placingType){const r=jt[Q.placingType];if(k1&&(Q.mouseX=e.x,Q.mouseY=e.y,Q.mouseOnBoard=!0,!Qt||Qt.cx!==t||Qt.cy!==i)){Qt={cx:t,cy:i},Js(Q,t,i,r)||te.floater(e.x,e.y-26,"can't build here","#ff9db5",12);return}Bm(t,i,n.shiftKey);return}const s=jf(Q,t,i);Q.selectedWizardId=s?s.id:null});const Yn=new Map;let qr=0,$o=!1,aa=!1,cl=0,Ff=0,Of=0;An.addEventListener("pointerdown",n=>{if(Yn.set(n.pointerId,{x:n.offsetX,y:n.offsetY}),$o=!1,Yn.size===2){const[e,t]=[...Yn.values()];qr=Math.hypot(e.x-t.x,e.y-t.y)}});An.addEventListener("pointermove",n=>{const e=Yn.get(n.pointerId);if(!e)return;if(Yn.size===2){Yn.set(n.pointerId,{x:n.offsetX,y:n.offsetY});const[s,r]=[...Yn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);qr>0&&a>0&&da(a/qr,(s.x+r.x)/2,(s.y+r.y)/2),qr=a,aa=!0;return}const t=n.offsetX-e.x,i=n.offsetY-e.y;Math.abs(t)+Math.abs(i)>6&&($o=!0),$o&&Em()>1.01&&(p1(t,i),aa=!0),Yn.set(n.pointerId,{x:n.offsetX,y:n.offsetY})});const km=n=>{Yn.delete(n.pointerId),qr=0};An.addEventListener("pointerup",km);An.addEventListener("pointercancel",km);An.addEventListener("pointerup",n=>{if(n.pointerType!=="touch"||$o||Yn.size>0||Q.placingType)return;const e=performance.now();e-cl<300&&Math.hypot(n.offsetX-Ff,n.offsetY-Of)<30?(da(Em()>1.5?.01:2.2,n.offsetX,n.offsetY),aa=!0,cl=0):(cl=e,Ff=n.offsetX,Of=n.offsetY)});An.addEventListener("wheel",n=>{n.preventDefault(),da(n.deltaY<0?1.15:1/1.15,n.offsetX,n.offsetY)},{passive:!1});document.getElementById("zoom-in").addEventListener("click",()=>da(1.4));document.getElementById("zoom-out").addEventListener("click",()=>da(1/1.4));document.getElementById("zoom-reset").addEventListener("click",()=>m1());const z1=document.getElementById("place-confirm"),Sd=document.getElementById("pc-build");document.getElementById("pc-cancel").addEventListener("click",()=>{Qt=null});Sd.addEventListener("click",()=>{Qt&&Bm(Qt.cx,Qt.cy)});function V1(){const n=Qt!==null&&Q.placingType!==null;if(z1.classList.toggle("hidden",!n),n&&Q.placingType){const e=jt[Q.placingType],t=pl(Q,e.cost),i=Js(Q,Qt.cx,Qt.cy,e)&&Yr(Q,t);Sd.disabled=!i,Sd.textContent=i?`✓ Build ${e.name} · ${t} ◉`:"✕ blocked spot"}}An.addEventListener("contextmenu",n=>{n.preventDefault(),Q.placingType=null,Q.selectedWizardId=null,Qt=null});window.addEventListener("keydown",n=>{n.key==="Escape"?(Q.placingType=null,Q.selectedWizardId=null,Qt=null):n.key===" "?(n.preventDefault(),kd(Q)):n.key>="1"&&n.key<=String(dl.length)&&zm(dl[Number(n.key)-1])});function zm(n){if(Q.phase==="won"||Q.phase==="lost")return;const e=jt[n];Yr(Q,e.cost)&&(Q.placingType=Q.placingType===n?null:n,Q.selectedWizardId=null,Qt=null)}C1(zm);T1(()=>kd(Q));d0(()=>{us(Q),Q.autoplay&&(Q.autoplayTimer=1.2)});f0(()=>{us(Q)});_0(()=>{us(Q),Q.autoplay&&(Q.autoplayTimer=1.2)});E0(()=>{us(Q)});A0();L0(n=>{_g(n)&&(_1(n),te.clear(),te.floater(480,120,`⚑ ${n.map.name} — Act ${["I","II","III"][n.act]}`,"#7dff9b",16),us(n))});var zf;(zf=document.getElementById("btn-newrun"))==null||zf.addEventListener("click",()=>{Bd(),Q=Ko(gu??(qo?Q.map:void 0)),te.clear(),Se.click()});qo&&te.floater(480,120,`▶ Run resumed — Wave ${qo.round+1}`,"#7dff9b",15);O1(()=>{Bd(),Q=Ko(gu),te.clear()});const bd=document.getElementById("map-select");for(const n of ng()){const e=document.createElement("option");e.value=n.id,e.textContent=(n.custom?"✏️ ":"")+n.name,n.id===(Q.map.id??"vale")&&(e.selected=!0),bd.appendChild(e)}bd.addEventListener("change",()=>{location.href=`${location.pathname}?map=${encodeURIComponent(bd.value)}`});D1({upgrade(n,e){const t=n.def.upgrades[e].tiers[n.tiers[e]];!t||!up(Q,t.cost)||(n.tiers[e]++,n.invested+=t.cost,n.stats=zi(n.def,n.tiers),te.burst(n.x,n.y,"#c9b8ff",12,110,3),te.floater(n.x,n.y-24,t.name+"!","#c9b8ff",12),Se.upgrade())},sell(n){c0(Q,n),Se.sell()},mode(n,e){n.mode=e,Se.click()},evolve(n){const e=n.def.name;bg(Q,n)&&(te.ring(n.x,n.y,"#ffd75e",60),te.burst(n.x,n.y,"#ffd75e",24,180,4,.7),te.floater(n.x,n.y-34,`${e} → ${n.def.name}!`,"#ffd75e",15),Se.win(),us(Q))}});function Vm(n){Q.speed=n,document.querySelectorAll(".btn-speed").forEach(e=>e.classList.toggle("active",Number(e.dataset.speed)===n)),Hm.textContent=`${n}×`}document.querySelectorAll(".btn-speed").forEach(n=>{n.addEventListener("click",()=>Vm(Number(n.dataset.speed)))});const Hm=document.getElementById("qb-speed"),Bf=document.getElementById("qb-auto");Hm.addEventListener("click",()=>Vm(Q.speed>=3?1:Q.speed+1));Bf.addEventListener("click",()=>{Q.autoplay=!Q.autoplay,Bf.classList.toggle("active",Q.autoplay),document.getElementById("chk-auto").checked=Q.autoplay,Q.autoplay&&Q.phase==="build"&&(Q.autoplayTimer=.8)});const Gm=()=>{Se.init(),Oi.start()};window.addEventListener("pointerdown",Gm,{once:!0});window.addEventListener("keydown",Gm,{once:!0});const ll=document.getElementById("btn-music");ll.addEventListener("click",()=>{Oi.setEnabled(!Oi.isEnabled()),ll.textContent=Oi.isEnabled()?"🎵":"🎵̸",ll.style.opacity=Oi.isEnabled()?"1":"0.4"});const kf=document.getElementById("btn-mute");kf.addEventListener("click",()=>{Se.setMuted(!Se.isMuted()),kf.textContent=Se.isMuted()?"🔇":"🔊"});document.getElementById("vol-slider").addEventListener("input",n=>{Se.setVolume(Number(n.target.value)/100)});document.getElementById("chk-auto").addEventListener("change",n=>{Q.autoplay=n.target.checked,Q.autoplay&&Q.phase==="build"&&(Q.autoplayTimer=.8)});function Wm(n){Q.phase==="build"&&np(Q);const e=Q.phase==="build"&&!Q.nodePicked&&Q.nextNodes.length>1;if(Q.phase==="won"||Q.phase==="lost"||Q.phase==="draft"||Q.phase==="relic"||Q.phase==="actClear"||Q.pendingEvent!==null||e){te.update(n);return}a0(Q,n),zg(Q,n),Hg(Q,n),Zg(Q,n),t0(Q,n),te.update(n)}function Xm(){Oi.setIntensity(Q.phase!=="wave"?0:Q.round===Us-1?2:1),v1(Q),V1(),w1(Q),I1(Q),N1(Q),u0(Q),p0(Q),x0(Q),T0(Q),R0(Q),D0(Q),B1(Q)}g1(An,Q).then(()=>{rg(Wm,Xm,()=>Q.speed)}).catch(n=>{console.error("renderer failed to initialize",n);const e=An.parentElement,t=document.createElement("div");t.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#ff9db5;font-size:15px;text-align:center;padding:20px;",t.textContent=`Failed to load game assets: ${(n==null?void 0:n.message)??n}. Try refreshing.`,e.appendChild(t)});Object.defineProperty(window,"__game",{get:()=>Q});window.__fx=te;window.__computeStats=zi;window.__audio={sfx:Se,music:Oi};window.__place=(n,e,t)=>{const i=jt[n];if(!i||!Js(Q,e,t,i))return null;const s=Ld(Q,i,e,t);return Q.wizards.push(s),s.id};window.__specialize=(n,e)=>{var s;const t=Zo(Q,n),i=((s=t==null?void 0:t.specializeOptions)==null?void 0:s.find(r=>r.id===e))??jt[e];return!t||!i?!1:(ep(Q,t,i),!0)};window.__step=n=>{const e=.016666666666666666,t=Math.min(60*600,Math.round(n/e));for(let i=0;i<t;i++)Wm(e);return Xm(),{phase:Q.phase,enemies:Q.enemies.length,round:Q.round}};
