import * as  helpers from 'yeoman-test';
import * as path from 'path';
import * as fs from 'fs';

describe('Init', ()=>{
  const testDir = 'testResult';
  const absoluteTestDir = path.join(__dirname, testDir);
  const outDir = 'custom-worktab-plugin';

  beforeEach(()=>{
    if(!fs.existsSync(absoluteTestDir)) {
      fs.mkdirSync(absoluteTestDir);
    }
    console.log(__dirname);
    process.chdir(__dirname);
  });

  afterEach(()=>{
    try {
      fs.rmdirSync(path.join(absoluteTestDir, outDir), {
        recursive: true,
      });
    } catch(e) {
      console.error(e);
    }
  });

  afterAll(()=>{
    try {
      fs.rmdirSync(absoluteTestDir, {
        recursive: true,
      });
    } catch(e) {
      console.error(e);
    }
  });

  test('plugin-default-ts', ()=>{
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .cd(absoluteTestDir)
      .withArguments([outDir])        // Mock the arguments
      .withPrompts({ appType: 'plugin', template: 'default', language: 'typescript', 'skip-install': true, })   // Mock the prompt answers
      .withLocalConfig({ lang: 'en', }) // Mock the local config
      .then(function() {
        // assert something about the generator
        expect(fs.existsSync(path.join(absoluteTestDir, outDir))).toBe(true);
      });
  }, 50 * 1000);

  test('plugin-default-js', ()=>{
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .cd(absoluteTestDir)
      .withArguments([outDir])        // Mock the arguments
      .withPrompts({ appType: 'plugin', template: 'default', language: 'javascript', 'skip-install': true, })   // Mock the prompt answers
      .withLocalConfig({ lang: 'en', }) // Mock the local config
      .then(function() {
        // assert something about the generator
        expect(fs.existsSync(path.join(absoluteTestDir, outDir))).toBe(true);
      });
  }, 50 * 1000);
});