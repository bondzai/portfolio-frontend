export const RESEARCH_PAPERS = [
    {
        id: "002-scf-1-semantic-constraint-framework",
        title: "SCF-1: A Decentralized Software Design Framework for Harm Resilience",
        abstract: "This proposal introduces the Semantic Constraint Framework v1 (SCF-1) to address the limitations of free-text fields in decentralized systems. By enforcing explicit enumerated semantics, SCF-1 enables effective client-side filtering and anti-spam economics without centralized validation.",
        problemFraming: "Free-text fields in decentralized systems create externalities where interpretation costs are borne by clients, and ambiguity allows adversarial optimization (spam/abuse) that bypasses filters.",
        hypothesis: "Replacing open-ended text with strictly typed, enumerated event headers allows for deterministic harm reduction, economic filtering, and highly composable user experiences.",
        limitations: "Requires strict adherence to canonical serialization. Does not eliminate 'adversarial semantics' where an attacker tries to fit harmful content into safe enums, though it raises the cost considerably.",
        futureWork: "Develop SCF-ATTEST-1 for portable reputation signals and explore privacy-preserving verification methods.",
        date: "2026-01-23",
        version: "v1.0.0",
        author: "Puritat Chamart",
        tags: ["Decentralized Systems", "Harm Reduction", "Protocol Design"],
        citation: "Chamart, P. (2026). SCF-1: A Decentralized Software Design Framework for Harm Resilience.",
        status: "Draft",
        readTime: "15 min read",
        downloadUrl: "#",
        previewUrl: "#",
        content: `
## 1. Introduction

Decentralized social protocols and marketplaces promise censorship resistance and user autonomy. However, they frequently fail at user experience (UX) because they lack the central authority usually responsible for curbing spam, NSFW content, and scams. The reliance on meaning-bearing free-text fields (e.g., JSON payloads with arbitrary strings) creates a chaotic environment where clients must guess the intent and safety of every message.

This ambiguity leads to two major failures:
1.  **Safety Failure**: Clients cannot reliably hide harmful content without complex, possibly centralized, AI models.
2.  **Economic Failure**: Spammers can flood the network with cheap, low-entropy noise that is expensive for relays and clients to filter.

## 2. Problem: Why Free Text Fails Decentralization

The core issue is **semantic ambiguity**. In a centralized system, the server implies semantics ("This is a product listing"). In decentralization, a raw event often looks like generic JSON.

*   **Interpretation Externalities**: Every client must burn CPU cycles parsing and guessing the nature of content.
*   **Adversarial Optimization**: Spammers continually tweak text patterns to evade regex or AI filters.
*   **Composability Collapse**: Without shared, rigid semantics, apps cannot easily interoperate (e.g., a "shop" interface cannot reliably parse listings from a "social" feed).

## 3. Proposed Framework: SCF-1 Core

The **Semantic Constraint Framework (SCF)** proposes replacing key free-text metadata with mandatory **Enumerated Semantics** in the event header.

### 3.1. Canonical Event Header: \`SCFEvent\`

An event is only valid if it contains a strictly typed header.

#### **ActionIntent**
Describes *what* the user is doing.
*   \`publish_location\`
*   \`update_info\`
*   \`add_image\`
*   \`report_issue\`
*   \`review\`

#### **ContentContext**
Describes the *domain* of the content.
*   \`store_front\`
*   \`product\`
*   \`menu\`
*   \`documentation\`
*   \`discussion\`

#### **VisibilityScope**
Describes *who* should see it.
*   \`public\`: Global broadcast.
*   \`community\`: Specific subnet or group.
*   \`trusted_only\`: Follower-gated.
*   \`local_only\`: Device-local storage.

#### **ContentSensitivity**
Self-asserted safety level.
*   \`safe\`
*   \`sensitive\` (NSFW, medical, political).
*   \`restricted\` (Adult only, illegal in some jurisdictions).

#### **EconomicWeight**
The computational or financial "stake" attached.
*   \`zero\`: Free.
*   \`low\`: Standard interaction.
*   \`medium\`: Priority.
*   \`high\`: Critical broadcast.

#### **TrustSignal**
How the identity is verified.
*   \`none\`
*   \`self_asserted\`
*   \`community_signed\` (Web of Trust).
*   \`multi_party_verified\` (Attested by N validators).

### 3.2. Deterministic Validation
Clients reject any event where the \`payload\` does not match the \`ActionIntent\`. For example, an \`add_image\` intent MUST contain an image blob/hash in the payload. If it contains text, it is invalid.

## 4. Incentive Model: Anti-spam Economics

We introduce an **EffectiveCostScore** that makes spam expensive.

$$ Cost = EconomicWeight + SensitivityWeight + ScopeWeight - TrustDiscount $$

*   **Spamming "Public" + "Zero" cost**: Result is a low priority score; relays may drop it.
*   **Spamming "High" cost**: Expensive for the attacker.
*   **Building Trust**: A high \`TrustSignal\` reduces the cost to publish, rewarding good behavior.

## 5. Contextual Visibility: Anti-harm UX

Instead of global censorship (deletion), SCF-1 relies on **Rendering Policies**.

*   **Default**: Show \`safe\` + \`public\` content.
*   **Sensitive**: Blur \`sensitive\` content by default; require user opt-in.
*   **Restricted**: Hide \`restricted\` content unless specifically requested by a verified adult wallet.

This effectively safeguards users without removing data from the chain.

## 6. Domain Profile Case Study: Merchant Map (SCF-Map-1)

A decentralized map requires specific structure.

*   **MediaKind Enum**: \`storefront\`, \`product\`, \`menu\`, \`logo\`.
*   **VerificationMethod**: \`domain_dns_proof\`, \`payment_proof\`.

**Example**: A user posts a photo.
*   **Intent**: \`add_image\`
*   **Context**: \`store_front\`
*   **Sensitivity**: \`safe\`
*   **Trust**: \`community_signed\` (Other locals verified it).

Result: The map app automatically displays this as the shop's cover photo. If the sensitivity were \`sensitive\`, it would be blurred.

## 7. Threat Model

| Adversary | Attack Vector | Mitigation |
| :--- | :--- | :--- |
| **Bot Spammer** | Flood junk data | High **EconomicWeight** required for visibility; low trust score results in auto-hiding. |
| **NSFW Abuser** | Post porn as "Safe" | Community reports (\`report_issue\` intent) swiftly downgrade user's **TrustSignal** locally. |
| **Scammer** | Fake listings | **TrustSignal** requires \`multi_party_verified\` or DNS proofs to get "verified" badge. |

## 8. Evaluation Plan

We define metrics for success:
1.  **Spam Density**: % of invalid/junk events in the "Public" feed.
2.  **Harm Exposure**: Rate of \`sensitive\` content viewed without opt-in.
3.  **Cost-to-Attack**: Financial/Compute cost to flood 1000 visible messages.

## 9. Limitations and Future Work

*   **Canonicalization**: We must choose a standard (JCS or EIP-712) for signing.
*   **Privacy**: Future versions (SCF-ATTEST-1) should support Zero-Knowledge Proofs for verification.

## 10. Conclusion

SCF-1 replaces the need for centralized moderators with **structural incentives**. By embedding context and semantics into the protocol, we allow clients to enforce safety rules deterministically, ensuring a decentralized web that is both free and usable.`
    },
    {
        id: "001-decentralised-harm-reduction-layered-design",
        title: "Harm Reduction in Decentralized Software Through Layered System Design",
        abstract: "This white paper examines how decentralized software systems can reduce large-scale harm without reintroducing centralized control. It argues that safety and freedom can coexist when responsibility is separated across protocol, client, and community layers.",
        problemFraming: "Decentralized systems often face a false trade-off between user freedom and system safety. Attempts to embed moderation or moral rules at the protocol level either weaken decentralization or create hidden central points of control.",
        hypothesis: "If harm mitigation is applied at the client and community layers—while keeping the protocol layer minimal and neutral—decentralized systems can remain permissionless while significantly reducing involuntary exposure to harm.",
        limitations: "This approach does not prevent all forms of abuse. Malicious actors can fork clients, ignore community norms, or operate outside curated interfaces. Cultural disagreement on what constitutes harm remains unresolved.",
        futureWork: "Design and evaluate a reference implementation combining multiple indexers, client-side filtering policies, and portable reputation signals to measure harm reduction without protocol changes.",
        date: "2026-01-18",
        version: "v1.0.0",
        author: "Puritat Chamart",
        tags: ["Decentralized Systems", "System Architecture", "Governance"],
        citation: "Chamart, P. (2026). Harm Reduction in Decentralized Software Through Layered System Design.",
        status: "Published",
        readTime: "12 min read",
        downloadUrl: "/papers/harm-reduction-decentralized-systems.pdf",
        previewUrl: "/papers/harm-reduction-decentralized-systems"
    },
];
