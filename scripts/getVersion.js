import { execSync } from 'child_process';
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname to ES module equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    // Try to get the latest Git tag
    let version;
    try {
        version = execSync('git describe --tags --abbrev=0').toString().trim();
    } catch (error) {
        console.warn('No Git tags found, using default version');
        version = '0.0.1';  // Default version
    }

    // Write the version to a JSON file
    const versionFilePath = path.join(__dirname, '..', 'src', 'version.json');
    await writeFile(versionFilePath, JSON.stringify({ version }, null, 2));
    console.log(`Version ${version} written to ${versionFilePath}`);
} catch (error) {
    console.error('Error fetching version:', error);
}
