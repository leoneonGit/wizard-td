import{m as wd,g as xo,T as Dh,P as qf,h as tg,j as Td,k as Xf,A as ng,c as Kf,n as $t,b as Kr,a as as,B as js,D as Ad,C as Er,R as wr,p as ig,o as jf,l as sg}from"./mapio-DhjPb-LI.js";const oc=1/60,Fh=300,rg=350,ag=250;function og(n,e,t){let i=performance.now(),s=0,r=performance.now();function a(c,l){const d=Math.min((c-i)/1e3,.25);i=c,s+=d*t();let h=0;for(;s>=oc&&h<Fh;)n(oc),s-=oc,h++;h===Fh&&(s=0),e()}function o(c){r=c,a(c),requestAnimationFrame(o)}requestAnimationFrame(o),setInterval(()=>{const c=performance.now();c-r>rg&&a(c)},ag)}const en={fire:{id:"fire",name:"Fire Mage",element:"fire",placement:"ground",family:"wizard",cost:100,desc:"Hurls fireballs. Splash damage, ignites enemies (Burn). Shatters Frozen foes.",range:130,rate:.95,damage:14,projSpeed:340,splash:34,chains:0,chainFalloff:0,color:"#ff6b35",icon:"🔥",upgrades:[{name:"Inferno",tiers:[{name:"Hotter Flames",cost:70,desc:"+6 damage",mod:{damage:6}},{name:"Searing Burn",cost:140,desc:"Burn +8 dps, +1s",mod:{burnDps:8,burnDuration:1}},{name:"Blast Wave",cost:320,desc:"+22 splash radius, +10 dmg",mod:{splash:22,damage:10}}]},{name:"Pyromancy",tiers:[{name:"Quick Cast",cost:80,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Far Sight",cost:120,desc:"+30 range",mod:{range:30}},{name:"Rapid Fire",cost:300,desc:"30% faster attacks",mod:{rateMul:.7}}]}]},ice:{id:"ice",name:"Frost Mage",element:"ice",placement:"ground",family:"wizard",cost:110,desc:"Chills and Soaks (Wet) enemies; stacked Chill Freezes. Enables Conduct & Shatter.",range:120,rate:.75,damage:7,projSpeed:300,splash:0,chains:0,chainFalloff:0,color:"#5bc8f5",icon:"❄️",upgrades:[{name:"Deep Freeze",tiers:[{name:"Bitter Cold",cost:70,desc:"Chill slows +15%",mod:{chillPct:.15}},{name:"Lasting Soak",cost:110,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Permafrost",cost:280,desc:"Chill slows +20%, +6 dmg",mod:{chillPct:.2,damage:6}}]},{name:"Glacier",tiers:[{name:"Ice Shards",cost:80,desc:"+5 damage",mod:{damage:5}},{name:"Frost Nova",cost:160,desc:"Attacks splash (26)",mod:{splash:26}},{name:"Winter Reach",cost:240,desc:"+35 range, faster cast",mod:{range:35,rateMul:.85}}]}]},lightning:{id:"lightning",name:"Storm Mage",element:"lightning",placement:"ground",family:"wizard",cost:140,desc:"Chain lightning arcs between enemies. Conducts brutally through Wet targets.",range:145,rate:1.15,damage:18,projSpeed:0,splash:0,chains:2,chainFalloff:.65,color:"#c77dff",icon:"⚡",upgrades:[{name:"Tempest",tiers:[{name:"Forked Bolt",cost:90,desc:"+1 chain target",mod:{chains:1}},{name:"High Voltage",cost:150,desc:"+10 damage",mod:{damage:10}},{name:"Storm Front",cost:340,desc:"+2 chain targets",mod:{chains:2}}]},{name:"Stormcalling",tiers:[{name:"Static Charge",cost:80,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Long Arc",cost:130,desc:"+35 range",mod:{range:35}},{name:"Overload",cost:320,desc:"+14 dmg, 15% faster",mod:{damage:14,rateMul:.85}}]}]},water:{id:"water",name:"Water Mage",element:"water",placement:"water",family:"wizard",auraKind:"tide",cost:120,desc:"Builds ONLY on water. Pulsing tide Soaks (Wet) and slows everything in range — the reaction engine.",range:115,rate:1.6,damage:8,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#3a86ff",icon:"🌊",upgrades:[{name:"Tides",tiers:[{name:"Undertow",cost:70,desc:"Slow +10%",mod:{soakSlow:.1}},{name:"Deep Soak",cost:120,desc:"Wet lasts +3s",mod:{wetDuration:3}},{name:"Riptide",cost:280,desc:"Slow +15%, +8 dmg",mod:{soakSlow:.15,damage:8}}]},{name:"Depths",tiers:[{name:"Swell",cost:80,desc:"+25 range",mod:{range:25}},{name:"Surge",cost:140,desc:"25% faster pulses",mod:{rateMul:.75}},{name:"Tsunami",cost:300,desc:"+12 dmg, +20 range",mod:{damage:12,range:20}}]}]},wind:{id:"wind",name:"Cloud Mage",element:"wind",placement:"ground",needsCloud:!0,family:"wizard",auraKind:"gust",cost:160,desc:"Rides the wind: only attacks while a cloud drifts nearby. Gusts hurl enemies BACKWARD along the path.",range:130,rate:2.2,damage:6,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#b8d8d0",icon:"☁️",upgrades:[{name:"Gale",tiers:[{name:"Stiff Breeze",cost:80,desc:"+25px knockback",mod:{knockback:25}},{name:"Squall",cost:150,desc:"+10 dmg",mod:{damage:10}},{name:"Hurricane",cost:320,desc:"+45px knockback",mod:{knockback:45}}]},{name:"Zephyr",tiers:[{name:"Second Wind",cost:90,desc:"20% faster gusts",mod:{rateMul:.8}},{name:"High Winds",cost:140,desc:"+30 range",mod:{range:30}},{name:"Jetstream",cost:300,desc:"30% faster gusts",mod:{rateMul:.7}}]}]},slingshot:{id:"slingshot",name:"Slingshot Goblin",element:"physical",placement:"ground",family:"goblin",cost:75,desc:"Cheap, fast, reliable. Physical damage always lands at full strength — no resistances apply.",range:110,rate:.6,damage:8,projSpeed:380,splash:0,chains:0,chainFalloff:0,color:"#a08060",icon:"🪨",upgrades:[{name:"Quickdraw",tiers:[{name:"Taut Cord",cost:60,desc:"+3 damage",mod:{damage:3}},{name:"Rapid Sling",cost:110,desc:"18% faster attacks",mod:{rateMul:.82}},{name:"Iron Shot",cost:240,desc:"+7 damage",mod:{damage:7}}]},{name:"Marksmanship",tiers:[{name:"Keen Eye",cost:60,desc:"+20 range",mod:{range:20}},{name:"Steady Hand",cost:100,desc:"+5 damage",mod:{damage:5}},{name:"Deadeye",cost:220,desc:"15% faster, +25 range",mod:{rateMul:.85,range:25}}]}]},dynamite:{id:"dynamite",name:"Dynamite Goblin",element:"fire",placement:"ground",family:"goblin",cost:95,desc:"Lobs sputtering dynamite for big splash damage and Burn. Shares fire’s strengths — and its counters.",range:100,rate:1.5,damage:10,projSpeed:220,splash:42,chains:0,chainFalloff:0,color:"#e0522f",icon:"🧨",upgrades:[{name:"Bigger Bangs",tiers:[{name:"Extra Fuse",cost:65,desc:"+5 damage",mod:{damage:5}},{name:"Shrapnel",cost:120,desc:"+16 splash radius",mod:{splash:16}},{name:"Volatile Mix",cost:260,desc:"Burn +6 dps, +1s",mod:{burnDps:6,burnDuration:1}}]},{name:"Munitions",tiers:[{name:"Quick Fuse",cost:70,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Long Toss",cost:100,desc:"+20 range",mod:{range:20}},{name:"Blasting Cap",cost:250,desc:"+9 damage, +14 splash",mod:{damage:9,splash:14}}]}]},gong:{id:"gong",name:"Gong Goblin",element:"physical",placement:"ground",family:"goblin",auraKind:"rattle",cost:85,desc:"Support, not a damage dealer. Pulses a Rattling gong that makes nearby foes take extra damage from everything.",range:105,rate:3,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a63f",icon:"🔔",upgrades:[{name:"Resonance",tiers:[{name:"Bigger Gong",cost:65,desc:"Rattled +8% damage taken",mod:{rattlePct:.08}},{name:"Echo",cost:110,desc:"+25 range",mod:{range:25}},{name:"Thunderous Peal",cost:240,desc:"Rattled +10% damage taken",mod:{rattlePct:.1}}]},{name:"Cadence",tiers:[{name:"Steady Beat",cost:70,desc:"20% faster pulses",mod:{rateMul:.8}},{name:"War Rhythm",cost:110,desc:"+20 range",mod:{range:20}},{name:"Relentless Toll",cost:230,desc:"25% faster pulses",mod:{rateMul:.75}}]}]},longbow:{id:"longbow",name:"Elf Longbow",element:"physical",placement:"ground",family:"archer",cost:110,desc:"Elven marksman. Enormous range, heavy single arrows — the sniper of the realm.",range:195,rate:2,damage:34,projSpeed:560,splash:0,chains:0,chainFalloff:0,color:"#7dc98f",icon:"🏹",upgrades:[{name:"Marksman",tiers:[{name:"Heavy Draw",cost:80,desc:"+12 damage",mod:{damage:12}},{name:"Eagle Eye",cost:130,desc:"+35 range",mod:{range:35}},{name:"Heartseeker",cost:320,desc:"+24 damage",mod:{damage:24}}]},{name:"Fleetness",tiers:[{name:"Swift Nock",cost:75,desc:"15% faster shots",mod:{rateMul:.85}},{name:"Windrunner",cost:140,desc:"20% faster shots",mod:{rateMul:.8}},{name:"Arrowstorm",cost:300,desc:"+10 dmg, 15% faster",mod:{damage:10,rateMul:.85}}]}]},ballesta:{id:"ballesta",name:"Human Ballesta",element:"physical",placement:"ground",family:"archer",pierce:!0,cost:100,desc:"Crank-loaded crossbow. Short range, but bolts PIERCE clean through everything in a line.",range:95,rate:1.2,damage:12,projSpeed:480,splash:0,chains:0,chainFalloff:0,color:"#5b7fc9",icon:"🎯",upgrades:[{name:"Penetration",tiers:[{name:"Steel Bolts",cost:70,desc:"+5 damage",mod:{damage:5}},{name:"Windlass",cost:130,desc:"20% faster reload",mod:{rateMul:.8}},{name:"Arbalest",cost:300,desc:"+12 damage",mod:{damage:12}}]},{name:"Fieldcraft",tiers:[{name:"Braced Stock",cost:65,desc:"+18 range",mod:{range:18}},{name:"Quick Hands",cost:120,desc:"15% faster reload",mod:{rateMul:.85}},{name:"Siege Position",cost:260,desc:"+30 range, +6 dmg",mod:{range:30,damage:6}}]}]},bolas:{id:"bolas",name:"Orc Trapper",element:"physical",placement:"ground",family:"archer",entangles:!0,cost:115,desc:"Hurls bolas that ENTANGLE — roots enemies in place. Pure lockdown; never disturbs your Freeze combos.",range:125,rate:1.8,damage:6,projSpeed:320,splash:0,chains:0,chainFalloff:0,color:"#8c9c72",icon:"🪢",upgrades:[{name:"Snares",tiers:[{name:"Heavier Weights",cost:75,desc:"Entangle +0.4s",mod:{entangleDur:.4}},{name:"Barbed Cords",cost:130,desc:"+8 damage",mod:{damage:8}},{name:"Master Trapper",cost:300,desc:"Entangle +0.6s",mod:{entangleDur:.6}}]},{name:"Warcraft",tiers:[{name:"Strong Arm",cost:70,desc:"+25 range",mod:{range:25}},{name:"Rapid Toss",cost:125,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Twin Bolas",cost:280,desc:"25% faster, +5 dmg",mod:{rateMul:.75,damage:5}}]}]},rootgrasp:{id:"rootgrasp",name:"Rootgrasp Tree",element:"physical",placement:"ground",family:"tree",groundAttack:!0,cost:90,desc:"Roots erupt beneath enemies — no projectile to dodge, and every strike SLOWS.",range:110,rate:1.4,damage:9,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#6a8f4f",icon:"🌳",upgrades:[{name:"Deep Roots",tiers:[{name:"Gnarled Grip",cost:70,desc:"Slow +10% stronger",mod:{rootSlow:.1}},{name:"Thick Taproot",cost:120,desc:"+6 damage",mod:{damage:6}},{name:"Strangleroot",cost:280,desc:"Slow +15%, +6 dmg",mod:{rootSlow:.15,damage:6}}]},{name:"Overgrowth",tiers:[{name:"Spreading Roots",cost:75,desc:"+22 range",mod:{range:22}},{name:"Quickened Sap",cost:130,desc:"20% faster strikes",mod:{rateMul:.8}},{name:"Ancient Reach",cost:260,desc:"+30 range, +5 dmg",mod:{range:30,damage:5}}]}]},boulder:{id:"boulder",name:"Boulder Tree",element:"physical",placement:"ground",family:"tree",cost:105,desc:"An old ent that hurls boulders. Slow, furious, and the splash flattens whole clumps.",range:135,rate:2.6,damage:24,projSpeed:210,splash:46,chains:0,chainFalloff:0,color:"#8d7a5e",icon:"🪨",upgrades:[{name:"Avalanche",tiers:[{name:"Bigger Rocks",cost:80,desc:"+10 damage",mod:{damage:10}},{name:"Wide Impact",cost:140,desc:"+16 splash radius",mod:{splash:16}},{name:"Meteor Toss",cost:320,desc:"+18 dmg, +12 splash",mod:{damage:18,splash:12}}]},{name:"Old Growth",tiers:[{name:"Long Arms",cost:70,desc:"+25 range",mod:{range:25}},{name:"Limber Boughs",cost:130,desc:"20% faster throws",mod:{rateMul:.8}},{name:"Wrath of Ages",cost:300,desc:"25% faster throws",mod:{rateMul:.75}}]}]},thornspitter:{id:"thornspitter",name:"Thornspitter",element:"physical",placement:"ground",family:"tree",cost:95,desc:'A bristling bush that machine-guns needles — the fastest attacker in the realm. Loves "every Nth shot" cards.',range:100,rate:.25,damage:3,projSpeed:450,splash:0,chains:0,chainFalloff:0,color:"#4f8f5c",icon:"🌵",upgrades:[{name:"Bristles",tiers:[{name:"Sharper Thorns",cost:70,desc:"+2 damage",mod:{damage:2}},{name:"Dense Quills",cost:130,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Ironwood Barbs",cost:300,desc:"+4 damage",mod:{damage:4}}]},{name:"Wildgrowth",tiers:[{name:"Tall Canes",cost:65,desc:"+20 range",mod:{range:20}},{name:"Feverish Growth",cost:125,desc:"15% faster spray",mod:{rateMul:.85}},{name:"Bramble Storm",cost:280,desc:"+2 dmg, +20 range",mod:{damage:2,range:20}}]}]},voidgazer:{id:"voidgazer",name:"Voidgazer",element:"void",placement:"ground",family:"void",cost:130,desc:"A dark watcher from between the stars. Its red gaze burns single targets with searing lasers.",range:150,rate:1.1,damage:26,projSpeed:900,splash:0,chains:0,chainFalloff:0,color:"#e5383b",icon:"👁️",upgrades:[{name:"Death Ray",tiers:[{name:"Focused Beam",cost:90,desc:"+10 damage",mod:{damage:10}},{name:"Burning Gaze",cost:170,desc:"+14 damage",mod:{damage:14}},{name:"Annihilation",cost:360,desc:"+24 dmg, +15 range",mod:{damage:24,range:15}}]},{name:"Ever-Open Eye",tiers:[{name:"Quick Glance",cost:85,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Far Stare",cost:130,desc:"+35 range",mod:{range:35}},{name:"Unblinking",cost:320,desc:"25% faster attacks",mod:{rateMul:.75}}]}]},voidsylph:{id:"voidsylph",name:"Void Sylph",element:"void",placement:"ground",family:"void",cost:120,desc:"A dark fairy whose telekinesis plucks at ANY enemy on the map — nowhere to hide, but her touch is light.",range:9999,rate:.9,damage:6,projSpeed:420,splash:0,chains:0,chainFalloff:0,ignoreLOS:!0,color:"#c9184a",icon:"🧚",upgrades:[{name:"Puppeteer",tiers:[{name:"Firmer Grip",cost:80,desc:"+3 damage",mod:{damage:3}},{name:"Twin Threads",cost:160,desc:"+4 damage",mod:{damage:4}},{name:"Marionette",cost:340,desc:"+7 damage",mod:{damage:7}}]},{name:"Restless Hands",tiers:[{name:"Deft Fingers",cost:85,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Frantic Pace",cost:150,desc:"20% faster attacks",mod:{rateMul:.8}},{name:"Thousand Hands",cost:330,desc:"25% faster attacks",mod:{rateMul:.75}}]}]},voidmaw:{id:"voidmaw",name:"Voidmaw",element:"void",placement:"ground",family:"void",cost:125,desc:"A dark drake that exhales gouts of dark-red fire. Devastating splash, but only at arm's length.",range:85,rate:1.3,damage:20,projSpeed:520,splash:55,chains:0,chainFalloff:0,color:"#d00000",icon:"🐉",upgrades:[{name:"Dark Furnace",tiers:[{name:"Hotter Coals",cost:90,desc:"+8 damage",mod:{damage:8}},{name:"Wider Gout",cost:160,desc:"+18 splash radius",mod:{splash:18}},{name:"Conflagration",cost:350,desc:"+16 dmg, +12 splash",mod:{damage:16,splash:12}}]},{name:"Long Neck",tiers:[{name:"Stretch",cost:80,desc:"+20 range",mod:{range:20}},{name:"Quick Snap",cost:140,desc:"15% faster attacks",mod:{rateMul:.85}},{name:"Serpent Reach",cost:300,desc:"+30 range, +8 dmg",mod:{range:30,damage:8}}]}]},generic_wizard:{id:"generic_wizard",name:"Wizard",element:"physical",placement:"any",family:"wizard",isGeneric:!0,cost:90,desc:"An unproven apprentice. Place, then click to specialize into a random draw of elements.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#8a7aff",icon:"🧙",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_goblin:{id:"generic_goblin",name:"Goblin",element:"physical",placement:"ground",family:"goblin",isGeneric:!0,cost:75,desc:"A goblin recruit, itching for a job. Place, then click to specialize into a random draw of roles.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#7da35c",icon:"👺",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_archer:{id:"generic_archer",name:"Archer",element:"physical",placement:"ground",family:"archer",isGeneric:!0,cost:85,desc:"A fresh recruit with a training bow. Place, then click to specialize into a random draw of marksmen.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#c9a55b",icon:"🏹",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_void:{id:"generic_void",name:"Voidling",element:"void",placement:"ground",family:"void",isGeneric:!0,cost:95,desc:"Something that fell from between the stars. Place, then click to reveal what it truly is.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#e5383b",icon:"🌌",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]},generic_tree:{id:"generic_tree",name:"Sapling",element:"physical",placement:"ground",family:"tree",isGeneric:!0,cost:70,desc:"A drowsy young ent. Place, then click to awaken it into a random draw of tree-folk.",range:0,rate:0,damage:0,projSpeed:0,splash:0,chains:0,chainFalloff:0,color:"#5f9e57",icon:"🌱",upgrades:[{name:"—",tiers:[]},{name:"—",tiers:[]}]}},dl=["generic_wizard","generic_goblin","generic_archer","generic_tree","generic_void"];function cg(n){return Object.values(en).filter(e=>e.family===n&&!e.isGeneric&&!e.isEvolved)}const lg=[{name:"—",tiers:[]},{name:"—",tiers:[]}],dg={fire:{to:"phoenix",cost:380,cardId:"pr_wildfire"},ice:{to:"wintercourt",cost:380,cardId:"pr_executioner"},lightning:{to:"tempest",cost:400,cardId:"rx_conduct2"},water:{to:"tidelord",cost:350,cardId:"pr_soaked"},wind:{to:"zephyr",cost:350,cardId:"rx_evap1"},slingshot:{to:"warlord",cost:340,cardId:"pr_firstblood"},dynamite:{to:"sapperking",cost:380,cardId:"pr_powder"},gong:{to:"doomgong",cost:360,cardId:"pr_opportunist"},longbow:{to:"stormpiercer",cost:400,cardId:"arc_crit1"},ballesta:{to:"ironstorm",cost:360,cardId:"arc_root1"},bolas:{to:"chainwarden",cost:350,cardId:"arc_root1"},rootgrasp:{to:"elderroot",cost:360,cardId:"tre_crit1"},boulder:{to:"mountain",cost:400,cardId:"pr_harvest"},thornspitter:{to:"bramblehydra",cost:380,cardId:"tre_crit1"}};function sn(n,e){const t=en[n];return{element:t.element,placement:t.placement,family:t.family,cost:0,range:t.range,rate:t.rate,damage:t.damage,projSpeed:t.projSpeed,splash:t.splash,chains:t.chains,chainFalloff:t.chainFalloff,needsCloud:t.needsCloud,auraKind:t.auraKind,pierce:t.pierce,entangles:t.entangles,groundAttack:t.groundAttack,isEvolved:!0,upgrades:lg,...e}}Object.assign(en,{phoenix:sn("fire",{id:"phoenix",name:"Phoenix Herald",icon:"🐦‍🔥",color:"#ff8c42",desc:"EVOLVED. Fire made flesh — victims pass their flames on death, forever.",damage:26,rate:.75,splash:44,range:145,projSpeed:340,baseMods:{burnDps:5,burnDuration:1},innateFx:{spreadBurnOnDeath:!0}}),wintercourt:sn("ice",{id:"wintercourt",name:"Winter Court Sage",icon:"👑",color:"#a8e6ff",desc:"EVOLVED. The deep cold answers — Frozen enemies take +60% from her hand.",damage:15,rate:.6,range:155,projSpeed:400,baseMods:{chillPct:.15},innateFx:{bonusVsStatus:{status:"frozen",mult:1.6}}}),tempest:sn("lightning",{id:"tempest",name:"Tempest Lord",icon:"🌩️",color:"#d9a8ff",desc:"EVOLVED. The storm has opinions. Every 5th bolt is a CRIT; chains run long.",damage:32,rate:.9,range:165,chains:4,chainFalloff:.8,innateFx:{critEveryN:{n:5,mult:2}}}),tidelord:sn("water",{id:"tidelord",name:"Tidelord",icon:"🔱",color:"#26c2e8",desc:"EVOLVED. The pond obeys. Wet enemies take +50% from the tide.",damage:11,rate:.8,range:150,baseMods:{soakSlow:.1,wetDuration:2},innateFx:{bonusVsStatus:{status:"wet",mult:1.5}}}),zephyr:sn("wind",{id:"zephyr",name:"Zephyr Sovereign",icon:"🌀",color:"#bcd9ce",desc:"EVOLVED. Commands the wind itself — no cloud required, and the gusts hit like walls.",damage:9,rate:1,range:140,needsCloud:!1,baseMods:{knockback:40}}),warlord:sn("slingshot",{id:"warlord",name:"Goblin Warlord",icon:"👹",color:"#7da35c",desc:"EVOLVED. His shots pierce through the whole column. The lads cheer every volley.",damage:18,rate:.7,range:130,pierce:!0,projSpeed:460}),sapperking:sn("dynamite",{id:"sapperking",name:"Sapper King",icon:"💥",color:"#ffb163",desc:"EVOLVED. Everything he kills becomes a bomb. Chain reactions are the point.",damage:32,rate:1,splash:62,range:135,innateFx:{onKillExplode:{damage:26,radius:52}}}),doomgong:sn("gong",{id:"doomgong",name:"Gong of Doom",icon:"🛎️",color:"#f4d98a",desc:"EVOLVED. One strike and the whole field flinches — Rattled +40%, huge reach.",rate:1.6,range:160,baseMods:{rattlePct:.15}}),stormpiercer:sn("longbow",{id:"stormpiercer",name:"Stormpiercer",icon:"🏹",color:"#7dc98f",desc:"EVOLVED. An elven legend. Every 3rd arrow CRITS for double across half the map.",damage:55,rate:1.5,range:240,projSpeed:650,innateFx:{critEveryN:{n:3,mult:2}}}),ironstorm:sn("ballesta",{id:"ironstorm",name:"Ironstorm Arbalest",icon:"🎯",color:"#5b7fc9",desc:"EVOLVED. A crank-fed storm of bolts, each punching through the entire line.",damage:20,rate:.65,range:115,projSpeed:540}),chainwarden:sn("bolas",{id:"chainwarden",name:"Warden of Chains",icon:"⛓️",color:"#8c9c72",desc:"EVOLVED. Longer roots, crueler hits — Entangled enemies take +50% from him.",damage:12,rate:1.3,range:145,baseMods:{entangleDur:.5},innateFx:{bonusVsStatus:{status:"entangled",mult:1.5}}}),elderroot:sn("rootgrasp",{id:"elderroot",name:"Elderroot Colossus",icon:"🌲",color:"#4c6b38",desc:"EVOLVED. The forest remembers. Wider eruptions, crushing grip.",damage:17,rate:1.1,range:135,baseMods:{rootSlow:.15}}),mountain:sn("boulder",{id:"mountain",name:"The Walking Mountain",icon:"⛰️",color:"#8d7a5e",desc:"EVOLVED. Every kill splinters into shrapnel. Whole waves vanish under the rubble.",damage:42,rate:2.2,splash:62,range:150,projSpeed:240,innateFx:{onKillExplode:{damage:20,radius:48}}}),bramblehydra:sn("thornspitter",{id:"bramblehydra",name:"Bramble Hydra",icon:"🐉",color:"#6fcf5f",desc:"EVOLVED. Two heads, twice the needles, zero mercy. The ultimate proc machine.",damage:4,rate:.125,range:115,projSpeed:500})});function Jf(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const hl=[[[{type:"grunt",count:8,gap:.9,delay:0}],[{type:"grunt",count:13,gap:.7,delay:0}],[{type:"grunt",count:10,gap:.65,delay:0},{type:"runner",count:5,gap:.8,delay:3}],[{type:"runner",count:15,gap:.5,delay:0}],[{type:"knight",count:6,gap:1.3,delay:0},{type:"grunt",count:9,gap:.55,delay:4}],[{type:"golemling",count:1,gap:0,delay:0},{type:"shade",count:9,gap:.85,delay:2}],[{type:"gargoyle",count:2,gap:2,delay:0},{type:"runner",count:12,gap:.45,delay:2},{type:"orcraider",count:6,gap:.7,delay:4},{type:"knight",count:4,gap:1.1,delay:7}],[{type:"warlord",count:1,gap:0,delay:0},{type:"knight",count:4,gap:1.6,delay:5},{type:"grunt",count:8,gap:.6,delay:9}]],[[{type:"orcraider",count:12,gap:.55,delay:0},{type:"runner",count:6,gap:.6,delay:4}],[{type:"shade",count:10,gap:.7,delay:0},{type:"orcbrute",count:2,gap:3,delay:4},{type:"slime_big",count:2,gap:5,delay:2}],[{type:"orcraider",count:10,gap:.5,delay:0},{type:"orcshaman",count:1,gap:0,delay:2},{type:"gargoyle",count:4,gap:1.2,delay:3},{type:"knight",count:6,gap:.9,delay:4}],[{type:"runner",count:24,gap:.32,delay:0},{type:"thief",count:1,gap:0,delay:5}],[{type:"warwagon",count:1,gap:0,delay:0},{type:"hexer",count:1,gap:0,delay:2},{type:"shade",count:8,gap:.7,delay:3}],[{type:"knight",count:8,gap:.8,delay:0},{type:"orcshaman",count:2,gap:6,delay:2},{type:"gargoyle",count:5,gap:1,delay:3},{type:"orcraider",count:12,gap:.45,delay:4}],[{type:"runner",count:14,gap:.4,delay:0},{type:"orcbrute",count:3,gap:2.5,delay:3},{type:"slime_big",count:2,gap:4,delay:5},{type:"thief",count:1,gap:0,delay:6},{type:"golemling",count:1,gap:0,delay:7}],[{type:"warwagon",count:2,gap:9,delay:0},{type:"hexer",count:2,gap:7,delay:2},{type:"shade",count:10,gap:.6,delay:3}],[{type:"orcraider",count:16,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"gargoyle",count:6,gap:.9,delay:3},{type:"shieldbearer",count:1,gap:0,delay:4},{type:"orcbrute",count:3,gap:2.2,delay:5},{type:"knight",count:6,gap:.9,delay:9}],[{type:"pyretitan",count:1,gap:0,delay:0},{type:"orcshaman",count:1,gap:0,delay:4},{type:"gargoyle",count:4,gap:1.1,delay:5},{type:"orcraider",count:10,gap:.5,delay:6}]],[[{type:"orcraider",count:14,gap:.5,delay:0},{type:"wardrummer",count:1,gap:0,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"orcbrute",count:2,gap:3,delay:4}],[{type:"wraith",count:6,gap:1,delay:0},{type:"banshee",count:2,gap:4,delay:2},{type:"runner",count:12,gap:.4,delay:4}],[{type:"troll",count:1,gap:0,delay:0},{type:"hexer",count:2,gap:6,delay:2},{type:"knight",count:8,gap:.8,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"drake",count:3,gap:1.4,delay:3},{type:"shade",count:10,gap:.6,delay:4}],[{type:"orcraider",count:18,gap:.35,delay:0},{type:"orcshaman",count:2,gap:5,delay:2},{type:"necromancer",count:1,gap:0,delay:3},{type:"slime_big",count:2,gap:4,delay:4},{type:"wardrummer",count:1,gap:0,delay:5},{type:"orcbrute",count:3,gap:2.5,delay:6}],[{type:"troll",count:2,gap:8,delay:0},{type:"drake",count:4,gap:1.2,delay:2},{type:"banshee",count:2,gap:4,delay:3},{type:"wraith",count:6,gap:.9,delay:3}],[{type:"siegetower",count:1,gap:0,delay:0},{type:"warwagon",count:1,gap:0,delay:8},{type:"necromancer",count:2,gap:8,delay:2},{type:"thief",count:2,gap:5,delay:3},{type:"knight",count:8,gap:.7,delay:4}],[{type:"wraith",count:8,gap:.7,delay:0},{type:"drake",count:4,gap:1.1,delay:1},{type:"orcshaman",count:2,gap:5,delay:2},{type:"shieldbearer",count:1,gap:0,delay:3},{type:"troll",count:1,gap:0,delay:6},{type:"runner",count:12,gap:.4,delay:8}],[{type:"siegetower",count:2,gap:12,delay:0},{type:"wardrummer",count:2,gap:8,delay:2},{type:"necromancer",count:2,gap:9,delay:3},{type:"banshee",count:3,gap:3,delay:3},{type:"orcraider",count:16,gap:.35,delay:4},{type:"drake",count:5,gap:1,delay:6},{type:"orcbrute",count:4,gap:2.2,delay:8}],[{type:"colossus",count:1,gap:0,delay:0},{type:"orcshaman",count:2,gap:6,delay:4},{type:"shieldbearer",count:2,gap:8,delay:5},{type:"troll",count:1,gap:0,delay:8},{type:"drake",count:4,gap:1.2,delay:10},{type:"wraith",count:6,gap:.8,delay:12}]]],$f=hl.length;function Rd(n){return Ko(n).length}const Js=[{hp:1,speed:1,bounty:1},{hp:2,speed:1.08,bounty:1.35},{hp:3.4,speed:1.15,bounty:1.7}],hg=.08;function Ko(n){return hl[Math.min(n,hl.length-1)]}const ug=25,fg=3,vo=[{id:"enraged",name:"Enraged",desc:"+40% speed",speedMult:1.4},{id:"stoneskin",name:"Stoneskin",desc:"+60% health",hpMult:1.6},{id:"slippery",name:"Slippery",desc:"Immune to Wet",immune:["wet"]},{id:"fireproof",name:"Fireproof",desc:"Immune to Burn",immune:["burn"]},{id:"steadfast",name:"Steadfast",desc:"Immune to knockback",gustImmune:!0}],Cd=[{id:"fire_dmg1",name:"Searing Flames",desc:"All Fire Mages +4 damage",icon:"🔥",element:"fire",rarity:"common",mod:{damage:4}},{id:"fire_rate1",name:"Kindled Haste",desc:"Fire Mages attack 12% faster",icon:"🔥",element:"fire",rarity:"common",mod:{rateMul:.88}},{id:"fire_burn1",name:"Lingering Embers",desc:"Burn +4/s and lasts +1s",icon:"🔥",element:"fire",rarity:"uncommon",mod:{burnDps:4,burnDuration:1}},{id:"fire_splash1",name:"Bigger Booms",desc:"Fire splash radius +14",icon:"🔥",element:"fire",rarity:"uncommon",mod:{splash:14}},{id:"fire_dmg2",name:"Inferno Core",desc:"All Fire Mages +9 damage",icon:"🔥",element:"fire",rarity:"rare",mod:{damage:9}},{id:"ice_chill1",name:"Deeper Cold",desc:"Chill slows +8% more",icon:"❄️",element:"ice",rarity:"common",mod:{chillPct:.08}},{id:"ice_dmg1",name:"Jagged Icicles",desc:"All Frost Mages +3 damage",icon:"❄️",element:"ice",rarity:"common",mod:{damage:3}},{id:"ice_wet1",name:"Soaking Sleet",desc:"Frost Wet lasts +2s",icon:"❄️",element:"ice",rarity:"common",mod:{wetDuration:2}},{id:"ice_rate1",name:"Flash Freeze",desc:"Frost Mages attack 15% faster",icon:"❄️",element:"ice",rarity:"uncommon",mod:{rateMul:.85}},{id:"ice_range1",name:"Glacial Reach",desc:"Frost Mages +22 range",icon:"❄️",element:"ice",rarity:"uncommon",mod:{range:22}},{id:"ltn_dmg1",name:"Amped Bolts",desc:"All Storm Mages +5 damage",icon:"⚡",element:"lightning",rarity:"common",mod:{damage:5}},{id:"ltn_chain1",name:"Forked Streams",desc:"Chain lightning +1 target",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{chains:1}},{id:"ltn_range1",name:"Skyline Arcs",desc:"Storm Mages +25 range",icon:"⚡",element:"lightning",rarity:"common",mod:{range:25}},{id:"ltn_rate1",name:"Static Rhythm",desc:"Storm Mages attack 12% faster",icon:"⚡",element:"lightning",rarity:"uncommon",mod:{rateMul:.88}},{id:"wat_slow1",name:"Heavy Currents",desc:"Tide slow +8% stronger",icon:"🌊",element:"water",rarity:"common",mod:{soakSlow:.08}},{id:"wat_dmg1",name:"Crashing Waves",desc:"All Water Mages +4 damage",icon:"🌊",element:"water",rarity:"common",mod:{damage:4}},{id:"wat_range1",name:"High Tide",desc:"Water Mages +20 range",icon:"🌊",element:"water",rarity:"uncommon",mod:{range:20}},{id:"wat_wet1",name:"Drenching Pulse",desc:"Tide Wet lasts +2s",icon:"🌊",element:"water",rarity:"common",mod:{wetDuration:2}},{id:"wnd_kb1",name:"Tailwind",desc:"Gust knockback +20px",icon:"☁️",element:"wind",rarity:"common",mod:{knockback:20}},{id:"wnd_rate1",name:"Brisk Gales",desc:"Cloud Mages gust 15% faster",icon:"☁️",element:"wind",rarity:"uncommon",mod:{rateMul:.85}},{id:"wnd_range1",name:"Far Horizons",desc:"Cloud Mages +25 range",icon:"☁️",element:"wind",rarity:"common",mod:{range:25}},{id:"rx_conduct1",name:"Overcharge",desc:"Conduct deals 2.0x (was 1.6x)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{conductMult:2}},{id:"rx_conduct2",name:"Superconductor",desc:"Conduct extends chains by 3 (was 1)",icon:"💫",element:"all",rarity:"rare",unique:!0,reaction:{chainBonus:3}},{id:"rx_shatter1",name:"Brittle Frost",desc:"Shatter deals 2.6x (was 2.0x)",icon:"💎",element:"all",rarity:"rare",unique:!0,reaction:{shatterMult:2.6}},{id:"rx_freeze1",name:"Permafrost Grip",desc:"Freeze lasts 1.7s (was 1.1s)",icon:"🧊",element:"all",rarity:"uncommon",unique:!0,reaction:{freezeDuration:1.7}},{id:"rx_evap1",name:"Steam Burst",desc:"Evaporate burst 10 → 26 damage",icon:"♨️",element:"all",rarity:"uncommon",unique:!0,reaction:{evaporateBurst:26}},{id:"eco_gold1",name:"Windfall",desc:"+60 gold, right now",icon:"💰",element:"all",rarity:"common",econ:{goldNow:60}},{id:"eco_gold2",name:"Royal Grant",desc:"+140 gold, right now",icon:"💰",element:"all",rarity:"uncommon",econ:{goldNow:140}},{id:"eco_bounty1",name:"Bounty Board",desc:"+1 gold per kill",icon:"🪙",element:"all",rarity:"uncommon",econ:{bountyBonus:1}},{id:"eco_bounty2",name:"Head Hunter",desc:"+2 gold per kill",icon:"🪙",element:"all",rarity:"rare",unique:!0,econ:{bountyBonus:2}},{id:"eco_disc1",name:"Guild Discount",desc:"Towers cost 12% less",icon:"🏷️",element:"all",rarity:"uncommon",unique:!0,econ:{towerDiscountPct:12}},{id:"eco_interest1",name:"Compound Interest",desc:"Wave end: +1 gold per 15 held (max +30)",icon:"🏦",element:"all",rarity:"rare",unique:!0,fx:{interest:{per:15,cap:30}}},{id:"eco_trophy1",name:"Trophy Hunter",desc:"Kills have a 15% chance to drop +3 bonus gold",icon:"🏆",element:"all",rarity:"uncommon",unique:!0,fx:{onKillGold:{chance:.15,amount:3}}},{id:"arc_dmg1",name:"Bodkin Points",desc:"All Archers +4 damage",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{damage:4}},{id:"arc_range1",name:"Watchtower Drills",desc:"All Archers +18 range",icon:"🏹",element:"physical",family:"archer",rarity:"common",mod:{range:18}},{id:"arc_rate1",name:"Nimble Fingers",desc:"Archers attack 12% faster",icon:"🏹",element:"physical",family:"archer",rarity:"uncommon",mod:{rateMul:.88}},{id:"arc_crit1",name:"Overdraw",desc:"Every 4th Archer shot CRITS for 2.5x",icon:"🎯",element:"physical",family:"archer",rarity:"rare",unique:!0,fx:{critEveryN:{n:4,mult:2.5}}},{id:"arc_root1",name:"Cruel Snares",desc:"Archer damage +40% vs Entangled enemies",icon:"🪢",element:"physical",family:"archer",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"entangled",mult:1.4}}},{id:"tre_dmg1",name:"Heartwood",desc:"All Tree-folk +3 damage",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{damage:3}},{id:"tre_range1",name:"Elder Boughs",desc:"All Tree-folk +16 range",icon:"🌳",element:"physical",family:"tree",rarity:"common",mod:{range:16}},{id:"tre_rate1",name:"Rising Sap",desc:"Tree-folk attack 12% faster",icon:"🌳",element:"physical",family:"tree",rarity:"uncommon",mod:{rateMul:.88}},{id:"tre_crit1",name:"Thorn Volley",desc:"Every 6th Tree-folk attack CRITS for 3x",icon:"🌵",element:"physical",family:"tree",rarity:"rare",unique:!0,fx:{critEveryN:{n:6,mult:3}}},{id:"pr_adrenaline",name:"Adrenaline Surge",desc:"Every 10s, ALL towers frenzy: 2x attack speed for 3s",icon:"🫀",element:"all",rarity:"rare",unique:!0,fx:{frenzy:{period:10,duration:3,rateMul:.5}}},{id:"pr_warhymn",name:"Goblin War-Hymn",desc:"Every 8s, Goblins frenzy: 2x attack speed for 2.5s",icon:"🥁",element:"physical",family:"goblin",rarity:"uncommon",unique:!0,fx:{frenzy:{period:8,duration:2.5,rateMul:.5}}},{id:"pr_powder",name:"Powder Trail",desc:"Enemies killed by Goblins EXPLODE (30 dmg, small area)",icon:"🧨",element:"physical",family:"goblin",rarity:"rare",unique:!0,fx:{onKillExplode:{damage:30,radius:55}}},{id:"pr_wildfire",name:"Wildfire",desc:"Burning enemies pass their Burn to a neighbor on death",icon:"🔥",element:"fire",rarity:"rare",unique:!0,fx:{spreadBurnOnDeath:!0}},{id:"pr_harvest",name:"Soul Harvest",desc:"Every kill: ALL damage +0.2%, forever (max +30%)",icon:"👻",element:"all",rarity:"rare",unique:!0,fx:{onKillStackDamage:{pct:.2,capPct:30}}},{id:"pr_opportunist",name:"Opportunist",desc:"All damage +40% vs Rattled enemies",icon:"🎯",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"rattled",mult:1.4}}},{id:"pr_executioner",name:"Executioner",desc:"All damage +75% vs Frozen enemies",icon:"⚔️",element:"all",rarity:"rare",unique:!0,fx:{bonusVsStatus:{status:"frozen",mult:1.75}}},{id:"pr_firstblood",name:"First Blood",desc:"Physical damage +30% vs full-health enemies",icon:"🩸",element:"physical",rarity:"uncommon",unique:!0,fx:{bonusVsHealthy:{threshold:.99,mult:1.3}}},{id:"pr_soaked",name:"Riptide Predator",desc:"Lightning damage +35% vs Wet enemies",icon:"🌩️",element:"lightning",rarity:"uncommon",unique:!0,fx:{bonusVsStatus:{status:"wet",mult:1.35}}},{id:"pr_skywatch",name:"Skywatch",desc:"ALL towers deal +25% damage to FLYING enemies",icon:"🦅",element:"all",rarity:"uncommon",unique:!0,fx:{bonusVsFlying:{mult:1.25}}}],pg={common:60,uncommon:30,rare:10},Yf=25,Zf=[{id:"frozen_core",name:"Frozen Core",icon:"🧊",rarity:"rare",desc:"Enemies arrive with a chill in their bones (1 chill stack on spawn).",special:["spawnChill"]},{id:"cursed_hourglass",name:"Cursed Hourglass",icon:"⏳",rarity:"rare",desc:"Drafts show 4 cards — but enemies move 10% faster.",special:["draft4","hasteEnemies"]},{id:"blood_chalice",name:"Blood Chalice",icon:"🍷",rarity:"rare",desc:"Every 40 kills restores 1 life.",special:["killLives"]},{id:"sharpening_stone",name:"Sharpening Stone",icon:"🪨",rarity:"uncommon",desc:"ALL towers +2 damage.",payload:{id:"relic_sharp",name:"Sharpening Stone",desc:"",icon:"🪨",element:"all",rarity:"rare",mod:{damage:2}}},{id:"eagle_standard",name:"Eagle Standard",icon:"🦅",rarity:"uncommon",desc:"ALL towers +12 range.",payload:{id:"relic_eagle",name:"Eagle Standard",desc:"",icon:"🦅",element:"all",rarity:"rare",mod:{range:12}}},{id:"war_banner",name:"War Banner",icon:"🚩",rarity:"uncommon",desc:"Physical towers (goblins, archers, tree-folk) attack 8% faster.",payload:{id:"relic_banner",name:"War Banner",desc:"",icon:"🚩",element:"physical",rarity:"rare",mod:{rateMul:.92}}},{id:"molten_heart",name:"Molten Heart",icon:"🌋",rarity:"rare",desc:"Burn ticks +3/s and last +1s.",payload:{id:"relic_molten",name:"Molten Heart",desc:"",icon:"🌋",element:"fire",rarity:"rare",mod:{burnDps:3,burnDuration:1}}},{id:"storm_prism",name:"Storm Prism",icon:"🔮",rarity:"rare",desc:"Conduct deals 2.0x (up from 1.6x).",payload:{id:"relic_prism",name:"Storm Prism",desc:"",icon:"🔮",element:"all",rarity:"rare",reaction:{conductMult:2}}},{id:"golden_idol",name:"Golden Idol",icon:"🗿",rarity:"uncommon",desc:"+1 gold per kill.",payload:{id:"relic_idol",name:"Golden Idol",desc:"",icon:"🗿",element:"all",rarity:"rare",econ:{bountyBonus:1}}},{id:"beggars_bowl",name:"Beggar's Bowl",icon:"🥣",rarity:"uncommon",desc:"Wave end: +1 gold per 20 held (max +20).",payload:{id:"relic_bowl",name:"Beggar's Bowl",desc:"",icon:"🥣",element:"all",rarity:"rare",fx:{interest:{per:20,cap:20}}}},{id:"headsman_seal",name:"Headsman's Seal",icon:"🪓",rarity:"rare",desc:"All damage +35% vs Frozen enemies.",payload:{id:"relic_seal",name:"Headsman's Seal",desc:"",icon:"🪓",element:"all",rarity:"rare",fx:{bonusVsStatus:{status:"frozen",mult:1.35}}}},{id:"ancient_acorn",name:"Ancient Acorn",icon:"🌰",rarity:"uncommon",desc:"Tree-folk +2 damage and +15 range.",payload:{id:"relic_acorn",name:"Ancient Acorn",desc:"",icon:"🌰",element:"physical",family:"tree",rarity:"rare",mod:{damage:2,range:15}}}],Nh={uncommon:65,rare:35},Qf=[{id:"cursed_chest",name:"The Cursed Chest",icon:"🗝️",desc:"A chest hums with power in the treeline. The lock is warm to the touch, and something out there noticed you noticing it.",choices:[{label:"Open it",desc:"Gain a random relic — but the next wave becomes an ELITE.",effect:"chest_open"},{label:"Leave it",desc:"Walk away. Nothing happens.",effect:"skip"}]},{id:"blood_pact",name:"The Blood Pact",icon:"🩸",desc:'A hooded figure offers power for pain. "The realm remembers sacrifice," it whispers.',choices:[{label:"Sign the pact",desc:"Lose 3 lives → choose from a RARE card draft.",effect:"blood_pact"},{label:"Refuse",desc:"Keep your blood where it is.",effect:"skip"}]},{id:"merchant",name:"The Wandering Merchant",icon:"🧳",desc:'A cart rattles up the road, sagging under trinkets. "Artifacts! Genuine! Mostly."',choices:[{label:"Buy a relic (130 ◉)",desc:"Pay 130 gold for a random relic.",effect:"merchant_buy"},{label:"Decline",desc:"His prices are theft anyway.",effect:"skip"}]},{id:"training",name:"The Training Grounds",icon:"🎯",desc:'A veteran drillmaster sizes up your towers. "Give me one of them for an hour and 60 gold."',choices:[{label:"Pay 60 ◉",desc:"A random tower gains a free upgrade tier.",effect:"training"},{label:"Skip",desc:"They train themselves. Probably.",effect:"skip"}]},{id:"gambler",name:"The Gambler's Coin",icon:"🪙",desc:'A grinning imp flips a coin that never seems to land the same way twice. "Double or... well. You know."',choices:[{label:"Flip it",desc:"50%: DOUBLE your gold. 50%: lose half.",effect:"gamble"},{label:"Walk away",desc:"Your gold stays boring and safe.",effect:"skip"}]},{id:"storm_blessing",name:"The Storm Blessing",icon:"⛈️",desc:"A sky-spirit offers to drench the next wave in glory: slower, tougher foes — worth twice the bounty.",choices:[{label:"Accept",desc:"Next wave: enemies 20% slower, +30% HP, 2x bounty.",effect:"blessing"},{label:"Decline",desc:"The spirit shrugs and drifts off.",effect:"skip"}]}],mg=230,gg=20,Pd=.7,bg={conductMult:1.6,shatterMult:2,chainBonus:1,freezeDuration:1.1,evaporateBurst:10};function _g(){return{kills:0,leaks:0,wavesCleared:0,dmgByElement:{fire:0,ice:0,lightning:0,water:0,wind:0,physical:0,void:0},reactions:{conduct:0,shatter:0,evaporate:0,frozen:0},cardIds:[]}}function ep(n){const e=new Dh(n),t=(n.cloudPaths??[]).map(a=>new Dh({id:"",name:"",waypoints:[...a,a[0]]})),i=(n.props??[]).map(a=>{var o;return{x:a.x,y:a.y,r:(((o=qf[a.model])==null?void 0:o.blockRadius)??12)*a.scale}}),s=tg(e);for(const a of i){const{cx:o,cy:c}=Td(a.x,a.y);s.add(xo(o,c))}const r=t.flatMap((a,o)=>[0,a.total/2].map(c=>{const l=a.posAt(c);return{pathIdx:o,dist:c,x:l.x,y:l.y}}));return{map:n,track:e,blocked:s,water:new Set((n.water??[]).map(([a,o])=>xo(a,o))),blockers:i,clouds:r,cloudTracks:t}}function jo(n,e=Date.now()){return{...ep(n??wd(0,e)),phase:"build",gold:mg,lives:gg,round:0,act:0,speed:1,autoplay:!1,autoplayTimer:0,seed:e,rng:Jf(e),draftMods:[],pendingDraft:null,eliteDraft:!1,reaction:{...bg},bountyBonus:0,towerDiscountPct:0,waveModifier:null,lastEliteRound:-5,stats:_g(),clock:0,killStackPct:0,relics:[],nextNodes:["normal"],nodesForRound:-1,nodeChoice:"normal",nodePicked:!0,waveKind:"normal",forcedModifier:null,pendingRelicDraft:null,pendingEvent:null,seenEvents:[],enemies:[],wizards:[],projectiles:[],waveTime:0,pendingSpawns:[],selectedWizardId:null,placingType:null,mouseX:0,mouseY:0,mouseOnBoard:!1,nextId:1}}function tp(n){return ng.includes(n.map.id)}function xg(n){if(n.act>=$f-1)return!1;let e=0;for(const t of n.wizards)e+=Math.round(t.invested*Pd);return n.gold+=e,n.wizards=[],n.enemies=[],n.projectiles=[],n.selectedWizardId=null,n.placingType=null,n.act++,Object.assign(n,ep(wd(n.act,n.seed))),n.round=0,n.lastEliteRound=-5,n.nodesForRound=-1,n.nodeChoice="normal",n.nodePicked=!0,n.waveModifier=null,n.forcedModifier=null,n.phase="build",!0}function cc(n,e){e.damage&&(n.damage+=e.damage),e.rateMul&&(n.rate*=e.rateMul),e.range&&(n.range+=e.range),e.splash&&(n.splash+=e.splash),e.chains&&(n.chains+=e.chains),e.burnDps&&(n.burnDps+=e.burnDps),e.burnDuration&&(n.burnDuration+=e.burnDuration),e.chillPct&&(n.chillPct+=e.chillPct),e.wetDuration&&(n.wetDuration+=e.wetDuration),e.projSpeed&&(n.projSpeed+=e.projSpeed),e.soakSlow&&(n.soakSlow+=e.soakSlow),e.knockback&&(n.knockback+=e.knockback),e.rattlePct&&(n.rattlePct+=e.rattlePct),e.entangleDur&&(n.entangleDur+=e.entangleDur),e.rootSlow&&(n.rootSlow+=e.rootSlow)}function zi(n,e,t=[]){const i={range:n.range,rate:n.rate,damage:n.damage,projSpeed:n.projSpeed,splash:n.splash,chains:n.chains,chainFalloff:n.chainFalloff,burnDps:n.element==="fire"?6:0,burnDuration:n.element==="fire"?3:0,chillPct:n.element==="ice"?.3:0,wetDuration:n.element==="ice"?4:n.element==="water"?5:0,soakSlow:n.auraKind==="tide"?.2:0,knockback:n.auraKind==="gust"?70:0,rattlePct:n.auraKind==="rattle"?.25:0,entangleDur:n.entangles?1:0,rootSlow:n.groundAttack?.25:0};n.baseMods&&cc(i,n.baseMods);for(let s=0;s<2;s++)for(let r=0;r<e[s];r++)cc(i,n.upgrades[s].tiers[r].mod);for(const s of t){if(!s.mod)continue;const r=s.element===n.element||s.element==="all",a=!s.family||s.family===n.family;r&&a&&cc(i,s.mod)}return i}function np(n,e){const t=n.element===e.element||n.element==="all",i=!n.family||n.family===e.family;return t&&i}function Id(n,e){if(n.draftMods.push(e),n.stats.cardIds.push(e.id),e.reaction)for(const[t,i]of Object.entries(e.reaction))n.reaction[t]=i;e.econ&&(e.econ.goldNow&&(n.gold+=e.econ.goldNow),e.econ.bountyBonus&&(n.bountyBonus+=e.econ.bountyBonus),e.econ.towerDiscountPct&&(n.towerDiscountPct+=e.econ.towerDiscountPct));for(const t of n.wizards)t.stats=zi(t.def,t.tiers,n.draftMods)}function Jo(n,e){if(e!==null)return n.wizards.find(t=>t.id===e)}function ip(n,e,t){return n.wizards.find(i=>i.cx===e&&i.cy===t)}function $s(n,e,t,i){const s=xo(e,t);if(n.blocked.has(s)||ip(n,e,t))return!1;if((i==null?void 0:i.placement)==="any")return!0;const r=n.water.has(s),a=(i==null?void 0:i.placement)==="water";return r===a}function Ld(n,e,t,i){const s=[0,0],r=Xf(t,i),a={id:n.nextId++,def:e,cx:t,cy:i,x:r.x,y:r.y,cooldown:0,mode:"first",aim:-Math.PI/2,tiers:s,invested:e.cost,stats:zi(e,s,n.draftMods),recoil:0,attackCount:0,family:e.family};if(e.isGeneric){a.pendingSpecialize=!0;const o=n.water.has(xo(t,i));a.specializeOptions=vg(n,e.family,o)}return a}function sp(n,e,t){e.def=t,e.pendingSpecialize=!1,e.specializeOptions=void 0,e.stats=zi(t,e.tiers,n.draftMods),e.cooldown=0}function vg(n,e,t,i=3){const{specializationsFor:s}=yg();let r=s(e),a;e==="wizard"&&(t?(a=r.find(l=>l.placement==="water"),r=r.filter(l=>l.placement!=="water")):r=r.filter(l=>l.placement!=="water"),n.cloudTracks.length===0&&(r=r.filter(l=>!l.needsCloud)));const o=a?[a]:[],c=Math.max(0,i-o.length);for(let l=0;l<c&&r.length>0;l++){const d=Math.floor(n.rng()*r.length);o.push(r[d]),r.splice(d,1)}for(let l=o.length-1;l>0;l--){const d=Math.floor(n.rng()*(l+1));[o[l],o[d]]=[o[d],o[l]]}return o}function yg(){return{specializationsFor:cg}}function rp(n,e=3,t=!1){const{CARDS:i,RARITY_WEIGHT:s}=Mg(),r=new Set(n.draftMods.filter(c=>c.unique).map(c=>c.id));let a=i.filter(c=>!r.has(c.id));if(t){const c=a.filter(l=>l.rarity==="rare");c.length>=e&&(a=c)}const o=[];for(let c=0;c<e&&a.length>0;c++){const l=a.reduce((u,f)=>u+s[f.rarity],0);let d=n.rng()*l,h=a[0];for(const u of a)if(d-=s[u.rarity],d<=0){h=u;break}o.push(h),a=a.filter(u=>u.id!==h.id)}return o}function Mg(){return{CARDS:Cd,RARITY_WEIGHT:pg}}function yo(n,e){n.relics.some(t=>t.id===e.id)||(n.relics.push(e),e.payload&&Id(n,e.payload))}function Mo(n,e){return n.relics.some(t=>{var i;return(i=t.special)==null?void 0:i.includes(e)})}function ul(n,e=2){const t=new Set(n.relics.map(r=>r.id));let i=Zf.filter(r=>!t.has(r.id));const s=[];for(let r=0;r<e&&i.length>0;r++){const a=i.reduce((l,d)=>l+Nh[d.rarity],0);let o=n.rng()*a,c=i[0];for(const l of i)if(o-=Nh[l.rarity],o<=0){c=l;break}s.push(c),i=i.filter(l=>l.id!==c.id)}return s}const Sg=2,Uh=3;function ap(n){if(n.nodesForRound===n.round)return;if(n.nodesForRound=n.round,n.nodeChoice="normal",n.round>=Rd(n.act)-1){n.nextNodes=["normal"],n.nodePicked=!0;return}const e=["normal"];if(n.round>=Sg){const t=n.seenEvents.length<Eg();if(n.round>=Uh&&n.rng()<.5&&e.push("elite"),n.rng()<.35&&e.push("treasure"),n.rng()<.4&&t&&e.push("event"),e.length===1){const s=(n.round>=Uh?["treasure","event","elite"]:["treasure","event"]).filter(r=>r!=="event"||t);e.push(s[Math.floor(n.rng()*s.length)])}}n.nextNodes=e.slice(0,3),n.nodePicked=n.nextNodes.length<=1}function Eg(){return Qf.length}function op(n){const e=Qf.filter(i=>!n.seenEvents.includes(i.id));if(e.length===0)return null;const t=e[Math.floor(n.rng()*e.length)];return n.seenEvents.push(t.id),t}function Dd(n,e){const t=cp()[e.def.id];if(!t)return null;const i=e.tiers[0]>=e.def.upgrades[0].tiers.length&&e.tiers[1]>=e.def.upgrades[1].tiers.length,s=n.draftMods.some(a=>a.id===t.cardId),r=s?Math.floor(t.cost/2):t.cost;return i?n.gold<r?{ok:!1,cost:r,discounted:s,reason:"Not enough gold"}:{ok:!0,cost:r,discounted:s}:{ok:!1,cost:r,discounted:s,reason:"Max both paths first"}}function wg(n,e){const t=Dd(n,e),i=cp()[e.def.id];return!(t!=null&&t.ok)||!i?!1:(n.gold-=t.cost,e.invested+=t.cost,e.def=Tg(i.to),e.tiers=[0,0],e.stats=zi(e.def,e.tiers,n.draftMods),e.cooldown=0,!0)}function cp(){return dg}function Tg(n){return en[n]}const Tn={fire:{id:"fire",name:"Fire",color:"#ff6b35",glow:"#ffb163"},ice:{id:"ice",name:"Ice",color:"#5bc8f5",glow:"#b3ecff"},lightning:{id:"lightning",name:"Lightning",color:"#c77dff",glow:"#e8c3ff"},water:{id:"water",name:"Water",color:"#3a86ff",glow:"#8fc0ff"},wind:{id:"wind",name:"Wind",color:"#b8d8d0",glow:"#e6f7f1"},physical:{id:"physical",name:"Physical",color:"#a08060",glow:"#d4b896"},void:{id:"void",name:"Void",color:"#e5383b",glow:"#ff7b8a"}},Fd={grunt:{id:"grunt",name:"Grunt",hp:34,speed:68,radius:12,bounty:4,color:"#7da35c",resist:{}},runner:{id:"runner",name:"Runner",hp:22,speed:128,radius:10,bounty:5,color:"#d9a648",resist:{ice:1.4}},knight:{id:"knight",name:"Armored Knight",hp:110,speed:52,radius:13,bounty:10,color:"#8d99ae",resist:{ice:.5,lightning:.75,fire:1.5}},shade:{id:"shade",name:"Ember Shade",hp:60,speed:80,radius:11,bounty:8,color:"#b35442",resist:{fire:0,lightning:1.3}},golem:{id:"golem",name:"Obsidian Golem",hp:2600,speed:30,radius:22,bounty:200,color:"#5e4b8b",resist:{fire:.75,ice:.75},boss:!0,leakCost:10},golemling:{id:"golemling",name:"Golemling",hp:500,speed:42,radius:16,bounty:50,color:"#7a68a6",resist:{fire:.75,ice:.75},boss:!0},orcraider:{id:"orcraider",name:"Orc Raider",hp:55,speed:75,radius:12,bounty:6,color:"#5e7a3a",resist:{}},orcbrute:{id:"orcbrute",name:"Orc Brute",hp:260,speed:46,radius:15,bounty:14,color:"#4a5d33",resist:{},armor:120},troll:{id:"troll",name:"Troll",hp:1300,speed:34,radius:19,bounty:60,color:"#6a7d5e",resist:{},armor:320,regen:.015},warwagon:{id:"warwagon",name:"War Wagon",hp:900,speed:40,radius:20,bounty:45,color:"#7a5c38",resist:{},vehicle:"wagon",leakCost:8,deathSpawns:["orcraider","orcraider","orcraider","orcraider","orcraider"]},siegetower:{id:"siegetower",name:"Siege Tower",hp:1600,speed:30,radius:22,bounty:80,color:"#6b4f30",resist:{},vehicle:"tower",leakCost:10,dropSpawns:{type:"orcraider",count:2,period:5}},orcshaman:{id:"orcshaman",name:"Orc Shaman",hp:140,speed:60,radius:11,bounty:18,color:"#3f8f5c",resist:{},aura:{kind:"heal",radius:110,power:.03,period:2}},wardrummer:{id:"wardrummer",name:"War Drummer",hp:300,speed:55,radius:13,bounty:22,color:"#8a5c3a",resist:{},aura:{kind:"haste",radius:120,power:.18}},wraith:{id:"wraith",name:"Wraith",hp:220,speed:95,radius:11,bounty:20,color:"#9db8c9",resist:{},phase:{period:5,duration:1.6}},gargoyle:{id:"gargoyle",name:"Gargoyle",hp:90,speed:85,radius:11,bounty:12,color:"#8d99ae",resist:{ice:.8},flying:!0},drake:{id:"drake",name:"Ember Drake",hp:380,speed:110,radius:14,bounty:30,color:"#c25a2e",resist:{fire:.5},flying:!0,innateImmune:["burn"]},hexer:{id:"hexer",name:"Hexer",hp:160,speed:55,radius:11,bounty:20,color:"#7a4a9e",resist:{},hexes:{period:6,duration:3,radius:150}},banshee:{id:"banshee",name:"Banshee",hp:130,speed:90,radius:10,bounty:18,color:"#cfd8e8",resist:{},deathSilence:{radius:100,duration:2.5}},slime_big:{id:"slime_big",name:"Great Slime",hp:320,speed:45,radius:16,bounty:10,color:"#5fbf4a",resist:{},deathSpawns:["slime_mid","slime_mid"]},slime_mid:{id:"slime_mid",name:"Slime",hp:120,speed:55,radius:12,bounty:6,color:"#74d15e",resist:{},deathSpawns:["slime_small","slime_small"]},slime_small:{id:"slime_small",name:"Slimeling",hp:45,speed:70,radius:8,bounty:3,color:"#8ce276",resist:{}},necromancer:{id:"necromancer",name:"Necromancer",hp:200,speed:50,radius:12,bounty:25,color:"#3a2f4e",resist:{},dropSpawns:{type:"risen",count:2,period:5}},risen:{id:"risen",name:"Risen",hp:40,speed:60,radius:10,bounty:2,color:"#9a92b5",resist:{}},thief:{id:"thief",name:"Thief",hp:100,speed:130,radius:10,bounty:15,color:"#d9c148",resist:{},stealsGold:25},shieldbearer:{id:"shieldbearer",name:"Shieldbearer",hp:350,speed:48,radius:14,bounty:22,color:"#5b7fc9",resist:{},aura:{kind:"ward",radius:110,power:60}},warlord:{id:"warlord",name:"Ironhide Warlord",hp:2100,speed:26,radius:24,bounty:250,color:"#6e7b8a",resist:{ice:.8},boss:!0,armor:700,leakCost:10,hexes:{period:2,duration:3,radius:9999}},pyretitan:{id:"pyretitan",name:"Pyre Titan",hp:4800,speed:24,radius:26,bounty:350,color:"#c25a2e",resist:{fire:0,lightning:1.15},boss:!0,leakCost:10,innateImmune:["burn","chill"]},colossus:{id:"colossus",name:"Dread Colossus",hp:8600,speed:20,radius:30,bounty:600,color:"#3d2f5e",resist:{fire:.5},boss:!0,armor:1600,leakCost:25,innateImmune:["chill"],armorBreakSpawns:["golemling","golemling","golemling"]}},te={particles:[],floaters:[],arcs:[],rings:[],ring(n,e,t,i=26){this.rings.push({x:n,y:e,maxR:i,life:.35,maxLife:.35,color:t})},burst(n,e,t,i,s,r=3,a=.45){for(let o=0;o<i;o++){const c=Math.random()*Math.PI*2,l=s*(.4+Math.random()*.6);this.particles.push({x:n,y:e,vx:Math.cos(c)*l,vy:Math.sin(c)*l,life:a,maxLife:a,size:r*(.6+Math.random()*.8),color:t,drag:3.5,gravity:0})}},floater(n,e,t,i,s=12){this.floaters.push({x:n+(Math.random()-.5)*10,y:e,text:t,color:i,life:.9,maxLife:.9,size:s})},arc(n,e,t,i,s,r=2.5){const o=t-n,c=i-e,l=Math.hypot(o,c)||1,d=-c/l,h=o/l,u=[{x:n,y:e}];for(let f=1;f<7;f++){const g=f/7,v=(Math.random()-.5)*l*.22;u.push({x:n+o*g+d*v,y:e+c*g+h*v})}u.push({x:t,y:i}),this.arcs.push({pts:u,life:.18,maxLife:.18,color:s,width:r})},update(n){for(const e of this.particles){e.life-=n;const t=Math.max(0,1-e.drag*n);e.vx*=t,e.vy=e.vy*t+e.gravity*n,e.x+=e.vx*n,e.y+=e.vy*n}this.particles=this.particles.filter(e=>e.life>0);for(const e of this.floaters)e.life-=n,e.y-=28*n;this.floaters=this.floaters.filter(e=>e.life>0);for(const e of this.arcs)e.life-=n;this.arcs=this.arcs.filter(e=>e.life>0);for(const e of this.rings)e.life-=n;this.rings=this.rings.filter(e=>e.life>0)},clear(){this.particles.length=0,this.floaters.length=0,this.arcs.length=0,this.rings.length=0},draw(n){n.save();for(const e of this.rings){const t=1-e.life/e.maxLife;n.globalAlpha=(1-t)*.7,n.strokeStyle=e.color,n.lineWidth=2.5*(1-t)+.5,n.beginPath(),n.arc(e.x,e.y,e.maxR*t,0,Math.PI*2),n.stroke()}n.globalAlpha=1;for(const e of this.particles){const t=e.life/e.maxLife;n.globalAlpha=t,n.fillStyle=e.color,n.beginPath(),n.arc(e.x,e.y,e.size*t,0,Math.PI*2),n.fill()}for(const e of this.arcs){const t=e.life/e.maxLife;n.globalAlpha=t,n.strokeStyle=e.color,n.lineWidth=e.width,n.shadowColor=e.color,n.shadowBlur=8,n.beginPath(),n.moveTo(e.pts[0].x,e.pts[0].y);for(let i=1;i<e.pts.length;i++)n.lineTo(e.pts[i].x,e.pts[i].y);n.stroke(),n.shadowBlur=0}n.globalAlpha=1,n.textAlign="center";for(const e of this.floaters){const t=e.life/e.maxLife;n.globalAlpha=Math.min(1,t*2),n.font=`bold ${e.size}px 'Segoe UI', sans-serif`,n.lineWidth=3,n.strokeStyle="rgba(0,0,0,0.6)",n.strokeText(e.text,e.x,e.y),n.fillStyle=e.color,n.fillText(e.text,e.x,e.y)}n.restore()}};let gt=null,qn=null,lp=null,pa=!1,lc=.5;function mt(n,e=.04){return n*(1+(Math.random()*2-1)*e)}function Ag(n){const e=Math.floor(n.sampleRate*1.4),t=n.createBuffer(2,e,n.sampleRate);for(let i=0;i<2;i++){const s=t.getChannelData(i);for(let r=0;r<e;r++)s[r]=(Math.random()*2-1)*Math.pow(1-r/e,2.4)}return t}const kh=new Map;function It(n,e){if(!gt)return null;const t=performance.now();return t-(kh.get(n)??-1/0)<e?null:(kh.set(n,t),gt.state==="suspended"&&gt.resume(),gt)}function rn(){return gt?(gt.state==="suspended"&&gt.resume(),gt):null}function Rg(n){const e=n.sampleRate*1.5,t=n.createBuffer(1,e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<e;s++)i[s]=Math.random()*2-1;return t}function be(n,e,t,i){const s=n.createGain();return s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(1e-4,t),e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+i),s.connect(qn),s}function nt(n,e,t,i,s,r){const a=n.createOscillator();a.type=e,a.frequency.setValueAtTime(t,i),a.connect(r),a.start(i),a.stop(i+s)}function Tt(n,e,t,i,s,r,a){const o=n.createOscillator();o.type=e,o.frequency.setValueAtTime(Math.max(1,t),s),o.frequency.exponentialRampToValueAtTime(Math.max(1,i),s+r),o.connect(a),o.start(s),o.stop(s+r)}function At(n,e,t,i,s){const r=n.createBufferSource();if(r.buffer=lp,r.loop=!0,s){const a=n.createBiquadFilter();a.type=s.type,a.frequency.setValueAtTime(s.f0,e),s.f1&&a.frequency.exponentialRampToValueAtTime(Math.max(1,s.f1),e+t),a.Q.value=s.q??1,r.connect(a),a.connect(i)}else r.connect(i);r.start(e),r.stop(e+t)}const Me={init(){if(gt){gt.resume();return}try{gt=new AudioContext,qn=gt.createGain(),qn.gain.value=pa?0:lc;const n=gt.createBiquadFilter();n.type="lowpass",n.frequency.value=11e3;const e=gt.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4;const t=gt.createConvolver();t.buffer=Ag(gt);const i=gt.createGain();i.gain.value=.18,qn.connect(n),n.connect(e),e.connect(gt.destination),e.connect(t),t.connect(i),i.connect(gt.destination),lp=Rg(gt)}catch{gt=null}},bus(){return gt&&qn?{ctx:gt,target:qn}:null},setVolume(n){lc=n,qn&&!pa&&(qn.gain.value=n)},setMuted(n){pa=n,qn&&(qn.gain.value=n?0:lc)},isMuted(){return pa},fireCast(){const n=It("fire",90);if(!n)return;const e=n.currentTime;At(n,e,.28,be(n,e,.5,.28),{type:"bandpass",f0:mt(400),f1:1600,q:1.2}),Tt(n,"sawtooth",mt(160),60,e,.25,be(n,e,.15,.25))},iceCast(){const n=It("ice",90);if(!n)return;const e=n.currentTime;nt(n,"triangle",mt(1320),e,.3,be(n,e,.25,.3)),nt(n,"triangle",mt(1980),e+.03,.25,be(n,e+.03,.15,.25))},boltCast(){const n=It("bolt",90);if(!n)return;const e=n.currentTime;At(n,e,.16,be(n,e,.55,.16),{type:"highpass",f0:2e3,q:.7}),Tt(n,"square",mt(800),90,e,.12,be(n,e,.2,.12))},waterPulse(){const n=rn();if(!n)return;const e=n.currentTime;Tt(n,"sine",90,220,e,.35,be(n,e,.45,.4)),At(n,e+.05,.3,be(n,e+.05,.18,.3),{type:"lowpass",f0:700,f1:250})},windGust(){const n=rn();if(!n)return;const e=n.currentTime;At(n,e,.5,be(n,e,.4,.5),{type:"bandpass",f0:300,f1:1200,q:.6})},gongPulse(){const n=It("gong",200);if(!n)return;const e=n.currentTime;nt(n,"sine",55,e,1.4,be(n,e,.3,1.4)),nt(n,"sine",110,e,1.1,be(n,e,.4,1.1)),nt(n,"triangle",187,e,.9,be(n,e,.18,.9)),nt(n,"triangle",266,e,.7,be(n,e,.1,.7))},bowTwang(){const n=It("bow",80);if(!n)return;const e=n.currentTime;Tt(n,"triangle",mt(900,.07),320,e,.12,be(n,e,.35,.12)),At(n,e+.02,.14,be(n,e+.02,.12,.14),{type:"bandpass",f0:2200,f1:900,q:1.5})},thud(){const n=It("thud",110);if(!n)return;const e=n.currentTime;Tt(n,"sine",mt(140,.08),45,e,.22,be(n,e,.5,.22)),At(n,e,.1,be(n,e,.25,.1),{type:"lowpass",f0:500,f1:120})},explosion(){const n=It("boom",120);if(!n)return;const e=n.currentTime;Tt(n,"sine",mt(64),26,e,.5,be(n,e,.9,.5)),At(n,e,.45,be(n,e,.55,.45),{type:"lowpass",f0:3e3,f1:300});for(let t=0;t<3;t++){const i=.1+Math.random()*.22;At(n,e+i,.06,be(n,e+i,.16,.06),{type:"bandpass",f0:mt(1600,.3),q:2})}},armorClank(){const n=It("clank",100);if(!n)return;const e=n.currentTime;nt(n,"triangle",mt(1180,.06),e,.09,be(n,e,.3,.09)),nt(n,"triangle",mt(1730,.06),e,.07,be(n,e,.18,.07)),At(n,e,.05,be(n,e,.2,.05),{type:"highpass",f0:3500,q:1})},armorBreak(){const n=rn();if(!n)return;const e=n.currentTime;At(n,e,.5,be(n,e,.7,.5),{type:"bandpass",f0:2400,f1:500,q:.8}),Tt(n,"sine",90,35,e,.4,be(n,e,.6,.4));for(let t=0;t<5;t++){const i=.06+t*.07;nt(n,"triangle",mt(2200-t*320,.1),e+i,.12,be(n,e+i,.14,.12))}},bossRoar(){const n=It("roar",800);if(!n)return;const e=n.currentTime,t=be(n,e,.5,1.2),i=n.createBiquadFilter();i.type="bandpass",i.Q.value=1.4,i.frequency.setValueAtTime(280,e),i.frequency.exponentialRampToValueAtTime(900,e+.45),i.frequency.exponentialRampToValueAtTime(320,e+1.1);for(const s of[55,82.5,110.5]){const r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(mt(s,.02),e),r.connect(i),r.start(e),r.stop(e+1.2)}i.connect(t),Tt(n,"sine",60,38,e,1,be(n,e,.4,1))},actFanfare(){const n=rn();if(!n)return;const e=n.currentTime;[262,330,392,523,659].forEach((i,s)=>{const r=s*.16;nt(n,"sawtooth",i,e+r,.34,be(n,e+r,.16,.34)),nt(n,"triangle",i*2,e+r,.3,be(n,e+r,.08,.3))}),nt(n,"sawtooth",262,e+.85,.9,be(n,e+.85,.14,.9)),nt(n,"sawtooth",392,e+.85,.9,be(n,e+.85,.12,.9)),nt(n,"sawtooth",523,e+.85,.9,be(n,e+.85,.12,.9))},healChime(){const n=It("heal",250);if(!n)return;const e=n.currentTime;nt(n,"sine",mt(880,.02),e,.25,be(n,e,.14,.25)),nt(n,"sine",mt(1320,.02),e+.09,.3,be(n,e+.09,.1,.3))},drumBeat(){const n=It("drum",850);if(!n)return;const e=n.currentTime;Tt(n,"sine",120,55,e,.18,be(n,e,.45,.18)),Tt(n,"sine",110,50,e+.22,.18,be(n,e+.22,.3,.18)),At(n,e,.05,be(n,e,.12,.05),{type:"lowpass",f0:900})},phaseShimmer(){const n=It("phase",300);if(!n)return;const e=n.currentTime;At(n,e,.35,be(n,e,.16,.35),{type:"bandpass",f0:3200,f1:6800,q:3}),nt(n,"sine",mt(2093,.05),e,.3,be(n,e,.05,.3))},woodCrash(){const n=It("wood",300);if(!n)return;const e=n.currentTime;At(n,e,.3,be(n,e,.5,.3),{type:"bandpass",f0:700,f1:250,q:1}),Tt(n,"sine",110,45,e,.25,be(n,e,.4,.25));for(let t=0;t<2;t++){const i=.08+Math.random()*.12;At(n,e+i,.04,be(n,e+i,.2,.04),{type:"bandpass",f0:mt(1400,.2),q:3})}},hexZap(){const n=It("hex",200);if(!n)return;const e=n.currentTime;Tt(n,"square",mt(620,.05),110,e,.3,be(n,e,.3,.3)),At(n,e,.25,be(n,e,.15,.25),{type:"bandpass",f0:900,f1:300,q:2})},wail(){const n=It("wail",400);if(!n)return;const e=n.currentTime;Tt(n,"sine",mt(1180,.04),320,e,.9,be(n,e,.3,.9)),Tt(n,"sine",mt(1580,.04),420,e+.05,.85,be(n,e+.05,.2,.85)),At(n,e,.7,be(n,e,.1,.7),{type:"bandpass",f0:2400,f1:900,q:3})},squish(){const n=It("squish",100);if(!n)return;const e=n.currentTime;At(n,e,.12,be(n,e,.35,.12),{type:"lowpass",f0:900,f1:250}),Tt(n,"sine",mt(300,.15),90,e,.1,be(n,e,.25,.1))},hit(){const n=It("hit",70);if(!n)return;const e=n.currentTime;Tt(n,"sine",220,70,e,.09,be(n,e,.3,.09))},shatter(){const n=It("shatter",110);if(!n)return;const e=n.currentTime;At(n,e,.25,be(n,e,.5,.25),{type:"highpass",f0:3e3,q:1.5}),nt(n,"triangle",2640,e,.12,be(n,e,.2,.12))},conduct(){const n=It("conduct",110);if(!n)return;const e=n.currentTime;Tt(n,"square",1400,200,e,.18,be(n,e,.3,.18)),At(n,e,.14,be(n,e,.25,.14),{type:"highpass",f0:2500})},evaporate(){const n=rn();if(!n)return;const e=n.currentTime;At(n,e,.4,be(n,e,.3,.4),{type:"bandpass",f0:4500,f1:900,q:.8})},freeze(){const n=rn();if(!n)return;const e=n.currentTime;Tt(n,"triangle",1500,3200,e,.2,be(n,e,.25,.22)),nt(n,"triangle",990,e+.05,.2,be(n,e+.05,.12,.2))},coin(){const n=It("coin",80);if(!n)return;const e=n.currentTime;nt(n,"square",mt(1046,.02),e,.06,be(n,e,.12,.06)),nt(n,"square",mt(1568,.02),e+.06,.1,be(n,e+.06,.12,.1)),nt(n,"sine",3136,e+.1,.12,be(n,e+.1,.05,.12))},place(){const n=rn();if(!n)return;const e=n.currentTime;Tt(n,"sine",300,500,e,.12,be(n,e,.3,.14)),nt(n,"triangle",750,e+.08,.12,be(n,e+.08,.15,.12))},sell(){const n=rn();if(!n)return;const e=n.currentTime;Tt(n,"sine",500,280,e,.16,be(n,e,.25,.18))},upgrade(){const n=rn();if(!n)return;const e=n.currentTime;[523,659,784].forEach((t,i)=>nt(n,"triangle",t,e+i*.06,.12,be(n,e+i*.06,.2,.14)))},leak(){const n=rn();if(!n)return;const e=n.currentTime;Tt(n,"sawtooth",180,60,e,.3,be(n,e,.35,.3)),At(n,e,.2,be(n,e,.15,.2),{type:"lowpass",f0:300})},waveStart(){const n=rn();if(!n)return;const e=n.currentTime;nt(n,"sawtooth",262,e,.22,be(n,e,.18,.24)),nt(n,"sawtooth",392,e+.18,.3,be(n,e+.18,.2,.32))},win(){const n=rn();if(!n)return;const e=n.currentTime;[523,659,784,1046].forEach((t,i)=>nt(n,"triangle",t,e+i*.13,.3,be(n,e+i*.13,.25,.34)))},lose(){const n=rn();if(!n)return;const e=n.currentTime;[392,330,262].forEach((t,i)=>nt(n,"sawtooth",t,e+i*.18,.32,be(n,e+i*.18,.2,.36)))},click(){const n=rn();if(!n)return;const e=n.currentTime;nt(n,"square",660,e,.04,be(n,e,.08,.045))}};function Cg(n){return!n.groundAttack&&n.auraKind!=="tide"}function oa(n,e,t,i){const s=[];for(const r of n.enemies){if(r.hp<=0||r.phased)continue;const a=r.x-e,o=r.y-t,c=i+r.def.radius;a*a+o*o<=c*c&&s.push(r)}return s}function dp(n,e,t,i,s){for(const r of n.blockers){const a=i-e,o=s-t,c=a*a+o*o,l=c===0?0:Math.max(0,Math.min(1,((r.x-e)*a+(r.y-t)*o)/c)),d=e+l*a,h=t+l*o;if((r.x-d)**2+(r.y-h)**2<r.r*r.r)return!1}return!0}function Pg(n,e){const t=Cg(e.def),i=oa(n,e.x,e.y,e.stats.range).filter(s=>(t||!s.def.flying)&&(s.def.flying||e.def.ignoreLOS||dp(n,e.x,e.y,s.x,s.y)));if(i.length!==0)switch(e.mode){case"first":return i.reduce((s,r)=>r.dist>s.dist?r:s);case"last":return i.reduce((s,r)=>r.dist<s.dist?r:s);case"strong":return i.reduce((s,r)=>r.hp>s.hp?r:s);case"close":{const s=r=>(r.x-e.x)**2+(r.y-e.y)**2;return i.reduce((r,a)=>s(a)<s(r)?a:r)}}}function Nd(n,e){const t=n.draftMods.filter(i=>i.fx&&np(i,e.def)).map(i=>i.fx);return e.def.innateFx&&t.push(e.def.innateFx),t}function Ig(n,e){return n.clock%e.period<e.duration}function hp(n,e){e.attackCount++;let t=1+n.killStackPct/100;for(const i of Nd(n,e)){const s=i.critEveryN;s&&e.attackCount%s.n===0&&(t*=s.mult,te.floater(e.x,e.y-28,"CRIT!","#ffd75e",13),te.burst(e.x,e.y-10,"#ffd75e",6,90,2.5,.3))}return t}function Oh(n,e){let t=1;for(const i of Nd(n,e))i.frenzy&&Ig(n,i.frenzy)&&(t*=i.frenzy.rateMul);return t}function Bh(n,e,t){if(!e)return 1;let i=1;for(const s of Nd(n,e)){const r=s.bonusVsStatus;r&&t.statuses[r.status]&&(i*=r.mult);const a=s.bonusVsHealthy;a&&t.hp>=t.maxHp*a.threshold&&(i*=a.mult),s.bonusVsFlying&&t.def.flying&&(i*=s.bonusVsFlying.mult)}return i}const zh=95,Gh=3,Lg=.35,Vh=165,Dg=26,Fg=1.5,Ng=.25,Ug=1.5,kg=2.5,Og=.3,Bg=1.4,zg=14,Hh=30,Gg=1.6;function Vg(n,e){for(const t of n.clouds){const i=n.cloudTracks[t.pathIdx];t.dist=(t.dist+Dg*e)%i.total;const s=i.posAt(t.dist);t.x=s.x,t.y=s.y}}function Hg(n,e){return n.clouds.some(t=>(t.x-e.x)**2+(t.y-e.y)**2<=Vh*Vh)}function Wg(n,e){n.clock+=e;for(const t of n.wizards){if(t.pendingSpecialize)continue;if(t.recoil>0&&(t.recoil-=e),t.cooldown>0&&(t.cooldown-=e),t.silencedT!==void 0&&t.silencedT>0){t.silencedT-=e;continue}if(t.def.needsCloud&&(t.becalmed=!Hg(n,t),t.becalmed)){Math.random()<e*.5&&te.floater(t.x,t.y-30,"≋ no wind","#cfd8dc",10);continue}if(t.def.auraKind){if(t.cooldown<=0&&oa(n,t.x,t.y,t.stats.range).length>0){t.cooldown=t.stats.rate*Oh(n,t),t.recoil=.18;const s=hp(n,t);t.def.auraKind==="tide"?qg(n,t,s):t.def.auraKind==="gust"?Xg(n,t,s):Kg(n,t,s)}continue}const i=Pg(n,t);i&&(t.aim=Math.atan2(i.y-t.y,i.x-t.x),t.cooldown<=0&&(t.cooldown=t.stats.rate*Oh(n,t),t.recoil=.18,jg(n,t,i)))}}function qg(n,e,t=1){var i;Me.waterPulse(),te.ring(e.x,e.y,"#3a86ff",e.stats.range);for(const s of oa(n,e.x,e.y,e.stats.range))if(!s.def.flying&&(Un(n,s,e.stats.damage*t,"water",e),!(s.hp<=0)&&!((i=s.immunities)!=null&&i.includes("wet")))){if(s.statuses.burn){if(delete s.statuses.burn,n.stats.reactions.evaporate++,te.floater(s.x,s.y-18,"Evaporate!","#ffffff",12),Me.evaporate(),Un(n,s,n.reaction.evaporateBurst,"water",e),s.hp<=0)continue}else s.statuses.wet={t:e.stats.wetDuration};fp(n,s,e.stats.soakSlow),s.statuses.chill&&(s.statuses.chill.t=Ug)}}function Xg(n,e,t=1){Me.windGust(),te.ring(e.x,e.y,"#e6f7f1",e.stats.range*.7);for(const i of oa(n,e.x,e.y,e.stats.range)){if(Un(n,i,e.stats.damage*t,"wind",e),i.hp<=0||i.gustImmune||(i.gustCd??0)>0)continue;const s=e.stats.knockback*(i.def.boss?Ng:1);if(i.dist=Math.max(0,i.dist-s),i.gustCd=Fg,te.burst(i.x,i.y,"#e6f7f1",6,90,2.5,.35),!i.def.flying){const r=n.track.posAt(i.dist);i.x=r.x,i.y=r.y}}}function Kg(n,e,t=1){Me.gongPulse(),te.ring(e.x,e.y,"#c9a63f",e.stats.range);for(const i of oa(n,e.x,e.y,e.stats.range)){if(e.stats.damage>0&&Un(n,i,e.stats.damage*t,"physical",e),i.hp<=0)continue;const s=i.statuses.rattled;i.statuses.rattled={t:3,pct:Math.max((s==null?void 0:s.pct)??0,e.stats.rattlePct)},s||te.floater(i.x,i.y-14,"Rattled!","#c9a63f",11)}}function jg(n,e,t){const i=Tn[e.def.element],s=e.x+Math.cos(e.aim)*16,r=e.y+Math.sin(e.aim)*16;te.burst(s,r,i.glow,4,60,2,.25),e.def.element==="fire"?Me.fireCast():e.def.element==="ice"?Me.iceCast():e.def.element==="lightning"?Me.boltCast():e.def.family==="archer"?Me.bowTwang():e.def.family==="tree"&&Me.thud();const a=hp(n,e);if(e.def.element==="lightning")$g(n,e,t,a);else if(e.def.groundAttack)Jg(n,e,t,a);else if(e.def.pierce){const o=t.x-s,c=t.y-r,l=Math.hypot(o,c)||1;n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:0,targetId:-1,tx:t.x,ty:t.y,wizardId:e.id,visual:e.def.family==="archer"?"bolt":Wh(e.def),pierce:{dirX:o/l,dirY:c/l,traveled:0,maxDist:e.stats.range*Bg,hitIds:[]}})}else n.projectiles.push({id:n.nextId++,element:e.def.element,x:s,y:r,speed:e.stats.projSpeed,damage:e.stats.damage*a,splash:e.stats.splash,targetId:t.id,tx:t.x,ty:t.y,wizardId:e.id,visual:Wh(e.def),sx:s,sy:r})}function Wh(n){return n.family==="archer"?"arrow":n.id==="dynamite"||n.id==="sapperking"?"stick":n.id==="slingshot"||n.id==="boulder"||n.id==="mountain"?"rock":n.id==="thornspitter"||n.id==="bramblehydra"?"needle":n.id==="voidgazer"?"bolt":"orb"}function Jg(n,e,t,i=1){te.burst(t.x,t.y+4,"#6a8f4f",10,80,3,.4),te.ring(t.x,t.y,"#4c6b38",Hh);for(const s of n.enemies){if(s.hp<=0||s.def.flying)continue;const r=s.x-t.x,a=s.y-t.y;if(r*r+a*a>(Hh+s.def.radius)**2||(Un(n,s,e.stats.damage*i,e.def.element,e),s.hp<=0))continue;const o=s.statuses.snared;s.statuses.snared={t:Gg,pct:Math.max((o==null?void 0:o.pct)??0,e.stats.rootSlow)}}}function $g(n,e,t,i=1){const s=Tn.lightning;let r=1+e.stats.chains,a=e.stats.damage*i;const o=new Set;let c=t,l=e.x,d=e.y;for(;c&&r>0;)te.arc(l,d,c.x,c.y,s.glow),c.statuses.wet?(delete c.statuses.wet,r+=n.reaction.chainBonus,n.stats.reactions.conduct++,te.floater(c.x,c.y-18,"Conduct!","#e8c3ff",13),te.burst(c.x,c.y,"#c77dff",10,120,3),Me.conduct(),Un(n,c,a*n.reaction.conductMult,"lightning",e)):Un(n,c,a,"lightning",e),up(n,e,c),o.add(c.id),r--,a*=e.stats.chainFalloff,l=c.x,d=c.y,c=Yg(n,l,d,o)}function Yg(n,e,t,i){let s,r=zh*zh;for(const a of n.enemies){if(a.hp<=0||a.phased||i.has(a.id))continue;const o=(a.x-e)**2+(a.y-t)**2;o<=r&&dp(n,e,t,a.x,a.y)&&(r=o,s=a)}return s}function Zg(n,e){for(const t of n.projectiles){if(t.pierce){Qg(n,t,e);continue}const i=n.enemies.find(c=>c.id===t.targetId&&c.hp>0);i&&(t.tx=i.x,t.ty=i.y);const s=t.tx-t.x,r=t.ty-t.y,a=Math.hypot(s,r),o=t.speed*e;a<=Math.max(10,o)?(e0(n,t,i),t.speed=-1):(t.x+=s/a*o,t.y+=r/a*o,Math.random()<.6&&te.burst(t.x,t.y,Tn[t.element].glow,1,15,2,.3))}n.projectiles=n.projectiles.filter(t=>t.speed>=0)}function Qg(n,e,t){const i=e.pierce,s=Math.min(e.speed*t,i.maxDist-i.traveled);e.x+=i.dirX*s,e.y+=i.dirY*s,i.traveled+=s,e.tx=e.x+i.dirX*20,e.ty=e.y+i.dirY*20;const r=n.wizards.find(a=>a.id===e.wizardId);for(const a of n.enemies){if(a.hp<=0||a.phased||i.hitIds.includes(a.id))continue;const o=a.x-e.x,c=a.y-e.y,l=zg+a.def.radius;o*o+c*c>l*l||(i.hitIds.push(a.id),te.burst(a.x,a.y,Tn[e.element].glow,5,80,2.5,.3),fl(n,r,a,e.damage,e.element))}i.traveled>=i.maxDist?e.speed=-1:Math.random()<.5&&te.burst(e.x,e.y,Tn[e.element].glow,1,12,1.5,.2)}function e0(n,e,t){const i=Tn[e.element];te.burst(e.tx,e.ty,i.color,e.splash>0?14:7,e.splash>0?150:90,3),e.splash>=40&&(Me.explosion(),te.ring(e.tx,e.ty,"#ff7b00",e.splash),te.burst(e.tx,e.ty,"#9a9086",12,35,4,1.3));const s=n.wizards.find(r=>r.id===e.wizardId);if(t&&t.hp>0&&fl(n,s,t,e.damage,e.element),e.splash>0)for(const r of n.enemies){if(r.hp<=0||r===t)continue;const a=r.x-e.tx,o=r.y-e.ty;a*a+o*o<=(e.splash+r.def.radius)**2&&fl(n,s,r,e.damage*.6,e.element)}}function fl(n,e,t,i,s){s==="fire"&&(t.statuses.chill||t.statuses.frozen)&&(delete t.statuses.chill,delete t.statuses.frozen,i*=n.reaction.shatterMult,n.stats.reactions.shatter++,te.floater(t.x,t.y-18,"Shatter!","#b3ecff",13),te.burst(t.x,t.y,"#b3ecff",12,140,3),Me.shatter()),Un(n,t,i,s,e),e&&t.hp>0&&up(n,e,t)}function eo(n,e){var t;return((t=n.immunities)==null?void 0:t.includes(e))??!1}function up(n,e,t){const i=e.stats;if(e.def.element==="fire"&&i.burnDps>0&&!eo(t,"burn"))if(t.statuses.wet)delete t.statuses.wet,n.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Me.evaporate(),Un(n,t,n.reaction.evaporateBurst,"fire",e);else{const s=t.statuses.burn;t.statuses.burn={t:i.burnDuration,dps:Math.max((s==null?void 0:s.dps)??0,i.burnDps)}}if(e.def.entangles&&e.stats.entangleDur>0&&(t.entangleCd??0)<=0){const s=t.def.boss?e.stats.entangleDur*Og:e.stats.entangleDur;t.statuses.entangled={t:s},t.entangleCd=s+kg,te.floater(t.x,t.y-14,"Rooted!","#8c9c72",11),te.burst(t.x,t.y+6,"#6b7a52",8,70,2.5,.4)}if(e.def.element==="ice"){if(t.statuses.burn&&!eo(t,"wet")?(delete t.statuses.burn,n.stats.reactions.evaporate++,te.floater(t.x,t.y-18,"Evaporate!","#ffffff",12),te.burst(t.x,t.y,"#dddddd",8,80,2.5),Me.evaporate(),Un(n,t,n.reaction.evaporateBurst,"ice",e)):eo(t,"wet")||(t.statuses.wet={t:i.wetDuration}),t.hp<=0)return;fp(n,t,i.chillPct)}}function fp(n,e,t){if(e.statuses.frozen||eo(e,"chill"))return;const i=e.statuses.chill??{t:0,pct:0,stacks:0};if(i.stacks=Math.min(Gh,i.stacks+1),i.pct=Math.max(i.pct,t),i.t=2.5,e.statuses.chill=i,i.stacks>=Gh){delete e.statuses.chill;const s=e.def.boss?n.reaction.freezeDuration*Lg:n.reaction.freezeDuration;e.statuses.frozen={t:s},n.stats.reactions.frozen++,te.floater(e.x,e.y-18,"Frozen!","#e6f9ff",12),te.burst(e.x,e.y,"#b3ecff",10,100,3),Me.freeze()}}function Un(n,e,t,i,s){var d,h;if(e.hp<=0)return;if(e.armorHp!==void 0&&e.armorHp>0){const u=1+(((d=e.statuses.rattled)==null?void 0:d.pct)??0),f=Bh(n,s,e),g=t*u*f*(i==="physical"?1:.1);e.armorHp-=g,e.hitFlash=.12,n.stats.dmgByElement[i]=(n.stats.dmgByElement[i]??0)+g,g>=1&&te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(g)),i==="physical"?"#cdd7e0":"#6b7684",i==="physical"?11:9),i==="physical"&&Me.armorClank(),e.armorHp<=0&&t0(n,e);return}const r=e.def.resist[i]??1;if(r===0){te.floater(e.x,e.y-14,"Immune!","#999999",11);return}const a=1+(((h=e.statuses.rattled)==null?void 0:h.pct)??0),o=Bh(n,s,e),c=e.def.flying&&(s==null?void 0:s.def.family)==="archer"?1.5:1;let l=t*r*a*o*c;if(e.wardCap!==void 0&&l>e.wardCap&&(l=e.wardCap,te.floater(e.x,e.y-16,"warded","#8fb4ff",9)),e.hp-=l,e.hitFlash=.12,n.stats.dmgByElement[i]=(n.stats.dmgByElement[i]??0)+l,l>=1){const u=r>1?"#ffe08a":r<1?"#8899aa":"#ffffff";te.floater(e.x+(Math.random()-.5)*12,e.y-10,String(Math.round(l)),u,r>1?12:10)}e.hp<=0&&pp(n,e,s)}function Ud(n,e,t){const i=Fd[e];if(!i)return null;const s=Js[Math.min(n.act,Js.length-1)],r=i.hp*s.hp,a=Math.max(0,t),o=n.track.posAt(a),c={id:n.nextId++,def:i,hp:r,maxHp:r,dist:a,x:o.x,y:o.y,statuses:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:o.angle,hitFlash:0,speedMult:s.speed,armorHp:i.armor};return n.enemies.push(c),te.burst(o.x,o.y,i.color,10,120,3,.4),c}function t0(n,e){e.armorHp=0,te.floater(e.x,e.y-30,"ARMOR SHATTERED!","#ffd75e",15),te.burst(e.x,e.y,"#cdd7e0",22,190,4,.6),te.ring(e.x,e.y,"#cdd7e0",55),Me.armorBreak();for(const t of e.def.armorBreakSpawns??[])Ud(n,t,e.dist-20-Math.random()*30)}function pp(n,e,t){var r;const i=Js[Math.min(n.act,Js.length-1)].bounty,s=Math.round(e.def.bounty*(((r=n.waveModifier)==null?void 0:r.bountyMult)??1)*i)+n.bountyBonus;if(n.gold+=s,n.stats.kills++,te.floater(e.x,e.y-22,`+${s}`,"#ffd75e",12),te.burst(e.x,e.y,e.def.color,12,130,3.5,.5),te.ring(e.x,e.y,e.def.color,e.def.boss?46:24),Me.coin(),n.stats.kills%40===0&&Mo(n,"killLives")&&(n.lives++,te.floater(e.x,e.y-40,"🍷 +1 ❤","#ff9db5",14)),e.returning&&e.def.stealsGold&&(n.gold+=e.def.stealsGold,te.floater(e.x,e.y-34,`💰 +${e.def.stealsGold} recovered!`,"#7dff9b",13)),e.def.deathSilence){const a=e.def.deathSilence;te.ring(e.x,e.y,"#cfd8e8",a.radius),Me.wail();for(const o of n.wizards)o.pendingSpecialize||(o.x-e.x)**2+(o.y-e.y)**2<=a.radius*a.radius&&(o.silencedT=Math.max(o.silencedT??0,a.duration),te.floater(o.x,o.y-28,"silenced!","#cfd8e8",12))}e.def.deathSpawns&&(e.def.id.startsWith("slime")?(Me.squish(),te.burst(e.x,e.y,e.def.color,12,110,4,.5)):(Me.woodCrash(),te.floater(e.x,e.y-34,"The wagon breaks open!","#e0b070",13),te.burst(e.x,e.y,"#7a5c38",18,150,4,.6)),e.def.deathSpawns.forEach((o,c)=>Ud(n,o,e.dist-8-c*14))),n0(n,e,t)}function n0(n,e,t){for(const i of n.draftMods){if(!i.fx)continue;const s=i.element!=="all"||!!i.family,r=t?np(i,t.def):!s;qh(n,e,t,i.fx,r)}t!=null&&t.def.innateFx&&qh(n,e,t,t.def.innateFx,!0)}function qh(n,e,t,i,s){var c;if(i.spreadBurnOnDeath&&e.statuses.burn){let l,d=8100;for(const h of n.enemies){if(h===e||h.hp<=0||h.statuses.burn||(c=h.immunities)!=null&&c.includes("burn"))continue;const u=(h.x-e.x)**2+(h.y-e.y)**2;u<=d&&(d=u,l=h)}l&&(l.statuses.burn={t:Math.max(e.statuses.burn.t,1.5),dps:e.statuses.burn.dps},te.arc(e.x,e.y,l.x,l.y,"#ff7b00"),te.floater(l.x,l.y-16,"Wildfire!","#ff9b4a",11))}if(!s)return;const r=i.onKillExplode;if(r){Me.explosion(),te.burst(e.x,e.y,"#ffab5e",14,160,3.5),te.burst(e.x,e.y,"#9a9086",8,30,4,1.2),te.ring(e.x,e.y,"#ff7b00",r.radius);for(const l of n.enemies){if(l===e||l.hp<=0)continue;const d=l.x-e.x,h=l.y-e.y;d*d+h*h<=(r.radius+l.def.radius)**2&&Un(n,l,r.damage,"physical",t)}}const a=i.onKillGold;a&&n.rng()<a.chance&&(n.gold+=a.amount,te.floater(e.x,e.y-36,`+${a.amount} bonus`,"#ffd75e",11));const o=i.onKillStackDamage;o&&n.killStackPct<o.capPct&&(n.killStackPct=Math.min(o.capPct,n.killStackPct+o.pct))}function i0(n,e){for(const t of n.enemies)t.hasteMul=1,t.wardCap=void 0;for(const t of n.enemies){const i=t.def.aura;if(!(!i||t.hp<=0)){if(i.kind==="ward"){for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.wardCap=Math.min(s.wardCap??1/0,i.power))}continue}if(i.kind==="heal"){if(t.auraCd=(t.auraCd??i.period??2)-e,t.auraCd<=0){t.auraCd=i.period??2;let s=!1;for(const r of n.enemies){if(r===t||r.hp<=0||r.hp>=r.maxHp||(r.x-t.x)**2+(r.y-t.y)**2>i.radius*i.radius)continue;const o=r.maxHp*i.power;r.hp=Math.min(r.maxHp,r.hp+o),te.floater(r.x,r.y-12,`+${Math.round(o)}`,"#7dff9b",10),s=!0}s&&(te.ring(t.x,t.y,"#3fae5a",i.radius),Me.healChime())}}else{Me.drumBeat();for(const s of n.enemies){if(s===t||s.hp<=0)continue;(s.x-t.x)**2+(s.y-t.y)**2<=i.radius*i.radius&&(s.hasteMul=Math.max(s.hasteMul??1,1+i.power))}}}}for(const t of n.enemies){if(t.hp<=0)continue;const i=t.statuses;if(t.def.regen&&!i.frozen&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*t.def.regen*e)),t.def.dropSpawns&&(t.dropCd=(t.dropCd??t.def.dropSpawns.period)-e,t.dropCd<=0)){t.dropCd=t.def.dropSpawns.period,Me.woodCrash(),te.floater(t.x,t.y-30,"The tower unloads!","#e0b070",12);for(let a=0;a<t.def.dropSpawns.count;a++)Ud(n,t.def.dropSpawns.type,t.dist-18-a*14)}if(t.def.hexes&&(t.hexCd=(t.hexCd??t.def.hexes.period*.6)-e,t.hexCd<=0)){t.hexCd=t.def.hexes.period;const a=t.def.hexes.radius*t.def.hexes.radius,o=n.wizards.filter(c=>!c.pendingSpecialize&&(c.silencedT??0)<=0&&(c.x-t.x)**2+(c.y-t.y)**2<=a);if(o.length>0){const c=o[Math.floor(Math.random()*o.length)];c.silencedT=t.def.hexes.duration,te.arc(t.x,t.y,c.x,c.y,"#b06bff"),te.ring(c.x,c.y,"#7a4a9e",30),te.floater(c.x,c.y-30,"HEXED!","#b06bff",14),Me.hexZap()}}if(t.def.phase){t.phaseT=(t.phaseT??0)+e;const a=t.phaseT%t.def.phase.period,o=t.phased;t.phased=a>t.def.phase.period-t.def.phase.duration,t.phased!==o&&Me.phaseShimmer()}if(i.burn&&(s0(n,t,i.burn.dps*e),i.burn.t-=e,i.burn.t<=0&&delete i.burn),i.wet&&(i.wet.t-=e,i.wet.t<=0&&delete i.wet),i.chill&&(i.chill.t-=e,i.chill.t<=0&&delete i.chill),i.frozen&&(i.frozen.t-=e,i.frozen.t<=0&&delete i.frozen),i.rattled&&(i.rattled.t-=e,i.rattled.t<=0&&delete i.rattled),i.entangled&&(i.entangled.t-=e,i.entangled.t<=0&&delete i.entangled),i.snared&&(i.snared.t-=e,i.snared.t<=0&&delete i.snared),t.hp<=0)continue;let s=1;i.frozen||i.entangled?s=0:i.chill&&(s=Math.max(.25,1-i.chill.pct*(.6+.2*i.chill.stacks))),s>0&&i.snared&&(s*=Math.max(.2,1-i.snared.pct)),s*=t.hasteMul??1,t.animT+=s*e,t.hitFlash>0&&(t.hitFlash-=e),t.gustCd&&t.gustCd>0&&(t.gustCd-=e),t.entangleCd&&t.entangleCd>0&&(t.entangleCd-=e);const r=t.def.speed*(t.speedMult??1)*s*e;if(t.dist+=t.returning?-r:r,t.def.flying){const a=n.track.posAt(0),o=n.track.posAt(n.track.total),c=Math.hypot(o.x-a.x,o.y-a.y)||1,l=Math.max(0,Math.min(1,t.dist/c));t.x=a.x+(o.x-a.x)*l,t.y=a.y+(o.y-a.y)*l,t.angle=Math.atan2(o.y-a.y,o.x-a.x),t.dist>=c&&Xh(n,t)}else{const a=n.track.posAt(t.dist);t.x=a.x,t.y=a.y,t.angle=a.angle,t.returning?(t.angle+=Math.PI,t.dist<=0&&(t.hp=0)):t.dist>=n.track.total&&Xh(n,t)}}n.enemies=n.enemies.filter(t=>t.hp>0)}function Xh(n,e){if(e.def.stealsGold&&!e.returning){const i=Math.min(n.gold,e.def.stealsGold);n.gold-=i,e.returning=!0,te.floater(e.x,e.y-20,`💰 -${i} stolen!`,"#ffd75e",15),Me.leak();return}e.hp=0;const t=e.def.leakCost??(e.def.boss?5:1);n.lives-=t,n.stats.leaks++,te.floater(e.x-20,e.y,`-${t} ❤`,"#ff6b81",t>1?16:14),Me.leak(),n.lives<=0&&(n.lives=0,n.phase="lost",Me.lose())}function s0(n,e,t){var a;if(e.armorHp!==void 0&&e.armorHp>0)return;const i=e.def.resist.fire??1,s=1+(((a=e.statuses.rattled)==null?void 0:a.pct)??0),r=t*i*s;e.hp-=r,n.stats.dmgByElement.fire+=r,e.hp<=0&&pp(n,e)}const kd="wizardtd.run";function fs(n){if(n.phase==="won"||n.phase==="lost")return;const e={mapId:n.map.id,seed:n.seed,gold:n.gold,lives:n.lives,round:n.round,act:n.act,lastEliteRound:n.lastEliteRound,cardIds:n.draftMods.map(t=>t.id),wizards:n.wizards.map(t=>({defId:t.def.id,cx:t.cx,cy:t.cy,tiers:[...t.tiers],mode:t.mode,invested:t.invested})),stats:n.stats,killStackPct:n.killStackPct,relicIds:n.relics.map(t=>t.id),seenEvents:[...n.seenEvents]};try{localStorage.setItem(kd,JSON.stringify(e))}catch{}}function r0(){try{const n=localStorage.getItem(kd);if(!n)return null;const e=JSON.parse(n);return e.round>0||e.wizards.length>0?e:null}catch{return null}}function Od(){try{localStorage.removeItem(kd)}catch{}}function a0(n){const e=Kf(n.mapId);if(!e)return null;const t=jo(e,n.seed);for(const i of n.cardIds){const s=Cd.find(r=>r.id===i);s&&Id(t,s)}for(const i of n.relicIds??[]){const s=Zf.find(r=>r.id===i);s&&yo(t,s)}t.seenEvents=[...n.seenEvents??[]];for(const i of n.wizards){const s=en[i.defId];if(!s)continue;const r=Ld(t,s,i.cx,i.cy);r.tiers=i.tiers,r.mode=i.mode,r.invested=i.invested,r.stats=zi(s,r.tiers,t.draftMods),t.wizards.push(r)}return t.gold=n.gold,t.lives=n.lives,t.round=n.round,t.lastEliteRound=n.lastEliteRound,t.stats=n.stats,t.killStackPct=n.killStackPct??0,t.act=n.act??0,t.rng=Jf(n.seed+n.round*101),t}const Kh={id:"guarded",name:"Guarded",desc:"+25% HP — a relic awaits",hpMult:1.25};function Bd(n){const e=Ko(n.act);if(n.phase!=="build"||n.round>=e.length||!n.nodePicked&&n.nextNodes.length>1)return!1;fs(n);const t=e[n.round];n.waveKind=n.nodeChoice,n.waveModifier=null,n.forcedModifier?(n.waveModifier=n.forcedModifier,n.forcedModifier=null,n.waveModifier!==Kh&&n.waveModifier.id!=="blessed"&&(n.waveKind="elite"),te.floater(480,80,`★ ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="elite"?(n.waveModifier=o0(n),n.lastEliteRound=n.round,te.floater(480,80,`★ ELITE: ${n.waveModifier.name} — ${n.waveModifier.desc}`,"#ffd75e",15)):n.nodeChoice==="treasure"&&(n.waveModifier=Kh,te.floater(480,80,"💎 GUARDED: clear the wave to claim a relic","#7fd8ff",15)),n.pendingSpawns=[];for(const i of t)for(let s=0;s<i.count;s++)n.pendingSpawns.push({t:i.delay+s*i.gap,type:i.type});return n.pendingSpawns.sort((i,s)=>i.t-s.t),n.waveTime=0,n.phase="wave",Me.waveStart(),!0}function o0(n){const e=()=>vo[Math.floor(n.rng()*vo.length)],t=e();if(n.act<2)return t;let i=e();for(let s=0;s<5&&i.id===t.id;s++)i=e();return i.id===t.id?t:{id:`${t.id}+${i.id}`,name:`${t.name} ${i.name}`,desc:`${t.desc} & ${i.desc}`,speedMult:(t.speedMult??1)*(i.speedMult??1),hpMult:(t.hpMult??1)*(i.hpMult??1),immune:[...t.immune??[],...i.immune??[]],gustImmune:t.gustImmune||i.gustImmune}}function c0(n,e){var t;if(n.phase!=="wave"){n.phase==="build"&&n.autoplay&&n.autoplayTimer>0&&(n.autoplayTimer-=e,n.autoplayTimer<=0&&Bd(n));return}for(n.waveTime+=e;n.pendingSpawns.length>0&&n.pendingSpawns[0].t<=n.waveTime;){const i=n.pendingSpawns.shift();l0(n,i.type)}if(n.pendingSpawns.length===0&&n.enemies.length===0){const i=n.waveKind==="elite",s=n.waveKind==="treasure";if(n.waveModifier=null,n.waveKind="normal",n.round++,n.stats.wavesCleared++,n.round>=Ko(n.act).length)tp(n)&&n.act<$f-1?(n.phase="actClear",Me.actFanfare()):(n.phase="won",Me.win());else{const r=ug+fg*n.round;n.gold+=r;for(const a of n.draftMods){const o=(t=a.fx)==null?void 0:t.interest;if(!o)continue;const c=Math.min(o.cap,Math.floor(n.gold/o.per));c>0&&(n.gold+=c,te.floater(480,110,`+${c} interest 🏦`,"#ffd75e",13))}if(s)n.pendingRelicDraft=ul(n,2),n.phase="relic";else{const a=Mo(n,"draft4")?4:3;n.pendingDraft=rp(n,a,i),n.eliteDraft=i,n.phase="draft"}}}}function l0(n,e){const t=Fd[e],i=n.track.posAt(0),s=n.waveModifier,r=Js[Math.min(n.act,Js.length-1)],a=t.boss?1:1+n.round*hg,o=t.hp*((s==null?void 0:s.hpMult)??1)*r.hp*a,c=Mo(n,"hasteEnemies")?1.1:1,l=[...t.innateImmune??[],...(s==null?void 0:s.immune)??[]];n.enemies.push({id:n.nextId++,def:t,hp:o,maxHp:o,dist:0,x:i.x,y:i.y,statuses:Mo(n,"spawnChill")&&!l.includes("chill")?{chill:{t:2.5,pct:.15,stacks:1}}:{},wobble:Math.random()*Math.PI*2,animT:Math.random()*2,angle:i.angle,hitFlash:0,speedMult:((s==null?void 0:s.speedMult)??1)*c*r.speed,immunities:l.length>0?l:void 0,gustImmune:s==null?void 0:s.gustImmune,armorHp:t.armor}),t.boss&&(te.floater(i.x+30,i.y-20,`${t.name}!`,"#ff9db5",14),(t.armor||t.hp>=1500)&&Me.bossRoar())}function jr(n,e){return n.gold>=e}function pl(n,e){return Math.round(e*(1-n.towerDiscountPct/100))}function mp(n,e){return jr(n,e)?(n.gold-=e,!0):!1}function gp(n){return Math.floor(n.invested*Pd)}function d0(n,e){n.gold+=gp(e),n.wizards=n.wizards.filter(t=>t.id!==e.id),n.selectedWizardId===e.id&&(n.selectedWizardId=null)}const h0={common:"#9a92b5",uncommon:"#5bc8f5",rare:"#ffd75e"};let es,Tr=null,to=null;function u0(n){to=n,es=document.getElementById("draft-modal")}function f0(n){if(n.phase!=="draft"||!n.pendingDraft){Tr&&(es.classList.add("hidden"),Tr=null);return}Tr!==n.pendingDraft&&(Tr=n.pendingDraft,p0(n))}function p0(n){const e=n.pendingDraft;es.classList.remove("hidden"),es.innerHTML=`
    <div id="draft-inner">
      <h2>${n.eliteDraft?"★ Elite Spoils — choose a RARE":"Choose a card"}</h2>
      <div id="draft-cards"></div>
      <button id="draft-skip">Skip — take ${Yf} ◉</button>
    </div>`;const t=es.querySelector("#draft-cards");for(const i of e){const s=i.element==="all"?"#c9b8ff":Tn[i.element].color,r=document.createElement("button");r.className="draft-card",r.style.borderColor=s,r.innerHTML=`
      <div class="dc-icon" style="background:${s}22">${i.icon}</div>
      <div class="dc-name">${i.name}</div>
      <div class="dc-desc">${i.desc}</div>
      <div class="dc-rarity" style="color:${h0[i.rarity]}">◆ ${i.rarity}</div>`,r.addEventListener("click",()=>jh(n,i)),t.appendChild(r)}es.querySelector("#draft-skip").addEventListener("click",()=>jh(n,null))}function jh(n,e){e?(Id(n,e),Me.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#c9b8ff",16)):(n.gold+=Yf,Me.coin()),n.pendingDraft=null,n.eliteDraft=!1,n.phase="build",es.classList.add("hidden"),Tr=null,to==null||to()}let zs,Ar=null,no=null;function m0(n){no=n,zs=document.getElementById("specialize-modal")}function g0(n){const e=Jo(n,n.selectedWizardId),t=e!=null&&e.pendingSpecialize?e:void 0;if(!t){Ar&&(zs.classList.add("hidden"),Ar=null);return}Ar!==t&&(Ar=t,b0(n,t))}function b0(n,e){const t=e.specializeOptions??[];zs.classList.remove("hidden"),zs.innerHTML=`
    <div id="draft-inner">
      <h2>Specialize your ${e.family==="wizard"?"Wizard":"Goblin"}</h2>
      <div id="draft-cards"></div>
      <div id="spec-hint">Click elsewhere to decide later — it'll wait, idle, until you choose.</div>
    </div>`;const i=zs.querySelector("#draft-cards");for(const s of t){const r=document.createElement("button");r.className="draft-card",r.style.borderColor=s.color,r.innerHTML=`
      <div class="dc-icon" style="background:${s.color}22">${s.icon}</div>
      <div class="dc-name">${s.name}</div>
      <div class="dc-desc">${s.desc}</div>`,r.addEventListener("click",()=>_0(n,e,s)),i.appendChild(r)}}function _0(n,e,t){sp(n,e,t),Me.upgrade(),te.burst(e.x,e.y,t.color,14,120,3),te.floater(e.x,e.y-24,`${t.icon} ${t.name}!`,t.color,14),zs.classList.add("hidden"),Ar=null,no==null||no()}let Gs,ml,Rr=null,io=null,Jh="";function x0(n){io=n,Gs=document.getElementById("relic-modal"),ml=document.getElementById("relic-bar")}function v0(n){n.phase!=="relic"||!n.pendingRelicDraft?Rr&&(Gs.classList.add("hidden"),Rr=null):Rr!==n.pendingRelicDraft&&(Rr=n.pendingRelicDraft,y0(n));const e=n.relics.map(t=>t.id).join(",");if(e!==Jh){Jh=e,ml.innerHTML="";for(const t of n.relics){const i=document.createElement("div");i.className=`relic-chip ${t.rarity}`,i.textContent=t.icon,i.title=`${t.name} — ${t.desc}`,ml.appendChild(i)}}}function y0(n){const e=n.pendingRelicDraft;Gs.classList.remove("hidden"),Gs.innerHTML=`
    <div id="draft-inner">
      <h2>💎 Treasure! Choose a relic</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Gs.querySelector("#draft-cards");for(const i of e){const s=document.createElement("button");s.className="draft-card",s.style.borderColor=i.rarity==="rare"?"#ffd75e":"#5bc8f5",s.innerHTML=`
      <div class="dc-icon" style="background:#ffd75e22">${i.icon}</div>
      <div class="dc-name">${i.name}</div>
      <div class="dc-desc">${i.desc}</div>
      <div class="dc-rarity" style="color:${i.rarity==="rare"?"#ffd75e":"#5bc8f5"}">◆ ${i.rarity} relic</div>`,s.addEventListener("click",()=>M0(n,i)),t.appendChild(s)}}function M0(n,e){yo(n,e),Me.upgrade(),te.floater(480,200,`${e.icon} ${e.name}!`,"#ffd75e",16),n.pendingRelicDraft=null,n.phase="build",Gs.classList.add("hidden"),Rr=null,io==null||io()}const S0={id:"blessed",name:"Storm-Blessed",desc:"20% slower, +30% HP, 2x bounty",speedMult:.8,hpMult:1.3,bountyMult:2};function E0(n,e){switch(e){case"chest_open":{const t=ul(n,1)[0];t&&(yo(n,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),n.forcedModifier=vo[Math.floor(n.rng()*vo.length)],te.floater(480,210,"⚠ Something stirs... next wave is ELITE","#ff9db5",13),Me.upgrade();break}case"blood_pact":{n.lives=Math.max(1,n.lives-3),n.pendingDraft=rp(n,3,!0),n.eliteDraft=!0,n.phase="draft",Me.leak();break}case"merchant_buy":{if(n.gold<130){te.floater(480,180,"Not enough gold — he scoffs and rolls on.","#9a92b5",12);break}n.gold-=130;const t=ul(n,1)[0];t&&(yo(n,t),te.floater(480,180,`${t.icon} ${t.name}!`,"#ffd75e",15)),Me.coin();break}case"training":{if(n.gold<60){te.floater(480,180,"Not enough gold for the drillmaster.","#9a92b5",12);break}const t=n.wizards.filter(a=>!a.pendingSpecialize&&(a.tiers[0]<a.def.upgrades[0].tiers.length||a.tiers[1]<a.def.upgrades[1].tiers.length));if(t.length===0){te.floater(480,180,"No tower can be trained further.","#9a92b5",12);break}n.gold-=60;const i=t[Math.floor(n.rng()*t.length)],s=i.tiers[0]<i.def.upgrades[0].tiers.length?0:1,r=i.def.upgrades[s].tiers[i.tiers[s]];i.tiers[s]++,i.stats=w0(n,i),te.burst(i.x,i.y,"#c9b8ff",12,110,3),te.floater(i.x,i.y-24,`${r.name} — free!`,"#c9b8ff",12),Me.upgrade();break}case"gamble":{n.rng()<.5?(n.gold*=2,te.floater(480,180,`🪙 DOUBLE! ${n.gold} gold`,"#ffd75e",16),Me.coin()):(n.gold=Math.floor(n.gold/2),te.floater(480,180,`🪙 The imp cackles. ${n.gold} gold left`,"#ff9db5",14),Me.leak());break}case"blessing":{n.forcedModifier=S0,te.floater(480,180,"⛈️ The next wave is Storm-Blessed","#7fd8ff",14),Me.waterPulse();break}}n.pendingEvent=null,n.nodeChoice="normal",n.nodePicked=!0,n.nextNodes=n.nextNodes.filter(t=>t!=="event")}function w0(n,e){return zi(e.def,e.tiers,n.draftMods)}let Us,Cr=null,so=null;function T0(n){so=n,Us=document.getElementById("event-modal")}function A0(n){if(!n.pendingEvent){Cr&&(Us.classList.add("hidden"),Cr=null);return}Cr!==n.pendingEvent&&(Cr=n.pendingEvent,R0(n))}function R0(n){const e=n.pendingEvent;Us.classList.remove("hidden"),Us.innerHTML=`
    <div id="event-inner">
      <div class="ev-icon">${e.icon}</div>
      <h2>${e.name}</h2>
      <div class="ev-desc">${e.desc}</div>
      <div id="event-choices"></div>
    </div>`;const t=Us.querySelector("#event-choices");for(const i of e.choices){const s=document.createElement("button");s.className="ev-choice",s.innerHTML=`
      <div class="evc-label">${i.label}</div>
      <div class="evc-desc">${i.desc}</div>`,s.addEventListener("click",()=>{Me.click(),E0(n,i.effect),Us.classList.add("hidden"),Cr=null,so==null||so()}),t.appendChild(s)}}const bp={normal:{icon:"⚔️",label:"Normal",hint:"A standard wave. No surprises."},elite:{icon:"★",label:"Elite",hint:"A modified, harder wave — clear it for a RARE-only card draft."},treasure:{icon:"💎",label:"Treasure",hint:"Guarded wave (+25% HP) — clear it to claim a RELIC."},event:{icon:"❓",label:"Event",hint:"Something is happening on the road..."}};let ro,Ji,ao="",dc=-1;function C0(){ro=document.getElementById("node-picker"),Ji=document.getElementById("path-modal")}function P0(n){n.phase==="build"&&ap(n),I0(n),D0(n)}function I0(n){if(!(n.phase==="build"&&!n.nodePicked&&n.nextNodes.length>1&&!n.pendingEvent)){if(dc===n.round)return;Ji.classList.add("hidden");return}if(dc===n.round&&!Ji.classList.contains("hidden"))return;dc=n.round,Ji.classList.remove("hidden"),Ji.innerHTML=`
    <div id="draft-inner">
      <h2>🗺️ Choose your path — Wave ${n.round+1}</h2>
      <div id="draft-cards"></div>
    </div>`;const t=Ji.querySelector("#draft-cards");for(const i of n.nextNodes){const s=bp[i],r=document.createElement("button");r.className=`draft-card path-card ${i}`,r.innerHTML=`
      <div class="dc-icon">${s.icon}</div>
      <div class="dc-name">${s.label}</div>
      <div class="dc-desc">${s.hint}</div>`,r.addEventListener("click",()=>L0(n,i)),t.appendChild(r)}}function L0(n,e){Me.click(),e==="event"?(n.pendingEvent=op(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(t=>t!=="event"),n.nodeChoice="normal",n.nodePicked=!0)):(n.nodeChoice=e,n.nodePicked=!0),Ji.classList.add("hidden"),ao=""}function D0(n){const e=n.phase==="build"&&n.nodePicked&&n.nextNodes.length>1,t=`${e}|${n.nextNodes.join(",")}|${n.nodeChoice}|${n.nodesForRound}`;if(t!==ao&&(ao=t,ro.classList.toggle("hidden",!e),!!e)){ro.innerHTML="";for(const i of n.nextNodes){const s=bp[i],r=document.createElement("button");r.className=`node-btn ${i}${n.nodeChoice===i?" active":""}`,r.title=s.hint,r.innerHTML=`<span class="nb-icon">${s.icon}</span>${s.label}`,r.addEventListener("click",()=>{if(Me.click(),i==="event"){n.pendingEvent=op(n),n.pendingEvent||(n.nextNodes=n.nextNodes.filter(a=>a!=="event"));return}n.nodeChoice=i,ao=""}),ro.appendChild(r)}}}let ks,Pr=-1,oo=null;function F0(n){oo=n,ks=document.getElementById("actclear-modal")}function N0(n){if(n.phase!=="actClear"){Pr!==-1&&(ks.classList.add("hidden"),Pr=-1);return}Pr!==n.act&&(Pr=n.act,U0(n))}function U0(n){const e=wd(n.act+1,n.seed),t=n.wizards.reduce((i,s)=>i+Math.round(s.invested*Pd),0);ks.classList.remove("hidden"),ks.innerHTML=`
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
    </div>`,ks.querySelector("#btn-travel").addEventListener("click",()=>{ks.classList.add("hidden"),Pr=-1,oo==null||oo(n)})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="185",k0=0,$h=1,O0=2,Or=1,B0=2,Ir=3,bi=0,ln=1,Ft=2,pi=0,Vs=1,So=2,Yh=3,Zh=4,z0=5,$i=100,G0=101,V0=102,H0=103,W0=104,q0=200,X0=201,K0=202,j0=203,gl=204,bl=205,J0=206,$0=207,Y0=208,Z0=209,Q0=210,eb=211,tb=212,nb=213,ib=214,_l=0,xl=1,vl=2,Ys=3,yl=4,Ml=5,Sl=6,El=7,_p=0,sb=1,rb=2,Yn=0,xp=1,vp=2,yp=3,Gd=4,Mp=5,Sp=6,Ep=7,Qh="attached",ab="detached",wp=300,os=301,Zs=302,hc=303,uc=304,$o=306,Qs=1e3,Jn=1001,Eo=1002,Nt=1003,Tp=1004,Lr=1005,Ut=1006,co=1007,hi=1008,fn=1009,Ap=1010,Rp=1011,Jr=1012,Vd=1013,Qn=1014,Mn=1015,_i=1016,Hd=1017,Wd=1018,$r=1020,Cp=35902,Pp=35899,Ip=1021,Lp=1022,Sn=1023,xi=1026,ts=1027,qd=1028,Xd=1029,cs=1030,Kd=1031,jd=1033,lo=33776,ho=33777,uo=33778,fo=33779,wl=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,Ll=37488,Dl=37489,wo=37490,Fl=37491,Nl=37808,Ul=37809,kl=37810,Ol=37811,Bl=37812,zl=37813,Gl=37814,Vl=37815,Hl=37816,Wl=37817,ql=37818,Xl=37819,Kl=37820,jl=37821,Jl=36492,$l=36494,Yl=36495,Zl=36283,Ql=36284,To=36285,ed=36286,td=2200,ob=2201,cb=2202,Yr=2300,Zr=2301,fc=2302,eu=2303,Os=2400,Bs=2401,Ao=2402,Jd=2500,lb=2501,db=0,Dp=1,nd=2,hb=3200,id=0,ub=1,Fi="",Ht="srgb",mn="srgb-linear",Ro="linear",it="srgb",gs=7680,tu=519,fb=512,pb=513,mb=514,$d=515,gb=516,bb=517,Yd=518,_b=519,sd=35044,nu="300 es",$n=2e3,Qr=2001;function xb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yb(){const n=ea("canvas");return n.style.display="block",n}const iu={};function Co(...n){const e="THREE."+n.shift();console.log(e,...n)}function Fp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Te(...n){n=Fp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=Fp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Hs(...n){const e=n.join(" ");e in iu||(iu[e]=!0,Te(...n))}function Mb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Sb={[_l]:xl,[vl]:Sl,[yl]:El,[Ys]:Ml,[xl]:_l,[Sl]:vl,[El]:yl,[Ml]:Ys};class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const Br=Math.PI/180,er=180/Math.PI;function Fn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Zd(n,e){return(n%e+e)%e}function Eb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wb(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function Tb(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function Ab(n,e=1){return e-Math.abs(Zd(n,e*2)-e)}function Rb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ib(n,e){return n+Math.random()*(e-n)}function Lb(n){return n*(.5-Math.random())}function Db(n){n!==void 0&&(su=n);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fb(n){return n*Br}function Nb(n){return n*er}function Ub(n){return(n&n-1)===0&&n!==0}function kb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ob(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bb(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),d=a((e+i)/2),h=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*d,c*h,c*u,o*l);break;case"YZY":n.set(c*u,o*d,c*h,o*l);break;case"ZXZ":n.set(c*h,c*u,o*d,o*l);break;case"XZX":n.set(o*d,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*d,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*d,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Np={DEG2RAD:Br,RAD2DEG:er,generateUUID:Fn,clamp:We,euclideanModulo:Zd,mapLinear:Eb,inverseLerp:wb,lerp:zr,damp:Tb,pingpong:Ab,smoothstep:Rb,smootherstep:Cb,randInt:Pb,randFloat:Ib,randFloatSpread:Lb,seededRandom:Db,degToRad:Fb,radToDeg:Nb,isPowerOfTwo:Ub,ceilPowerOfTwo:kb,floorPowerOfTwo:Ob,setQuaternionFromProperEuler:Bb,normalize:st,denormalize:Dn},xh=class xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let xe=xh;class wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],d=i[s+2],h=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||c!==u||l!==f||d!==g){let m=c*u+l*f+d*g+h*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+v*o}else{c=c*p+u*o,l=l*p+f*o,d=d*p+g*o,h=h*p+v*o;const y=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=y,l*=y,d*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],d=i[s+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+c*f-l*u,e[t+1]=c*g+d*u+l*h-o*f,e[t+2]=l*g+d*f+o*u-c*h,e[t+3]=d*g-o*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(s/2),h=o(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h+u*f*g;break;case"YZX":this._x=u*d*h+l*f*g,this._y=l*f*h+u*d*g,this._z=l*d*g-u*f*h,this._w=l*d*h-u*f*g;break;case"XZY":this._x=u*d*h-l*f*g,this._y=l*f*h-u*d*g,this._z=l*d*g+u*f*h,this._w=l*d*h+u*f*g;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-i*l,this._z=r*d+a*l+i*c-s*o,this._w=a*d-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vh=class vh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),d=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*d,this.y=i+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;let C=vh;const pc=new C,ru=new wn,yh=class yh{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],h=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],b=s[7],E=s[2],w=s[5],R=s[8];return r[0]=a*v+o*y+c*E,r[3]=a*m+o*M+c*w,r[6]=a*p+o*b+c*R,r[1]=l*v+d*y+h*E,r[4]=l*m+d*M+h*w,r[7]=l*p+d*b+h*R,r[2]=u*v+f*y+g*E,r[5]=u*m+f*M+g*w,r[8]=u*p+f*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*r*d+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*r,f=l*r-a*c,g=t*h+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-d*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(d*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yh.prototype.isMatrix3=!0;let Oe=yh;const mc=new Oe,au=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zb(){const n={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mn]:{primaries:e,whitePoint:i,transfer:Ro,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:it,toXYZ:au,fromXYZ:ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const Xe=zb();function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class Gb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bs===void 0&&(bs=ea("canvas")),bs.width=e.width,bs.height=e.height;const s=bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vb=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gc(s[a].image)):r.push(gc(s[a]))}else r=gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}let Hb=0;const bc=new C;class kt extends Gi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Jn,s=Jn,r=Ut,a=hi,o=Sn,c=fn,l=kt.DEFAULT_ANISOTROPY,d=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Fn(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=wp;kt.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(f+1)/2,E=(p+1)/2,w=(d+u)/4,R=(h+v)/4,_=(g+m)/4;return M>b&&M>E?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=R/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=R/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(u-d)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let at=Mh;class Wb extends Gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new kt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Wb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Up extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qb extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xo=class Xo{constructor(e,t,i,s,r,a,o,c,l,d,h,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,d,h,u,f,g,v,m)}set(e,t,i,s,r,a,o,c,l,d,h,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,g=l*d,v=l*h;t[0]=u-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,v=o*h;t[0]=c*d,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+v,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xb,e,Kb)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ei.crossVectors(i,hn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ei.crossVectors(i,hn)),Ei.normalize(),ma.crossVectors(hn,Ei),s[0]=Ei.x,s[4]=ma.x,s[8]=hn.x,s[1]=Ei.y,s[5]=ma.y,s[9]=hn.y,s[2]=Ei.z,s[6]=ma.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],h=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],M=i[7],b=i[11],E=i[15],w=s[0],R=s[4],_=s[8],T=s[12],P=s[1],I=s[5],F=s[9],H=s[13],K=s[2],O=s[6],q=s[10],W=s[14],Q=s[3],ne=s[7],fe=s[11],_e=s[15];return r[0]=a*w+o*P+c*K+l*Q,r[4]=a*R+o*I+c*O+l*ne,r[8]=a*_+o*F+c*q+l*fe,r[12]=a*T+o*H+c*W+l*_e,r[1]=d*w+h*P+u*K+f*Q,r[5]=d*R+h*I+u*O+f*ne,r[9]=d*_+h*F+u*q+f*fe,r[13]=d*T+h*H+u*W+f*_e,r[2]=g*w+v*P+m*K+p*Q,r[6]=g*R+v*I+m*O+p*ne,r[10]=g*_+v*F+m*q+p*fe,r[14]=g*T+v*H+m*W+p*_e,r[3]=y*w+M*P+b*K+E*Q,r[7]=y*R+M*I+b*O+E*ne,r[11]=y*_+M*F+b*q+E*fe,r[15]=y*T+M*H+b*W+E*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=c*f-l*u,M=o*f-l*h,b=o*u-c*h,E=a*f-l*d,w=a*u-c*d,R=a*h-o*d;return t*(v*y-m*M+p*b)-i*(g*y-m*E+p*w)+s*(g*M-v*E+p*R)-r*(g*b-v*w+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-i*(r*d-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=t*o-i*a,M=t*c-s*a,b=t*l-r*a,E=i*c-s*o,w=i*l-r*o,R=s*l-r*c,_=d*v-h*g,T=d*m-u*g,P=d*p-f*g,I=h*m-u*v,F=h*p-f*v,H=u*p-f*m,K=y*H-M*F+b*I+E*P-w*T+R*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/K;return e[0]=(o*H-c*F+l*I)*O,e[1]=(s*F-i*H-r*I)*O,e[2]=(v*R-m*w+p*E)*O,e[3]=(u*w-h*R-f*E)*O,e[4]=(c*P-a*H-l*T)*O,e[5]=(t*H-s*P+r*T)*O,e[6]=(m*b-g*R-p*M)*O,e[7]=(d*R-u*b+f*M)*O,e[8]=(a*F-o*P+l*_)*O,e[9]=(i*P-t*F-r*_)*O,e[10]=(g*w-v*b+p*y)*O,e[11]=(h*b-d*w-f*y)*O,e[12]=(o*T-a*I-c*_)*O,e[13]=(t*I-i*T+s*_)*O,e[14]=(v*M-g*E-m*y)*O,e[15]=(d*E-h*M+u*y)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+i,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,u=r*l,f=r*d,g=r*h,v=a*d,m=a*h,p=o*h,y=c*l,M=c*d,b=c*h,E=i.x,w=i.y,R=i.z;return s[0]=(1-(v+p))*E,s[1]=(f+b)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(u+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+M)*R,s[9]=(m-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),c=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);const l=1/a,d=1/o,h=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=$n,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===$n)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=$n,c=!1){const l=this.elements,d=2/(t-e),h=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===$n)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xo.prototype.isMatrix4=!0;let ke=Xo;const _s=new C,Rn=new ke,Xb=new C(0,0,0),Kb=new C(1,1,1),Ei=new C,ma=new C,hn=new C,cu=new ke,lu=new wn;class Bi{constructor(e=0,t=0,i=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jb=0;const du=new C,xs=new wn,ni=new ke,ga=new C,cr=new C,Jb=new C,$b=new wn,hu=new C(1,0,0),uu=new C(0,1,0),fu=new C(0,0,1),pu={type:"added"},Yb={type:"removed"},vs={type:"childadded",child:null},_c={type:"childremoved",child:null};class pt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new C,t=new Bi,i=new wn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ga.copy(e):ga.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(cr,ga,this.up):ni.lookAt(ga,cr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ni),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yb),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Jb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,$b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new C(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class k{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=Zd(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=vc(a,r,e+1/3),this.g=vc(a,r,e),this.b=vc(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Xe.workingToColorSpace(jt.copy(this),e),Math.round(We(jt.r*255,0,255))*65536+Math.round(We(jt.g*255,0,255))*256+Math.round(We(jt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(jt.copy(this),t);const i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ht){Xe.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,s=jt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ba);const i=zr(wi.h,ba.h,t),s=zr(wi.s,ba.s,t),r=zr(wi.l,ba.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new k;k.NAMES=kp;class th{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new k(e),this.near=t,this.far=i}clone(){return new th(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qb extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new C,ii=new C,yc=new C,si=new C,ys=new C,Ms=new C,mu=new C,Mc=new C,Sc=new C,Ec=new C,wc=new at,Tc=new at,Ac=new at;class yn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ii.subVectors(i,t),yc.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ii),c=Cn.dot(yc),l=ii.dot(ii),d=ii.dot(yc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return wc.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),wc.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,i),Ac.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ac,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ii.subVectors(e,t),Cn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Cn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ys.subVectors(s,i),Ms.subVectors(r,i),Mc.subVectors(e,i);const c=ys.dot(Mc),l=Ms.dot(Mc);if(c<=0&&l<=0)return t.copy(i);Sc.subVectors(e,s);const d=ys.dot(Sc),h=Ms.dot(Sc);if(d>=0&&h<=d)return t.copy(s);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(ys,a);Ec.subVectors(e,r);const f=ys.dot(Ec),g=Ms.dot(Ec);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ms,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return mu.subVectors(r,s),o=(h-d)/(h-d+(f-g)),t.copy(s).addScaledVector(mu,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(i).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class An{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),xa.subVectors(this.max,lr),Ss.subVectors(e.a,lr),Es.subVectors(e.b,lr),ws.subVectors(e.c,lr),Ti.subVectors(Es,Ss),Ai.subVectors(ws,Es),Hi.subVectors(Ss,ws);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Hi.z,Hi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Hi.z,0,-Hi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Hi.y,Hi.x,0];return!Rc(t,Ss,Es,ws,xa)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,Ss,Es,ws,xa))?!1:(va.crossVectors(Ti,Ai),t=[va.x,va.y,va.z],Rc(t,Ss,Es,ws,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new C,new C,new C,new C,new C,new C,new C,new C],Pn=new C,_a=new An,Ss=new C,Es=new C,ws=new C,Ti=new C,Ai=new C,Hi=new C,lr=new C,xa=new C,va=new C,Wi=new C;function Rc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Wi.fromArray(n,r);const o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Lt=new C,ya=new xe;let e_=0;class qt extends Gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Op extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bp extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $e extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const t_=new An,dr=new C,Cc=new C;class ti{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):t_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Cc)),this.expandByPoint(dr.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let n_=0;const bn=new ke,Pc=new pt,Ts=new C,un=new An,hr=new An,Gt=new C;class bt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xb(e)?Bp:Op)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(un.min,hr.min),un.expandByPoint(Gt),Gt.addVectors(un.max,hr.max),un.expandByPoint(Gt)):(un.expandByPoint(hr.min),un.expandByPoint(hr.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Gt.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(e,l),Gt.add(Ts)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new C,c[_]=new C;const l=new C,d=new C,h=new C,u=new xe,f=new xe,g=new xe,v=new C,m=new C;function p(_,T,P){l.fromBufferAttribute(i,_),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),d.sub(l),h.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[P].add(v),c[_].add(m),c[T].add(m),c[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){const P=y[_],I=P.start,F=P.count;for(let H=I,K=I+F;H<K;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new C,b=new C,E=new C,w=new C;function R(_){E.fromBufferAttribute(s,_),w.copy(E);const T=o[_];M.copy(T),M.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(w,T);const I=b.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,T=y.length;_<T;++_){const P=y[_],I=P.start,F=P.count;for(let H=I,K=I+F;H<K;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,d=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*d;for(let p=0;p<d;p++)u[g++]=l[f++]}return new qt(u,d,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],f=e(u,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new C;class ta{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let i_=0;class Nn extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Vs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=bl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new k(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new k().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gp extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new k(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const ur=new C,Rs=new C,Cs=new C,Ps=new xe,fr=new xe,Vp=new ke,Ma=new C,pr=new C,Sa=new C,gu=new xe,Ic=new xe,bu=new xe;class s_ extends pt{constructor(e=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zp(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new ta(i,3,0,!1)),As.setAttribute("uv",new ta(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ea(Ma.set(-.5,-.5,0),Cs,a,Rs,s,r),Ea(pr.set(.5,-.5,0),Cs,a,Rs,s,r),Ea(Sa.set(.5,.5,0),Cs,a,Rs,s,r),gu.set(0,0),Ic.set(1,0),bu.set(1,1);let o=e.ray.intersectTriangle(Ma,pr,Sa,!1,ur);if(o===null&&(Ea(pr.set(-.5,.5,0),Cs,a,Rs,s,r),Ic.set(0,1),o=e.ray.intersectTriangle(Ma,Sa,pr,!1,ur),o===null))return;const c=e.ray.origin.distanceTo(ur);c<e.near||c>e.far||t.push({distance:c,point:ur.clone(),uv:yn.getInterpolation(ur,Ma,pr,Sa,gu,Ic,bu,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ea(n,e,t,i,s,r){Ps.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fr.x=r*Ps.x-s*Ps.y,fr.y=s*Ps.x+r*Ps.y):fr.copy(Ps),n.copy(e),n.x+=fr.x,n.y+=fr.y,n.applyMatrix4(Vp)}const ai=new C,Lc=new C,wa=new C,Ri=new C,Dc=new C,Ta=new C,Fc=new C;class ca{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lc.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Lc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Ri.dot(this.direction),c=-Ri.dot(wa),l=Ri.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*c-o,u=a*o-c,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,f=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Lc).addScaledVector(wa,u),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){Dc.subVectors(t,e),Ta.subVectors(i,e),Fc.crossVectors(Dc,Ta);let a=this.direction.dot(Fc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Ta.crossVectors(Ri,Ta));if(c<0)return null;const l=o*this.direction.dot(Dc.cross(Ri));if(l<0||c+l>a)return null;const d=-o*Ri.dot(Fc);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new k(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _u=new ke,qi=new ca,Aa=new ti,xu=new C,Ra=new C,Ca=new C,Pa=new C,Nc=new C,Ia=new C,vu=new C,La=new C;class Le extends pt{constructor(e=new bt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Nc.fromBufferAttribute(h,e),a?Ia.addScaledVector(Nc,d):Ia.addScaledVector(Nc.sub(t),d))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(Aa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Aa,xu)===null||qi.origin.distanceToSquared(xu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),qi.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,E=M;b<E;b+=3){const w=o.getX(b),R=o.getX(b+1),_=o.getX(b+2);s=Da(this,p,e,i,l,d,h,w,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=Da(this,a,e,i,l,d,h,y,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,E=M;b<E;b+=3){const w=b,R=b+1,_=b+2;s=Da(this,p,e,i,l,d,h,w,R,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,M=m+1,b=m+2;s=Da(this,a,e,i,l,d,h,y,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function r_(n,e,t,i,s,r,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===bi,o),c===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(La);return l<t.near||l>t.far?null:{distance:l,point:La.clone(),object:n}}function Da(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Ra),n.getVertexPosition(c,Ca),n.getVertexPosition(l,Pa);const d=r_(n,e,t,i,Ra,Ca,Pa,vu);if(d){const h=new C;yn.getBarycoord(vu,Ra,Ca,Pa,h),s&&(d.uv=yn.getInterpolatedAttribute(s,o,c,l,h,new xe)),r&&(d.uv1=yn.getInterpolatedAttribute(r,o,c,l,h,new xe)),a&&(d.normal=yn.getInterpolatedAttribute(a,o,c,l,h,new C),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};yn.getNormal(Ra,Ca,Pa,u.normal),d.face=u,d.barycoord=h}return d}const mr=new at,yu=new at,Mu=new at,a_=new at,Su=new ke,Fa=new C,Uc=new ti,Eu=new ke,kc=new ca;class o_ extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uc.copy(this.boundingSphere),Uc.applyMatrix4(s),e.ray.intersectsSphere(Uc)!==!1&&(Eu.copy(s).invert(),kc.copy(e.ray).applyMatrix4(Eu),!(this.boundingBox!==null&&kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ab?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),Mu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(mr.copy(t),t.set(0,0,0,0)):(mr.set(...t,1),t.set(0,0,0)),mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Mu.getComponent(r);if(a!==0){const o=yu.getComponent(r);Su.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(a_.copy(mr).applyMatrix4(Su),a)}}return t.isVector4&&(t.w=mr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Hp extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nh extends kt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Nt,d=Nt,h,u){super(null,a,o,c,l,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new ke,c_=new ke;class ih{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:c_;wu.multiplyMatrices(o,t[r]),wu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ih(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new nh(t,e,e,Sn,Mn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new Hp),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class rd extends qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new ke,Tu=new ke,Na=[],Au=new An,l_=new ke,gr=new Le,br=new ti;class Wp extends Le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,l_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),Au.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),br.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Tu.multiplyMatrices(i,Is),gr.matrixWorld=Tu,gr.raycast(e,Na);for(let a=0,o=Na.length;a<o;a++){const c=Na[a];c.instanceId=r,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nh(new Float32Array(s*this.count),s,this.count,qd,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oc=new C,d_=new C,h_=new Oe;class Di{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Oc.subVectors(i,t).cross(d_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h_.getNormalMatrix(e),s=this.coplanarPoint(Oc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new ti,u_=new xe(.5,.5),Ua=new C;class sh{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],M=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-a,f-d,p-g,E-y).normalize(),s[1].setComponents(l+a,f+d,p+g,E+y).normalize(),s[2].setComponents(l+o,f+h,p+v,E+M).normalize(),s[3].setComponents(l-o,f-h,p-v,E-M).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,f-u,p-m,E-b).normalize();else if(s[4].setComponents(l-c,f-u,p-m,E-b).normalize(),t===$n)s[5].setComponents(l+c,f+u,p+m,E+b).normalize();else if(t===Qr)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=u_.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yo extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new k(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new C,Io=new C,Ru=new ke,_r=new ca,ka=new ti,Bc=new C,Cu=new C;class Zo extends pt{constructor(e=new bt,t=new Yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Io.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Po.distanceTo(Io);e.setAttribute("lineDistance",new $e(i,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Ru.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Ru);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=d.getX(v),y=d.getX(v+1),M=Oa(this,e,_r,c,p,y,v);M&&t.push(M)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=Oa(this,e,_r,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Oa(this,e,_r,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Oa(this,e,_r,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Po.fromBufferAttribute(o,s),Io.fromBufferAttribute(o,r),t.distanceSqToSegment(Po,Io,Bc,Cu)>i)return;Bc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Bc);if(!(l<e.near||l>e.far))return{distance:l,point:Cu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Pu=new C,Iu=new C;class qp extends Zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Pu.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new $e(i,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f_ extends Zo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rh extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new k(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lu=new ke,ad=new ca,Ba=new ti,za=new C;class Xp extends pt{constructor(e=new bt,t=new rh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Lu.copy(s).invert(),ad.copy(e.ray).applyMatrix4(Lu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);za.fromBufferAttribute(h,m),Du(za,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,v=f;g<v;g++)za.fromBufferAttribute(h,g),Du(za,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Du(n,e,t,i,s,r,a){const o=ad.distanceSqToPoint(n);if(o<t){const c=new C;ad.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kp extends kt{constructor(e=[],t=os,i,s,r,a,o,c,l,d){super(e,t,i,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p_ extends kt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends kt{constructor(e,t,i=Qn,s,r,a,o=Nt,c=Nt,l,d=xi,h=1){if(d!==xi&&d!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,s,r,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class m_ extends tr{constructor(e,t=Qn,i=os,s,r,a=Nt,o=Nt,c,l=xi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jp extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pn extends bt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(h,2));function g(v,m,p,y,M,b,E,w,R,_,T){const P=b/R,I=E/_,F=b/2,H=E/2,K=w/2,O=R+1,q=_+1;let W=0,Q=0;const ne=new C;for(let fe=0;fe<q;fe++){const _e=fe*I-H;for(let Se=0;Se<O;Se++){const Ye=Se*P-F;ne[v]=Ye*y,ne[m]=_e*M,ne[p]=K,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[p]=w>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(Se/R),h.push(1-fe/_),W+=1}}for(let fe=0;fe<_;fe++)for(let _e=0;_e<R;_e++){const Se=u+_e+O*fe,Ye=u+_e+O*(fe+1),_t=u+(_e+1)+O*(fe+1),Ze=u+(_e+1)+O*fe;c.push(Se,Ye,Ze),c.push(Ye,_t,Ze),Q+=6}o.addGroup(f,Q,T),f+=Q,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ah extends bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,d=new xe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends bt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function y(){const b=new C,E=new C;let w=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const T=[],P=_/r,I=P*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,K=H*c+o,O=Math.sin(K),q=Math.cos(K);E.x=I*O,E.y=-P*i+m,E.z=I*q,h.push(E.x,E.y,E.z),b.set(O,R,q).normalize(),u.push(b.x,b.y,b.z),f.push(H,1-P),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const P=v[T][_],I=v[T+1][_],F=v[T+1][_+1],H=v[T][_+1];(e>0||T!==0)&&(d.push(P,I,H),w+=3),(t>0||T!==r-1)&&(d.push(I,F,H),w+=3)}l.addGroup(p,w,0),p+=w}function M(b){const E=g,w=new xe,R=new C;let _=0;const T=b===!0?e:t,P=b===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const K=F/s*c+o,O=Math.cos(K),q=Math.sin(K);R.x=T*q,R.y=m*P,R.z=T*O,h.push(R.x,R.y,R.z),u.push(0,P,0),w.x=O*.5+.5,w.y=q*.5*P+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const H=E+F,K=I+F;b===!0?d.push(K,K+1,H):d.push(K+1,K,H),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gr extends tn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Gr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oh extends bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),l(i),d(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new C,b=new C,E=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],b),f(t[w+2],E),c(M,b,E,y)}function c(y,M,b,E){const w=E+1,R=[];for(let _=0;_<=w;_++){R[_]=[];const T=y.clone().lerp(b,_/w),P=M.clone().lerp(b,_/w),I=w-_;for(let F=0;F<=I;F++)F===0&&_===w?R[_][F]=T:R[_][F]=T.clone().lerp(P,F/I)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){const P=Math.floor(T/2);T%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function l(y){const M=new C;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(y),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function d(){const y=new C;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const b=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(b,1-E)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const M=a[y+0],b=a[y+2],E=a[y+4],w=Math.max(M,b,E),R=Math.min(M,b,E);w>.9&&R<.1&&(M<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,M){const b=y*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function g(){const y=new C,M=new C,b=new C,E=new C,w=new xe,R=new xe,_=new xe;for(let T=0,P=0;T<r.length;T+=9,P+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),w.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),E.copy(y).add(M).add(b).divideScalar(3);const I=m(E);v(w,P+0,y,I),v(R,P+2,M,I),v(_,P+4,b,I)}}function v(y,M,b,E){E<0&&y.x===1&&(a[M]=y.x-1),b.x===0&&b.z===0&&(a[M]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.vertices,e.indices,e.radius,e.detail)}}class ch extends oh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const d=i[s],u=i[s+1]-d,f=(a-d)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new xe:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,s=[],r=[],a=[],o=new C,c=new ke;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=l&&(l=d,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jp extends vi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new xe){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*d-f*h+this.aX,l=u*h+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends Jp{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function lh(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,d,h){let u=(a-r)/l-(o-r)/(l+d)+(o-a)/d,f=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,f*=d,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Fu=new C,Nu=new C,zc=new lh,Gc=new lh,Vc=new lh;class b_ extends vi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=s[(o-1)%r]:(Nu.subVectors(s[0],s[1]).add(s[0]),l=Nu);const h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Fu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Fu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),zc.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,g,v,m),Gc.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,g,v,m),Vc.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Gc.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),Vc.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return i.set(zc.calc(c),Gc.calc(c),Vc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uu(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function __(n,e){const t=1-n;return t*t*e}function x_(n,e){return 2*(1-n)*n*e}function v_(n,e){return n*n*e}function Vr(n,e,t,i){return __(n,e)+x_(n,t)+v_(n,i)}function y_(n,e){const t=1-n;return t*t*t*e}function M_(n,e){const t=1-n;return 3*t*t*n*e}function S_(n,e){return 3*(1-n)*n*n*e}function E_(n,e){return n*n*n*e}function Hr(n,e,t,i,s){return y_(n,e)+M_(n,t)+S_(n,i)+E_(n,s)}class w_ extends vi{constructor(e=new xe,t=new xe,i=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T_ extends vi{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y),Hr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A_ extends vi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends vi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends vi{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qo extends vi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Uu(o,c.x,l.x,d.x,h.x),Uu(o,c.y,l.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var I_=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:b_,CubicBezierCurve:w_,CubicBezierCurve3:T_,EllipseCurve:Jp,LineCurve:A_,LineCurve3:R_,QuadraticBezierCurve:C_,QuadraticBezierCurve3:Qo,SplineCurve:P_});class En extends bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,d=c+1,h=e/o,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const y=p*u-a;for(let M=0;M<l;M++){const b=M*h-r;g.push(b,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const M=y+l*p,b=y+l*(p+1),E=y+1+l*(p+1),w=y+1+l*p;f.push(M,b,w),f.push(b,E,w)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends bt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],d=[];let h=e;const u=(t-e)/s,f=new C,g=new xe;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,M=y,b=y+i+1,E=y+i+2,w=y+1;o.push(M,b,w),o.push(b,E,w)}}this.setIndex(o),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ls extends bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new C,u=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i,b=a+M*o,E=e*Math.cos(b),w=Math.sqrt(e*e-E*E);let R=0;p===0&&a===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=s+T*r;h.x=-w*Math.cos(P),h.y=E,h.z=w*Math.sin(P),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(T+R,1-M),y.push(l++)}d.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=d[p][y+1],b=d[p][y],E=d[p+1][y],w=d[p+1][y+1];(p!==0||a>0)&&f.push(M,b,w),(p!==i-1||c<Math.PI)&&f.push(b,E,w)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class la extends bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],d=[],h=[],u=new C,f=new C,g=new C;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(f,u).normalize(),d.push(g.x,g.y,g.z),h.push(p/s),h.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,M=(s+1)*(v-1)+m,b=(s+1)*v+m;c.push(p,y,b),c.push(y,M,b)}this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tc extends bt{constructor(e=new Qo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new xe;let d=new C;const h=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),p()}function m(M){d=e.getPointAt(M/t,d);const b=a.normals[M],E=a.binormals[M];for(let w=0;w<=s;w++){const R=w/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);c.x=T*b.x+_*E.x,c.y=T*b.y+_*E.y,c.z=T*b.z+_*E.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=d.x+i*c.x,o.y=d.y+i*c.y,o.z=d.z+i*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let b=1;b<=s;b++){const E=(s+1)*(M-1)+(b-1),w=(s+1)*M+(b-1),R=(s+1)*M+b,_=(s+1)*(M-1)+b;g.push(E,w,_),g.push(w,R,_)}}function y(){for(let M=0;M<=t;M++)for(let b=0;b<=s;b++)l.x=M/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tc(new I_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(ku(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ku(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function ku(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function L_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $p(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const D_={clone:nr,merge:Yt};var F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new k().setHex(s.value);break;case"v2":this.uniforms[i].value=new xe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new at().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class U_ extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ft extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new k(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new k(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new k(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new k(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new k(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class k_ extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O_ extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ga(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function B_(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ou(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=n[o+c]}return s}function z_(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class ir{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class G_ extends ir{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,o=2*t-i;break;case Ao:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Bs:a=e,c=2*i-t;break;case Ao:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}const l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let E=0;E!==o;++E)r[E]=p*a[d+E]+y*a[l+E]+M*a[c+E]+b*a[h+E];return r}}class Yp extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(i-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*d;return r}}class V_ extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class H_ extends ir{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,h=this.outTangents;if(!d||!h){const g=(i-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const v=a[l+g],m=a[c+g],p=f*u+g*2,y=h[p],M=h[p+1],b=e*u+g*2,E=d[b],w=d[b+1];let R=(i-t)/(s-t),_,T,P,I,F;for(let H=0;H<8;H++){_=R*R,T=_*R,P=1-R,I=P*P,F=I*P;const O=F*t+3*I*R*y+3*P*_*E+T*s-i;if(Math.abs(O)<1e-10)break;const q=3*I*(y-t)+6*P*R*(E-y)+3*_*(s-E);if(Math.abs(q)<1e-10)break;R=R-O/q,R=Math.max(0,Math.min(1,R))}r[g]=F*v+3*I*R*M+3*P*_*w+T*m}return r}}class On{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ga(t,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ga(e.times,Array),values:Ga(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new V_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new G_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new H_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break;case eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Te("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return fc;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Ne("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ne("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&vb(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ne("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*i,u=h-i,f=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Zr;class sr extends On{constructor(e,t,i){super(e,t,i)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Yr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zp extends On{constructor(e,t,i,s){super(e,t,i,s)}}Zp.prototype.ValueTypeName="color";class na extends On{constructor(e,t,i,s){super(e,t,i,s)}}na.prototype.ValueTypeName="number";class W_ extends ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ia extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends On{constructor(e,t,i){super(e,t,i)}}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Yr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends On{constructor(e,t,i,s){super(e,t,i,s)}}Lo.prototype.ValueTypeName="vector";class Do{constructor(e="",t=-1,i=[],s=Jd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(X_(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(On.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=B_(c);c=Ou(c,1,d),l=Ou(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new na(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const h=d[1];let u=s[h];u||(s[h]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function q_(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return Lo;case"color":return Zp;case"quaternion":return ia;case"bool":case"boolean":return sr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function X_(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=q_(n.type);if(n.times===void 0){const t=[],i=[];z_(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ui={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Bu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Bu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Bu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class K_{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j_=new K_;class ar{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class J_ extends Error{constructor(e,t){super(e),this.response=t}}class Qp extends ar{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ui.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=oi[e],h=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:M,value:b})=>{if(M)p.close();else{v+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,R=d.length;w<R;w++){const _=d[w];_.onProgress&&_.onProgress(E)}p.enqueue(b),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new J_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ui.add(`file:${e}`,l);const d=oi[e];delete oi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const d=oi[e];if(d===void 0)throw this.manager.itemError(e),l;delete oi[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class $_ extends ar{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ls.get(a);h===void 0&&(h=[],Ls.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=ea("img");function c(){d(),t&&t(this);const h=Ls.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function l(h){d(),s&&s(h),ui.remove(`image:${e}`);const u=Ls.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(h)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Y_ extends ar{constructor(e){super(e)}load(e,t,i,s){const r=new kt,a=new $_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class nc extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new k(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Z_ extends nc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new k(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hc=new ke,zu=new C,Gu=new C;class dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),Gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gu),t.updateMatrixWorld(),Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new C,Ha=new wn,Hn=new C;class em extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ha,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Va,Ha,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new C,Vu=new xe,Hu=new xe;class on extends em{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,Hu),t.subVectors(Hu,Vu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Q_ extends dh{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ex extends nc{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class tx extends dh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class tm extends nc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class da extends em{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nx extends dh{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nm extends nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new nx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wc=new WeakMap;class ix extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ui.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Wc.has(a)===!0?(s&&s(Wc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ui.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Wc.set(c,l),ui.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ds=-90,Fs=1;class sx extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Ds,Fs,e,t);s.layers=this.layers,this.add(s);const r=new on(Ds,Fs,e,t);r.layers=this.layers,this.add(r);const a=new on(Ds,Fs,e,t);a.layers=this.layers,this.add(a);const o=new on(Ds,Fs,e,t);o.layers=this.layers,this.add(o);const c=new on(Ds,Fs,e,t);c.layers=this.layers,this.add(c);const l=new on(Ds,Fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ax{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){wn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;wn.multiplyQuaternionsFlat(e,a,e,t,e,i),wn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const hh="\\[\\]\\.:\\/",ox=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",cx="[^"+hh.replace("\\.","")+"]",lx=/((?:WC+[\/:])*)/.source.replace("WC",uh),dx=/(WCOD+)?/.source.replace("WCOD",cx),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),fx=new RegExp("^"+lx+dx+hx+ux+"$"),px=["material","materials","bones","map"];class mx{constructor(e,t,i){const s=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class et{constructor(e,t,i){this.path=t,this.parsedPath=i||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,i):new et(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ox,"")}static parseTrackName(e){const t=fx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);px.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=mx;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gx{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==a;++l){const d=r[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ob,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case lb:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case Jd:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===cb;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===td){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Bs,s.endingEnd=Bs):(e?s.endingStart=this.zeroSlopeAtStart?Bs:Os:s.endingStart=Ao,t?s.endingEnd=this.zeroSlopeAtEnd?Bs:Os:s.endingEnd=Ao)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=i,this}}const bx=new Float32Array(1);class _x extends Gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==r;++h){const u=s[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new ax(et.create(i,f,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Yp(new Float32Array(2),new Float32Array(2),1,bx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Do.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Jd),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new gx(this,a,t,i);return this._bindAction(d,l),this._addInactiveAction(d,o,r),d}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Do.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}const Wu=new ke;class xx{constructor(e,t,i=0,s=1/0){this.ray=new ca(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,i=[]){return od(e,this,i,t),i.sort(qu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)od(e[s],this,i,t);return i.sort(qu),i}}function qu(n,e){return n.distance-e.distance}function od(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)od(r[a],e,t,!0)}}const Sh=class Sh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Sh.prototype.isMatrix2=!0;let Xu=Sh;function Ku(n,e,t,i){const s=vx(i);switch(t){case Ip:return n*e;case qd:return n*e/s.components*s.byteLength;case Xd:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case Kd:return n*e*2/s.components*s.byteLength;case Lp:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case jd:return n*e*4/s.components*s.byteLength;case lo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case wl:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Pl:case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Il:case wo:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jl:case $l:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case To:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vx(n){switch(n){case fn:case Ap:return{byteLength:1,components:1};case Jr:case Rp:case _i:return{byteLength:2,components:1};case Hd:case Wd:return{byteLength:2,components:4};case Qn:case Vd:case Mn:return{byteLength:4,components:1};case Cp:case Pp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function im(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yx(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const d=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
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
#endif`,Cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kx=`vec3 transformedNormal = objectNormal;
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
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,vv=`uniform sampler2D dfgLUT;
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
}`,yv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,ky=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Gy=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Hy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Ky=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Jy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Mx,alphahash_pars_fragment:Sx,alphamap_fragment:Ex,alphamap_pars_fragment:wx,alphatest_fragment:Tx,alphatest_pars_fragment:Ax,aomap_fragment:Rx,aomap_pars_fragment:Cx,batching_pars_vertex:Px,batching_vertex:Ix,begin_vertex:Lx,beginnormal_vertex:Dx,bsdfs:Fx,iridescence_fragment:Nx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:kx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:zx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Hx,color_vertex:Wx,common:qx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:jx,displacementmap_vertex:Jx,emissivemap_fragment:$x,emissivemap_pars_fragment:Yx,colorspace_fragment:Zx,colorspace_pars_fragment:Qx,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:sv,fog_vertex:rv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:cv,gradientmap_pars_fragment:lv,lightmap_pars_fragment:dv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:fv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:bv,lights_phong_pars_fragment:_v,lights_physical_fragment:xv,lights_physical_pars_fragment:vv,lights_fragment_begin:yv,lights_fragment_maps:Mv,lights_fragment_end:Sv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Iv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:kv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Bv,normal_fragment_begin:zv,normal_fragment_maps:Gv,normal_pars_fragment:Vv,normal_pars_vertex:Hv,normal_vertex:Wv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Jv,opaque_fragment:$v,packing:Yv,premultiplied_alpha_fragment:Zv,project_vertex:Qv,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:cy,skinning_pars_vertex:ly,skinning_vertex:dy,skinnormal_vertex:hy,specularmap_fragment:uy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:by,uv_pars_fragment:_y,uv_pars_vertex:xy,uv_vertex:vy,worldpos_vertex:yy,background_vert:My,background_frag:Sy,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distance_vert:Py,distance_frag:Iy,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Fy,linedashed_frag:Ny,meshbasic_vert:Uy,meshbasic_frag:ky,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:zy,meshmatcap_frag:Gy,meshnormal_vert:Vy,meshnormal_frag:Hy,meshphong_vert:Wy,meshphong_frag:qy,meshphysical_vert:Xy,meshphysical_frag:Ky,meshtoon_vert:jy,meshtoon_frag:Jy,points_vert:$y,points_frag:Yy,shadow_vert:Zy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},ue={common:{diffuse:{value:new k(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new k(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new k(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new k(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Kn={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new k(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new k(0)},specular:{value:new k(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new k(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new k(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new k(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Kn.physical={uniforms:Yt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new k(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new k(0)},specularColor:{value:new k(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Wa={r:0,b:0,g:0},nM=new ke,sm=new Oe;sm.set(-1,0,0,0,1,0,0,0,1);function iM(n,e,t,i,s,r){const a=new k(0);let o=s===!0?0:1,c,l,d=null,h=0,u=null;function f(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const b=y.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(y){let M=!1;const b=f(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,M){const b=f(M);b&&(b.isCubeTexture||b.mapping===$o)?(l===void 0&&(l=new Le(new pn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:nr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sm),l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==it,(d!==b||h!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Le(new En(2,2),new ei({name:"BackgroundMaterial",uniforms:nr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Wa,$p(n)),t.buffers.color.setClear(Wa.r,Wa.g,Wa.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:p}}function sM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(I,F,H,K,O){let q=!1;const W=h(I,K,H,F);r!==W&&(r=W,l(r.object)),q=f(I,K,H,O),q&&g(I,K,H,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(I,F,H,K),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function d(I){return n.deleteVertexArray(I)}function h(I,F,H,K){const O=K.wireframe===!0;let q=i[F.id];q===void 0&&(q={},i[F.id]=q);const W=I.isInstancedMesh===!0?I.id:0;let Q=q[W];Q===void 0&&(Q={},q[W]=Q);let ne=Q[H.id];ne===void 0&&(ne={},Q[H.id]=ne);let fe=ne[O];return fe===void 0&&(fe=u(c()),ne[O]=fe),fe}function u(I){const F=[],H=[],K=[];for(let O=0;O<t;O++)F[O]=0,H[O]=0,K[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:K,object:I,attributes:{},index:null}}function f(I,F,H,K){const O=r.attributes,q=F.attributes;let W=0;const Q=H.getAttributes();for(const ne in Q)if(Q[ne].location>=0){const _e=O[ne];let Se=q[ne];if(Se===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;W++}return r.attributesNum!==W||r.index!==K}function g(I,F,H,K){const O={},q=F.attributes;let W=0;const Q=H.getAttributes();for(const ne in Q)if(Q[ne].location>=0){let _e=q[ne];_e===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),O[ne]=Se,W++}r.attributes=O,r.attributesNum=W,r.index=K}function v(){const I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const H=r.newAttributes,K=r.enabledAttributes,O=r.attributeDivisors;H[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),O[I]!==F&&(n.vertexAttribDivisor(I,F),O[I]=F)}function y(){const I=r.newAttributes,F=r.enabledAttributes;for(let H=0,K=F.length;H<K;H++)F[H]!==I[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function M(I,F,H,K,O,q,W){W===!0?n.vertexAttribIPointer(I,F,H,O,q):n.vertexAttribPointer(I,F,H,K,O,q)}function b(I,F,H,K){v();const O=K.attributes,q=H.getAttributes(),W=F.defaultAttributeValues;for(const Q in q){const ne=q[Q];if(ne.location>=0){let fe=O[Q];if(fe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),fe!==void 0){const _e=fe.normalized,Se=fe.itemSize,Ye=e.get(fe);if(Ye===void 0)continue;const _t=Ye.buffer,Ze=Ye.type,Z=Ye.bytesPerElement,ae=Ze===n.INT||Ze===n.UNSIGNED_INT||fe.gpuType===Vd;if(fe.isInterleavedBufferAttribute){const ie=fe.data,Ue=ie.stride,Be=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let De=0;De<ne.locationSize;De++)p(ne.location+De,ie.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let De=0;De<ne.locationSize;De++)m(ne.location+De);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let De=0;De<ne.locationSize;De++)M(ne.location+De,Se/ne.locationSize,Ze,_e,Ue*Z,(Be+Se/ne.locationSize*De)*Z,ae)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)p(ne.location+ie,fe.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let ie=0;ie<ne.locationSize;ie++)M(ne.location+ie,Se/ne.locationSize,Ze,_e,Se*Z,Se/ne.locationSize*ie*Z,ae)}}else if(W!==void 0){const _e=W[Q];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(ne.location,_e);break;case 3:n.vertexAttrib3fv(ne.location,_e);break;case 4:n.vertexAttrib4fv(ne.location,_e);break;default:n.vertexAttrib1fv(ne.location,_e)}}}}y()}function E(){T();for(const I in i){const F=i[I];for(const H in F){const K=F[H];for(const O in K){const q=K[O];for(const W in q)d(q[W].object),delete q[W];delete K[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const H in F){const K=F[H];for(const O in K){const q=K[O];for(const W in q)d(q[W].object),delete q[W];delete K[O]}}delete i[I.id]}function R(I){for(const F in i){const H=i[F];for(const K in H){const O=H[K];if(O[I.id]===void 0)continue;const q=O[I.id];for(const W in q)d(q[W].object),delete q[W];delete O[I.id]}}}function _(I){for(const F in i){const H=i[F],K=I.isInstancedMesh===!0?I.id:0,O=H[K];if(O!==void 0){for(const q in O){const W=O[q];for(const Q in W)d(W[Q].object),delete W[Q];delete O[q]}delete H[K],Object.keys(H).length===0&&delete i[F]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function rM(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function aM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!_)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Te("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:E,samples:w}}function oM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||i!==0||s;return s=u,i=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const y=r?0:i,M=y*4;let b=p.clippingState||null;c.value=b,b=d(g,u,M,f);for(let E=0;E!==M;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=f;M!==v;++M,b+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ni=4,ju=[.125,.215,.35,.446,.526,.582],Yi=20,cM=256,xr=new da,Ju=new k;let qc=null,Xc=0,Kc=0,jc=!1;const lM=new C;class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=lM}=r;qc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Xc,Kc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:_i,format:Sn,colorSpace:mn,depthBuffer:!1},s=Yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dM(r)),this._blurMaterial=uM(r,e,t),this._ggxMaterial=hM(r,e,t)}return s}_compileMaterial(e){const t=new Le(new bt,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,s,r){const c=new on(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ju),h.toneMapping=Yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new pn,new cn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Ju),p=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[M]));const E=this._cubeSize;Ns(s,b*E,M>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(v,c),h.render(e,c)}h.toneMapping=f,h.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===os||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ns(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),u=0+l*1.25,f=h*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ni?i-g+Ni:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Ns(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Ns(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,xr)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[s];h.material=l;const u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Yi;m>Yi&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let y=0;for(let R=0;R<Yi;++R){const _=R/v,T=Math.exp(-_*_/2);p.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const b=this._sizeLods[s],E=3*b*(s>M-Ni?s-M+Ni:0),w=4*(this._cubeSize-b);Ns(t,E,w,3*b,2*b),c.setRenderTarget(t),c.render(h,xr)}}function dM(n){const e=[],t=[],i=[];let s=n;const r=n-Ni+1+ju.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-Ni?c=ju[a-n+Ni-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,h=1+l,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),M=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,_=w>2?0:-1,T=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];y.set(T,v*g*w),M.set(u,m*g*w);const P=[w,w,w,w,w,w];b.set(P,p*g*w)}const E=new bt;E.setAttribute("position",new qt(y,v)),E.setAttribute("uv",new qt(M,m)),E.setAttribute("faceIndex",new qt(b,p)),i.push(new Le(E,null)),s>Ni&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Yu(n,e,t){const i=new Zn(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hM(n,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function uM(n,e,t){const i=new Float32Array(Yi),s=new C(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zu(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Qu(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}class rm extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:pi});r.uniforms.tEquirect.value=t;const a=new Le(s,r),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=Ut),new sx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function fM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hc||f===uc)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new rm(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===hc||f===uc,v=f===os||f===Zs;if(g||v){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new $u(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new $u(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===hc?u.mapping=os:f===uc&&(u.mapping=Zs),u}function c(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function pM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hs("WebGLRenderer: "+i+" extension not supported."),s}}}function mM(n,e,t,i){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(h){const u=[],f=h.index,g=h.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let M=0,b=y.length;M<b;M+=3){const E=y[M+0],w=y[M+1],R=y[M+2];u.push(E,w,w,R,R,E)}}else{const y=g.array;v=g.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const E=M+0,w=M+1,R=M+2;u.push(E,w,w,R,R,E)}}const m=new(g.count>=65535?Bp:Op)(u,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function gM(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){n.drawElements(i,u,r,h*a),t.update(u,i,1)}function l(h,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,h*a,f),t.update(u,i,f))}function d(h,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function bM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,e,t){const i=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*E*4*h),R=new Up(w,b,E,h);R.type=Mn,R.needsUpdate=!0;const _=M*4;for(let P=0;P<h;P++){const I=m[P],F=p[P],H=y[P],K=b*E*4*P;for(let O=0;O<I.count;O++){const q=O*_;f===!0&&(s.fromBufferAttribute(I,O),w[K+q+0]=s.x,w[K+q+1]=s.y,w[K+q+2]=s.z,w[K+q+3]=0),g===!0&&(s.fromBufferAttribute(F,O),w[K+q+4]=s.x,w[K+q+5]=s.y,w[K+q+6]=s.z,w[K+q+7]=0),v===!0&&(s.fromBufferAttribute(H,O),w[K+q+8]=s.x,w[K+q+9]=s.y,w[K+q+10]=s.z,w[K+q+11]=H.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new xe(b,E)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function xM(n,e,t,i,s){let r=new WeakMap;function a(l){const d=s.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const vM={[xp]:"LINEAR_TONE_MAPPING",[vp]:"REINHARD_TONE_MAPPING",[yp]:"CINEON_TONE_MAPPING",[Gd]:"ACES_FILMIC_TONE_MAPPING",[Sp]:"AGX_TONE_MAPPING",[Ep]:"NEUTRAL_TONE_MAPPING",[Mp]:"CUSTOM_TONE_MAPPING"};function yM(n,e,t,i,s,r){const a=new Zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new tr(e,t):void 0}),o=new Zn(e,t,{type:_i,depthBuffer:!1,stencilBuffer:!1}),c=new bt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));const l=new U_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Le(c,l),h=new da(-1,1,1,-1,0,1);let u=null,f=null,g=!1,v,m=null,p=[],y=!1;this.setSize=function(M,b){a.setSize(M,b),o.setSize(M,b);for(let E=0;E<p.length;E++){const w=p[E];w.setSize&&w.setSize(M,b)}},this.setEffects=function(M){p=M,y=p.length>0&&p[0].isRenderPass===!0;const b=a.width,E=a.height;for(let w=0;w<p.length;w++){const R=p[w];R.setSize&&R.setSize(b,E)}},this.begin=function(M,b){if(g||M.toneMapping===Yn&&p.length===0)return!1;if(m=b,b!==null){const E=b.width,w=b.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return y===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=Yn,!0},this.hasRenderPass=function(){return y},this.end=function(M,b){M.toneMapping=v,g=!0;let E=a,w=o;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(M,w,E,b),_.needsSwap!==!1)){const T=E;E=w,w=T}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,l.defines={},Xe.getTransfer(u)===it&&(l.defines.SRGB_TRANSFER="");const R=vM[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(m),M.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const am=new kt,cd=new tr(1,1),om=new Up,cm=new qb,lm=new Kp,ef=[],tf=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function TM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;rf.set(i),n.uniformMatrix2fv(this.addr,!1,rf),Bt(t,i)}}function AM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;sf.set(i),n.uniformMatrix3fv(this.addr,!1,sf),Bt(t,i)}}function RM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;nf.set(i),n.uniformMatrix4fv(this.addr,!1,nf),Bt(t,i)}}function CM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function DM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function kM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cd.compareFunction=t.isReversedDepthBuffer()?Yd:$d,r=cd):r=am,t.setTexture2D(e||r,s)}function OM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cm,s)}function BM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lm,s)}function zM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||om,s)}function GM(n){switch(n){case 5126:return MM;case 35664:return SM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return PM;case 35668:case 35672:return IM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return FM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}function VM(n,e){n.uniform1fv(this.addr,e)}function HM(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function WM(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function qM(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function XM(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KM(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jM(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function JM(n,e){n.uniform1iv(this.addr,e)}function $M(n,e){n.uniform2iv(this.addr,e)}function YM(n,e){n.uniform3iv(this.addr,e)}function ZM(n,e){n.uniform4iv(this.addr,e)}function QM(n,e){n.uniform1uiv(this.addr,e)}function eS(n,e){n.uniform2uiv(this.addr,e)}function tS(n,e){n.uniform3uiv(this.addr,e)}function nS(n,e){n.uniform4uiv(this.addr,e)}function iS(n,e,t){const i=this.cache,s=e.length,r=sc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=cd:a=am;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function sS(n,e,t){const i=this.cache,s=e.length,r=sc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cm,r[a])}function rS(n,e,t){const i=this.cache,s=e.length,r=sc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||lm,r[a])}function aS(n,e,t){const i=this.cache,s=e.length,r=sc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||om,r[a])}function oS(n){switch(n){case 5126:return VM;case 35664:return HM;case 35665:return WM;case 35666:return qM;case 35674:return XM;case 35675:return KM;case 35676:return jM;case 5124:case 35670:return JM;case 35667:case 35671:return $M;case 35668:case 35672:return YM;case 35669:case 35673:return ZM;case 5125:return QM;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return aS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}}class lS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oS(t.type)}}class dS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function hS(n,e,t){const i=n.name,s=i.length;for(Jc.lastIndex=0;;){const r=Jc.exec(i),a=Jc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){af(t,l===void 0?new cS(o,n,e):new lS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new dS(o),af(t,h)),t=h}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);hS(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function of(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uS=37297;let fS=0;function pS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const cf=new Oe;function mS(n){Xe._getMatrix(cf,Xe.workingColorSpace,n);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Ro:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pS(n.getShaderSource(e),o)}else return r}function gS(n,e){const t=mS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bS={[xp]:"Linear",[vp]:"Reinhard",[yp]:"Cineon",[Gd]:"ACESFilmic",[Sp]:"AgX",[Ep]:"Neutral",[Mp]:"Custom"};function _S(n,e){const t=bS[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qa=new C;function xS(){Xe.getLuminanceCoefficients(qa);const n=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function yS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function MS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function df(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(SS,wS)}const ES=new Map;function wS(n,e){let t=Ve[e];if(t===void 0){const i=ES.get(e);if(i!==void 0)t=Ve[i],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ld(t)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(TS,AS)}function AS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const RS={[Or]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function CS(n){return RS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PS={[os]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function IS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":PS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const LS={[Zs]:"ENVMAP_MODE_REFRACTION"};function DS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":LS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FS={[_p]:"ENVMAP_BLENDING_MULTIPLY",[sb]:"ENVMAP_BLENDING_MIX",[rb]:"ENVMAP_BLENDING_ADD"};function NS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":FS[n.combine]||"ENVMAP_BLENDING_NONE"}function US(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=CS(t),l=IS(t),d=DS(t),h=NS(t),u=US(t),f=vS(t),g=yS(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Yn?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,gS("linearToOutputTexel",t.outputColorSpace),xS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=ld(a),a=df(a,t),a=hf(a,t),o=ld(o),o=df(o,t),o=hf(o,t),a=uf(a),o=uf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,b=y+p+o,E=of(s,s.VERTEX_SHADER,M),w=of(s,s.FRAGMENT_SHADER,b);s.attachShader(v,E),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(E)||"",K=s.getShaderInfoLog(w)||"",O=F.trim(),q=H.trim(),W=K.trim();let Q=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,w);else{const fe=lf(s,E,"vertex"),_e=lf(s,w,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+fe+`
`+_e)}else O!==""?Te("WebGLProgram: Program Info Log:",O):(q===""||W==="")&&(ne=!1);ne&&(I.diagnostics={runnable:Q,programLog:O,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(w),_=new po(s,v),T=MS(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,uS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let OS=0;class BS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zS(e),t.set(e,i)),i}}class zS{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}}function GS(n){return n===cs||n===wo||n===To}function VS(n,e,t,i,s,r){const a=new eh,o=new BS,c=new Set,l=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,P,I,F,H){const K=I.fog,O=F.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||q,W),ne=Q&&Q.mapping===$o?Q.image.height:null,fe=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Te("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const _e=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=_e!==void 0?_e.length:0;let Ye=0;O.morphAttributes.position!==void 0&&(Ye=1),O.morphAttributes.normal!==void 0&&(Ye=2),O.morphAttributes.color!==void 0&&(Ye=3);let _t,Ze,Z,ae;if(fe){const Ee=Kn[fe];_t=Ee.vertexShader,Ze=Ee.fragmentShader}else{_t=_.vertexShader,Ze=_.fragmentShader;const Ee=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,Ee,vt),Z=Ee.id,ae=vt.id}const ie=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,St=!!_.map,Ke=!!_.matcap,ot=!!Q,Qe=!!_.aoMap,je=!!_.lightMap,Ct=!!_.bumpMap&&_.wireframe===!1,Dt=!!_.normalMap,zt=!!_.displacementMap,Wt=!!_.emissiveMap,xt=!!_.metalnessMap,Pt=!!_.roughnessMap,D=_.anisotropy>0,nn=_.clearcoat>0,tt=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,U=_.transmission>0,G=D&&!!_.anisotropyMap,X=nn&&!!_.clearcoatMap,se=nn&&!!_.clearcoatNormalMap,oe=nn&&!!_.clearcoatRoughnessMap,j=A&&!!_.iridescenceMap,$=A&&!!_.iridescenceThicknessMap,ce=x&&!!_.sheenColorMap,Re=x&&!!_.sheenRoughnessMap,he=!!_.specularMap,le=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Fe=U&&!!_.transmissionMap,ze=U&&!!_.thicknessMap,L=!!_.gradientMap,re=!!_.alphaMap,J=_.alphaTest>0,de=!!_.alphaHash,ge=!!_.extensions;let ee=Yn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ae={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:Ze,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:St,matcap:Ke,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:ne,aoMap:Qe,lightMap:je,bumpMap:Ct,normalMap:Dt,displacementMap:zt,emissiveMap:Wt,normalMapObjectSpace:Dt&&_.normalMapType===ub,normalMapTangentSpace:Dt&&_.normalMapType===id,packedNormalMap:Dt&&_.normalMapType===id&&GS(_.normalMap.format),metalnessMap:xt,roughnessMap:Pt,anisotropy:D,anisotropyMap:G,clearcoat:nn,clearcoatMap:X,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:tt,iridescence:A,iridescenceMap:j,iridescenceThicknessMap:$,sheen:x,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:he,specularColorMap:le,specularIntensityMap:Ie,transmission:U,transmissionMap:Fe,thicknessMap:ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:J,alphaHash:de,combine:_.combine,mapUv:St&&g(_.map.channel),aoMapUv:Qe&&g(_.aoMap.channel),lightMapUv:je&&g(_.lightMap.channel),bumpMapUv:Ct&&g(_.bumpMap.channel),normalMapUv:Dt&&g(_.normalMap.channel),displacementMapUv:zt&&g(_.displacementMap.channel),emissiveMapUv:Wt&&g(_.emissiveMap.channel),metalnessMapUv:xt&&g(_.metalnessMap.channel),roughnessMapUv:Pt&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:X&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(_.sheenRoughnessMap.channel),specularMapUv:he&&g(_.specularMap.channel),specularColorMapUv:le&&g(_.specularColorMap.channel),specularIntensityMapUv:Ie&&g(_.specularIntensityMap.channel),transmissionMapUv:Fe&&g(_.transmissionMap.channel),thicknessMapUv:ze&&g(_.thicknessMap.channel),alphaMapUv:re&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Dt||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(St||re),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:St&&_.map.isVideoTexture===!0&&Xe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ft,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const T=f[_.type];let P;if(T){const I=Kn[T];P=D_.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new kS(n,T,_,s),l.push(P),d.set(T,P)),P}function E(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:R}}function HS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function c(u,f,g,v,m,p){const y=o(u,f,g,v,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(u,f,g,v,m,p){const y=o(u,f,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function d(u,f,g){t.length>1&&t.sort(u||WS),i.length>1&&i.sort(f||pf),s.length>1&&s.sort(f||pf),g&&(t.reverse(),i.reverse(),s.reverse())}function h(){for(let u=e,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:d}}function qS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new mf,n.set(i,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function XS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new k};break;case"SpotLight":t={position:new C,direction:new C,color:new k,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new k,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new k,groundColor:new k};break;case"RectAreaLight":t={color:new k,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function KS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jS=0;function JS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $S(n){const e=new XS,t=KS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new ke,a=new ke;function o(l){let d=0,h=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,M=0,b=0,E=0,w=0,R=0;l.sort(JS);for(let T=0,P=l.length;T<P;T++){const I=l[T],F=I.color,H=I.intensity,K=I.distance;let O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cs?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=F.r*H,h+=F.g*H,u+=F.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);R++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=q,f++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(H),q.distance=K,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;const W=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,W.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[v]=W.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=O,b++}v++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const W=I.shadow,Q=t.get(I);Q.shadowIntensity=W.intensity,Q.shadowBias=W.bias,Q.shadowNormalBias=W.normalBias,Q.shadowRadius=W.radius,Q.shadowMapSize=W.mapSize,Q.shadowCameraNear=W.camera.near,Q.shadowCameraFar=W.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==b||_.numSpotMaps!==E||_.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=f,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=b,_.numSpotMaps=E,_.numLightProbes=R,i.version=jS++)}function c(l,d){let h=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(M.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function gf(n){const e=new $S(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function YS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gf(n),e.set(s,[o])):r>=a.length?(o=new gf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`,eE=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],tE=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],bf=new ke,vr=new C,$c=new C;function nE(n,e,t){let i=new sh;const s=new xe,r=new xe,a=new at,o=new k_,c=new O_,l={},d=t.maxTextureSize,h={[bi]:ln,[ln]:bi,[Ft]:Ft},u=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:ZS,fragmentShader:QS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let p=this.type;this.render=function(w,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===B0&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Or);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(pi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(O=>O.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,O=w.length;K<O;K++){const q=w[K],W=q.shadow;if(W===void 0){Te("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Q=W.getFrameExtents();s.multiply(Q),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,W.mapSize.y=r.y));const ne=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ne,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ir){if(q.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Zn(s.x,s.y,{format:cs,type:_i,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new tr(s.x,s.y,Mn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=xi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt}else q.isPointLight?(W.map=new rm(s.x),W.map.depthTexture=new m_(s.x,Qn)):(W.map=new Zn(s.x,s.y),W.map.depthTexture=new tr(s.x,s.y,Qn)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=xi,this.type===Or?(W.map.depthTexture.compareFunction=ne?Yd:$d,W.map.depthTexture.minFilter=Ut,W.map.depthTexture.magFilter=Ut):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nt,W.map.depthTexture.magFilter=Nt);W.camera.updateProjectionMatrix()}const fe=W.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<fe;_e++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(W.map),n.clear());const Se=W.getViewport(_e);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),F.viewport(a)}if(q.isPointLight){const Se=W.camera,Ye=W.matrix,_t=q.distance||Se.far;_t!==Se.far&&(Se.far=_t,Se.updateProjectionMatrix()),vr.setFromMatrixPosition(q.matrixWorld),Se.position.copy(vr),$c.copy(Se.position),$c.add(eE[_e]),Se.up.copy(tE[_e]),Se.lookAt($c),Se.updateMatrixWorld(),Ye.makeTranslation(-vr.x,-vr.y,-vr.z),bf.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(bf,Se.coordinateSystem,Se.reversedDepth)}else W.updateMatrices(q);i=W.getFrustum(),b(R,_,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Ir&&y(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,I)};function y(w,R){const _=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(s.x,s.y,{format:cs,type:_i})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,_,f,v,null)}function M(w,R,_,T){let P=null;const I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,H=R.uuid;let K=l[F];K===void 0&&(K={},l[F]=K);let O=K[H];O===void 0&&(O=P.clone(),K[H]=O,R.addEventListener("dispose",E)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Ir?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=_}return P}function b(w,R,_,T,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ir)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const H=e.update(w),K=w.material;if(Array.isArray(K)){const O=H.groups;for(let q=0,W=O.length;q<W;q++){const Q=O[q],ne=K[Q.materialIndex];if(ne&&ne.visible){const fe=M(w,ne,T,P);w.onBeforeShadow(n,w,R,_,H,fe,Q),n.renderBufferDirect(_,null,H,fe,w,Q),w.onAfterShadow(n,w,R,_,H,fe,Q)}}}else if(K.visible){const O=M(w,K,T,P);w.onBeforeShadow(n,w,R,_,H,O,null),n.renderBufferDirect(_,null,H,O,w,null),w.onAfterShadow(n,w,R,_,H,O,null)}}const F=w.children;for(let H=0,K=F.length;H<K;H++)b(F[H],R,_,T,P)}function E(w){w.target.removeEventListener("dispose",E);for(const _ in l){const T=l[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function iE(n,e){function t(){let L=!1;const re=new at;let J=null;const de=new at(0,0,0,0);return{setMask:function(ge){J!==ge&&!L&&(n.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){L=ge},setClear:function(ge,ee,Ae,Ee,vt){vt===!0&&(ge*=Ee,ee*=Ee,Ae*=Ee),re.set(ge,ee,Ae,Ee),de.equals(re)===!1&&(n.clearColor(ge,ee,Ae,Ee),de.copy(re))},reset:function(){L=!1,J=null,de.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,J=null,de=null,ge=null;return{setReversed:function(ee){if(re!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const Ee=ge;ge=null,this.setClear(Ee)}},getReversed:function(){return re},setTest:function(ee){ee?ie(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ee){J!==ee&&!L&&(n.depthMask(ee),J=ee)},setFunc:function(ee){if(re&&(ee=Sb[ee]),de!==ee){switch(ee){case _l:n.depthFunc(n.NEVER);break;case xl:n.depthFunc(n.ALWAYS);break;case vl:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case yl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ge!==ee&&(ge=ee,re&&(ee=1-ee),n.clearDepth(ee))},reset:function(){L=!1,J=null,de=null,ge=null,re=!1}}}function s(){let L=!1,re=null,J=null,de=null,ge=null,ee=null,Ae=null,Ee=null,vt=null;return{setTest:function(ht){L||(ht?ie(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ht){re!==ht&&!L&&(n.stencilMask(ht),re=ht)},setFunc:function(ht,zn,Gn){(J!==ht||de!==zn||ge!==Gn)&&(n.stencilFunc(ht,zn,Gn),J=ht,de=zn,ge=Gn)},setOp:function(ht,zn,Gn){(ee!==ht||Ae!==zn||Ee!==Gn)&&(n.stencilOp(ht,zn,Gn),ee=ht,Ae=zn,Ee=Gn)},setLocked:function(ht){L=ht},setClear:function(ht){vt!==ht&&(n.clearStencil(ht),vt=ht)},reset:function(){L=!1,re=null,J=null,de=null,ge=null,ee=null,Ae=null,Ee=null,vt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,b=null,E=null,w=null,R=null,_=new k(0,0,0),T=0,P=!1,I=null,F=null,H=null,K=null,O=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),W=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),W=Q>=2);let fe=null,_e={};const Se=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),_t=new at().fromArray(Se),Ze=new at().fromArray(Ye);function Z(L,re,J,de){const ge=new Uint8Array(4),ee=n.createTexture();n.bindTexture(L,ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<J;Ae++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(re+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ee}const ae={};ae[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ys),Ct(!1),Dt($h),ie(n.CULL_FACE),Qe(pi);function ie(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Ue(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Be(L,re){return u[L]!==re?(n.bindFramebuffer(L,re),u[L]=re,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function De(L,re){let J=g,de=!1;if(L){J=f.get(re),J===void 0&&(J=[],f.set(re,J));const ge=L.textures;if(J.length!==ge.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=ge.length;ee<Ae;ee++)J[ee]=n.COLOR_ATTACHMENT0+ee;J.length=ge.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function St(L){return v!==L?(n.useProgram(L),v=L,!0):!1}const Ke={[$i]:n.FUNC_ADD,[G0]:n.FUNC_SUBTRACT,[V0]:n.FUNC_REVERSE_SUBTRACT};Ke[H0]=n.MIN,Ke[W0]=n.MAX;const ot={[q0]:n.ZERO,[X0]:n.ONE,[K0]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[Q0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[J0]:n.DST_ALPHA,[j0]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[Z0]:n.ONE_MINUS_DST_COLOR,[$0]:n.ONE_MINUS_DST_ALPHA,[eb]:n.CONSTANT_COLOR,[tb]:n.ONE_MINUS_CONSTANT_COLOR,[nb]:n.CONSTANT_ALPHA,[ib]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,re,J,de,ge,ee,Ae,Ee,vt,ht){if(L===pi){m===!0&&(Ue(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),L!==z0){if(L!==p||ht!==P){if((y!==$i||E!==$i)&&(n.blendEquation(n.FUNC_ADD),y=$i,E=$i),ht)switch(L){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yh:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}M=null,b=null,w=null,R=null,_.set(0,0,0),T=0,p=L,P=ht}return}ge=ge||re,ee=ee||J,Ae=Ae||de,(re!==y||ge!==E)&&(n.blendEquationSeparate(Ke[re],Ke[ge]),y=re,E=ge),(J!==M||de!==b||ee!==w||Ae!==R)&&(n.blendFuncSeparate(ot[J],ot[de],ot[ee],ot[Ae]),M=J,b=de,w=ee,R=Ae),(Ee.equals(_)===!1||vt!==T)&&(n.blendColor(Ee.r,Ee.g,Ee.b,vt),_.copy(Ee),T=vt),p=L,P=!1}function je(L,re){L.side===Ft?Ue(n.CULL_FACE):ie(n.CULL_FACE);let J=L.side===ln;re&&(J=!J),Ct(J),L.blending===Vs&&L.transparent===!1?Qe(pi):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function Dt(L){L!==k0?(ie(n.CULL_FACE),L!==F&&(L===$h?n.cullFace(n.BACK):L===O0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),F=L}function zt(L){L!==H&&(W&&n.lineWidth(L),H=L)}function Wt(L,re,J){L?(ie(n.POLYGON_OFFSET_FILL),(K!==re||O!==J)&&(K=re,O=J,a.getReversed()&&(re=-re),n.polygonOffset(re,J))):Ue(n.POLYGON_OFFSET_FILL)}function xt(L){L?ie(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function Pt(L){L===void 0&&(L=n.TEXTURE0+q-1),fe!==L&&(n.activeTexture(L),fe=L)}function D(L,re,J){J===void 0&&(fe===null?J=n.TEXTURE0+q-1:J=fe);let de=_e[J];de===void 0&&(de={type:void 0,texture:void 0},_e[J]=de),(de.type!==L||de.texture!==re)&&(fe!==J&&(n.activeTexture(J),fe=J),n.bindTexture(L,re||ae[L]),de.type=L,de.texture=re)}function nn(){const L=_e[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{n.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function x(){try{n.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function U(){try{n.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function X(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function j(){try{n.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function $(){try{n.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ce(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function Re(L,re){h[L]!==re&&(n.pixelStorei(L,re),h[L]=re)}function he(L){_t.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),_t.copy(L))}function le(L){Ze.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ze.copy(L))}function Ie(L,re){let J=l.get(re);J===void 0&&(J=new WeakMap,l.set(re,J));let de=J.get(L);de===void 0&&(de=n.getUniformBlockIndex(re,L.name),J.set(L,de))}function Fe(L,re){const de=l.get(re).get(L);c.get(re)!==de&&(n.uniformBlockBinding(re,de,L.__bindingPointIndex),c.set(re,de))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},fe=null,_e={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,b=null,E=null,w=null,R=null,_=new k(0,0,0),T=0,P=!1,I=null,F=null,H=null,K=null,O=null,_t.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ue,bindFramebuffer:Be,drawBuffers:De,useProgram:St,setBlending:Qe,setMaterial:je,setFlipSided:Ct,setCullFace:Dt,setLineWidth:zt,setPolygonOffset:Wt,setScissorTest:xt,activeTexture:Pt,bindTexture:D,unbindTexture:nn,compressedTexImage2D:tt,compressedTexImage3D:A,texImage2D:j,texImage3D:$,pixelStorei:Re,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:he,viewport:le,reset:ze}}function sE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,d=new WeakMap,h=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):ea("canvas")}function m(A,x,U){let G=1;const X=tt(A);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(G*X.width),oe=Math.floor(G*X.height);u===void 0&&(u=v(se,oe));const j=x?v(se,oe):u;return j.width=se,j.height=oe,j.getContext("2d").drawImage(A,0,0,se,oe),Te("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+se+"x"+oe+")."),j}else return"data"in A&&Te("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,x,U,G,X,se=!1){if(A!==null){if(n[A]!==void 0)return n[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8),U===n.UNSIGNED_SHORT&&oe&&(j=oe.R16_EXT),U===n.SHORT&&oe&&(j=oe.R16_SNORM_EXT)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),x===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8),U===n.UNSIGNED_SHORT&&oe&&(j=oe.RG16_EXT),U===n.SHORT&&oe&&(j=oe.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGB8UI),U===n.UNSIGNED_SHORT&&(j=n.RGB16UI),U===n.UNSIGNED_INT&&(j=n.RGB32UI),U===n.BYTE&&(j=n.RGB8I),U===n.SHORT&&(j=n.RGB16I),U===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),U===n.UNSIGNED_INT&&(j=n.RGBA32UI),U===n.BYTE&&(j=n.RGBA8I),U===n.SHORT&&(j=n.RGBA16I),U===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_SHORT&&oe&&(j=oe.RGB16_EXT),U===n.SHORT&&oe&&(j=oe.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){const $=se?Ro:Xe.getTransfer(X);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=$===it?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&oe&&(j=oe.RGBA16_EXT),U===n.SHORT&&oe&&(j=oe.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(A,x){let U;return A?x===null||x===Qn||x===$r?U=n.DEPTH24_STENCIL8:x===Mn?U=n.DEPTH32F_STENCIL8:x===Jr&&(U=n.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===$r?U=n.DEPTH_COMPONENT24:x===Mn?U=n.DEPTH_COMPONENT32F:x===Jr&&(U=n.DEPTH_COMPONENT16),U}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),I(x)}function T(A){const x=i.get(A);if(x.__webglInit===void 0)return;const U=A.source,G=f.get(U);if(G){const X=G[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(A),Object.keys(G).length===0&&f.delete(U)}i.remove(A)}function P(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const U=A.source,G=f.get(U);delete G[x.__cacheKey],a.memory.textures--}function I(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let X=0;X<x.__webglFramebuffer[G].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[G][X]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let G=0,X=U.length;G<X;G++){const se=i.get(U[G]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(A)}let F=0;function H(){F=0}function K(){return F}function O(A){F=A}function q(){const A=F;return A>=s.maxTextures&&Te("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){const U=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const G=A.image;if(G===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function ne(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Ue(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function fe(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Ue(U,A,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function _e(A,x){const U=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Be(U,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const Se={[Qs]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},Ye={[Nt]:n.NEAREST,[Tp]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Ut]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},_t={[fb]:n.NEVER,[_b]:n.ALWAYS,[pb]:n.LESS,[$d]:n.LEQUAL,[mb]:n.EQUAL,[Yd]:n.GEQUAL,[gb]:n.GREATER,[bb]:n.NOTEQUAL};function Ze(A,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===co||x.magFilter===Lr||x.magFilter===hi||x.minFilter===Ut||x.minFilter===co||x.minFilter===Lr||x.minFilter===hi)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Se[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Se[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Se[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ye[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ye[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Lr&&x.minFilter!==hi||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Z(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const G=x.source;let X=f.get(G);X===void 0&&(X={},f.set(G,X));const se=W(x);if(se!==A.__cacheKey){X[se]===void 0&&(X[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[se].usedTimes++;const oe=X[A.__cacheKey];oe!==void 0&&(X[A.__cacheKey].usedTimes--,oe.usedTimes===0&&P(x)),A.__cacheKey=se,A.__webglTexture=X[se].texture}return U}function ae(A,x,U){return Math.floor(Math.floor(A/U)/x)}function ie(A,x,U,G){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,G,x.data);else{se.sort((Re,he)=>Re.start-he.start);let oe=0;for(let Re=1;Re<se.length;Re++){const he=se[oe],le=se[Re],Ie=he.start+he.count,Fe=ae(le.start,x.width,4),ze=ae(he.start,x.width,4);le.start<=Ie+1&&Fe===ze&&ae(le.start+le.count-1,x.width,4)===Fe?he.count=Math.max(he.count,le.start+le.count-he.start):(++oe,se[oe]=le)}se.length=oe+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Re=0,he=se.length;Re<he;Re++){const le=se[Re],Ie=Math.floor(le.start/4),Fe=Math.ceil(le.count/4),ze=Ie%x.width,L=Math.floor(Ie/x.width),re=Fe,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,re,J,U,G,x.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Ue(A,x,U){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const X=Z(A,x),se=x.source;t.bindTexture(G,A.__webglTexture,n.TEXTURE0+U);const oe=i.get(se);if(se.version!==oe.__version||X===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=Xe.getPrimaries(Xe.workingColorSpace),de=x.colorSpace===Fi?null:Xe.getPrimaries(x.colorSpace),ge=x.colorSpace===Fi||J===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let $=m(x.image,!1,s.maxTextureSize);$=nn(x,$);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let he=b(x.internalFormat,ce,Re,x.normalized,x.colorSpace,x.isVideoTexture);Ze(G,x);let le;const Ie=x.mipmaps,Fe=x.isVideoTexture!==!0,ze=oe.__version===void 0||X===!0,L=se.dataReady,re=w(x,$);if(x.isDepthTexture)he=E(x.format===ts,x.type),ze&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,ce,Re,null));else if(x.isDataTexture)if(Ie.length>0){Fe&&ze&&t.texStorage2D(n.TEXTURE_2D,re,he,Ie[0].width,Ie[0].height);for(let J=0,de=Ie.length;J<de;J++)le=Ie[J],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(n.TEXTURE_2D,J,he,le.width,le.height,0,ce,Re,le.data);x.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(n.TEXTURE_2D,re,he,$.width,$.height),L&&ie(x,$,ce,Re)):t.texImage2D(n.TEXTURE_2D,0,he,$.width,$.height,0,ce,Re,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,he,Ie[0].width,Ie[0].height,$.depth);for(let J=0,de=Ie.length;J<de;J++)if(le=Ie[J],x.format!==Sn)if(ce!==null)if(Fe){if(L)if(x.layerUpdates.size>0){const ge=Ku(le.width,le.height,x.format,x.type);for(const ee of x.layerUpdates){const Ae=le.data.subarray(ee*ge/le.data.BYTES_PER_ELEMENT,(ee+1)*ge/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ee,le.width,le.height,1,ce,Ae)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,$.depth,ce,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,he,le.width,le.height,$.depth,0,le.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,$.depth,ce,Re,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,he,le.width,le.height,$.depth,0,ce,Re,le.data)}else{Fe&&ze&&t.texStorage2D(n.TEXTURE_2D,re,he,Ie[0].width,Ie[0].height);for(let J=0,de=Ie.length;J<de;J++)le=Ie[J],x.format!==Sn?ce!==null?Fe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(n.TEXTURE_2D,J,he,le.width,le.height,0,le.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le.width,le.height,ce,Re,le.data):t.texImage2D(n.TEXTURE_2D,J,he,le.width,le.height,0,ce,Re,le.data)}else if(x.isDataArrayTexture)if(Fe){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,he,$.width,$.height,$.depth),L)if(x.layerUpdates.size>0){const J=Ku($.width,$.height,x.format,x.type);for(const de of x.layerUpdates){const ge=$.data.subarray(de*J/$.data.BYTES_PER_ELEMENT,(de+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,$.width,$.height,1,ce,Re,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ce,Re,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,ce,Re,$.data);else if(x.isData3DTexture)Fe?(ze&&t.texStorage3D(n.TEXTURE_3D,re,he,$.width,$.height,$.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ce,Re,$.data)):t.texImage3D(n.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,ce,Re,$.data);else if(x.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(n.TEXTURE_2D,re,he,$.width,$.height);else{let J=$.width,de=$.height;for(let ge=0;ge<re;ge++)t.texImage2D(n.TEXTURE_2D,ge,he,J,de,0,ce,Re,null),J>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),h.add(x),J.onpaint=de=>{const ge=de.changedElements;for(const ee of h)ge.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{const ge=n.RGBA,ee=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ge,ee,Ae,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&ze){const J=tt(Ie[0]);t.texStorage2D(n.TEXTURE_2D,re,he,J.width,J.height)}for(let J=0,de=Ie.length;J<de;J++)le=Ie[J],Fe?L&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Re,le):t.texImage2D(n.TEXTURE_2D,J,he,ce,Re,le);x.generateMipmaps=!1}else if(Fe){if(ze){const J=tt($);t.texStorage2D(n.TEXTURE_2D,re,he,J.width,J.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Re,$)}else t.texImage2D(n.TEXTURE_2D,0,he,ce,Re,$);p(x)&&y(G),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Be(A,x,U){if(x.image.length!==6)return;const G=Z(A,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+U);const se=i.get(X);if(X.version!==se.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const oe=Xe.getPrimaries(Xe.workingColorSpace),j=x.colorSpace===Fi?null:Xe.getPrimaries(x.colorSpace),$=x.colorSpace===Fi||oe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ce&&!Re?he[ee]=m(x.image[ee],!0,s.maxCubemapSize):he[ee]=Re?x.image[ee].image:x.image[ee],he[ee]=nn(x,he[ee]);const le=he[0],Ie=r.convert(x.format,x.colorSpace),Fe=r.convert(x.type),ze=b(x.internalFormat,Ie,Fe,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,re=se.__version===void 0||G===!0,J=X.dataReady;let de=w(x,le);Ze(n.TEXTURE_CUBE_MAP,x);let ge;if(ce){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,le.width,le.height);for(let ee=0;ee<6;ee++){ge=he[ee].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){const Ee=ge[Ae];x.format!==Sn?Ie!==null?L?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,ze,Ee.width,Ee.height,0,Ee.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Ee.width,Ee.height,Ie,Fe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,ze,Ee.width,Ee.height,0,Ie,Fe,Ee.data)}}}else{if(ge=x.mipmaps,L&&re){ge.length>0&&de++;const ee=tt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Re){L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Ie,Fe,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,he[ee].width,he[ee].height,0,Ie,Fe,he[ee].data);for(let Ae=0;Ae<ge.length;Ae++){const vt=ge[Ae].image[ee].image;L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,vt.width,vt.height,Ie,Fe,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,ze,vt.width,vt.height,0,Ie,Fe,vt.data)}}else{L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,Fe,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Ie,Fe,he[ee]);for(let Ae=0;Ae<ge.length;Ae++){const Ee=ge[Ae];L?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Ie,Fe,Ee.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,ze,Ie,Fe,Ee.image[ee])}}}p(x)&&y(n.TEXTURE_CUBE_MAP),se.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function De(A,x,U,G,X,se){const oe=r.convert(U.format,U.colorSpace),j=r.convert(U.type),$=b(U.internalFormat,oe,j,U.normalized,U.colorSpace),ce=i.get(x),Re=i.get(U);if(Re.__renderTarget=x,!ce.__hasExternalTextures){const he=Math.max(1,x.width>>se),le=Math.max(1,x.height>>se);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,se,$,he,le,x.depth,0,oe,j,null):t.texImage2D(X,se,$,he,le,0,oe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,X,Re.__webglTexture,0,xt(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,X,Re.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(A,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const G=x.depthTexture,X=G&&G.isDepthTexture?G.type:null,se=E(x.stencilBuffer,X),oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(x),se,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(x),se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,A)}else{const G=x.textures;for(let X=0;X<G.length;X++){const se=G[X],oe=r.convert(se.format,se.colorSpace),j=r.convert(se.type),$=b(se.internalFormat,oe,j,se.normalized,se.colorSpace);Pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(x),$,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(x),$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ke(A,x,U){const G=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,x.depthTexture);const ce=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type);let he;x.depthTexture.format===xi?he=n.DEPTH_COMPONENT24:x.depthTexture.format===ts&&(he=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,x.width,x.height,0,ce,Re,null)}}else Q(x.depthTexture,0);const se=X.__webglTexture,oe=xt(x),j=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,$=x.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===xi)Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,$,j,se,0);else if(x.depthTexture.format===ts)Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,$,j,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(A){const x=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=G}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Ke(x.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?Ke(x.__webglFramebuffer[0],A,0):Ke(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),St(x.__webglDepthbuffer[G],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,se)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),St(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(A,x,U){const G=i.get(A);x!==void 0&&De(G.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ot(A)}function je(A){const x=A.texture,U=i.get(A),G=i.get(x);A.addEventListener("dispose",_);const X=A.textures,se=A.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,a.memory.textures++),se){U.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[j]=[];for(let $=0;$<x.mipmaps.length;$++)U.__webglFramebuffer[j][$]=n.createFramebuffer()}else U.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)U.__webglFramebuffer[j]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(oe)for(let j=0,$=X.length;j<$;j++){const ce=i.get(X[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Pt(A)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let j=0;j<X.length;j++){const $=X[j];U.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[j]);const ce=r.convert($.format,$.colorSpace),Re=r.convert($.type),he=b($.internalFormat,ce,Re,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),le=xt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,he,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,U.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),St(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)De(U.__webglFramebuffer[j][$],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,$);else De(U.__webglFramebuffer[j],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let j=0,$=X.length;j<$;j++){const ce=X[j],Re=i.get(ce);let he=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Re.__webglTexture),Ze(he,ce),De(U.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+j,he,0),p(ce)&&y(he)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,G.__webglTexture),Ze(j,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)De(U.__webglFramebuffer[$],A,x,n.COLOR_ATTACHMENT0,j,$);else De(U.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,j,0);p(x)&&y(j),t.unbindTexture()}A.depthBuffer&&ot(A)}function Ct(A){const x=A.textures;for(let U=0,G=x.length;U<G;U++){const X=x[U];if(p(X)){const se=M(A),oe=i.get(X).__webglTexture;t.bindTexture(se,oe),y(se),t.unbindTexture()}}}const Dt=[],zt=[];function Wt(A){if(A.samples>0){if(Pt(A)===!1){const x=A.textures,U=A.width,G=A.height;let X=n.COLOR_BUFFER_BIT;const se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(A),j=x.length>1;if(j)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const $=A.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,X,n.NEAREST),c===!0&&(Dt.length=0,zt.length=0,Dt.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Dt.push(se),zt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ce]);const Re=i.get(x[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function Pt(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(A){const x=a.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function nn(A,x){const U=A.colorSpace,G=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==mn&&U!==Fi&&(Xe.getTransfer(U)===it?(G!==Sn||X!==fn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",U)),x}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.getTextureUnits=K,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=_e,this.rebindTextures=Qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rE(n,e){function t(i,s=Fi){let r;const a=Xe.getTransfer(s);if(i===fn)return n.UNSIGNED_BYTE;if(i===Hd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ap)return n.BYTE;if(i===Rp)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===Vd)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===_i)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Lp)return n.RGB;if(i===Sn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===qd)return n.RED;if(i===Xd)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===Kd)return n.RG_INTEGER;if(i===jd)return n.RGBA_INTEGER;if(i===lo||i===ho||i===uo||i===fo)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===Al||i===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===wo||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Pl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wo)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nl||i===Ul||i===kl||i===Ol||i===Bl||i===zl||i===Gl||i===Vl||i===Hl||i===Wl||i===ql||i===Xl||i===Kl||i===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jl||i===$l||i===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Jl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Ql||i===To||i===ed)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ed)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oE=`
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

}`;class cE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ei({vertexShader:aE,fragmentShader:oE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new En(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lE extends Gi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new cE,p={},y=t.getContextAttributes();let M=null,b=null;const E=[],w=[],R=new xe;let _=null;const T=new on;T.viewport=new at;const P=new on;P.viewport=new at;const I=[T,P],F=new rx;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=E[Z];return ae===void 0&&(ae=new xc,E[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=E[Z];return ae===void 0&&(ae=new xc,E[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=E[Z];return ae===void 0&&(ae=new xc,E[Z]=ae),ae.getHandSpace()};function O(Z){const ae=w.indexOf(Z.inputSource);if(ae===-1)return;const ie=E[ae];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,l||a),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<E.length;Z++){const ae=w[Z];ae!==null&&(w[Z]=null,E[Z].disconnect(ae))}H=null,K=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(M),f=null,u=null,h=null,s=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ue=null,Be=null;y.depth&&(Be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?ts:xi,Ue=y.stencil?$r:Qn);const De={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Zn(u.textureWidth,u.textureHeight,{format:Sn,type:fn,depthTexture:new tr(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let ae=0;ae<Z.removed.length;ae++){const ie=Z.removed[ae],Ue=w.indexOf(ie);Ue>=0&&(w[Ue]=null,E[Ue].disconnect(ie))}for(let ae=0;ae<Z.added.length;ae++){const ie=Z.added[ae];let Ue=w.indexOf(ie);if(Ue===-1){for(let De=0;De<E.length;De++)if(De>=w.length){w.push(ie),Ue=De;break}else if(w[De]===null){w[De]=ie,Ue=De;break}if(Ue===-1)break}const Be=E[Ue];Be&&Be.connect(ie)}}const Q=new C,ne=new C;function fe(Z,ae,ie){Q.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Ue=Q.distanceTo(ne),Be=ae.projectionMatrix.elements,De=ie.projectionMatrix.elements,St=Be[14]/(Be[10]-1),Ke=Be[14]/(Be[10]+1),ot=(Be[9]+1)/Be[5],Qe=(Be[9]-1)/Be[5],je=(Be[8]-1)/Be[0],Ct=(De[8]+1)/De[0],Dt=St*je,zt=St*Ct,Wt=Ue/(-je+Ct),xt=Wt*-je;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(Wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Pt=St+Wt,D=Ke+Wt,nn=Dt-xt,tt=zt+(Ue-xt),A=ot*Ke/D*Pt,x=Qe*Ke/D*Pt;Z.projectionMatrix.makePerspective(nn,tt,A,x,Pt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function _e(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ae=Z.near,ie=Z.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),F.near=P.near=T.near=ae,F.far=P.far=T.far=ie,(H!==F.near||K!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,K=F.far),F.layers.mask=Z.layers.mask|6,T.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Ue=Z.parent,Be=F.cameras;_e(F,Ue);for(let De=0;De<Be.length;De++)_e(Be[De],Ue);Be.length===2?fe(F,T,P):F.projectionMatrix.copy(T.projectionMatrix),Se(Z,F,Ue)};function Se(Z,ae,ie){ie===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let Ye=null;function _t(Z,ae){if(d=ae.getViewerPose(l||a),g=ae,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Ke=0;Ke<ie.length;Ke++){const ot=ie[Ke];let Qe=null;if(f!==null)Qe=f.getViewport(ot);else{const Ct=h.getViewSubImage(u,ot);Qe=Ct.viewport,Ke===0&&(e.setRenderTargetTextures(b,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(b))}let je=I[Ke];je===void 0&&(je=new on,je.layers.enable(Ke),je.viewport=new at,I[Ke]=je),je.matrix.fromArray(ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ke===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(je)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const Ke=h.getDepthInformation(ie[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Be&&Be.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let Ke=0;Ke<ie.length;Ke++){const ot=ie[Ke].camera;if(ot){let Qe=p[ot];Qe||(Qe=new jp,p[ot]=Qe);const je=h.getCameraImage(ot);Qe.sourceTexture=je}}}}for(let ie=0;ie<E.length;ie++){const Ue=w[ie],Be=E[ie];Ue!==null&&Be!==void 0&&Be.update(Ue,ae,l||a)}Ye&&Ye(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Ze=new im;Ze.setAnimationLoop(_t),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}}const dE=new ke,dm=new Oe;dm.set(-1,0,0,0,1,0,0,0,1);function hE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$p(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,b=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(dE.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const w=E.program;i.uniformBlockBinding(b,w)}function l(b,E){let w=s[b.id];w===void 0&&(m(b),w=d(b),s[b.id]=w,b.addEventListener("dispose",y));const R=E.program;i.updateUBOMapping(b,R);const _=e.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function d(b){const E=h();b.__bindingPointIndex=E;const w=n.createBuffer(),R=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=s[b.id],w=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,T=w.length;_<T;_++){const P=w[_];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)f(P[I],_,I,R);else f(P,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,E,w,R){if(v(b,E,w,R)===!0){const _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const F=T[I],H=p(F);g(F,b.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function g(b,E,w){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,w)}function v(b,E,w,R){const _=b.value,T=E+"_"+w;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(b){const E=b.uniforms;let w=0;const R=16;for(let T=0,P=E.length;T<P;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,H=I.length;F<H;F++){const K=I[F],O=Array.isArray(K.value)?K.value:[K.value];for(let q=0,W=O.length;q<W;q++){const Q=O[q],ne=p(Q),fe=w%R,_e=fe%ne.boundary,Se=fe+_e;w+=_e,Se!==0&&R-Se<ne.storage&&(w+=R-Se),K.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=ne.storage}}}const _=w%R;return _>0&&(w+=R-_),b.__size=w,b.__cache={},this}function p(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",b),E}function y(b){const E=b.target;E.removeEventListener("dispose",y);const w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function M(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}const fE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function pE(){return Wn===null&&(Wn=new nh(fE,16,16,cs,_i),Wn.name="DFG_LUT",Wn.minFilter=Ut,Wn.magFilter=Ut,Wn.wrapS=Jn,Wn.wrapT=Jn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class mE{constructor(e={}){const{canvas:t=yb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,m=new Set([jd,Kd,Xd]),p=new Set([fn,Qn,Jr,$r,Hd,Wd]),y=new Uint32Array(4),M=new Int32Array(4),b=new C;let E=null,w=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,F=null,H=null,K=null,O=null;this._outputColorSpace=Ht;let q=0,W=0,Q=null,ne=-1,fe=null;const _e=new at,Se=new at;let Ye=null;const _t=new k(0);let Ze=0,Z=t.width,ae=t.height,ie=1,Ue=null,Be=null;const De=new at(0,0,Z,ae),St=new at(0,0,Z,ae);let Ke=!1;const ot=new sh;let Qe=!1,je=!1;const Ct=new ke,Dt=new C,zt=new at,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Pt(){return Q===null?ie:1}let D=i;function nn(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",zn,!1),D===null){const N="webgl2";if(D=nn(N,S),D===null)throw nn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ne("WebGLRenderer: "+S.message),S}let tt,A,x,U,G,X,se,oe,j,$,ce,Re,he,le,Ie,Fe,ze,L,re,J,de,ge,ee;function Ae(){tt=new pM(D),tt.init(),de=new rE(D,tt),A=new aM(D,tt,e,de),x=new iE(D,tt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=D.createFramebuffer(),K=D.createFramebuffer(),O=D.createFramebuffer(),U=new bM(D),G=new HS,X=new sE(D,tt,x,G,A,de,U),se=new fM(P),oe=new yx(D),ge=new sM(D,oe),j=new mM(D,oe,U,ge),$=new xM(D,j,oe,ge,U),L=new _M(D,A,X),Ie=new oM(G),ce=new VS(P,se,tt,A,ge,Ie),Re=new hE(P,G),he=new qS,le=new YS(tt),ze=new iM(P,se,x,$,g,c),Fe=new nE(P,$,A),ee=new uE(D,U,A,x),re=new rM(D,tt,U),J=new gM(D,tt,U),U.programs=ce.programs,P.capabilities=A,P.extensions=tt,P.properties=G,P.renderLists=he,P.shadowMap=Fe,P.state=x,P.info=U}Ae(),v!==fn&&(T=new yM(v,t.width,t.height,o,s,r));const Ee=new lE(P,D);this.xr=Ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(Z,ae,!1))},this.getSize=function(S){return S.set(Z,ae)},this.setSize=function(S,N,V=!0){if(Ee.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,ae=N,t.width=Math.floor(S*ie),t.height=Math.floor(N*ie),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Z*ie,ae*ie).floor()},this.setDrawingBufferSize=function(S,N,V){Z=S,ae=N,ie=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===fn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(_e)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,N,V,B){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,N,V,B),x.viewport(_e.copy(De).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(St)},this.setScissor=function(S,N,V,B){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,N,V,B),x.scissor(Se.copy(St).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){x.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){Ue=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let B=0;if(S){let z=!1;if(Q!==null){const me=Q.texture.format;z=m.has(me)}if(z){const me=Q.texture.type,ye=p.has(me),pe=ze.getClearColor(),we=ze.getClearAlpha(),Ce=pe.r,Ge=pe.g,He=pe.b;ye?(y[0]=Ce,y[1]=Ge,y[2]=He,y[3]=we,D.clearBufferuiv(D.COLOR,0,y)):(M[0]=Ce,M[1]=Ge,M[2]=He,M[3]=we,D.clearBufferiv(D.COLOR,0,M))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",zn,!1),ze.dispose(),he.dispose(),le.dispose(),G.dispose(),se.dispose(),$.dispose(),ge.dispose(),ee.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",wh),Ee.removeEventListener("sessionend",Th),Vi.stop()};function vt(S){S.preventDefault(),Co("WebGLRenderer: Context Lost."),I=!0}function ht(){Co("WebGLRenderer: Context Restored."),I=!1;const S=U.autoReset,N=Fe.enabled,V=Fe.autoUpdate,B=Fe.needsUpdate,z=Fe.type;Ae(),U.autoReset=S,Fe.enabled=N,Fe.autoUpdate=V,Fe.needsUpdate=B,Fe.type=z}function zn(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Gn(S){const N=S.target;N.removeEventListener("dispose",Gn),jm(N)}function jm(S){Jm(S),G.remove(S)}function Jm(S){const N=G.get(S).programs;N!==void 0&&(N.forEach(function(V){ce.releaseProgram(V)}),S.isShaderMaterial&&ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,B,z,me){N===null&&(N=Wt);const ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=Zm(S,N,V,B,z);x.setMaterial(B,ye);let we=V.index,Ce=1;if(B.wireframe===!0){if(we=j.getWireframeAttribute(V),we===void 0)return;Ce=2}const Ge=V.drawRange,He=V.attributes.position;let Pe=Ge.start*Ce,rt=(Ge.start+Ge.count)*Ce;me!==null&&(Pe=Math.max(Pe,me.start*Ce),rt=Math.min(rt,(me.start+me.count)*Ce)),we!==null?(Pe=Math.max(Pe,0),rt=Math.min(rt,we.count)):He!=null&&(Pe=Math.max(Pe,0),rt=Math.min(rt,He.count));const Et=rt-Pe;if(Et<0||Et===1/0)return;ge.setup(z,B,pe,V,we);let yt,ct=re;if(we!==null&&(yt=oe.get(we),ct=J,ct.setIndex(yt)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Pt()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(z.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),x.setLineWidth(Xt*Pt()),z.isLineSegments?ct.setMode(D.LINES):z.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else z.isPoints?ct.setMode(D.POINTS):z.isSprite&&ct.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xt=z._multiDrawStarts,ve=z._multiDrawCounts,dn=z._multiDrawCount,Je=we?oe.get(we).bytesPerElement:1,gn=G.get(B).currentProgram.getUniforms();for(let Vn=0;Vn<dn;Vn++)gn.setValue(D,"_gl_DrawID",Vn),ct.render(Xt[Vn]/Je,ve[Vn])}else if(z.isInstancedMesh)ct.renderInstances(Pe,Et,z.count);else if(V.isInstancedBufferGeometry){const Xt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ve=Math.min(V.instanceCount,Xt);ct.renderInstances(Pe,Et,ve)}else ct.render(Pe,Et)};function Eh(S,N,V){S.transparent===!0&&S.side===Ft&&S.forceSinglePass===!1?(S.side=ln,S.needsUpdate=!0,fa(S,N,V),S.side=bi,S.needsUpdate=!0,fa(S,N,V),S.side=Ft):fa(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),w=le.get(V),w.init(N),_.push(w),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];Eh(pe,V,z),B.add(pe)}else Eh(me,V,z),B.add(me)}),w=_.pop(),B},this.compileAsync=function(S,N,V=null){const B=this.compile(S,N,V);return new Promise(z=>{function me(){if(B.forEach(function(ye){G.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){z(S);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let rc=null;function $m(S){rc&&rc(S)}function wh(){Vi.stop()}function Th(){Vi.start()}const Vi=new im;Vi.setAnimationLoop($m),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(S){rc=S,Ee.setAnimationLoop(S),S===null?Vi.stop():Vi.start()},Ee.addEventListener("sessionstart",wh),Ee.addEventListener("sessionend",Th),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(S,N);const V=Ee.enabled===!0&&Ee.isPresenting===!0,B=T!==null&&(Q===null||V)&&T.begin(P,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,Q),w=le.get(S,_.length),w.init(N),w.state.textureUnits=X.getTextureUnits(),_.push(w),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(Ct,$n,N.reversedDepth),je=this.localClippingEnabled,Qe=Ie.init(this.clippingPlanes,je),E=he.get(S,R.length),E.init(),R.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&ac(ye,N,-1/0,P.sortObjects)}ac(S,N,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(Ue,Be,N.reversedDepth),xt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,xt&&ze.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ie.beginShadows();const z=w.state.shadowsArray;if(Fe.render(z,S,N),Qe===!0&&Ie.endShadows(),(B&&T.hasRenderPass())===!1){const ye=E.opaque,pe=E.transmissive;if(w.setupLights(),N.isArrayCamera){const we=N.cameras;if(pe.length>0)for(let Ce=0,Ge=we.length;Ce<Ge;Ce++){const He=we[Ce];Rh(ye,pe,S,He)}xt&&ze.render(S);for(let Ce=0,Ge=we.length;Ce<Ge;Ce++){const He=we[Ce];Ah(E,S,He,He.viewport)}}else pe.length>0&&Rh(ye,pe,S,N),xt&&ze.render(S),Ah(E,S,N)}Q!==null&&W===0&&(X.updateMultisampleRenderTarget(Q),X.updateRenderTargetMipmap(Q)),B&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),ge.resetDefaultState(),ne=-1,fe=null,_.pop(),_.length>0?(w=_[_.length-1],X.setTextureUnits(w.state.textureUnits),Qe===!0&&Ie.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function ac(S,N,V,B){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ot.intersectsSprite(S)){B&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ct);const ye=$.update(S),pe=S.material;pe.visible&&E.push(S,ye,pe,V,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ot.intersectsObject(S))){const ye=$.update(S),pe=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),zt.copy(ye.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(Ct)),Array.isArray(pe)){const we=ye.groups;for(let Ce=0,Ge=we.length;Ce<Ge;Ce++){const He=we[Ce],Pe=pe[He.materialIndex];Pe&&Pe.visible&&E.push(S,ye,Pe,V,zt.z,He)}}else pe.visible&&E.push(S,ye,pe,V,zt.z,null)}}const me=S.children;for(let ye=0,pe=me.length;ye<pe;ye++)ac(me[ye],N,V,B)}function Ah(S,N,V,B){const{opaque:z,transmissive:me,transparent:ye}=S;w.setupLightsView(V),Qe===!0&&Ie.setGlobalState(P.clippingPlanes,V),B&&x.viewport(_e.copy(B)),z.length>0&&ua(z,N,V),me.length>0&&ua(me,N,V),ye.length>0&&ua(ye,N,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rh(S,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Pe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new Zn(1,1,{generateMipmaps:!0,type:Pe?_i:fn,minFilter:hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const me=w.state.transmissionRenderTarget[B.id],ye=B.viewport||_e;me.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const pe=P.getRenderTarget(),we=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(_t),Ze=P.getClearAlpha(),Ze<1&&P.setClearColor(16777215,.5),P.clear(),xt&&ze.render(V);const Ge=P.toneMapping;P.toneMapping=Yn;const He=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),Qe===!0&&Ie.setGlobalState(P.clippingPlanes,B),ua(S,V,B),X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let rt=0,Et=N.length;rt<Et;rt++){const yt=N[rt],{object:ct,geometry:Xt,material:ve,group:dn}=yt;if(ve.side===Ft&&ct.layers.test(B.layers)){const Je=ve.side;ve.side=ln,ve.needsUpdate=!0,Ch(ct,V,B,Xt,ve,dn),ve.side=Je,ve.needsUpdate=!0,Pe=!0}}Pe===!0&&(X.updateMultisampleRenderTarget(me),X.updateRenderTargetMipmap(me))}P.setRenderTarget(pe,we,Ce),P.setClearColor(_t,Ze),He!==void 0&&(B.viewport=He),P.toneMapping=Ge}function ua(S,N,V){const B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,me=S.length;z<me;z++){const ye=S[z],{object:pe,geometry:we,group:Ce}=ye;let Ge=ye.material;Ge.allowOverride===!0&&B!==null&&(Ge=B),pe.layers.test(V.layers)&&Ch(pe,N,V,we,Ge,Ce)}}function Ch(S,N,V,B,z,me){S.onBeforeRender(P,N,V,B,z,me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,N,V,B,S,me),z.transparent===!0&&z.side===Ft&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,S,me),z.side=bi,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,S,me),z.side=Ft):P.renderBufferDirect(V,N,B,z,S,me),S.onAfterRender(P,N,V,B,z,me)}function fa(S,N,V){N.isScene!==!0&&(N=Wt);const B=G.get(S),z=w.state.lights,me=w.state.shadowsArray,ye=z.state.version,pe=ce.getParameters(S,z.state,me,N,V,w.state.lightProbeGridArray),we=ce.getProgramCacheKey(pe);let Ce=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;B.envMap=se.get(S.envMap||B.environment,Ge),B.envMapRotation=B.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Gn),Ce=new Map,B.programs=Ce);let He=Ce.get(we);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===ye)return Ih(S,pe),He}else pe.uniforms=ce.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,pe),S.onBeforeCompile(pe,P),He=ce.acquireProgram(pe,we),Ce.set(we,He),B.uniforms=pe.uniforms;const Pe=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=Ie.uniform),Ih(S,pe),B.needsLights=eg(S),B.lightsStateVersion=ye,B.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=He,B.uniformsList=null,He}function Ph(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=po.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ih(S,N){const V=G.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ym(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=S.length;V<B;V++){const z=S[V];if(z.texture!==null&&z.boundingBox.containsPoint(b))return z}return null}function Zm(S,N,V,B,z){N.isScene!==!0&&(N=Wt),X.resetTextureUnits();const me=N.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,pe=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xe.workingColorSpace,we=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=se.get(B.envMap||ye,we),Ge=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,Et=!!V.morphAttributes.color;let yt=Yn;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(yt=P.toneMapping);const ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=ct!==void 0?ct.length:0,ve=G.get(B),dn=w.state.lights;if(Qe===!0&&(je===!0||S!==fe)){const ut=S===fe&&B.id===ne;Ie.setState(B,S,ut)}let Je=!1;B.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==dn.state.version||ve.outputColorSpace!==pe||z.isBatchedMesh&&ve.batching===!1||!z.isBatchedMesh&&ve.batching===!0||z.isBatchedMesh&&ve.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ve.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ve.instancing===!1||!z.isInstancedMesh&&ve.instancing===!0||z.isSkinnedMesh&&ve.skinning===!1||!z.isSkinnedMesh&&ve.skinning===!0||z.isInstancedMesh&&ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ve.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ve.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ve.instancingMorph===!1&&z.morphTexture!==null||ve.envMap!==Ce||B.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ie.numPlanes||ve.numIntersection!==Ie.numIntersection)||ve.vertexAlphas!==Ge||ve.vertexTangents!==He||ve.morphTargets!==Pe||ve.morphNormals!==rt||ve.morphColors!==Et||ve.toneMapping!==yt||ve.morphTargetsCount!==Xt||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ve.__version=B.version);let gn=ve.currentProgram;Je===!0&&(gn=fa(B,N,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,gn,ve));let Vn=!1,yi=!1,ps=!1;const lt=gn.getUniforms(),wt=ve.uniforms;if(x.useProgram(gn.program)&&(Vn=!0,yi=!0,ps=!0),B.id!==ne&&(ne=B.id,yi=!0),ve.needsLights){const ut=Ym(w.state.lightProbeGridArray,z);ve.lightProbeGrid!==ut&&(ve.lightProbeGrid=ut,yi=!0)}if(Vn||fe!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",S.projectionMatrix),lt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Si=lt.map.cameraPosition;Si!==void 0&&Si.setValue(D,Dt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),fe!==S&&(fe=S,yi=!0,ps=!0)}if(ve.needsLights&&(dn.state.directionalShadowMap.length>0&&lt.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,X),dn.state.spotShadowMap.length>0&&lt.setValue(D,"spotShadowMap",dn.state.spotShadowMap,X),dn.state.pointShadowMap.length>0&&lt.setValue(D,"pointShadowMap",dn.state.pointShadowMap,X)),z.isSkinnedMesh){lt.setOptional(D,z,"bindMatrix"),lt.setOptional(D,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(D,"boneTexture",ut.boneTexture,X))}z.isBatchedMesh&&(lt.setOptional(D,z,"batchingTexture"),lt.setValue(D,"batchingTexture",z._matricesTexture,X),lt.setOptional(D,z,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",z._indirectTexture,X),lt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",z._colorsTexture,X));const Mi=V.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&L.update(z,V,gn),(yi||ve.receiveShadow!==z.receiveShadow)&&(ve.receiveShadow=z.receiveShadow,lt.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(wt.envMapIntensity.value=N.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=pE()),yi){if(lt.setValue(D,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&Qm(wt,ps),me&&B.fog===!0&&Re.refreshFogUniforms(wt,me),Re.refreshMaterialUniforms(wt,B,ie,ae,w.state.transmissionRenderTarget[S.id]),ve.needsLights&&ve.lightProbeGrid){const ut=ve.lightProbeGrid;wt.probesSH.value=ut.texture,wt.probesMin.value.copy(ut.boundingBox.min),wt.probesMax.value.copy(ut.boundingBox.max),wt.probesResolution.value.copy(ut.resolution)}po.upload(D,Ph(ve),wt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(po.upload(D,Ph(ve),wt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(D,"center",z.center),lt.setValue(D,"modelViewMatrix",z.modelViewMatrix),lt.setValue(D,"normalMatrix",z.normalMatrix),lt.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ut=B.uniformsGroups;for(let Si=0,ms=ut.length;Si<ms;Si++){const Lh=ut[Si];ee.update(Lh,gn),ee.bind(Lh,gn)}}return gn}function Qm(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function eg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,N,V){const B=G.get(S);B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=N,G.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=G.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){Q=S,q=N,W=V;let B=null,z=!1,me=!1;if(S){const pe=G.get(S);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),_e.copy(S.viewport),Se.copy(S.scissor),Ye=S.scissorTest,x.viewport(_e),x.scissor(Se),x.setScissorTest(Ye),ne=-1;return}else if(pe.__webglFramebuffer===void 0)X.setupRenderTarget(S);else if(pe.__hasExternalTextures)X.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(pe.__boundDepthTexture!==Ge){if(Ge!==null&&G.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(me=!0);const Ce=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?B=Ce[N][V]:B=Ce[N],z=!0):S.samples>0&&X.useMultisampledRTT(S)===!1?B=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[V]:B=Ce,_e.copy(S.viewport),Se.copy(S.scissor),Ye=S.scissorTest}else _e.copy(De).multiplyScalar(ie).floor(),Se.copy(St).multiplyScalar(ie).floor(),Ye=Ke;if(V!==0&&(B=H),x.bindFramebuffer(D.FRAMEBUFFER,B)&&x.drawBuffers(S,B),x.viewport(_e),x.scissor(Se),x.setScissorTest(Ye),z){const pe=G.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,V)}else if(me){const pe=N;for(let we=0;we<S.textures.length;we++){const Ce=G.get(S.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Ce.__webglTexture,V,pe)}}else if(S!==null&&V!==0){const pe=G.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,V)}ne=-1},this.readRenderTargetPixels=function(S,N,V,B,z,me,ye,pe=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){x.bindFramebuffer(D.FRAMEBUFFER,we);try{const Ce=S.textures[pe],Ge=Ce.format,He=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Ge)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(He)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-B&&V>=0&&V<=S.height-z&&D.readPixels(N,V,B,z,de.convert(Ge),de.convert(He),me)}finally{const Ce=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,B,z,me,ye,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we)if(N>=0&&N<=S.width-B&&V>=0&&V<=S.height-z){x.bindFramebuffer(D.FRAMEBUFFER,we);const Ce=S.textures[pe],Ge=Ce.format,He=Ce.type;if(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(N,V,B,z,de.convert(Ge),de.convert(He),0);const rt=Q!==null?G.get(Q).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,rt);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mb(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(Pe),D.deleteSync(Et),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const B=Math.pow(2,-V),z=Math.floor(S.image.width*B),me=Math.floor(S.image.height*B),ye=N!==null?N.x:0,pe=N!==null?N.y:0;X.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ye,pe,z,me),x.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,B=null,z=0,me=0){let ye,pe,we,Ce,Ge,He,Pe,rt,Et;const yt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(V!==null)ye=V.max.x-V.min.x,pe=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ge=V.min.y,He=V.isBox3?V.min.z:0;else{const wt=Math.pow(2,-z);ye=Math.floor(yt.width*wt),pe=Math.floor(yt.height*wt),S.isDataArrayTexture?we=yt.depth:S.isData3DTexture?we=Math.floor(yt.depth*wt):we=1,Ce=0,Ge=0,He=0}B!==null?(Pe=B.x,rt=B.y,Et=B.z):(Pe=0,rt=0,Et=0);const ct=de.convert(N.format),Xt=de.convert(N.type);let ve;N.isData3DTexture?(X.setTexture3D(N,0),ve=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),ve=D.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),ve=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const dn=x.getParameter(D.UNPACK_ROW_LENGTH),Je=x.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=x.getParameter(D.UNPACK_SKIP_PIXELS),Vn=x.getParameter(D.UNPACK_SKIP_ROWS),yi=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),x.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const ps=S.isDataArrayTexture||S.isData3DTexture,lt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const wt=G.get(S),Mi=G.get(N),ut=G.get(wt.__renderTarget),Si=G.get(Mi.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,ut.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let ms=0;ms<we;ms++)ps&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(S).__webglTexture,z,He+ms),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(N).__webglTexture,me,Et+ms)),D.blitFramebuffer(Ce,Ge,ye,pe,Pe,rt,ye,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||G.has(S)){const wt=G.get(S),Mi=G.get(N);x.bindFramebuffer(D.READ_FRAMEBUFFER,K),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ut=0;ut<we;ut++)ps?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,z,He+ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,z),lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mi.__webglTexture,me,Et+ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mi.__webglTexture,me),z!==0?D.blitFramebuffer(Ce,Ge,ye,pe,Pe,rt,ye,pe,D.COLOR_BUFFER_BIT,D.NEAREST):lt?D.copyTexSubImage3D(ve,me,Pe,rt,Et+ut,Ce,Ge,ye,pe):D.copyTexSubImage2D(ve,me,Pe,rt,Ce,Ge,ye,pe);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ve,me,Pe,rt,Et,ye,pe,we,ct,Xt,yt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,me,Pe,rt,Et,ye,pe,we,ct,yt.data):D.texSubImage3D(ve,me,Pe,rt,Et,ye,pe,we,ct,Xt,yt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Pe,rt,ye,pe,ct,Xt,yt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Pe,rt,yt.width,yt.height,ct,yt.data):D.texSubImage2D(D.TEXTURE_2D,me,Pe,rt,ye,pe,ct,Xt,yt);x.pixelStorei(D.UNPACK_ROW_LENGTH,dn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),x.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),x.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,yi),me===0&&N.generateMipmaps&&D.generateMipmap(ve),x.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&X.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?X.setTextureCube(S,0):S.isData3DTexture?X.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?X.setTexture2DArray(S,0):X.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){q=0,W=0,Q=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function _f(n,e){if(e===db)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===nd||e===Dp){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===nd)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function hm(n){const e=new Map,t=new Map,i=n.clone();return um(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function um(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)um(n.children[i],e.children[i],t)}class fm extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new xf(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xf(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new DE(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Wr.extractUrlBase(e);a=Wr.resolveURL(l,this.path)}else a=Wr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pm){try{a[qe.KHR_BINARY_GLTF]=new FE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new KE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:a[h]=new _E;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[h]=new NE(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[h]=new UE;break;case qe.KHR_MESH_QUANTIZATION:a[h]=new kE;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function gE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Rt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bE{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new k(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],mn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new nm(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new tm(d),l.distance=h;break;case"spot":l=new ex(d),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Xn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class _E{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,i){const s=[];e.color=new k(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class vE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xe(r,r)}return Promise.all(s)}}class yE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class ME{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new k(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],mn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Ht)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class wE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new k().setRGB(r[0],r[1],r[2],mn),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new k().setRGB(r[0],r[1],r[2],mn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Ht)),Promise.all(s)}}class RE{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class CE{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Rt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){const i=Rt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class PE{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class IE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class LE{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class xf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,h=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,s.mode,s.filter),f})})}else return null}}class DE{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),h=d.isGroup?d.children:[d],u=l[0].count,f=[];for(const g of h){const v=new ke,m=new C,p=new wn,y=new C(1,1,1),M=new Wp(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,v.compose(m,p,y));for(const b in c)if(b==="_COLOR_0"){const E=c[b];M.instanceColor=new rd(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);pt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const pm="glTF",yr=12,vf={JSON:1313821514,BIN:5130562};class FE{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-yr,r=new DataView(e,yr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===vf.JSON){const l=new Uint8Array(e,yr+a,o);this.content=i.decode(l)}else if(c===vf.BIN){const l=yr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const h=dd[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=dd[d]||d.toLowerCase();if(a[d]!==void 0){const u=i.accessors[e.attributes[d]],f=qs[u.componentType];l[h]=f.name,c[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(f)},o,l,mn,u)})})}}class UE{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class kE{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class mm extends ir{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,h=(i-t)/d,u=h*h,f=u*h,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,y=1-m,M=p-u+h;for(let b=0;b!==o;b++){const E=a[v+b+o],w=a[v+b+c]*d,R=a[g+b+o],_=a[g+b]*d;r[b]=y*E+M*w+m*R+p*_}return r}}const OE=new wn;class BE extends mm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return OE.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:Nt,9729:Ut,9984:Tp,9985:co,9986:Lr,9987:hi},Mf={33071:Jn,33648:Eo,10497:Qs},Yc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zE={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Yr},Zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),n.DefaultMaterial}function Ki(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Xn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VE(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l];if(i){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(u)}if(s){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],h=l[1],u=l[2];return i&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function HE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WE(n){let e;const t=n.extensions&&n.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qc(t.attributes):e=n.indices+":"+Qc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Qc(n.targets[i]);return e}function Qc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hd(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const XE=new ke;class KE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Y_(this.options.manager):this.textureLoader=new ix(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Ki(r,o,s),Xn(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Wr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Yc[s.type],o=qs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new qt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Yc[s.type],l=qs[s.componentType],d=l.BYTES_PER_ELEMENT,h=d*c,u=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(u/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(y);M||(v=new l(o,p*f,s.count*f/d),M=new zp(v,f/d),t.cache.add(y,M)),m=new ta(M,c,u%f/d,g)}else o===null?v=new l(s.count*c):v=new l(o,u,s.count*c),m=new qt(v,c,g);if(s.sparse!==void 0){const p=Yc.SCALAR,y=qs[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,E=new y(a[1],M,s.sparse.count*p),w=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=E.length;R<_;R++){const T=E[R];if(m.setX(T,w[R*c]),c>=2&&m.setY(T,w[R*c+1]),c>=3&&m.setZ(T,w[R*c+2]),c>=4&&m.setW(T,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=yf[u.magFilter]||Ut,d.minFilter=yf[u.minFilter]||hi,d.wrapS=Mf[u.wrapS]||Qs,d.wrapT=Mf[u.wrapT]||Qs,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Nt&&d.minFilter!==Ut,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const u=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const m=new kt(v);m.needsUpdate=!0,u(m)}),t.load(Wr.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Xn(h,a),h.userData.mimeType=a.mimeType||qE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=d,d}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new rh,Nn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Yo,Nn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return ft}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new k(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],mn),o.opacity=u[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ht)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ft);const d=r.alphaMode||Zc.OPAQUE;if(d===Zc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Zc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==cn){const h=r.emissiveFactor;o.emissive=new k().setRGB(h[0],h[1],h[2],mn)}return r.emissiveTexture!==void 0&&a!==cn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Xn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ki(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sf(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=WE(l),h=s[d];if(h)a.push(h.promise);else{let u;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Sf(new bt,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?GE(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=a[f];let p;const y=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new o_(v,y):new Le(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=_f(p.geometry,Dp):m.mode===xn.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,nd));else if(m.mode===xn.LINES)p=new qp(v,y);else if(m.mode===xn.LINE_STRIP)p=new Zo(v,y);else if(m.mode===xn.LINE_LOOP)p=new f_(v,y);else if(m.mode===xn.POINTS)p=new Xp(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&HE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Xn(p,r),m.extensions&&Ki(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ki(s,h[0],r),h[0];const u=new dt;r.extensions&&Ki(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(Np.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new da(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Xn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const h=a[l];if(h){o.push(h);const u=new ke;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ih(o,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let h=0,u=s.channels.length;h<u;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),d.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let M=0,b=u.length;M<b;M++){const E=u[M],w=f[M],R=g[M],_=v[M],T=m[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const P=i._createAnimationTracks(E,w,R,_,T);if(P)for(let I=0;I<P.length;I++)p.push(P[I])}const y=new Do(r,void 0,p);return Xn(y,s),y})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(i.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],h=l[1],u=l[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,XE)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);if(d.userData.pivot!==void 0&&h.length>0){const f=d.userData.pivot,g=h[0];d.pivot=new C().fromArray(f),d.position.x-=f[0],d.position.y-=f[1],d.position.z-=f[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new Hp:l.length>1?d=new dt:l.length===1?d=l[0]:d=new pt,d!==l[0])for(let h=0,u=l.length;h<u;h++)d.add(l[h]);if(r.name&&(d.userData.name=r.name,d.name=a),Xn(d,r),r.extensions&&Ki(i,d,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(d);s.associations.set(d,{...h})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new dt;i.name&&(r.name=s.createUniqueName(i.name)),Xn(r,i),i.extensions&&Ki(t,r,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,h=c.length;d<h;d++){const u=c[d];u.parent!==null?r.add(hm(u)):r.add(u)}const l=d=>{const h=new Map;for(const[u,f]of s.associations)(u instanceof Nn||u instanceof kt)&&h.set(u,f);return d.traverse(u=>{const f=s.associations.get(u);f!=null&&h.set(u,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Pi[r.path]===Pi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let d;switch(Pi[r.path]){case Pi.weights:d=na;break;case Pi.rotation:d=ia;break;case Pi.translation:case Pi.scale:d=Lo;break;default:switch(i.itemSize){case 1:d=na;break;case 2:case 3:default:d=Lo;break}break}const h=s.interpolation!==void 0?zE[s.interpolation]:Zr,u=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){const v=new d(c[f]+"."+Pi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=hd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ia?BE:mm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jE(n,e,t){const i=e.attributes,s=new An;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const d=hd(qs[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,d=r.length;l<d;l++){const h=r[l];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const v=hd(qs[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new ti;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Sf(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=dd[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return Xe.workingColorSpace!==mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Xn(n,e),jE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?VE(n,e.targets,t):n})}var JE=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(n),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);y[M]=b>96?b-97:b>64?b-39:b+4}for(var E=0,M=0;M<p.length;++M)y[E++]=y[M]<60?i[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,E)}function c(p,y,M,b,E,w,R){var _=p.exports.sbrk,T=b+3&-4,P=_(T*E),I=_(w.length),F=new Uint8Array(p.exports.memory.buffer);F.set(w,I);var H=y(P,b,E,I,w.length);if(H==0&&R&&R(P,T,E),M.set(F.subarray(P,P+b*E)),_(P-_(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(M){var b=M.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(M),E=h.length;E<p;++E)h[E]=f(b);for(var E=p;E<h.length;++E)h[E].object.postMessage({});h.length=p,URL.revokeObjectURL(b)}function v(p,y,M,b,E){for(var w=h[0],R=1;R<h.length;++R)h[R].pending<w.pending&&(w=h[R]);return new Promise(function(_,T){var P=new Uint8Array(M),I=++u;w.pending+=p,w.requests[I]={resolve:_,reject:T},w.object.postMessage({id:I,count:p,size:y,source:P,mode:b,filter:E},[P.buffer])})}function m(p){var y=p.data;self.ready.then(function(M){if(!y.id)return self.close();try{var b=new Uint8Array(y.count*y.size);c(M,M.exports[y.mode],b,y.count,y.size,y.source,M.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(E){self.postMessage({id:y.id,count:y.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,M,b,E){c(r,r.exports.meshopt_decodeVertexBuffer,p,y,M,b,r.exports[l[E]])},decodeIndexBuffer:function(p,y,M,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,y,M,b)},decodeIndexSequence:function(p,y,M,b){c(r,r.exports.meshopt_decodeIndexSequence,p,y,M,b)},decodeGltfBuffer:function(p,y,M,b,E,w){c(r,r.exports[d[E]],p,y,M,b,r.exports[l[w]])},decodeGltfBufferAsync:function(p,y,M,b,E){return h.length>0?v(p,y,M,d[b],l[E]):a.then(function(){var w=new Uint8Array(p*y);return c(r,r.exports[d[b]],w,p,y,M,r.exports[l[E]]),w})}}})();const Ef={mage:$t("models/Mage.glb"),knight:$t("models/Knight.glb"),ranger:$t("models/Rogue_Hooded.glb"),skel_mage:$t("models/Skeleton_Mage.glb"),skel_minion:$t("models/Skeleton_Minion.glb"),skel_rogue:$t("models/Skeleton_Rogue.glb"),skel_warrior:$t("models/Skeleton_Warrior.glb"),goblin_real:$t("models/Goblin.glb"),orc_real:$t("models/Orc.glb"),cactoro:$t("models/Cactoro.glb"),mushroom_king:$t("models/Mushroom_King.glb"),mushnub:$t("models/Mushnub_Evolved.glb"),dragon:$t("models/Dragon.glb")},wf={},Tf={default:[/spellcast.*shoot/i,/spellcast/i,/cast/i,/attack/i,/melee/i],ranger:[/2h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],knight:[/1h_ranged.*shoot/i,/ranged.*shoot/i,/ranged/i,/shoot/i,/throw/i,/attack/i],goblin_real:[/attack/i],orc_real:[/weapon/i,/punch/i,/attack/i],cactoro:[/punch/i,/weapon/i,/attack/i],mushroom_king:[/weapon/i,/punch/i,/attack/i],mushnub:[/bite_front/i,/bite/i],dragon:[/attack2/i,/attack/i]},Fr=new Map,Li=new Map;function el(n,e,t){var i;for(const s of e){const r=n.find(a=>s.test(a.name));if(r)return r.name}return((i=n[0])==null?void 0:i.name)??t}function Af(n,e){for(const t of e){const i=n.find(s=>t.test(s.name));if(i)return i.name}return null}async function $E(n){const e=new fm;e.setMeshoptDecoder(JE);const t=Object.keys(Ef).length+Object.keys(wf).length;let i=0;const s=()=>n==null?void 0:n(++i,t);await Promise.all(Object.entries(Ef).map(async([r,a])=>{const o=await e.loadAsync(a);s();const c=o.scene;c.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1)});const l=new An().setFromObject(c),d=Math.max(.001,l.max.y-l.min.y),h=o.animations;Fr.set(r,{scene:c,clips:h,idle:el(h,[/^idle$/i,/idle/i,/flying/i],"Idle"),walk:el(h,[/^walking_a$/i,/walking/i,/walk/i,/running/i,/flying/i],"Walking_A"),attack:el(h,Tf[r]??Tf.default,"Attack"),death:Af(h,[/^death_a$/i,/death/i]),cheer:Af(h,[/cheer/i]),unitScale:1/d}),console.log(`[3d] ${r}: ${h.length} clips (idle=${Fr.get(r).idle}, walk=${Fr.get(r).walk}, attack=${Fr.get(r).attack})`)})),await Promise.all(Object.entries(wf).map(async([r,a])=>{try{const o=await e.loadAsync(a);o.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const c=new An().setFromObject(o.scene);Li.set(r,{scene:o.scene,rawHeight:Math.max(.001,c.max.y-c.min.y)})}catch(o){console.warn(`attachment prop failed to load: ${r}`,o)}s()})),Li.set("bow",{scene:QE(),rawHeight:.9}),Li.set("crossbow",{scene:ew(),rawHeight:.5}),Li.set("vehicle_wagon",{scene:YE(),rawHeight:1}),Li.set("vehicle_tower",{scene:ZE(),rawHeight:2.3}),Li.set("gong",{scene:tw(),rawHeight:.5}),Li.set("drum",{scene:nw(),rawHeight:.4})}const rs=()=>new ft({color:"#4a3826",roughness:.85}),fh=()=>new ft({color:"#6b4f30",roughness:.8}),ph=()=>new ft({color:"#3a3f47",roughness:.5,metalness:.6});function gm(n){const e=new Le(new tn(n,n,.08,10),ph());return e.rotation.z=Math.PI/2,e.name="wheel",e.castShadow=!0,e}function YE(){const n=new dt,e=new Le(new pn(.55,.34,.95),fh());e.position.y=.42,e.castShadow=!0;const t=new Le(new pn(.62,.08,1.02),rs());t.position.y=.6;const i=new Le(new tn(.3,.3,.6,10,1,!1,0,Math.PI),new ft({color:"#5e5346",roughness:.95,side:Ft}));i.rotation.z=Math.PI/2,i.rotation.y=Math.PI/2,i.position.set(0,.64,-.15);const s=new Le(new tn(.02,.02,.5,5),rs());s.position.set(0,.95,.4);const r=new Le(new En(.24,.14),new ft({color:"#8a2f2f",side:Ft,roughness:.9}));r.position.set(.12,1.1,.4),n.add(e,t,i,s,r);for(const[a,o]of[[-.32,.3],[.32,.3],[-.32,-.32],[.32,-.32]]){const c=gm(.19);c.position.set(a,.19,o),n.add(c)}return n}function ZE(){const n=new dt,e=new Le(new pn(.8,.24,1),rs());e.position.y=.34,e.castShadow=!0;const t=new Le(new pn(.62,1.5,.7),fh());t.position.y=1.2,t.castShadow=!0;const i=new Le(new pn(.66,.07,.74),ph());i.position.y=1;const s=i.clone();s.position.y=1.6,n.add(e,t,i,s);for(const[o,c]of[[-.24,-.24],[.24,-.24],[-.24,.24],[.24,.24]]){const l=new Le(new pn(.14,.18,.14),rs());l.position.set(o,2.03,c),n.add(l)}const r=new Le(new tn(.02,.02,.5,5),rs());r.position.y=2.3;const a=new Le(new En(.3,.18),new ft({color:"#8a2f2f",side:Ft,roughness:.9}));a.position.set(.15,2.42,0),n.add(r,a);for(const[o,c]of[[-.44,.34],[.44,.34],[-.44,-.34],[.44,-.34]]){const l=gm(.22);l.position.set(o,.22,c),n.add(l)}return n}function QE(){const n=new dt,e=new ft({color:"#6b4a2f",roughness:.75}),t=new Qo(new C(0,-.45,0),new C(.2,0,0),new C(0,.45,0)),i=new Le(new tc(t,16,.028,6),e);i.castShadow=!0;const s=new Le(new tn(.007,.007,.9,4),new ft({color:"#e8e2d5",roughness:.4}));return n.add(i,s),n}function ew(){const n=new dt,e=new ft({color:"#5a4630",roughness:.75}),t=new ft({color:"#9aa6b5",roughness:.4,metalness:.5}),i=new Le(new pn(.42,.05,.06),e);i.castShadow=!0;const s=new Qo(new C(.18,0,-.25),new C(.3,0,0),new C(.18,0,.25)),r=new Le(new tc(s,12,.02,6),t),a=new Le(new tn(.006,.006,.5,4),new ft({color:"#e8e2d5",roughness:.4}));return a.rotation.x=Math.PI/2,a.position.x=.18,n.add(i,r,a),n}function tw(){const n=new dt,e=new ft({color:"#c9a24a",roughness:.4,metalness:.7}),t=new Le(new tn(.24,.24,.04,16),e);t.rotation.x=Math.PI/2,t.castShadow=!0;const i=new Le(new la(.24,.02,6,16),rs());i.rotation.x=Math.PI/2;const s=new Le(new tn(.015,.015,.22,5),rs());return s.position.y=-.28,n.add(t,i,s),n}function nw(){const n=new dt,e=new Le(new tn(.22,.22,.3,12),fh());e.castShadow=!0;const t=new Le(new tn(.23,.23,.02,12),new ft({color:"#e8dcc0",roughness:.6}));t.position.y=.16;const i=new Le(new la(.225,.015,5,12),ph());i.rotation.x=Math.PI/2,i.position.y=.1;const s=i.clone();return s.position.y=-.1,n.add(e,t,i,s),n}function iw(n){const e=Fr.get(n);if(!e)throw new Error(`asset not loaded: ${n}`);return e}function bm(n){return Li.get(n)}const Rf={fire:{model:"mage",height:1.45,tint:new k("#ff6a1e"),tintStrength:.75,mage:{hat:{sx:.78,sy:1.55,sz:.78,rotX:-.18},hatEmissive:new k("#ff5500")}},ice:{model:"mage",height:1.45,tint:new k("#5bc8f5"),tintStrength:.55,mage:{hat:{sx:1.4,sy:.62,sz:1.4},spellbook:!0,hatEmissive:new k("#7fd8ff")}},lightning:{model:"mage",height:1.45,tint:new k("#b06bff"),tintStrength:.55,mage:{hat:{sx:.92,sy:1.35,sz:.92,rotZ:.34},hatEmissive:new k("#d9a8ff")}},water:{model:"mage",height:1.45,tint:new k("#26c2e8"),tintStrength:.55,watery:!0,mage:{hat:{sx:1.15,sy:.85,sz:1.15,rotX:.35},hatEmissive:new k("#7fe8ff")}},wind:{model:"mage",height:1.45,tint:new k("#bcd9ce"),tintStrength:.5,mage:{hat:{sx:1.22,sy:1,sz:1.22},hatEmissive:new k("#eafff5")}},generic_wizard:{model:"mage",height:1.45,tint:new k("#8a8494"),tintStrength:.5},generic_goblin:{model:"goblin_real",height:1.15,tint:new k("#8a8494"),tintStrength:.55},slingshot:{model:"goblin_real",height:1.15,tint:new k("#55a83f"),tintStrength:.4},dynamite:{model:"goblin_real",height:1.15,tint:new k("#6ba03c"),tintStrength:.4,emissive:new k("#ff6a1e")},gong:{model:"goblin_real",height:1.15,tint:new k("#4c9e59"),tintStrength:.4,held:{key:"gong",hand:"r",scale:.4}},generic_archer:{model:"ranger",height:1.4,tint:new k("#8a8494"),tintStrength:.5,hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.55}},longbow:{model:"ranger",height:1.5,tint:new k("#4e8f4e"),tintStrength:.55,emissive:new k("#3fae5a"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.62}},ballesta:{model:"knight",height:1.35,tint:new k("#5b7fc9"),tintStrength:.5,hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.5}},bolas:{model:"orc_real",height:1.3,tint:new k("#4a5548"),tintStrength:.4,hideRe:/orc_weapon/i},generic_tree:{model:"cactoro",height:1.1,tint:new k("#8a8494"),tintStrength:.55},rootgrasp:{model:"mushroom_king",height:1.7,tint:new k("#5e4630"),tintStrength:.45},boulder:{model:"mushnub",height:1.95,tint:new k("#6b543c"),tintStrength:.45},thornspitter:{model:"cactoro",height:1.35,tint:new k("#55663d"),tintStrength:.3},generic_void:{model:"skel_rogue",height:1.3,tint:new k("#8a8494"),tintStrength:.55},voidgazer:{model:"skel_rogue",height:1.45,tint:new k("#16101e"),tintStrength:.85,emissive:new k("#e5383b")},voidsylph:{model:"skel_mage",height:1.1,tint:new k("#241430"),tintStrength:.8,emissive:new k("#c9184a"),wings:!0},voidmaw:{model:"dragon",height:1.5,tint:new k("#2a1016"),tintStrength:.6,emissive:new k("#d00000")},phoenix:{model:"mage",height:1.7,tint:new k("#ff8c42"),tintStrength:.85,emissive:new k("#ff5500"),mage:{hat:{sx:.7,sy:1.9,sz:.7,rotX:-.3},hatEmissive:new k("#ffb163")}},wintercourt:{model:"mage",height:1.7,tint:new k("#a8e6ff"),tintStrength:.7,emissive:new k("#7fd8ff"),mage:{hat:{sx:1.6,sy:.7,sz:1.6},spellbook:!0,hatEmissive:new k("#ffffff")}},tempest:{model:"mage",height:1.7,tint:new k("#d9a8ff"),tintStrength:.7,emissive:new k("#b06bff"),mage:{hat:{sx:.95,sy:1.7,sz:.95,rotZ:.45},hatEmissive:new k("#f0dcff")}},tidelord:{model:"mage",height:1.7,tint:new k("#26c2e8"),tintStrength:.6,watery:!0,mage:{hat:{sx:1.3,sy:1,sz:1.3,rotX:.4},hatEmissive:new k("#bff4ff")}},zephyr:{model:"mage",height:1.7,tint:new k("#dff2ea"),tintStrength:.6,emissive:new k("#bcd9ce"),mage:{hat:{sx:1.4,sy:1.15,sz:1.4},hatEmissive:new k("#ffffff")}},warlord:{model:"goblin_real",height:1.45,tint:new k("#55a83f"),tintStrength:.45,emissive:new k("#c9e08a")},sapperking:{model:"goblin_real",height:1.45,tint:new k("#6ba03c"),tintStrength:.45,emissive:new k("#ff6a1e")},doomgong:{model:"goblin_real",height:1.45,tint:new k("#4c9e59"),tintStrength:.45,emissive:new k("#f4d98a"),held:{key:"gong",hand:"r",scale:.5}},stormpiercer:{model:"ranger",height:1.75,tint:new k("#4e8f4e"),tintStrength:.65,emissive:new k("#7dff9b"),hideRe:/knife|dagger|sword|crossbow/i,held:{key:"bow",hand:"l",scale:.7}},ironstorm:{model:"knight",height:1.55,tint:new k("#5b7fc9"),tintStrength:.65,emissive:new k("#8fb4ff"),hideRe:/sword|shield/i,held:{key:"crossbow",hand:"l",scale:.58}},chainwarden:{model:"orc_real",height:1.55,tint:new k("#4a5548"),tintStrength:.45,emissive:new k("#c8d6b0"),hideRe:/orc_weapon/i},elderroot:{model:"mushroom_king",height:2.15,tint:new k("#4a3624"),tintStrength:.55,emissive:new k("#3f6b33")},mountain:{model:"mushnub",height:2.4,tint:new k("#5e4c38"),tintStrength:.5,emissive:new k("#8d7a5e")},bramblehydra:{model:"cactoro",height:1.7,tint:new k("#3f6b33"),tintStrength:.45,emissive:new k("#6fcf5f")}},Cf={grunt:{model:"skel_minion",height:1.05,tint:new k("#7da35c"),tintStrength:.35},runner:{model:"skel_rogue",height:1.1,tint:new k("#d9a648"),tintStrength:.35},knight:{model:"knight",height:1.25,tint:new k("#8d99ae"),tintStrength:.25},shade:{model:"skel_mage",height:1.15,tint:new k("#b35442"),tintStrength:.45,emissive:new k("#ff5522")},golem:{model:"skel_warrior",height:2.6,tint:new k("#3d2f5e"),tintStrength:.6},golemling:{model:"skel_warrior",height:1.45,tint:new k("#7a68a6"),tintStrength:.5},orcraider:{model:"orc_real",height:1.15,tint:new k("#5e7a3a"),tintStrength:.35},orcbrute:{model:"orc_real",height:1.5,tint:new k("#4a5d33"),tintStrength:.45},troll:{model:"orc_real",height:2.3,tint:new k("#6a7d5e"),tintStrength:.5,emissive:new k("#38553f")},orcshaman:{model:"skel_mage",height:1.2,tint:new k("#3f8f5c"),tintStrength:.6,emissive:new k("#3fae5a")},wardrummer:{model:"orc_real",height:1.35,tint:new k("#8a5c3a"),tintStrength:.4,hideRe:/orc_weapon/i,held:{key:"drum",hand:"l",scale:.42}},wraith:{model:"skel_rogue",height:1.15,tint:new k("#9db8c9"),tintStrength:.5,emissive:new k("#bcd9ff"),ghostly:!0},warwagon:{model:"goblin",height:1,vehicle:"vehicle_wagon",tint:new k("#7a5c38"),tintStrength:.2},siegetower:{model:"goblin",height:2.3,vehicle:"vehicle_tower",tint:new k("#6b4f30"),tintStrength:.2},gargoyle:{model:"skel_minion",height:1.05,tint:new k("#8d99ae"),tintStrength:.6,wings:!0},drake:{model:"skel_rogue",height:1.3,tint:new k("#c25a2e"),tintStrength:.65,emissive:new k("#ff5522"),wings:!0},hexer:{model:"skel_mage",height:1.25,tint:new k("#7a4a9e"),tintStrength:.65,emissive:new k("#b06bff")},banshee:{model:"skel_rogue",height:1.15,tint:new k("#cfd8e8"),tintStrength:.6,emissive:new k("#e8f2ff"),ghostly:!0},necromancer:{model:"skel_mage",height:1.35,tint:new k("#3a2f4e"),tintStrength:.7,emissive:new k("#7a4a9e")},risen:{model:"skel_minion",height:.95,tint:new k("#9a92b5"),tintStrength:.5},thief:{model:"skel_rogue",height:1.05,tint:new k("#d9c148"),tintStrength:.55},shieldbearer:{model:"knight",height:1.35,tint:new k("#5b7fc9"),tintStrength:.5,emissive:new k("#8fb4ff")},slime_big:{model:"goblin",height:.85,tint:new k("#5fbf4a"),blob:!0},slime_mid:{model:"goblin",height:.6,tint:new k("#74d15e"),blob:!0},slime_small:{model:"goblin",height:.42,tint:new k("#8ce276"),blob:!0},warlord:{model:"skel_warrior",height:3,tint:new k("#6e7b8a"),tintStrength:.55,emissive:new k("#8fa2b8")},pyretitan:{model:"skel_mage",height:3.1,tint:new k("#c25a2e"),tintStrength:.6,emissive:new k("#ff5522")},colossus:{model:"skel_warrior",height:3.6,tint:new k("#3d2f5e"),tintStrength:.7,emissive:new k("#b14aed")}},Fo=1/Kr;function No(n){return Math.atan2(Math.cos(n),Math.sin(n))}const sw=1.05,mh=.28,Xa=new Map,Mr=new Map,Xs=[];let sa,_m=new C;function xm(n,e){sa=n,_m=e}function rw(n){const e=new dt,t=new dt;e.add(t);const i=new ft({color:n.tint??new k("#5fbf4a"),roughness:.25,transparent:!0,opacity:.92}),s=new Le(new ls(n.height/2,14,12),i);s.position.y=n.height/2,s.castShadow=!0,t.add(s);const r=new ft({color:"#1a2415"});for(const a of[-1,1]){const o=new Le(new ls(n.height*.06,6,6),r);o.position.set(a*n.height*.14,n.height*.62,n.height*.4),t.add(o)}return{root:e,inner:t,mats:[i],origColors:[i.color.clone()],baseEmissive:new k(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,blob:!0,height:n.height}}function aw(n){const e=bm(n.vehicle),t=new dt,i=new dt;t.add(i);const s=[],r=[];if(e){const a=e.scene.clone(!0);a.scale.setScalar(n.height/e.rawHeight),i.add(a),a.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.clone();n.tint&&l.color.lerp(n.tint,n.tintStrength??.25),c.material=l,s.push(l),/wheel/i.test(c.name)&&r.push(c)})}return{root:t,inner:i,mats:s,origColors:s.map(a=>a.color.clone()),baseEmissive:new k(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!1,prevRecoil:0,wheels:r,height:n.height}}function vm(n){if(n.vehicle)return aw(n);if(n.blob)return rw(n);const e=iw(n.model),t=hm(e.scene),i=e.unitScale*n.height;t.scale.setScalar(i);const s=p=>{const y=new Set;return p==null||p.traverse(M=>{M.isMesh&&y.add(M)}),y};let r=new Set,a=new Set;if(n.mage){const p=t.getObjectByName("Mage_Hat");if(p){const b=n.mage.hat;p.scale.set(p.scale.x*b.sx,p.scale.y*b.sy,p.scale.z*b.sz),b.rotZ&&(p.rotation.z+=b.rotZ),b.rotX&&(p.rotation.x+=b.rotX),a=s(p)}const y=t.getObjectByName("Spellbook"),M=t.getObjectByName("Spellbook_open");y&&(y.visible=!1),M&&(M.visible=!!n.mage.spellbook),r=s(t.getObjectByName("Mage_Head"))}if(n.hideRe&&t.traverse(p=>{n.hideRe.test(p.name)&&(p.visible=!1)}),n.held){const p=bm(n.held.key),y=n.held.hand==="l"?"L":"R",M=t.getObjectByName(`handslot${n.held.hand}`)??t.getObjectByName(`hand${n.held.hand}`)??t.getObjectByName(`Arm${y}_end_end`)??t.getObjectByName(`LowerArm${y}`);if(p&&M){t.updateMatrixWorld(!0);const b=p.scene.clone(!0),E=new C;M.getWorldScale(E);const w=1/Math.max(1e-6,E.y),R=n.held.scale*n.height;b.scale.setScalar(R*w/p.rawHeight),b.rotation.set(n.held.rotX??0,n.held.rotY??Math.PI/2,n.held.rotZ??0),M.add(b)}}const o=[];t.traverse(p=>{var w,R;const y=p;if(!y.isMesh)return;const M=y.material;let b;if(n.watery?b=new kn({map:M.map??null,color:((w=M.color)==null?void 0:w.clone())??new k("#ffffff"),transparent:!0,opacity:.72,roughness:.08,metalness:.1,clearcoat:.6,side:Ft}):b=M.clone(),n.tint){let _=n.tintStrength??.4;n.mage&&(r.has(y)?_=.08:a.has(y)&&(_=Math.min(1,_+.25))),b.color.lerp(n.tint,_)}const E=(R=n.mage)==null?void 0:R.hatEmissive;E&&a.has(y)?(b.emissive.copy(E),b.emissiveIntensity=.18):n.emissive&&(b.emissive.copy(n.emissive),b.emissiveIntensity=.35),n.ghostly&&(b.transparent=!0),y.material=b,o.push(b)});let c;if(n.wings){const y=1/(e.unitScale*n.height),M=new ft({color:"#2e3238",roughness:.7,side:Ft,transparent:!0,opacity:.92});c=[];for(const b of[-1,1]){const E=new Le(new En(.55*n.height*y,.26*n.height*y),M);E.geometry.translate(b*.55*n.height*y/2,0,0),E.position.set(b*.06*n.height*y,.6*n.height*y,-.08*n.height*y),E.rotation.x=-.4,t.add(E),c.push(E)}}const l=new _x(t),d=p=>{const y=Do.findByName(e.clips,p);return l.clipAction(y)},h=d(e.idle),u=d(e.walk),f=d(e.attack);f.setLoop(td,1);const g=e.death?d(e.death):null;g&&(g.setLoop(td,1),g.clampWhenFinished=!0);const v=e.cheer?d(e.cheer):null,m=new dt;return m.add(t),{root:m,inner:t,mixer:l,idle:h,walk:u,attack:f,death:g,cheer:v,mats:o,origColors:o.map(p=>p.color.clone()),baseEmissive:n.emissive?n.emissive.clone():new k(0),yaw:0,casting:!1,cheering:!1,becalmed:!1,watery:!!n.watery,prevRecoil:0,flapWings:c,height:n.height}}function ow(n){const e=(t,i)=>{const s=new Gp({color:t,depthTest:!1}),r=new s_(s);return r.center.set(0,.5),r.scale.set(.8,.09,1),r.position.set(-.4,n.height+.25,0),r.renderOrder=10+i,n.root.add(r),r};n.hpBar={bg:e("#3a0d12",0),fg:e("#58e05e",1)}}function cw(n,e){lw(n,e),dw(n,e),hw(e)}function lw(n,e){var i,s,r;const t=new Set;for(const a of n.enemies){t.add(a.id);let o=Xa.get(a.id);if(!o){const f=Cf[a.def.id]??Cf.grunt;o=vm(f),o.ghostly=f.ghostly,ow(o),(i=o.walk)==null||i.play(),o.yaw=No(a.angle),Xa.set(a.id,o),sa.add(o.root),o.root.scale.setScalar(.01)}const c=a.def.flying?1.05+Math.sin(performance.now()/380+a.id)*.12:0;o.root.position.set(a.x*Fo,c,a.y*Fo);const l=No(a.angle);if(o.yaw+=ym(o.yaw,l)*Math.min(1,e*10),o.root.rotation.y=o.yaw,o.flapWings){const f=Math.sin(performance.now()/90+a.id)*.55;o.flapWings[0].rotation.y=-.35-f,o.flapWings[1].rotation.y=.35+f}if(o.blob){const f=Math.abs(Math.sin(a.animT*6));o.inner.scale.set(1+.14*f,1-.18*f,1+.14*f)}const d=o.root.scale.x;d<1&&o.root.scale.setScalar(Math.min(1,d+e*5));let h=1;if(a.statuses.frozen?h=0:a.statuses.chill&&(h=Math.max(.25,1-a.statuses.chill.pct*(.6+.2*a.statuses.chill.stacks))),o.walk&&(o.walk.timeScale=a.def.speed/60*h),(s=o.mixer)==null||s.update(e),o.wheels&&o.wheels.length>0){for(const f of o.wheels)f.rotation.x=a.animT*a.def.speed*.09;o.inner.rotation.z=Math.sin(a.animT*5)*.02}if(o.ghostly){const f=a.phased?.22:.95;for(const g of o.mats)g.opacity+=(f-g.opacity)*Math.min(1,e*8)}if(o.hpBar){const f=Math.max(0,a.hp/a.maxHp);o.hpBar.fg.scale.x=.8*f;const g=f>.5?"#58e05e":f>.25?"#ffd75e":"#ff5e5e";o.hpBar.fg.material.color.set(g),o.hpBar.bg.visible=o.hpBar.fg.visible=f<1}for(const f of o.mats)a.hitFlash>0?(f.emissive.setRGB(1,1,1),f.emissiveIntensity=.7):a.statuses.burn?(f.emissive.set("#ff6a1e"),f.emissiveIntensity=.45+Math.sin(performance.now()/90)*.15):a.statuses.wet?(f.emissive.set("#2277ff"),f.emissiveIntensity=.3):a.statuses.chill?(f.emissive.set("#66ccff"),f.emissiveIntensity=.25):(f.emissive.copy(o.baseEmissive),f.emissiveIntensity=o.baseEmissive.getHex()===0?0:.35);const u=(a.armorHp??0)>0;if(u&&!o.armorShell){const f=new Le(new ls(.62,12,10),new ft({color:"#9aa6b5",transparent:!0,opacity:.4,roughness:.35,metalness:.6}));f.scale.set(1,(o.height+.2)/1.24,1),f.position.y=(o.height+.2)/2,o.root.add(f),o.armorShell=f}else!u&&o.armorShell&&(o.root.remove(o.armorShell),Uo(o.armorShell),o.armorShell=void 0);if(o.armorShell){const f=Math.max(.15,(a.armorHp??0)/(a.def.armor??1));o.armorShell.material.opacity=.18+f*.3+Math.sin(performance.now()/300)*.04}if(a.statuses.frozen&&!o.iceCube){const f=new Le(new pn(.7,o.height+.15,.7),new ft({color:"#9fdcff",transparent:!0,opacity:.45,roughness:.1}));f.position.y=(o.height+.15)/2,o.root.add(f),o.iceCube=f}else!a.statuses.frozen&&o.iceCube&&(o.root.remove(o.iceCube),Uo(o.iceCube),o.iceCube=void 0)}for(const[a,o]of Xa)if(!t.has(a)){Xa.delete(a);const c=o.root.position.distanceTo(_m)<1.2;o.death&&!c?((r=o.walk)==null||r.fadeOut(.08),o.death.reset().setEffectiveTimeScale(1.5).fadeIn(.05).play(),o.hpBar&&(o.hpBar.bg.visible=o.hpBar.fg.visible=!1),Xs.push({view:o,t:sw,mode:"anim"})):Xs.push({view:o,t:mh,mode:"shrink"})}}function dw(n,e){var i,s,r,a,o,c,l,d;const t=new Set;for(const h of n.wizards){t.add(h.id);let u=Mr.get(h.id);u&&u.defId!==h.def.id&&(sa.remove(u.root),u.root.traverse(m=>Uo(m)),Mr.delete(h.id),u=void 0),u||(u=vm(Rf[h.def.id]??Rf.generic_wizard),u.defId=h.def.id,(i=u.idle)==null||i.play(),u.yaw=No(h.aim),Mr.set(h.id,u),sa.add(u.root),u.root.position.set(h.x*Fo,0,h.y*Fo),u.root.scale.setScalar(.01));const f=u.root.scale.x;f<1&&u.root.scale.setScalar(Math.min(1,f+e*4));const g=No(h.aim);u.yaw+=ym(u.yaw,g)*Math.min(1,e*12),u.root.rotation.y=u.yaw;const v=!!h.becalmed||(h.silencedT??0)>0;if(v!==u.becalmed&&(u.becalmed=v,u.mats.forEach((m,p)=>{m.color.copy(u.origColors[p]),v&&m.color.lerp(new k("#777777"),.6)}),u.idle&&(u.idle.timeScale=v?.35:1)),n.phase==="won"&&u.cheer&&!u.cheering?(u.cheering=!0,(s=u.idle)==null||s.fadeOut(.2),(r=u.attack)==null||r.fadeOut(.2),u.cheer.reset().fadeIn(.2).play()):n.phase!=="won"&&u.cheering&&(u.cheering=!1,(a=u.cheer)==null||a.fadeOut(.2),(o=u.idle)==null||o.reset().fadeIn(.2).play()),!u.cheering&&u.attack&&h.recoil>u.prevRecoil+.01){const m=u.attack.getClip().duration;u.attack.reset(),u.attack.timeScale=m/Math.min(Math.max(h.stats.rate*.85,.35),1.1),u.attack.play(),(c=u.idle)==null||c.fadeOut(.08),u.casting=!0}if(u.casting&&u.attack&&!u.attack.isRunning()&&(u.casting=!1,(l=u.idle)==null||l.reset().fadeIn(.15).play()),u.prevRecoil=h.recoil,(d=u.mixer)==null||d.update(e),u.flapWings){const m=Math.sin(performance.now()/110+h.id)*.5;u.flapWings[0].rotation.y=-.35-m,u.flapWings[1].rotation.y=.35+m}if(u.watery){const m=.72+Math.sin(performance.now()/380+h.id)*.06;for(const p of u.mats)p.opacity=m}}for(const[h,u]of Mr)t.has(h)||(Mr.delete(h),Xs.push({view:u,t:mh,mode:"shrink"}))}function hw(n){var e;for(let t=Xs.length-1;t>=0;t--){const i=Xs[t];if(i.t-=n,i.mode==="anim"){if((e=i.view.mixer)==null||e.update(n),i.t<.3){const s=Math.max(.01,i.t/.3);i.view.root.position.y=-(1-s)*.5}}else{const s=Math.max(.01,i.t/mh);i.view.root.scale.setScalar(s),i.view.root.position.y=-(1-s)*.4}i.t<=0&&(sa.remove(i.view.root),i.view.root.traverse(s=>Uo(s)),Xs.splice(t,1))}}function ym(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Uo(n){var t;if(!n.isMesh)return;(t=n.geometry)==null||t.dispose();const e=n.material;Array.isArray(e)?e.forEach(i=>i.dispose()):e==null||e.dispose()}const _n=1/Kr,Ka=.45;let Nr,Mm,ko;const ud=800;let mo,Oo,Bo;const uw=["orb","rock","stick","arrow","bolt","needle"],Pf={orb:[],rock:[],stick:[],arrow:[],bolt:[],needle:[]};let Sm;const fw={orb:null,rock:"#8d8578",stick:"#c8452e",arrow:"#e6d7b0",bolt:"#cdd7e0",needle:"#7fce6a"};let ja=0,zo,Go;const Ja=new Map;let go;function pw(n,e,t){Nr=n,Mm=e,ko=t;const i=new bt;Oo=new qt(new Float32Array(ud*3),3),Bo=new qt(new Float32Array(ud*3),3),i.setAttribute("position",Oo),i.setAttribute("color",Bo);const s=new rh({size:.15,vertexColors:!0,transparent:!0,opacity:.95,blending:So,depthWrite:!1});mo=new Xp(i,s),mo.frustumCulled=!1,Nr.add(mo),Sm={orb:new ls(.11,10,8),rock:new ch(.12),stick:new tn(.05,.05,.28,8).rotateZ(Math.PI/2),arrow:new Gr(.04,.44,6).rotateZ(-Math.PI/2),bolt:new Gr(.06,.34,6).rotateZ(-Math.PI/2),needle:new Gr(.022,.22,5).rotateZ(-Math.PI/2)},zo=new dt,Nr.add(zo),Go=new dt,Nr.add(Go),go=document.createElement("div"),go.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4;font-family:Segoe UI,sans-serif;",ko.appendChild(go)}const $a=new k;function mw(n){let e=0;for(const a of te.particles){if(e>=ud)break;Oo.setXYZ(e,a.x*_n,Ka+(1-a.life/a.maxLife)*.3,a.y*_n),$a.set(a.color),Bo.setXYZ(e,$a.r,$a.g,$a.b),e++}Oo.needsUpdate=!0,Bo.needsUpdate=!0,mo.geometry.setDrawRange(0,e),ja+=.22;const t={orb:0,rock:0,stick:0,arrow:0,bolt:0,needle:0};for(const a of n.projectiles){const o=a.visual??"orb",c=Pf[o];let l=c[t[o]];l||(l=new Le(Sm[o],new cn({color:"#ffffff"})),Nr.add(l),c.push(l)),t[o]++,l.visible=!0;let d=0;if((o==="rock"||o==="stick")&&a.sx!==void 0&&a.sy!==void 0){const f=Math.hypot(a.tx-a.sx,a.ty-a.sy)||1,g=Math.hypot(a.x-a.sx,a.y-a.sy),v=Math.min(1,g/f),m=Math.min(.95,.35+f*_n*.05);d=Math.sin(v*Math.PI)*m}l.position.set(a.x*_n,Ka+d,a.y*_n),l.material.color.set(fw[o]??Tn[a.element].color);const u=Math.atan2(a.ty-a.y,a.tx-a.x);l.rotation.set(0,-u,0),o==="orb"?l.scale.set(1.8,1,1):o==="rock"?(l.scale.setScalar(1),l.rotation.x=ja,l.rotation.z=ja*.7):o==="stick"?(l.scale.setScalar(1),l.rotation.z=ja*1.6,Math.random()<.5&&te.burst(a.x,a.y,"#ffd75e",1,20,1.5,.2)):l.scale.setScalar(1)}for(const a of uw){const o=Pf[a];for(let c=t[a];c<o.length;c++)o[c].visible=!1}zo.clear();for(const a of te.arcs){const o=a.life/a.maxLife,c=a.pts.map(h=>new C(h.x*_n,Ka+.15,h.y*_n)),l=new bt().setFromPoints(c),d=new Yo({color:a.color,transparent:!0,opacity:o,blending:So,depthWrite:!1});zo.add(new Zo(l,d))}Go.clear();for(const a of te.rings){const o=1-a.life/a.maxLife,c=Math.max(.02,a.maxR*o*_n),l=new ec(c*.82,c,28),d=new cn({color:a.color,transparent:!0,opacity:(1-o)*.7,side:Ft,depthWrite:!1}),h=new Le(l,d);h.rotation.x=-Math.PI/2,h.position.set(a.x*_n,.02,a.y*_n),Go.add(h)}const i=new Set,s={w:ko.clientWidth,h:ko.clientHeight},r=new C;for(const a of te.floaters){i.add(a);let o=Ja.get(a);o||(o=document.createElement("div"),o.textContent=a.text,o.style.cssText=`position:absolute;transform:translate(-50%,-50%);font-weight:700;font-size:${a.size}px;color:${a.color};text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;`,go.appendChild(o),Ja.set(a,o)),r.set(a.x*_n,Ka+.3,a.y*_n).project(Mm),o.style.left=`${(r.x+1)/2*s.w}px`,o.style.top=`${(1-r.y)/2*s.h-(1-a.life/a.maxLife)*26}px`,o.style.opacity=String(Math.min(1,a.life/a.maxLife*2))}for(const[a,o]of Ja)i.has(a)||(o.remove(),Ja.delete(a))}const Mt=1/Kr,li=as*Mt,ji=js*Mt;let In,Vt,Ui,fd,Em,bo,Ya,pd=[],md=[],Vo,an,qr,gd,fi,Ln,Zi,ns,tl="",ki,Qi,Ur,_o,bd=0;const gh=li/2+.3,gw=gh/(as/js),If=Np.degToRad(52),Lf=30,Df=1,bw=3;let gi=1,ds=0,hs=0;function ra(){const n=new C(li/2+ds,0,ji/2-.2+hs);Ui.position.set(n.x,Math.sin(If)*Lf,n.z+Math.cos(If)*Lf),Ui.lookAt(n),Ui.zoom=gi,Ui.updateProjectionMatrix()}function wm(){const n=gh*(1-1/gi),e=gw*(1-1/gi);ds=Math.max(-n,Math.min(n,ds)),hs=Math.max(-e,Math.min(e,hs))}function ha(n,e,t){const i=e!==void 0&&t!==void 0?Ho(e,t):null,s=i?{x:i.x,y:i.y}:null;if(gi=Math.max(Df,Math.min(bw,gi*n)),gi<=Df+.001)ds=0,hs=0;else if(s&&e!==void 0&&t!==void 0){ra();const r=Ho(e,t);r&&(ds+=(s.x-r.x)*Mt,hs+=(s.y-r.y)*Mt)}wm(),ra()}function _w(n,e){const t=In.domElement,i=gh*2/(t.clientWidth||as)/gi;ds-=n*i,hs-=e*i,wm(),ra()}function xw(){gi=1,ds=0,hs=0,ra()}function Tm(){return gi}async function vw(n,e,t){In=new mE({canvas:n,antialias:!0}),In.setSize(as,js,!1),In.setPixelRatio(Math.min(2,window.devicePixelRatio)),In.shadowMap.enabled=!0,In.shadowMap.type=Or,In.toneMapping=Gd,In.toneMappingExposure=1.25,Vt=new Qb,Vt.background=new k("#1a2419");const i=as/js,s=li/2+.3,r=s/i;Ui=new da(-s,s,r,-r,.1,100),ra(),Vo=new Z_("#cfe8ff","#3a4a30",1.7),Vt.add(Vo),an=new nm("#fff4d6",2.4),an.position.set(li*.3,14,ji*.15),an.target.position.set(li/2,0,ji/2-.2),an.castShadow=!0,an.shadow.mapSize.set(2048,2048);const a=15;an.shadow.camera.left=-a,an.shadow.camera.right=a,an.shadow.camera.top=a,an.shadow.camera.bottom=-a,an.shadow.camera.far=60,Vt.add(an,an.target),qr=new ft({roughness:1});const o=new Le(new En(li,ji),qr);o.rotation.x=-Math.PI/2,o.position.set(li/2,0,ji/2),o.receiveShadow=!0,Vt.add(o),gd=new ft({color:"#1c2b1c",roughness:1});const c=new Le(new En(li*4,ji*4),gd);c.rotation.x=-Math.PI/2,c.position.set(li/2,-.02,ji/2),c.receiveShadow=!0,Vt.add(c),Am(e.map.theme??Ad),await Rm(e),Ln=new Le(new ec(.97,1,48),new cn({color:"#c9b8ff",transparent:!0,opacity:.5,side:Ft,depthWrite:!1})),Ln.rotation.x=-Math.PI/2,Ln.position.y=.03,Ln.visible=!1,Vt.add(Ln),Zi=new dt;const l=[];for(let f=0;f<=Er;f++)l.push(f,0,0,f,0,wr);for(let f=0;f<=wr;f++)l.push(0,0,f,Er,0,f);const d=new bt;d.setAttribute("position",new $e(l,3));const h=new qp(d,new Yo({color:"#ffffff",transparent:!0,opacity:.13,depthWrite:!1}));h.position.y=.016,Zi.add(h),ns=new Wp(new En(.92,.92),new cn({transparent:!0,opacity:.14,depthWrite:!1,side:Ft}),Er*wr);{const f=new ke,g=new ke().makeRotationX(-Math.PI/2);let v=0;for(let m=0;m<wr;m++)for(let p=0;p<Er;p++)f.copy(g),f.setPosition(p+.5,.012,m+.5),ns.setMatrixAt(v,f),ns.setColorAt(v,new k("#59c96a")),v++}Zi.add(ns),Zi.visible=!1,Vt.add(Zi),ki=new dt,Qi=Ln.clone(),Qi.material=Ln.material.clone(),Qi.visible=!0,Qi.position.set(0,.03,0),Ur=new Le(new En(1,1),new cn({color:"#7dff9b",transparent:!0,opacity:.3,side:Ft,depthWrite:!1})),Ur.rotation.x=-Math.PI/2,Ur.position.y=.02,_o=new Le(new tn(.28,.36,1,12),new ft({color:"#ffffff",transparent:!0,opacity:.45})),_o.position.y=.5,ki.add(Qi,Ur,_o),ki.visible=!1,Vt.add(ki),fd=new xx,Em=new Di(new C(0,1,0),0);const u=e.track.posAt(e.track.total);xm(Vt,new C(u.x*Mt,0,u.y*Mt)),pw(Vt,Ui,n.parentElement),await $E(t),bd=performance.now(),window.__scene=Vt}function Am(n){Vo.color.set(n.hemiSky),Vo.groundColor.set(n.hemiGround),an.color.set(n.sun),an.intensity=n.sunIntensity,In.toneMappingExposure=n.exposure,Vt.fog=new th(n.fog,34,62),Vt.background=new k(n.fog).multiplyScalar(.35),gd.color.set(n.grassB).multiplyScalar(.75)}async function Rm(n){var s;const e=n.map.theme??Ad,t=new p_(ig(n.track,n.map.water??[],e));t.colorSpace=Ht,t.anisotropy=8,(s=qr.map)==null||s.dispose(),qr.map=t,qr.needsUpdate=!0,fi=new dt,Vt.add(fi),Ff(n.track.posAt(0),"#b14aed"),Ff(n.track.posAt(n.track.total),"#3a86ff"),bo=new dt;for(const[r,a]of n.map.water??[]){const o=new Le(new En(1.02,1.02),new ft({color:new k(e.water).lerp(new k("#4f9fe4"),.4),transparent:!0,opacity:.72,roughness:.12,metalness:.35}));o.rotation.x=-Math.PI/2,o.position.set(r+.5,.04,a+.5),bo.add(o)}fi.add(bo),Ya=new dt,md=[],pd=[];const i=new ft({color:"#f4f9ff",transparent:!0,opacity:.88,roughness:.9});for(let r=0;r<n.clouds.length;r++){const a=new dt,o=[[0,0,0,.65],[.6,.1,.15,.45],[-.55,.05,-.1,.5],[.15,.35,-.2,.4]];for(const[l,d,h,u]of o){const f=new Le(new ls(u,12,10),i);f.position.set(l,d,h),a.add(f)}a.position.y=3.1,Ya.add(a),md.push(a);const c=new Le(new ah(1.05,24),new cn({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.03,Ya.add(c),pd.push(c)}fi.add(Ya),await yw(n)}function bh(n){fi&&(Vt.remove(fi),fi.traverse(t=>{var s;const i=t;if(i.isMesh){(s=i.geometry)==null||s.dispose();const r=i.material;Array.isArray(r)?r.forEach(a=>a.dispose()):r==null||r.dispose()}})),Am(n.map.theme??Ad);const e=n.track.posAt(n.track.total);xm(Vt,new C(e.x*Mt,0,e.y*Mt)),Rm(n).catch(t=>console.warn("map rebuild failed",t))}async function yw(n){const e=n.map.props??[];if(e.length===0)return;const t=new fm,i=new Map;for(const s of new Set(e.map(r=>r.model))){const r=qf[s];if(r)try{const a=await t.loadAsync(r.file);a.scene.traverse(l=>{l.isMesh&&(l.castShadow=!0)});const o=new An().setFromObject(a.scene),c=Math.max(.001,o.max.y-o.min.y);i.set(s,{scene:a.scene,unitScale:r.height/c})}catch(a){console.warn(`prop model failed to load: ${s}`,a)}}for(const s of e){const r=i.get(s.model);if(!r)continue;const a=r.scene.clone(!0);a.scale.setScalar(r.unitScale*s.scale),a.position.set(s.x*Mt,0,s.y*Mt),a.rotation.y=-s.rot,fi.add(a)}}function Ff(n,e){const t=new dt,i=new Le(new la(.55,.09,10,24),new cn({color:e}));i.position.y=.7,i.rotation.y=n.angle+Math.PI/2;const s=new tm(e,6,4);s.position.y=.7,t.add(i,s),t.position.set(n.x*Mt,0,n.y*Mt),fi.add(t)}function Ho(n,e){const t=In.domElement,i=t.clientWidth||as,s=t.clientHeight||js,r=new xe(n/i*2-1,-(e/s)*2+1);fd.setFromCamera(r,Ui);const a=new C;if(!fd.ray.intersectPlane(Em,a))return null;const o=a.x*Kr,c=a.z*Kr;return o<0||c<0||o>=as||c>=js?null:{x:o,y:c}}function Mw(n){const e=performance.now(),t=Math.min(.1,(e-bd)/1e3);bd=e,cw(n,t),mw(n);const i=e/1e3;bo.children.forEach((r,a)=>{r.position.y=.04+Math.sin(i*1.8+a*1.3)*.012,r.material.opacity=.68+Math.sin(i*2.4+a*.7)*.07}),n.clouds.forEach((r,a)=>{const o=md[a],c=pd[a];o&&(o.position.set(r.x*Mt,3.1+Math.sin(i*.9+a)*.12,r.y*Mt),c.position.set(r.x*Mt,.03,r.y*Mt))});const s=Jo(n,n.selectedWizardId);if(s){Ln.visible=!0,Ln.position.set(s.x*Mt,.03,s.y*Mt);const r=s.stats.range*Mt;Ln.scale.setScalar(r)}else Ln.visible=!1;if(n.placingType){Zi.visible=!0;const r=`${n.placingType}|${n.wizards.length}|${n.map.id}|${n.act}`;if(r!==tl){tl=r;const a=en[n.placingType],o=new k("#59c96a"),c=new k("#c94d4d");let l=0;for(let d=0;d<wr;d++)for(let h=0;h<Er;h++)ns.setColorAt(l++,$s(n,h,d,a)?o:c);ns.instanceColor&&(ns.instanceColor.needsUpdate=!0)}}else Zi.visible=!1,tl="";if(n.placingType&&n.mouseOnBoard){const r=en[n.placingType],{cx:a,cy:o}=Td(n.mouseX,n.mouseY);if(jf(a,o)){const c=$s(n,a,o,r),l=Xf(a,o);ki.visible=!0,ki.position.set(l.x*Mt,0,l.y*Mt),Qi.scale.setScalar(r.range*Mt);const d=c?"#7dff9b":"#ff6b6b";Qi.material.color.set(d),Ur.material.color.set(d),_o.material.color.set(Tn[r.element].color)}else ki.visible=!1}else ki.visible=!1;In.render(Vt,Ui)}const Sr=[[220,261.63,329.63],[174.61,220,261.63],[196,261.63,329.63],[196,246.94,293.66]],kr=7.5,Nf=.5,Uf=.12,Sw=.22,Ew=.13;let nl=!1,il=!0,us=0,sl=0,is=0,Ks=0,vn=null,ci=null,Ii=null,Za=null;const Oi={start(){if(nl)return;const n=Me.bus();n&&(nl=!0,vn=n.ctx.createGain(),vn.gain.value=il?Nf:0,vn.connect(n.target),is=n.ctx.currentTime+.1,Ks=is,Za=setInterval(()=>rl(n.ctx),500),rl(n.ctx),document.addEventListener("visibilitychange",()=>{if(!document.hidden&&vn){const e=Me.bus();e&&(is=Math.max(is,e.ctx.currentTime+.05),Ks=Math.max(Ks,e.ctx.currentTime+.05),rl(e.ctx))}}))},setEnabled(n){il=n,n&&Oi.start();const e=Me.bus();vn&&e&&(vn.gain.cancelScheduledValues(e.ctx.currentTime),vn.gain.linearRampToValueAtTime(n?Nf:0,e.ctx.currentTime+.8))},isEnabled(){return il},setIntensity(n){n!==us&&(us=n,Aw())},stop(){Za&&clearInterval(Za),Za=null,nl=!1}};function rl(n){if(!vn)return;const e=n.currentTime+2.6;for(;is<e;)ww(n,Sr[sl%Sr.length],is),sl++,is+=kr;const t=us>=2?.375:.5;for(;Ks<e;){if(us>=1){const i=Sr[(sl-1+Sr.length)%Sr.length][0]/2;Tw(n,i,Ks)}Ks+=t}}function ww(n,e,t){const i=us>=2;for(const s of e)for(const r of[-3,3]){const a=n.createOscillator();a.type="triangle",a.frequency.value=s,a.detune.value=r;const o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(Uf,t+2.2),o.gain.setValueAtTime(Uf,t+kr-2),o.gain.linearRampToValueAtTime(1e-4,t+kr+.6);const c=n.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(i?500:750,t),c.frequency.linearRampToValueAtTime(i?380:950,t+kr),a.connect(c),c.connect(o),o.connect(vn),a.start(t),a.stop(t+kr+.8)}}function Tw(n,e,t){const i=n.createOscillator();i.type="sine",i.frequency.value=e;const s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(Sw,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.3),i.connect(s),s.connect(vn),i.start(t),i.stop(t+.35)}function Aw(){const n=Me.bus();if(!n||!vn)return;const{ctx:e}=n;if(us>=2&&!ci){ci=e.createOscillator(),ci.type="sawtooth",ci.frequency.value=55;const t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=160,Ii=e.createGain(),Ii.gain.setValueAtTime(1e-4,e.currentTime),Ii.gain.linearRampToValueAtTime(Ew,e.currentTime+2.5),ci.connect(t),t.connect(Ii),Ii.connect(vn),ci.start()}else if(us<2&&ci&&Ii){const t=ci;Ii.gain.linearRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>t.stop(),1800),ci=null,Ii=null}}let Cm,Pm,_d,Zt,Im,Lm,Dm,Fm,di,kf="";function Rw(n){Cm=document.getElementById("hud-gold"),Pm=document.getElementById("hud-lives"),_d=document.getElementById("hud-round"),Zt=document.getElementById("btn-start"),Im=document.getElementById("wave-preview"),Zt.addEventListener("click",n),Lm=document.getElementById("qb-gold"),Dm=document.getElementById("qb-lives"),Fm=document.getElementById("qb-round"),di=document.getElementById("qb-start"),di.addEventListener("click",n)}function Cw(n){var r;const e=`${n.gold}|${n.lives}|${n.round}|${n.act}|${n.phase}|${((r=n.waveModifier)==null?void 0:r.id)??""}|${n.nodeChoice}|${n.nodePicked}`;if(e===kf)return;kf=e,document.body.dataset.act=String(n.act);const t=Rd(n.act),i=tp(n)?`Act ${["I","II","III"][n.act]??n.act+1} · `:"";Cm.textContent=String(n.gold),Pm.textContent=String(n.lives),_d.textContent=`${i}${Math.min(n.round+1,t)}/${t}`,Lm.textContent=String(n.gold),Dm.textContent=String(n.lives),Fm.textContent=_d.textContent;const s=n.round===t-1;if(n.phase==="build"&&n.round<t){const a=!n.nodePicked&&n.nextNodes.length>1;Zt.disabled=a;const o=s?" 👹 BOSS":n.nodeChoice==="elite"?" ★":n.nodeChoice==="treasure"?" 💎":"";Zt.textContent=a?"Choose your path…":`Start Wave ${n.round+1}${o}`,Im.innerHTML=Pw(n)}else n.phase==="wave"?(Zt.disabled=!0,Zt.textContent=n.waveModifier?`W${n.round+1} ★ ${n.waveModifier.name} (${n.waveModifier.desc})`:s?"👹 BOSS — hold the line!":`Wave ${n.round+1} — Defend!`):n.phase==="draft"?(Zt.disabled=!0,Zt.textContent="Choose a card…"):n.phase==="relic"?(Zt.disabled=!0,Zt.textContent="Claim your relic…"):n.phase==="actClear"?(Zt.disabled=!0,Zt.textContent=`Act ${["I","II","III"][n.act]} complete!`):(Zt.disabled=!0,Zt.textContent=n.phase==="won"?"Victory!":"Defeat");if(di.disabled=Zt.disabled,n.phase==="build"){const a=!n.nodePicked&&n.nextNodes.length>1,o=s?" 👹":n.nodeChoice==="elite"?" ★":n.nodeChoice==="treasure"?" 💎":"";di.textContent=a?"🗺️ path…":`▶ Wave ${n.round+1}${o}`}else n.phase==="wave"?di.textContent=s?"👹 BOSS!":`⚔ Wave ${n.round+1}`:n.phase==="draft"?di.textContent="🃏 pick a card":n.phase==="relic"?di.textContent="💎 pick a relic":n.phase==="actClear"?di.textContent="🏰 act complete":di.textContent=n.phase==="won"?"🏆":"💀"}function Pw(n){const e=Ko(n.act)[n.round];if(!e)return"";const t=new Map;for(const s of e)t.set(s.type,(t.get(s.type)??0)+s.count);const i=[];for(const[s,r]of t){const a=Fd[s];i.push(`${r}× ${a.name}${Iw(s)}`)}return`<b>Next wave:</b> ${i.join(", ")}`}function Iw(n){switch(n){case"knight":return" <i>(armored — burn them!)</i>";case"shade":return" <i>(fire-immune!)</i>";case"runner":return" <i>(fast — chill them!)</i>";case"golem":return" <i>(BOSS)</i>";case"golemling":return" <i>(mini-boss)</i>";case"warlord":return" <i>(BOSS — armor breaks to PHYSICAL only, lobs tower-stunning grenades!)</i>";case"pyretitan":return" <i>(BOSS — fire-immune, cannot be chilled!)</i>";case"colossus":return" <i>(THE BOSS — armored, fire-hardened, cold-proof)</i>";case"orcbrute":return" <i>(armored — physical!)</i>";case"troll":return" <i>(armored + REGENERATES — crack, then burst!)</i>";case"warwagon":return" <i>(carrier — kill it EARLY, leaks -8!)</i>";case"siegetower":return" <i>(unloads orcs as it rolls, leaks -10!)</i>";case"orcshaman":return" <i>(HEALER — focus him first!)</i>";case"wardrummer":return" <i>(hastens the horde — silence the drums)</i>";case"wraith":return" <i>(phases out — spread your damage)</i>";case"gargoyle":return" <i>(FLIES straight across — archers ready!)</i>";case"drake":return" <i>(fast FLYER, burn-proof — arrows up!)</i>";case"hexer":return" <i>(SILENCES towers — kill him first!)</i>";case"banshee":return" <i>(death-wail silences — kill her at range!)</i>";case"slime_big":return" <i>(splits, and splits again)</i>";case"necromancer":return" <i>(raises the dead as he walks)</i>";case"thief":return" <i>(steals GOLD and runs — catch him!)</i>";case"shieldbearer":return" <i>(ward caps your big hits)</i>";default:return""}}const Nm=new Map;function Lw(n){const e=document.getElementById("shop");e.innerHTML="";for(const t of dl){const i=en[t],s=Tn[i.element],r=document.createElement("div");r.className="shop-card",r.innerHTML=`
      <div class="shop-icon" style="background:${s.color}22;border:2px solid ${s.color}">
        <img src="${$t(`icons/portrait_${i.id}.png`)}" onerror="this.remove()" alt="" /><span>${i.icon}</span>
      </div>
      <div class="shop-info">
        <div class="shop-name">${i.name}</div>
        <div class="shop-desc">${i.desc}</div>
      </div>
      <div class="shop-cost">${i.cost}</div>
    `,r.addEventListener("click",()=>n(t)),e.appendChild(r),Nm.set(t,r)}}function Dw(n){for(const[e,t]of Nm){const i=en[e];t.classList.toggle("unaffordable",n.gold<i.cost),t.classList.toggle("selected",n.placingType===e)}}const Fw=["first","last","strong","close"],Nw={first:"First",last:"Last",strong:"Strong",close:"Close"};let ss,Qa="",Um,km,Om,Bm;function Uw(n){ss=document.getElementById("tower-panel"),Um=n.upgrade,km=n.sell,Om=n.mode,Bm=n.evolve}function kw(n){const e=Jo(n,n.selectedWizardId);if(!e||e.pendingSpecialize){Qa!==""&&(ss.classList.add("hidden"),Qa="");return}const t=Dd(n,e),i=`${e.id}|${e.def.id}|${e.tiers[0]}|${e.tiers[1]}|${e.mode}|${Ow(n,e)}|${t?`${t.ok}${t.cost}`:""}`;i!==Qa&&(Qa=i,ss.classList.remove("hidden"),Bw(n,e))}function Ow(n,e){return[0,1].map(t=>{const i=e.def.upgrades[t].tiers[e.tiers[t]];return i?n.gold>=i.cost?"y":"n":"x"}).join("")}function Bw(n,e){const t=e.stats,i=[`Dmg <b>${Math.round(t.damage)}</b>`,`Rate <b>${t.rate.toFixed(2)}s</b>`,`Range <b>${Math.round(t.range)}</b>`];t.splash>0&&i.push(`Splash <b>${Math.round(t.splash)}</b>`),t.chains>0&&i.push(`Chains <b>${t.chains}</b>`),t.burnDps>0&&i.push(`Burn <b>${t.burnDps}/s × ${t.burnDuration.toFixed(0)}s</b>`),t.chillPct>0&&i.push(`Chill <b>${Math.round(t.chillPct*100)}%</b>`),e.def.pierce&&i.push("<b>Pierces</b>"),t.entangleDur>0&&i.push(`Root <b>${t.entangleDur.toFixed(1)}s</b>`),t.rootSlow>0&&i.push(`Slow <b>${Math.round(t.rootSlow*100)}%</b>`),ss.innerHTML=`
    <div class="tp-title">${e.def.icon} ${e.def.name}</div>
    <div class="tp-stats">${i.join(" · ")}</div>
    <div class="tp-modes">${Fw.map(r=>`<button class="tp-mode${e.mode===r?" active":""}" data-mode="${r}">${Nw[r]}</button>`).join("")}</div>
    <div id="tp-upgrades"></div>
    <button class="tp-sell">Sell for ${gp(e)} ◉</button>
  `,ss.querySelectorAll(".tp-mode").forEach(r=>{r.addEventListener("click",()=>Om(e,r.dataset.mode))}),ss.querySelector(".tp-sell").addEventListener("click",()=>km(e));const s=ss.querySelector("#tp-upgrades");if(e.def.isEvolved){const r=document.createElement("div");r.className="tp-evolved-tag",r.textContent="★ EVOLVED ★",s.appendChild(r)}else{[0,1].forEach(a=>{const o=e.def.upgrades[a],c=e.tiers[a],l=o.tiers[c],d=document.createElement("div");d.className="tp-upgrade";const h=l?c:o.tiers.length-1,u=`<img class="tp-upg-icon" src="${$t(`icons/upg_${e.def.id}_${a}_${h}.png`)}" onerror="this.style.display='none'" alt="" />`;if(!l)d.classList.add("maxed"),d.innerHTML=`
          ${u}<div><div class="tp-upg-name">${o.name} ★MAX</div>
          <div class="tp-upg-desc">All ${o.tiers.length} tiers owned</div></div>`;else{const f=n.gold>=l.cost;f||d.classList.add("unaffordable"),d.innerHTML=`
          ${u}<div style="flex:1"><div class="tp-upg-name">${o.name} ${c+1}/${o.tiers.length}: ${l.name}</div>
          <div class="tp-upg-desc">${l.desc}</div></div>
          <div class="tp-upg-cost">${l.cost}</div>`,f&&d.addEventListener("click",()=>Um(e,a))}s.appendChild(d),s.appendChild(document.createTextNode(" "))});const r=Dd(n,e);if(r&&(r.ok||e.tiers[0]+e.tiers[1]>0)){const a=document.createElement("button");a.className="tp-evolve",a.disabled=!r.ok,a.innerHTML=r.ok?`⬆ EVOLVE — ${r.cost} ◉${r.discounted?" (card bonus!)":""}`:`⬆ Evolve: ${r.reason} (${r.cost} ◉${r.discounted?", card bonus":""})`,r.ok&&a.addEventListener("click",()=>Bm(e)),s.appendChild(a)}}}let xd,vd,yd,Of="";function zw(n){xd=document.getElementById("overlay"),vd=document.getElementById("overlay-title"),yd=document.getElementById("overlay-text"),document.getElementById("btn-restart").addEventListener("click",n)}function Gw(n){const e=n.phase==="won"||n.phase==="lost"?n.phase:"";if(e!==Of){if(Of=e,!e){xd.classList.add("hidden");return}xd.classList.remove("hidden"),Od(),e==="won"?(vd.textContent="🏆 Victory!",yd.innerHTML=`The realm stands! ${n.lives} lives to spare.${Bf(n)}`):(vd.textContent="💀 Defeat",yd.innerHTML=`The horde broke through on wave ${n.round+1}.${Bf(n)}`)}}function Bf(n){var o;const e=n.stats,t=Object.entries(e.dmgByElement).filter(([,c])=>c>0);t.sort((c,l)=>l[1]-c[1]);const i=((o=t[0])==null?void 0:o[1])??1,s=t.map(([c,l])=>`
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
    </div>`}const Wo=new URLSearchParams(location.search).get("map"),_h=Wo&&Kf(Wo)||void 0,al=r0(),Md=al&&(!Wo||Wo===al.mapId)?a0(al):null;let Y=Md??jo(_h);const Bn=document.getElementById("board");Bn.addEventListener("mousemove",n=>{const e=Ho(n.offsetX,n.offsetY);e?(Y.mouseX=e.x,Y.mouseY=e.y,Y.mouseOnBoard=!0):Y.mouseOnBoard=!1});Bn.addEventListener("mouseleave",()=>{Y.mouseOnBoard=!1});const Vw=window.matchMedia("(pointer: coarse)").matches;let Qt=null;function zm(n,e,t=!1){if(!Y.placingType)return!1;const i=en[Y.placingType],s=pl(Y,i.cost);if(!$s(Y,n,e,i)||!jr(Y,s))return!1;mp(Y,s);const r=Ld(Y,i,n,e);return r.invested=s,Y.wizards.push(r),te.burst(r.x,r.y,i.color,14,120,3),Me.place(),(!t||!jr(Y,pl(Y,i.cost)))&&(Y.placingType=null),Y.selectedWizardId=r.id,Qt=null,!0}Bn.addEventListener("click",n=>{if(aa){aa=!1;return}const e=Ho(n.offsetX,n.offsetY);if(!e)return;const{cx:t,cy:i}=Td(e.x,e.y);if(!jf(t,i))return;if(Y.placingType){const r=en[Y.placingType];if(Vw&&(Y.mouseX=e.x,Y.mouseY=e.y,Y.mouseOnBoard=!0,!Qt||Qt.cx!==t||Qt.cy!==i)){Qt={cx:t,cy:i},$s(Y,t,i,r)||te.floater(e.x,e.y-26,"can't build here","#ff9db5",12);return}zm(t,i,n.shiftKey);return}const s=ip(Y,t,i);Y.selectedWizardId=s?s.id:null});const jn=new Map;let Xr=0,qo=!1,aa=!1,ol=0,zf=0,Gf=0;Bn.addEventListener("pointerdown",n=>{if(jn.set(n.pointerId,{x:n.offsetX,y:n.offsetY}),qo=!1,jn.size===2){const[e,t]=[...jn.values()];Xr=Math.hypot(e.x-t.x,e.y-t.y)}});Bn.addEventListener("pointermove",n=>{const e=jn.get(n.pointerId);if(!e)return;if(jn.size===2){jn.set(n.pointerId,{x:n.offsetX,y:n.offsetY});const[s,r]=[...jn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);Xr>0&&a>0&&ha(a/Xr,(s.x+r.x)/2,(s.y+r.y)/2),Xr=a,aa=!0;return}const t=n.offsetX-e.x,i=n.offsetY-e.y;Math.abs(t)+Math.abs(i)>6&&(qo=!0),qo&&Tm()>1.01&&(_w(t,i),aa=!0),jn.set(n.pointerId,{x:n.offsetX,y:n.offsetY})});const Gm=n=>{jn.delete(n.pointerId),Xr=0};Bn.addEventListener("pointerup",Gm);Bn.addEventListener("pointercancel",Gm);Bn.addEventListener("pointerup",n=>{if(n.pointerType!=="touch"||qo||jn.size>0||Y.placingType)return;const e=performance.now();e-ol<300&&Math.hypot(n.offsetX-zf,n.offsetY-Gf)<30?(ha(Tm()>1.5?.01:2.2,n.offsetX,n.offsetY),aa=!0,ol=0):(ol=e,zf=n.offsetX,Gf=n.offsetY)});Bn.addEventListener("wheel",n=>{n.preventDefault(),ha(n.deltaY<0?1.15:1/1.15,n.offsetX,n.offsetY)},{passive:!1});document.getElementById("zoom-in").addEventListener("click",()=>ha(1.4));document.getElementById("zoom-out").addEventListener("click",()=>ha(1/1.4));document.getElementById("zoom-reset").addEventListener("click",()=>xw());const Hw=document.getElementById("place-confirm"),Sd=document.getElementById("pc-build");document.getElementById("pc-cancel").addEventListener("click",()=>{Qt=null});Sd.addEventListener("click",()=>{Qt&&zm(Qt.cx,Qt.cy)});function Ww(){const n=Qt!==null&&Y.placingType!==null;if(Hw.classList.toggle("hidden",!n),n&&Y.placingType){const e=en[Y.placingType],t=pl(Y,e.cost),i=$s(Y,Qt.cx,Qt.cy,e)&&jr(Y,t);Sd.disabled=!i,Sd.textContent=i?`✓ Build ${e.name} · ${t} ◉`:"✕ blocked spot"}}Bn.addEventListener("contextmenu",n=>{n.preventDefault(),Y.placingType=null,Y.selectedWizardId=null,Qt=null});window.addEventListener("keydown",n=>{n.key==="Escape"?(Y.placingType=null,Y.selectedWizardId=null,Qt=null):n.key===" "?(n.preventDefault(),Bd(Y)):n.key>="1"&&n.key<=String(dl.length)&&Vm(dl[Number(n.key)-1])});function Vm(n){if(Y.phase==="won"||Y.phase==="lost")return;const e=en[n];jr(Y,e.cost)&&(Y.placingType=Y.placingType===n?null:n,Y.selectedWizardId=null,Qt=null)}Lw(Vm);Rw(()=>Bd(Y));u0(()=>{fs(Y),Y.autoplay&&(Y.autoplayTimer=1.2)});m0(()=>{fs(Y)});x0(()=>{fs(Y),Y.autoplay&&(Y.autoplayTimer=1.2)});T0(()=>{fs(Y)});C0();F0(n=>{xg(n)&&(bh(n),te.clear(),te.floater(480,120,`⚑ ${n.map.name} — Act ${["I","II","III"][n.act]}`,"#7dff9b",16),fs(n))});var Wf;(Wf=document.getElementById("btn-newrun"))==null||Wf.addEventListener("click",()=>{Od(),Y=jo(_h),bh(Y),te.clear(),Me.click()});Md&&te.floater(480,120,`▶ Run resumed — Wave ${Md.round+1}`,"#7dff9b",15);zw(()=>{Od(),Y=jo(_h),bh(Y),te.clear()});const Ed=document.getElementById("map-select");for(const n of sg()){const e=document.createElement("option");e.value=n.id,e.textContent=(n.custom?"✏️ ":"")+n.name,n.id===(Y.map.id??"vale")&&(e.selected=!0),Ed.appendChild(e)}Ed.addEventListener("change",()=>{location.href=`${location.pathname}?map=${encodeURIComponent(Ed.value)}`});Uw({upgrade(n,e){const t=n.def.upgrades[e].tiers[n.tiers[e]];!t||!mp(Y,t.cost)||(n.tiers[e]++,n.invested+=t.cost,n.stats=zi(n.def,n.tiers),te.burst(n.x,n.y,"#c9b8ff",12,110,3),te.floater(n.x,n.y-24,t.name+"!","#c9b8ff",12),Me.upgrade())},sell(n){d0(Y,n),Me.sell()},mode(n,e){n.mode=e,Me.click()},evolve(n){const e=n.def.name;wg(Y,n)&&(te.ring(n.x,n.y,"#ffd75e",60),te.burst(n.x,n.y,"#ffd75e",24,180,4,.7),te.floater(n.x,n.y-34,`${e} → ${n.def.name}!`,"#ffd75e",15),Me.win(),fs(Y))}});function Hm(n){Y.speed=n,document.querySelectorAll(".btn-speed").forEach(e=>e.classList.toggle("active",Number(e.dataset.speed)===n)),Wm.textContent=`${n}×`}document.querySelectorAll(".btn-speed").forEach(n=>{n.addEventListener("click",()=>Hm(Number(n.dataset.speed)))});const Wm=document.getElementById("qb-speed"),Vf=document.getElementById("qb-auto");Wm.addEventListener("click",()=>Hm(Y.speed>=3?1:Y.speed+1));Vf.addEventListener("click",()=>{Y.autoplay=!Y.autoplay,Vf.classList.toggle("active",Y.autoplay),document.getElementById("chk-auto").checked=Y.autoplay,Y.autoplay&&Y.phase==="build"&&(Y.autoplayTimer=.8)});const qm=()=>{Me.init(),Oi.start()};window.addEventListener("pointerdown",qm,{once:!0});window.addEventListener("keydown",qm,{once:!0});const cl=document.getElementById("btn-music");cl.addEventListener("click",()=>{Oi.setEnabled(!Oi.isEnabled()),cl.textContent=Oi.isEnabled()?"🎵":"🎵̸",cl.style.opacity=Oi.isEnabled()?"1":"0.4"});const Hf=document.getElementById("btn-mute");Hf.addEventListener("click",()=>{Me.setMuted(!Me.isMuted()),Hf.textContent=Me.isMuted()?"🔇":"🔊"});document.getElementById("vol-slider").addEventListener("input",n=>{Me.setVolume(Number(n.target.value)/100)});document.getElementById("chk-auto").addEventListener("change",n=>{Y.autoplay=n.target.checked,Y.autoplay&&Y.phase==="build"&&(Y.autoplayTimer=.8)});function Xm(n){Y.phase==="build"&&ap(Y);const e=Y.phase==="build"&&!Y.nodePicked&&Y.nextNodes.length>1;if(Y.phase==="won"||Y.phase==="lost"||Y.phase==="draft"||Y.phase==="relic"||Y.phase==="actClear"||Y.pendingEvent!==null||e){te.update(n);return}c0(Y,n),Vg(Y,n),Wg(Y,n),Zg(Y,n),i0(Y,n),te.update(n)}function Km(){Oi.setIntensity(Y.phase!=="wave"?0:Y.round===Rd(Y.act)-1?2:1),Mw(Y),Ww(),Cw(Y),Dw(Y),kw(Y),f0(Y),g0(Y),v0(Y),A0(Y),P0(Y),N0(Y),Gw(Y)}const qw=document.getElementById("loading"),Xw=document.getElementById("loading-fill"),ll=document.getElementById("loading-text");vw(Bn,Y,(n,e)=>{Xw.style.width=`${Math.round(n/e*100)}%`,ll.textContent=`Summoning defenders… ${n}/${e}`}).then(()=>{qw.remove(),Kw(),og(Xm,Km,()=>Y.speed)}).catch(n=>{console.error("renderer failed to initialize",n),ll.textContent=`Failed to load game assets: ${(n==null?void 0:n.message)??n}. Check your connection and refresh.`,ll.style.color="#ff9db5"});function Kw(){const n="wizardtd.hintSeen";if(!window.matchMedia("(pointer: coarse)").matches||localStorage.getItem(n))return;const t=document.getElementById("gesture-hint");t.classList.remove("hidden"),document.body.dataset.hint="1",document.getElementById("gh-ok").addEventListener("click",()=>{t.classList.add("hidden"),delete document.body.dataset.hint,localStorage.setItem(n,"1"),Me.click()},{once:!0})}"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").catch(()=>{});Object.defineProperty(window,"__game",{get:()=>Y});window.__fx=te;window.__computeStats=zi;window.__audio={sfx:Me,music:Oi};window.__place=(n,e,t)=>{const i=en[n];if(!i||!$s(Y,e,t,i))return null;const s=Ld(Y,i,e,t);return Y.wizards.push(s),s.id};window.__specialize=(n,e)=>{var s;const t=Jo(Y,n),i=((s=t==null?void 0:t.specializeOptions)==null?void 0:s.find(r=>r.id===e))??en[e];return!t||!i?!1:(sp(Y,t,i),!0)};window.__step=n=>{const e=.016666666666666666,t=Math.min(60*600,Math.round(n/e));for(let i=0;i<t;i++)Xm(e);return Km(),{phase:Y.phase,enemies:Y.enemies.length,round:Y.round}};
