
import polyethylene from './assets/polymer/polyethylene.png';
import polystyrene from './assets/polymer/polystyrene.png';
import polyvinyl_chloride from './assets/polymer/polyvinyl_chloride.png';
import polyvinyl_acetate from './assets/polymer/polyvinyl_acetate.png';
import polypropylene from './assets/polymer/polypropylene.png';
import polyacrylonitrile from './assets/polymer/polyacrylonitrile.png';
import polybutadiene from './assets/polymer/polybutadiene.png';
import polyisoprene from './assets/polymer/polyisoprene.png';
import polychloroprene from './assets/polymer/polychloroprene.png';
import gly from './assets/polymer/gly.png';
import ala from './assets/polymer/ala.png';
import phe from './assets/polymer/phe.png';
import tyr from './assets/polymer/tyr.png';
import ser from './assets/polymer/ser.png';
import cys from './assets/polymer/cys.png';
import met from './assets/polymer/met.png';
import asp from './assets/polymer/asp.png';
import glu from './assets/polymer/glu.png';
import lys from './assets/polymer/lys.png';
import a_glucose from './assets/polymer/a-glucose.png';
import b_glucose from './assets/polymer/b-glucose.png';
import b_galactose from './assets/polymer/b-galactose.png';
import b_fructose from './assets/polymer/b-fructose.png';
import e_caprolactam from './assets/polymer/e-caprolactam.png'; // Not a polymer, but a monomer
import polyamide6 from './assets/polymer/polyamide6.png';
import adipic_acid from './assets/polymer/adipic_acid.png';  // Not a polymer, but a monomer
import hexamethylenediamine from './assets/polymer/hexamethylenediamine.png'; // Not a polymer, but a monomer
import polyamide66 from './assets/polymer/polyamide66.png';
import terephthalic_acid from './assets/polymer/terephthalic_acid.png'; // Not a polymer, but a monomer
import ethylene_glycol from './assets/polymer/ethylene_glycol.png'; // Not a polymer, but a monomer
import polyethylene_terephthalate from './assets/polymer/polyethylene_terephthalate.png';

// 高分子の問題をjson形式で定義
export const polymerQuestions = [
    {
        question: 'ポリエチレン',
        answer: polyethylene,
        explanation: 'ポリエチレンはエチレンを付加重合して作られるポリマーであり，薄膜は酸素を透過しやすいという性質を持ちます．'
    },
    {
        question: 'ポリスチレン',
        answer: polystyrene,
        explanation: 'ポリスチレンはスチレンを付加重合して作られるポリマーであり，透明で，溶媒に溶けやすいという性質を持ちます．発泡ポリスチレンとして利用されることが多いです．'
    },
    {
        question: 'ポリ塩化ビニル',
        answer: polyvinyl_chloride,
        explanation: 'ポリ塩化ビニルは塩化ビニルを付加重合して作られるポリマーであり，可塑剤で軟化するという特徴があります．難燃性で，硬質のものは水道管などに，軟質のものは電線被覆等に使われます．'
    },
    {
        question: 'ポリ酢酸ビニル',
        answer: polyvinyl_acetate,
        explanation: 'ポリ酢酸ビニルは酢酸ビニルを付加重合して作られるポリマーであり，アルコール等の溶媒に溶けやすく，柔軟性・接着力が強いという性質があります．接着剤や塗料に用いられるほか，ビニロンはポリ酢酸ビニルを鹸化することで合成されます．'
    },
    {
        question: 'ポリプロピレン',
        answer: polypropylene,
        explanation: 'ポリプロピレンはプロピレンを付加重合して作られるポリマーであり，ポリエチレンよりも高い耐熱性・強度を持ちます．'
    },
    {
        question: 'ポリアクリロニトリル',
        answer: polyacrylonitrile,
        explanation: 'ポリアクリロニトリルはアクリロニトリル(シアン化ビニル)を付加重合して作られるポリマーであり，アクリル繊維の原料として使われます．'
    },
    {
        question: 'ポリブタジエン',
        answer: polybutadiene,
        explanation: 'ポリブタジエンは1,3-ブタジエンを付加重合して作られるポリマーであり，合成ゴム(ブタジエンゴム, BR)として使われます．'
    },
    {
        question: 'ポリイソプレン',
        answer: polyisoprene,
        explanation: 'ポリイソプレンはイソプレン付加を重合して作られるポリマーであり，天然ゴムの主成分として知られています．'
    },
    {
        question: 'ポリクロロプレン',
        answer: polychloroprene,
        explanation: 'ポリクロロプレンはクロロプレン(2-クロロ-1,3-ブタジエン)を付加重合して作られるポリマーであり，合成ゴム(クロロプレンゴム, CR)として知られています．'
    },
    {
        question: 'グリシン',
        answer: gly,
        explanation: 'グリシンは最も単純なアミノ酸であり，鏡像異性体を持ちません．'
    },
    {
        question: 'アラニン',
        answer: ala,
        explanation: 'アラニンはアミノ酸の一種で，タンパク質に広く存在しています．'
    },
    {
        question: 'フェニルアラニン',
        answer: phe,
        explanation: 'フェニルアラニンはアミノ酸の一種であり，タンパク質に広く存在しています．ベンゼン環を持つため，濃硝酸を加えるとキサントプロテイン反応によって黄色に呈色します．'
    },
    {
        question: 'チロシン',
        answer: tyr,
        explanation: 'チロシンはアミノ酸の一種であり，特に牛乳のタンパク質の多く存在しています．フェノール性OHを持つ構造が特徴です．また，ベンゼン環を持つため，濃硝酸を加えるとキサントプロテイン反応によって黄色に呈色します．'
    },
    {
        question: 'セリン',
        answer: ser,
        explanation: 'セリンはアミノ酸の一種であり，絹のタンパク質(フィブロイン)に多く存在しています．'
    },
    {
        question: 'システイン',
        answer: cys,
        explanation: 'システインはアミノ酸の一種であり，特に毛，羊毛，爪のタンパク質(ケラチン)に多く存在しています．硫黄を含むため，酢酸鉛(II)を加えると硫黄反応によって硫化鉛の黒色沈殿が生じます．'
    },
    {
        question: 'メチオニン',
        answer: met,
        explanation: 'メチオニンはアミノ酸の一種であり，牛乳のタンパク質(カゼイン)に多く存在しています．硫黄を含むため，酢酸鉛(II)を加えると硫黄反応によって硫化鉛の黒色沈殿が生じます．'
    },
    {
        question: 'アスパラギン酸',
        answer: asp,
        explanation: 'アスパラギン酸はアミノ酸の一種であり，水溶液は酸性を呈します．'
    },
    {
        question: 'グルタミン酸',
        answer: glu,
        explanation: 'グルタミン酸はアミノ酸の一種であり，小麦のたんぱく質(グルテリン)に多く存在しています．水溶液は酸性を呈します．'
    },
    {
        question: 'リシン',
        answer: lys,
        explanation: 'リジンはアミノ酸の一種であり，肉のタンパク質に多く存在しています．水溶液は塩基性を呈します．'
    },
    {
        question: 'α-グルコース',
        answer: a_glucose,
        explanation: 'α-グルコースはグルコース(ブドウ糖)の異性体の一つであり，生体内でエネルギー源として利用されます．'
    },
    {
        question: 'β-グルコース',
        answer: b_glucose,
        explanation: 'β-グルコースはグルコース(ブドウ糖)の異性体の一つであり，生体内でエネルギー源として利用されます．'
    },
    {
        question: 'β-ガラクトース',
        answer: b_galactose,
        explanation: 'β-ガラクトースはガラクトースの異性体の一つであり，身体機能が未熟な乳幼児に必要な糖です．'
    },
    {
        question: 'β-フルクトース',
        answer: b_fructose,
        explanation: 'β-フルクトースはフルクトース(果糖)の異性体の一つであり，天然の糖類では最も甘味が強い糖です．'
    },
    {
        question: 'ε-カプロラクタム',
        answer: e_caprolactam,
        explanation: 'ε-カプロラクタムはナイロン6の原料として使われるモノマーです．'
    },
    {
        question: 'ナイロン6',
        answer: polyamide6,
        explanation: 'ナイロン6はε-カプロラクタムを開環重合して作られるポリマーです．日本人の星野孝平らが開発した合成繊維で，絹のような性質を持つ繊維であることが特徴です．'
    },
    {
        question: 'アジピン酸',
        answer: adipic_acid,
        explanation: 'アジピン酸はナイロン66の原料として使われるモノマーです．'
    },
    {
        question: 'ヘキサメチレンジアミン',
        answer: hexamethylenediamine,
        explanation: 'ヘキサメチレンジアミンはナイロン66の原料として使われるモノマーです．'
    },
    {
        question: 'ナイロン66',
        answer: polyamide66,
        explanation: 'ポリアミド66はアジピン酸とヘキサメチレンジアミンを縮合重合して作られるポリマーであり，分子間に形成された水素結合のために線維性が強い性質があります．6,6-ナイロンと表記されることもあります．'
    },
    {
        question: 'テレフタル酸',
        answer: terephthalic_acid,
        explanation: 'テレフタル酸はポリエステルの原料として使われるモノマーです．'
    },
    {
        question: 'エチレングリコール',
        answer: ethylene_glycol,
        explanation: 'エチレングリコールはポリエステルの原料として使われるモノマーです．'
    },
    {
        question: 'ポリエチレンテレフタラート',
        answer: polyethylene_terephthalate,
        explanation: 'ポリエチレンテレフタラートはエチレングリコールとテレフタル酸を縮合重合して作られるポリマーであり，特にペットボトルや衣料用の繊維に用いられます．'
    }
];