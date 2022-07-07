// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4],
      2: [ctc3, ctc4, ctc4],
      3: [ctc3, ctc4, ctc4],
      4: [ctc4, ctc4, ctc5, ctc3],
      5: [ctc4, ctc4, ctc5, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc5, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v156 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v157 = [v156];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:16:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:16:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v163, time: v162, didSend: v22, from: v161 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v163, time: v162, didSend: v22, from: v161 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v166, time: v165, didSend: v26, from: v164 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v169, time: v168, didSend: v31, from: v167 } = txn3;
  ;
  const v170 = stdlib.addressEq(v164, v167);
  stdlib.assert(v170, {
    at: './index.rsh:23:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v173 = stdlib.protect(ctc4, await interact.getInfo(), {
    at: './index.rsh:27:64:application',
    fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:13:function exp)'],
    msg: 'getInfo',
    who: 'Alice'
    });
  const v174 = v173[stdlib.checkedBigNumberify('./index.rsh:27:64:application', stdlib.UInt_max, '0')];
  const v175 = v173[stdlib.checkedBigNumberify('./index.rsh:27:64:application', stdlib.UInt_max, '1')];
  const v178 = stdlib.addressEq(v174, v164);
  stdlib.assert(v178, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:29:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:13:function exp)'],
    msg: 'Should be Bob',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v157, v161, v164, v174, v175],
    evt_cnt: 2,
    funcNum: 3,
    lct: v168,
    onlyIf: true,
    out_tys: [ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v181, v182], secs: v184, time: v183, didSend: v63, from: v180 } = txn4;
      
      const v185 = v157[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0')];
      const v187 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '1')];
      const v188 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '2')];
      const v189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v187, v188];
      const v190 = stdlib.Array_set(v157, stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0'), v189);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v182
        });
      ;
      await stdlib.simMapSet(sim_r, 0, v181, null);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v181, v182], secs: v184, time: v183, didSend: v63, from: v180 } = txn4;
  const v185 = v157[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0')];
  const v187 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '1')];
  const v188 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '2')];
  const v189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v187, v188];
  const v190 = stdlib.Array_set(v157, stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0'), v189);
  ;
  ;
  const v192 = stdlib.addressEq(v161, v180);
  stdlib.assert(v192, {
    at: './index.rsh:33:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  await stdlib.mapSet(map0, v181, null);
  const v195 = 'Added Address to Set: ';
  stdlib.protect(ctc0, await interact.log(v195, v181), {
    at: './index.rsh:35:17:application',
    fs: ['at ./index.rsh:35:17:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)', 'at ./index.rsh:35:17:application call to "liftedInteract" (defined at: ./index.rsh:35:17:application)'],
    msg: 'log',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v161, v164, v182, v190],
    evt_cnt: 0,
    funcNum: 4,
    lct: v183,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '5555555'), v182]]],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v198, time: v197, didSend: v76, from: v196 } = txn5;
      
      ;
      const v199 = v190[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
      const v200 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
      const v201 = stdlib.add(v200, stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '5555555'));
      const v204 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
      const v205 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
      const v206 = [v201, v204, v205];
      const v207 = stdlib.Array_set(v190, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v206);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '5555555'),
        kind: 'to',
        tok: v182
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v198, time: v197, didSend: v76, from: v196 } = txn5;
  ;
  const v199 = v190[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v200 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v201 = stdlib.add(v200, stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '5555555'));
  const v204 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
  const v205 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
  const v206 = [v201, v204, v205];
  const v207 = stdlib.Array_set(v190, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v206);
  ;
  const v208 = stdlib.addressEq(v161, v196);
  stdlib.assert(v208, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v210 = 'Moving money into contract';
  stdlib.protect(ctc0, await interact.log(v210), {
    at: './index.rsh:39:17:application',
    fs: ['at ./index.rsh:39:17:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)', 'at ./index.rsh:39:17:application call to "liftedInteract" (defined at: ./index.rsh:39:17:application)'],
    msg: 'log',
    who: 'Alice'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v161, v164, v182, v207],
    evt_cnt: 0,
    funcNum: 5,
    lct: v197,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v213, time: v212, didSend: v86, from: v211 } = txn6;
      
      ;
      const v215 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v164), null);
      let v216;
      switch (v215[0]) {
        case 'None': {
          const v217 = v215[1];
          v216 = false;
          
          break;
          }
        case 'Some': {
          const v218 = v215[1];
          v216 = true;
          
          break;
          }
        }
      if (v216) {
        const v219 = v207[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
        const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v164,
          tok: v182
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v182
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        const v240 = v207[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
        const v241 = v240[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v161,
          tok: v182
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v182
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v213, time: v212, didSend: v86, from: v211 } = txn6;
  ;
  const v214 = stdlib.addressEq(v161, v211);
  stdlib.assert(v214, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v215 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v164), null);
  let v216;
  switch (v215[0]) {
    case 'None': {
      const v217 = v215[1];
      v216 = false;
      
      break;
      }
    case 'Some': {
      const v218 = v215[1];
      v216 = true;
      
      break;
      }
    }
  if (v216) {
    const v219 = v207[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
    const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
    ;
    const v234 = 'Bob is authorized! Money incoming.';
    stdlib.protect(ctc0, await interact.log(v234), {
      at: './index.rsh:46:19:application',
      fs: ['at ./index.rsh:46:19:application call to [unknown function] (defined at: ./index.rsh:46:19:function exp)', 'at ./index.rsh:46:19:application call to "liftedInteract" (defined at: ./index.rsh:46:19:application)'],
      msg: 'log',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const v240 = v207[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
    const v241 = v240[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
    ;
    const v255 = 'We do not know you. Shoo!';
    stdlib.protect(ctc0, await interact.log(v255), {
      at: './index.rsh:49:19:application',
      fs: ['at ./index.rsh:49:19:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)', 'at ./index.rsh:49:19:application call to "liftedInteract" (defined at: ./index.rsh:49:19:application)'],
      msg: 'log',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v156 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v157 = [v156];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v163, time: v162, didSend: v22, from: v161 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v157, v161],
    evt_cnt: 0,
    funcNum: 1,
    lct: v162,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:19:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v166, time: v165, didSend: v26, from: v164 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v166, time: v165, didSend: v26, from: v164 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v157, v161, v164],
    evt_cnt: 0,
    funcNum: 2,
    lct: v165,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v169, time: v168, didSend: v31, from: v167 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v169, time: v168, didSend: v31, from: v167 } = txn3;
  ;
  const v170 = stdlib.addressEq(v164, v167);
  stdlib.assert(v170, {
    at: './index.rsh:23:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc2, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v181, v182], secs: v184, time: v183, didSend: v63, from: v180 } = txn4;
  const v185 = v157[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0')];
  const v187 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '1')];
  const v188 = v185[stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '2')];
  const v189 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v187, v188];
  const v190 = stdlib.Array_set(v157, stdlib.checkedBigNumberify('./index.rsh:33:5:dot', stdlib.UInt_max, '0'), v189);
  ;
  ;
  const v192 = stdlib.addressEq(v161, v180);
  stdlib.assert(v192, {
    at: './index.rsh:33:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  await stdlib.mapSet(map0, v181, null);
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v198, time: v197, didSend: v76, from: v196 } = txn5;
  ;
  const v199 = v190[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v200 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0')];
  const v201 = stdlib.add(v200, stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '5555555'));
  const v204 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '1')];
  const v205 = v199[stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '2')];
  const v206 = [v201, v204, v205];
  const v207 = stdlib.Array_set(v190, stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, '0'), v206);
  ;
  const v208 = stdlib.addressEq(v161, v196);
  stdlib.assert(v208, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 5,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v213, time: v212, didSend: v86, from: v211 } = txn6;
  ;
  const v214 = stdlib.addressEq(v161, v211);
  stdlib.assert(v214, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v215 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v164), null);
  let v216;
  switch (v215[0]) {
    case 'None': {
      const v217 = v215[1];
      v216 = false;
      
      break;
      }
    case 'Some': {
      const v218 = v215[1];
      v216 = true;
      
      break;
      }
    }
  if (v216) {
    const v219 = v207[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
    const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:45:23:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  else {
    const v240 = v207[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
    const v241 = v240[stdlib.checkedBigNumberify('./index.rsh:48:23:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEEBQIDCEDjitMCoI0GJgIBAAAiNQAxGEEDSilkSSJbNQEhBls1AjEZIxJBAAgxACgoZkIDGDYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQUMQAHkSSQMQAE/SSUMQAC/JRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+IQdbNf1XSBE1/IAEzJmSXLA0/zEAEkQ0/ogC3kk1+iJVQAAGIjX7QgAGIzX7QgAANPtBADOxIrIBNPxXABEiW7ISJLIQNP6yFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbNCAiWxIrIBNPxXABEiW7ISJLIQNP+yFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbNCAfJIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+IQdbNf1XSBE1/IAEkSc087A0/FcAEUk1+yJbIQgIFjT7VwgIUDT7VxABUDX6IQg0/YgCLjT/MQASRDT/NP5QNP0WUDT6UChLAVcAWWdIJTUBMgY1AkIBk0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXABE1/1cRIDX+VzEgNf1JNQVJVwAgNfyBIFs1+4AEznLE3TT8UDT7FlCwNP9XABE1+iEGrzT6VwgIUDT6VxABUDX5IQmIAZGxIrIBIrISJLIQMgqyFDT7shGzNP4xABJENPwogAEBZjT+NP1QNPsWUDT5UChLAVcAWWdIJDUBMgY1AkIA9EkjDEAAmkkhBAxAAFBIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwARNf9XESA1/lcxIDX9gARBsUBNsDT9MQASRDT/NP5QNP1QKEsBVwBRZ0ghBTUBMgY1AkIAl0gjNAESRDQESSISTDQCEhFEKGRJNQNJVwARNf9XESA1/oAEmouRdLA0/zT+UDEAUChLAVcAUWdIIQQ1ATIGNQJCAFRIIQmIAK0iNAESRDQESSISTDQCEhFEgARfDav6sIERrzX/NP8xAFAoSwFXADFnSCM1ATIGNQJCABsxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v181",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v182",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v181",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v182",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a4d38038062001a4d833981016040819052620000269162000287565b6000805543600355620000386200013b565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000af3415600762000111565b620000b962000172565b6020808301518252338282015260016000819055439055604051620000e191839101620002f2565b604051602081830303815290604052600290805190602001906200010792919062000194565b5050505062000393565b81620001375760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200016d62000223565b905290565b60405180604001604052806200018762000223565b8152600060209091015290565b828054620001a29062000356565b90600052602060002090601f016020900481019282620001c6576000855562000211565b82601f10620001e157805160ff191683800117855562000211565b8280016001018555821562000211579182015b8281111562000211578251825591602001919060010190620001f4565b506200021f92915062000270565b5090565b60405180602001604052806001905b62000259604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002325790505090565b5b808211156200021f576000815560010162000271565b6000604082840312156200029a57600080fd5b604080519081016001600160401b0381118282101715620002cb57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002e657600080fd5b60208201529392505050565b815160808201908260005b600181101562000339578251805183526020808201518185015260409182015115159184019190915290920191606090910190600101620002fd565b505050602092909201516001600160a01b03166060919091015290565b600181811c908216806200036b57607f821691505b602082108114156200038d57634e487b7160e01b600052602260045260246000fd5b50919050565b6116aa80620003a36000396000f3fe6080604052600436106100845760003560e01c80637eea518c116100565780637eea518c1461010457806383230757146101175780638e3147691461012c578063a7661d541461013f578063ab53f2c61461015257005b80631e93b0f11461008d5780632c10a159146100b15780633bc5b7bf146100c457806369c3f7f1146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf3660046110f1565b610175565b3480156100d057600080fd5b506100e46100df36600461111e565b6102f2565b6040516100a89190611151565b61008b6100ff366004611198565b61031e565b61008b6101123660046110f1565b6105bd565b34801561012357600080fd5b5060015461009e565b61008b61013a3660046110f1565b610730565b61008b61014d3660046110f1565b610932565b34801561015e57600080fd5b50610167610b26565b6040516100a89291906111d6565b6101856001600054146009610bc3565b61019f8135158061019857506001548235145b600a610bc3565b6000808055600280546101b190611210565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd90611210565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b5050505050806020019051810190610242919061133e565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161027592919061139c565b60405180910390a161028934156008610bc3565b610291610f4b565b815181526020808301516001600160a01b03168183015233604080840191909152600260005543600155516102c891839101611412565b604051602081830303815290604052600290805190602001906102ec929190610f72565b50505050565b604080516060810182526000808252602082018190529181019190915261031882610bed565b92915050565b61032e6003600054146011610bc3565b6103488135158061034157506001548235145b6012610bc3565b60008080556002805461035a90611210565b80601f016020809104026020016040519081016040528092919081815260200182805461038690611210565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b50505050508060200190518101906103eb919061144c565b90506103f5610ff6565b7fcb013c42c013bba9283e498d4c4840ec9f08b8db40bfd40db1da91f51328b511338460405161042692919061149f565b60405180910390a180516000908190528251516020908101518351909101528251516040908101518351901515910152825182516104649290610cc5565b60208201526104753415600f610bc3565b6020820151610490906001600160a01b031633146010610bc3565b6001600460006104a6604087016020880161111e565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156104d8576104d861113b565b021790555060006004816104f2604087016020880161111e565b6001600160a01b0316815260208101919091526040016000208054911515620100000262ff00001990921691909117905561052b61102b565b6020808401516001600160a01b0390811683526040808601519091169183019190915261055e906060860190860161111e565b6001600160a01b0316604080830191909152602080840151606084015260046000554360015590516105929183910161153f565b604051602081830303815290604052600290805190602001906105b6929190610f72565b5050505050565b6105cd600260005414600d610bc3565b6105e7813515806105e057506001548235145b600e610bc3565b6000808055600280546105f990611210565b80601f016020809104026020016040519081016040528092919081815260200182805461062590611210565b80156106725780601f1061064757610100808354040283529160200191610672565b820191906000526020600020905b81548152906001019060200180831161065557829003601f168201915b505050505080602001905181019061068a919061144c565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106bd92919061139c565b60405180910390a16106d13415600b610bc3565b60408101516106ec906001600160a01b03163314600c610bc3565b6106f4610f4b565b815181526020808301516001600160a01b039081168284015260408085015190911681840152600360005543600155516102c891839101611412565b610740600560005414601a610bc3565b61075a8135158061075357506001548235145b601b610bc3565b60008080556002805461076c90611210565b80601f016020809104026020016040519081016040528092919081815260200182805461079890611210565b80156107e55780601f106107ba576101008083540402835291602001916107e5565b820191906000526020600020905b8154815290600101906020018083116107c857829003601f168201915b50505050508060200190518101906107fd91906115d6565b6040805160208101909152600081529091507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338460405161084092919061139c565b60405180910390a161085434156018610bc3565b815161086c906001600160a01b031633146019610bc3565b600061087b8360200151610bed565b51600181111561088d5761088d61113b565b141561089c57600081526108c8565b60016108ab8360200151610bed565b5160018111156108bd576108bd61113b565b14156108c857600181525b805115610919576108fe8260400151836020015184606001516000600181106108f3576108f36114f1565b602002015151610d39565b6000808055600181905561091490600290611054565b505050565b6040820151825160608401516108fe92919060006108f3565b6109426004600054146016610bc3565b61095c8135158061095557506001548235145b6017610bc3565b60008080556002805461096e90611210565b80601f016020809104026020016040519081016040528092919081815260200182805461099a90611210565b80156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b50505050508060200190518101906109ff91906115d6565b9050610a09610ff6565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051610a3a92919061139c565b60405180910390a1610a4e34156013610bc3565b60608201515151610a63906254c56390611608565b815152606082018051516020908101518351909101528051516040908101518351901515910152518151610a9a9190600090610cc5565b8160200181905250610abe610ab73384604001516254c563610d4d565b6014610bc3565b8151610ad6906001600160a01b031633146015610bc3565b610ade61102b565b82516001600160a01b0390811682526020808501518216818401526040808601519092168284015283810151606084015260056000554360015590516105929183910161153f565b600060606000546002808054610b3b90611210565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6790611210565b8015610bb45780601f10610b8957610100808354040283529160200191610bb4565b820191906000526020600020905b815481529060010190602001808311610b9757829003601f168201915b50505050509050915091509091565b81610be95760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610c3957610c3961113b565b1415610cb6576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c7a57610c7a61113b565b6001811115610c8b57610c8b61113b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610ccd611091565b60005b6001811015610d1957848160018110610ceb57610ceb6114f1565b6020020151828260018110610d0257610d026114f1565b602002015280610d1181611620565b915050610cd0565b5081818460018110610d2d57610d2d6114f1565b60200201529392505050565b610d44838383610d65565b61091457600080fd5b6000610d5b83853085610e36565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610dc49161163b565b60006040518083038185875af1925050503d8060008114610e01576040519150601f19603f3d011682016040523d82523d6000602084013e610e06565b606091505b5091509150610e1782826002610f10565b5080806020019051810190610e2c9190611657565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610e9d9161163b565b60006040518083038185875af1925050503d8060008114610eda576040519150601f19603f3d011682016040523d82523d6000602084013e610edf565b606091505b5091509150610ef082826001610f10565b5080806020019051810190610f059190611657565b979650505050505050565b60608315610f1f575081610d5e565b825115610f2f5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610be0565b6040518060600160405280610f5e611091565b815260006020820181905260409091015290565b828054610f7e90611210565b90600052602060002090601f016020900481019282610fa05760008555610fe6565b82601f10610fb957805160ff1916838001178555610fe6565b82800160010185558215610fe6579182015b82811115610fe6578251825591602001919060010190610fcb565b50610ff29291506110dc565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611026611091565b905290565b604080516080810182526000808252602082018190529181019190915260608101611026611091565b50805461106090611210565b6000825580601f10611070575050565b601f01602090049060005260206000209081019061108e91906110dc565b50565b60405180602001604052806001905b6110c6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816110a05790505090565b5b80821115610ff257600081556001016110dd565b60006040828403121561110357600080fd5b50919050565b6001600160a01b038116811461108e57600080fd5b60006020828403121561113057600080fd5b8135610d5e81611109565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061117657634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006060828403121561110357600080fd5b60005b838110156111c55781810151838201526020016111ad565b838111156102ec5750506000910152565b82815260406020820152600082518060408401526111fb8160608501602087016111aa565b601f01601f1916919091016060019392505050565b600181811c9082168061122457607f821691505b6020821081141561110357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561127e5761127e611245565b60405290565b6040516060810167ffffffffffffffff8111828210171561127e5761127e611245565b801515811461108e57600080fd5b600082601f8301126112c657600080fd5b6112ce61125b565b806060808501868111156112e157600080fd5b855b81811015611332578281890312156112fb5760008081fd5b611303611284565b8151815260208083015181830152604080840151611320816112a7565b908301529086529094019382016112e3565b50919695505050505050565b60006080828403121561135057600080fd5b6040516040810181811067ffffffffffffffff8211171561137357611373611245565b60405261138084846112b5565b8152606083015161139081611109565b60208201529392505050565b6001600160a01b0383168152813560208083019190915260608201908301356113c4816112a7565b8015156040840152509392505050565b8060005b60018110156102ec5781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016113d8565b600060a0820190506114258284516113d4565b60208301516001600160a01b03908116606084015260409093015190921660809091015290565b600060a0828403121561145e57600080fd5b611466611284565b61147084846112b5565b8152606083015161148081611109565b6020820152608083015161149381611109565b60408201529392505050565b6001600160a01b03838116825282356020808401919091526080830191908401356114c981611109565b81811660408501525060408401356114e081611109565b818116606085015250509392505050565b634e487b7160e01b600052603260045260246000fd5b60018060a01b0380825116835280602083015116602084015280604083015116604084015250606081015161091460608401826113d4565b60c081016103188284611507565b600060c0828403121561155f57600080fd5b6040516080810181811067ffffffffffffffff8211171561158257611582611245565b8060405250809150825161159581611109565b815260208301516115a581611109565b602082015260408301516115b881611109565b60408201526115ca84606085016112b5565b60608201525092915050565b600060c082840312156115e857600080fd5b610d5e838361154d565b634e487b7160e01b600052601160045260246000fd5b6000821982111561161b5761161b6115f2565b500190565b6000600019821415611634576116346115f2565b5060010190565b6000825161164d8184602087016111aa565b9190910192915050565b60006020828403121561166957600080fd5b8151610d5e816112a756fea2646970667358221220e37601e406ad254c820ba55e8dcf76458ddf6b2df31ae844e60b689395bbd35964736f6c634300080c0033`,
  BytecodeLen: 6733,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:17:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:20:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
