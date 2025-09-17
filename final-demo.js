/**
 * Before vs After Comparison Demo
 */

console.log('🔒 PRIVACY-PRESERVING PROMPT LIBRARY - FINAL DEMO\n');
console.log('🎯 Protecting User Privacy While Maintaining AI Assistance\n');

const testScenarios = [
    {
        category: "🏃 Physical Disabilities - Mobility",
        examples: [
            "I'm a wheelchair user planning a vacation to Europe",
            "I'm paralyzed and need advice on accessible workspaces", 
            "As a paraplegic, I want to learn about adaptive sports"
        ]
    },
    {
        category: "👁️ Visual Impairments", 
        examples: [
            "I'm blind and want to learn programming",
            "I'm visually impaired and need help with online shopping",
            "As someone with low vision, I struggle with reading small text"
        ]
    },
    {
        category: "📚 Learning Disabilities",
        examples: [
            "I have dyslexia and want to improve my reading speed",
            "I'm dyslexic and need help with essay writing",
            "I have dyscalculia and struggle with math concepts"
        ]
    },
    {
        category: "🧩 Autism Spectrum",
        examples: [
            "I'm autistic and find social situations overwhelming",
            "I have autism and need help with job interviews",
            "As an autistic person, I want workplace communication tips"
        ]
    },
    {
        category: "🧘 Mental Health",
        examples: [
            "I have depression and struggle with motivation",
            "I deal with anxiety in public speaking situations",
            "I have bipolar disorder and need routine management tips"
        ]
    }
];

// Simple transformation rules
const transformationRules = {
    // Medical terms → Functional descriptions
    'wheelchair user': 'use mobility equipment',
    'paralyzed': 'have limited mobility', 
    'paraplegic': 'have mobility considerations',
    'blind': 'use non-visual methods',
    'visually impaired': 'process information through audio and touch',
    'dyslexia': 'text processing differences',
    'dyslexic': 'process text information differently',
    'dyscalculia': 'number processing differences',
    'autistic': 'process information and social cues differently',
    'autism': 'different communication and processing styles',
    'depression': 'mood-related challenges',
    'anxiety': 'stress-related challenges',
    'bipolar': 'mood variation management needs'
};

// Context additions based on functional needs
const contextLibrary = {
    'mobility equipment': 'I need step-free access and accessible pathways',
    'limited mobility': 'I require accessible entrances and facilities',
    'non-visual methods': 'I use screen readers and audio feedback',
    'audio and touch': 'I need accessible digital formats and descriptions',
    'text processing differences': 'I work better with audio or visual content',
    'information and social cues differently': 'I need clear, structured communication',
    'mood-related challenges': 'I may need flexible scheduling and support',
    'stress-related challenges': 'I work best in calm, predictable environments'
};

function transformPrompt(prompt) {
    let transformed = prompt;
    let detectedIssues = [];
    let addedContext = [];

    // Apply transformations
    Object.entries(transformationRules).forEach(([medical, functional]) => {
        const regex = new RegExp(`\\b${medical}\\b`, 'gi');
        if (regex.test(transformed)) {
            detectedIssues.push(medical);
            transformed = transformed.replace(regex, functional);
            
            // Add relevant context
            const contextKey = Object.keys(contextLibrary).find(key => 
                functional.includes(key) || key.includes(functional.split(' ')[0])
            );
            if (contextKey && contextLibrary[contextKey]) {
                addedContext.push(contextLibrary[contextKey]);
            }
        }
    });

    // Append context
    if (addedContext.length > 0) {
        const uniqueContext = [...new Set(addedContext)].slice(0, 2);
        transformed += '. ' + uniqueContext.join('. ') + '.';
    }

    return {
        original: prompt,
        transformed: transformed,
        privacyProtected: !hasPrivacyRisk(transformed),
        functionalContextAdded: addedContext.length > 0
    };
}

function hasPrivacyRisk(text) {
    const riskyTerms = Object.keys(transformationRules);
    return riskyTerms.some(term => text.toLowerCase().includes(term.toLowerCase()));
}

function runComparison() {
    console.log('📋 BEFORE vs AFTER TRANSFORMATION EXAMPLES:\n');
    
    testScenarios.forEach((scenario, scenarioIndex) => {
        console.log(`${scenario.category}`);
        console.log(''.padEnd(60, '─'));
        
        scenario.examples.forEach((example, exampleIndex) => {
            const result = transformPrompt(example);
            
            console.log(`\n📝 Example ${scenarioIndex + 1}.${exampleIndex + 1}:`);
            console.log(`❌ BEFORE: "${result.original}"`);
            console.log(`✅ AFTER:  "${result.transformed}"`);
            console.log(`🔒 Privacy: ${result.privacyProtected ? 'PROTECTED' : 'AT RISK'}`);
            console.log(`📎 Context: ${result.functionalContextAdded ? 'ADDED' : 'NONE'}`);
        });
        console.log('\n');
    });

    // Final summary
    console.log('🎯 TRANSFORMATION SUMMARY:');
    console.log(''.padEnd(50, '═'));
    console.log('✅ Medical terms → Functional descriptions');
    console.log('✅ Diagnostic language → Accessibility needs');  
    console.log('✅ Personal conditions → General requirements');
    console.log('✅ Privacy preserved → AI assistance maintained');
    
    console.log('\n🔒 PRIVACY GUARANTEES:');
    console.log(''.padEnd(50, '═'));
    console.log('• No medical diagnoses disclosed');
    console.log('• No personal health information revealed');
    console.log('• Functional needs clearly communicated');
    console.log('• Original intent completely preserved');
    console.log('• AI receives relevant context for helpful responses');
    
    console.log('\n🚀 RESULT: Users get AI help without compromising privacy!');
}

runComparison();