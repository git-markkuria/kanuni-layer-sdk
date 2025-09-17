# Privacy-Preserving Prompt Library

A comprehensive library that transforms user prompts to protect disability privacy while maintaining functional context for AI interactions.

## 🎯 Purpose

This library helps users interact with AI models without disclosing specific medical conditions by:
- **Detecting** disability mentions in prompts
- **Redacting** medical/diagnostic terms
- **Adding** functional context for better AI responses
- **Preserving** user privacy and intent

## 🔄 How It Works

```
Input: "I'm paralyzed and need help finding accessible restaurants"
↓
Output: "I use mobility equipment and need help finding accessible restaurants. I need step-free access to buildings and accessible parking close to entrances."
```

## 🏗️ Architecture

- **14 Disability Categories** with comprehensive subgroups
- **Pattern Detection Engine** for identifying disability mentions
- **Redaction Engine** for replacing medical terms
- **Context Enrichment** for adding functional needs
- **Privacy Validation** to ensure no medical data leaks

## 🚀 Quick Start

```javascript
import { transformPrompt } from './src/index.js';

const result = await transformPrompt("I'm blind and need coding help");
console.log(result.transformed);
// "I use screen readers and need coding help. Text-based IDEs with good keyboard navigation work best for me."
```

## 📋 Categories Supported

1. Physical Disabilities
2. Visual Impairments  
3. Hearing Impairments
4. Speech & Language
5. Intellectual Disabilities
6. Learning Disabilities
7. Autism Spectrum
8. Developmental Disabilities
9. Mental Health
10. Emotional & Behavioral
11. Invisible Disabilities
12. Multiple Disabilities
13. Neurological
14. Genetic & Rare Disorders

## 🔒 Privacy Guarantee

- ✅ No medical terms in output
- ✅ No diagnostic language
- ✅ Functional descriptions only
- ✅ Complete user anonymity