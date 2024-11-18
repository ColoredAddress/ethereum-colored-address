---
title: Ethereum Colored Address Protocol
description: The Ethereum address with colored start and end characters allows users to quickly check the consistency of the Ethereum address.
author: 33357(@33357),Adam Lee(@AdamLee12138),Dnevend(@Dnevend)
discussions-to: https://ethereum-magicians.org/t/ethereum-colored-address-protocol/21704
status: Draft
type: Standards Track
category: ERC
created: 2024-11-15
---

## Abstract

This proposal introduces an ERC for a wallet address coloring protocol that assigns a unique color to each Ethereum wallet address. The color is generated using the hash of the wallet address and is designed to help users easily verify addresses visually, reducing errors and preventing phishing attacks.

## Motivation

Ethereum addresses are long and complex, making them hard to recognize at a glance. This can lead to mistakes when copying or inputting addresses and exposes users to phishing scams where attackers use similar-looking addresses. By adding a distinct color identifier to each address, users gain an easy way to visually confirm the accuracy of the address they are interacting with

## How It Works

1. **Unique Color Generation**: The protocol hashes the wallet address (e.g., with SHA-256), extracts specific bits, and maps them to RGB values to create a unique color.
2. **Noticeable Differences**: Even a one-character change in an address results in a visibly different color, making discrepancies easier to spot.
3. **Easy Integration**: This system is compatible with existing wallet and blockchain explorer interfaces, so it can be implemented without major changes.
4. **Security Measures**: The color generation process is designed to be complex enough to prevent attackers from creating false color matches or spoofing addresses.

## Algorithm

![Colored Address Overflow](/public/colored-address-pic.png)

```
import { sha256 } from "js-sha256";

export const calculateColors = (address: string): string[] => {
    const hash = sha256(address);
    const firstThirtyHexChars = hash.slice(0, 30);
    const colors = [];

    for (let i = 0; i < 10; i++) {
        const segment = firstThirtyHexChars.slice(i * 3, i * 3 + 3);
        const r = parseInt(segment[0], 16) * 10 + 50;
        const g = parseInt(segment[1], 16) * 10 + 50;
        const b = parseInt(segment[2], 16) * 10 + 50;
        colors.push(`rgb(${r}, ${g}, ${b})`);
    }

    return colors;
};
```

## Use Cases

- **Wallet Applications**: Displaying a unique color next to addresses helps users confirm that the address they are sending to or interacting with is correct.
- **Blockchain Explorers**: Enhanced address verification with visual color markers, enabling users to quickly identify if an address matches known, trusted addresses.
- **Browser Extensions**: Plugins that add color markers to addresses on webpages can alert users if an address differs from the expected color.
- **Smart Contract Interfaces**: Tools interacting with contracts can display colored addresses to assist users in verifying recipient and sender details.

## Benefits

- **Visual Verification**: Users can quickly identify if an address matches by checking its color.
- **Reduced Errors**: Enhances confidence during address input and transaction verification.
- **Phishing Protection**: Makes it harder for attackers to mimic legitimate addresses.

## Conclusion

The wallet address coloring protocol is a simple yet effective way to add an extra layer of security and ease of use to Ethereum address handling. It helps users recognize addresses more confidently, reduces mistakes, and protects against scams.

## Q & A

### 1. **What is the user experience for colorblind users?**

We plan to introduce brightness as an additional distinguishing factor in the future. This will help colorblind users differentiate between addresses, even if they can't perceive the color differences clearly.

### 2. **Why color only the first and last five characters (excluding "0x") of the wallet address?**

Wallet components often abbreviate the middle part of the address, displaying only the first five and last five characters. By coloring these portions, the address remains distinguishable even in shortened form.

### 3. **How does the protocol ensure the security of the address coloring algorithm?**

The ERC employs a high-complexity algorithm that offers 16 color possibilities for each character. This makes generating a similar address with identical colored characters 16 ** 10 times more difficult than generating addresses with only matching characters.

### 4. **How does the protocol ensure the clarity of the colored characters?**

The coloring algorithm ensures that character colors fall within a range of 50 to 200, avoiding extremely dark or light colors. This range ensures the colors stand out clearly against common background colors like black and white.

### 5. **Why use color to display differences in addresses?**

Color is a built-in property of fonts, making it easier for users to visually distinguish differences. Additionally, the protocol improves wallet address security while simplifying development, avoiding the need for layout changes (e.g., adding special symbols) in the UI.

## Learn more in website

https://eth-colored-address.dnevend.site/

---

***Needs discussion!***
