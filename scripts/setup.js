#!/usr/bin/env node

/**
 * Setup script for the Accounting Tech Stack project
 * This script helps with initial setup and configuration
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Root directory of the project
const rootDir = path.join(__dirname, '..');

/**
 * Copy .env.example to .env if it doesn't exist
 */
function setupEnvFile() {
  const envExamplePath = path.join(rootDir, '.env.example');
  const envPath = path.join(rootDir, '.env');

  if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    console.log('Creating .env file from .env.example...');
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file');
  } else if (fs.existsSync(envPath)) {
    console.log('✅ .env file already exists');
  } else {
    console.error('❌ .env.example file not found');
  }
}

/**
 * Install dependencies
 */
function installDependencies() {
  console.log('Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit', cwd: rootDir });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
  }
}

/**
 * Prompt for Airtable credentials
 */
function promptForAirtableCredentials() {
  return new Promise((resolve) => {
    rl.question('Enter your Airtable API key (leave blank to skip): ', (apiKey) => {
      rl.question('Enter your Airtable base ID (leave blank to skip): ', (baseId) => {
        if (apiKey || baseId) {
          const envPath = path.join(rootDir, '.env');
          let envContent = fs.readFileSync(envPath, 'utf8');
          
          if (apiKey) {
            envContent = envContent.replace('AIRTABLE_API_KEY=your_airtable_api_key_here', `AIRTABLE_API_KEY=${apiKey}`);
          }
          
          if (baseId) {
            envContent = envContent.replace('AIRTABLE_BASE_ID=your_airtable_base_id_here', `AIRTABLE_BASE_ID=${baseId}`);
          }
          
          fs.writeFileSync(envPath, envContent);
          console.log('✅ Updated Airtable credentials in .env file');
        }
        resolve();
      });
    });
  });
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Setting up Accounting Tech Stack project...');
  
  setupEnvFile();
  installDependencies();
  await promptForAirtableCredentials();
  
  console.log('\n🎉 Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Run "npm run dev" to start the development server');
  console.log('2. Open http://localhost:3000 in your browser');
  
  rl.close();
}

// Run the main function
main().catch(console.error);
