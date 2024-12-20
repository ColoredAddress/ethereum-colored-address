export const Links = {
  ETHShenzhen: "https://www.ethshenzhen.org/",
  Twitter: "https://x.com/33357xyz/status/1824471393297371186",
  Github: "https://github.com/AdamLeeeee/Ethereum-Colored-Address-Protocol",
  GithubCover:
    "https://github.html.zone/AdamLeeeee/Ethereum-Colored-Address-Protocol",
};

export const SupportLinks = {
  Rebase: "https://rebase.network/",
  ETHPanda: "https://ethpanda.org/",
  OpenBuild: "https://openbuild.xyz/",
  LearnBlockchain: "https://learnblockchain.cn/",
  LXDao: "https://lxdao.io/",
};

export const TestAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

export const MenuItems = [
  {
    label: "Try",
    id: "try",
  },
  {
    label: "Why",
    id: "why",
  },
  {
    label: "How",
    id: "how",
  },
  {
    label: "Support",
    id: "support",
  },
];

export const WhyItemsKey = ["attacks", "user-friendly", "security"];
export const HowItemsKey = ["difference", "compatibility", "security"];

export const WhyItems = [
  {
    title: "黑客攻击",
    content:
      "黑客可能利用显卡强大的并行计算能力，通过暴力破解等手段，在几秒钟内生成大量前后字符相同的假地址。这种攻击方式能够在用户不知情的情况下替换掉他们的真实地址，从而可能导致资金被盗或交易被篡改。这类攻击利用了以太坊地址的特性，即地址是由一串无规律的16进制字符组成，这使得欺骗用户变得相对容易。",
  },
  {
    title: "对用户不友好",
    content:
      "以太坊地址由一串看似无规律的16进制字符组成，给用户检查地址的准确性带来了很大的挑战。用户在输入地址时，通常需要逐位核对每一个字符，既费时又容易出错。特别是在需要进行大额交易或重要操作时，这种繁琐的检查过程会增加用户的操作难度，降低使用体验，进而可能导致用户对平台的不满。",
  },
  {
    title: "安全风险",
    content:
      "在实际操作中，为了提高效率，很多用户只检查以太坊地址的前后几位字符，而忽视了中间部分。这种做法虽然能够在一定程度上减少检查工作量，但也带来了安全隐患。因为一旦中间部分的字符出错，用户往往无法及时发现，可能导致资金被转移到错误的地址。特别是当用户只依赖地址的部分特征进行验证时，这种错误的可能性会大大增加，影响交易的安全性和可靠性。",
  },
];

export const HowItems = [
  {
    title: "差异性",
    content:
      "使用哈希值对地址进行染色，可以大幅提升地址的可区分性。即使用户输入的地址只发生了一个或两个字符的错误，哈希值计算出的颜色变化也会显著不同。这种颜色变化的敏感性可以有效地帮助用户识别和确认地址的准确性，减少因输入错误带来的风险。由于哈希函数的特性，任何微小的变化都会导致完全不同的哈希值，从而生成大相径庭的颜色结果，使得错误更容易被发现。",
  },
  {
    title: "兼容性",
    content:
      "这种染色方案与现有的地址显示方案兼容，无需增加额外的UI组件或进行复杂的技术改动。它可以在现有系统上直接实现，使得用户不需要适应新的界面或操作方式。技术上，这种方案实现起来也较为简单，易于集成到现有应用中，因此用户能够快速接受并适应这种改进，提升了用户体验。",
  },
  {
    title: "安全性",
    content:
      "针对暴力破解的安全性，这种染色方法显著提高了防护能力。例如，若攻击者试图计算出首尾5位字符相同且颜色相似的地址，使用如NVIDIA RTX 4090显卡进行计算的时间将高达31,688年。而如果租用AWS A100显卡服务器进行计算，所需的成本将高于88亿美元。这种高昂的计算成本和时间，使得大规模暴力破解变得不切实际，进一步保障了用户地址的安全性。",
  },
];
