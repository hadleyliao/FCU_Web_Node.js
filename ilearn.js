import puppeteer from 'puppeteer';

async function ilearnLogin() {
    try {
        // Launch browser
        const browser = await puppeteer.launch({
            headless: false, // Set to true for headless mode
            defaultViewport: null,
            args: ['--start-maximized']
        });

        // Create new page
        const page = await browser.newPage();

        // Go to login page
        await page.goto('https://ilearn.fcu.edu.tw/login/index.php', {
            waitUntil: 'networkidle0'
        });

        // Wait for login form elements
        await page.waitForSelector('#username');
        await page.waitForSelector('#password');
        await page.waitForSelector('#loginbtn');

        // Fill in login credentials
        await page.type('#username', '在這裡輸入我的帳號');
        await page.type('#password', '在這裡輸入我的密碼');

        // Click login button
        await page.click('#loginbtn');

        // Wait for login to complete
        await page.waitForNavigation({
            waitUntil: 'networkidle0'
        });

        // Print current page content after login
        const loginPageContent = await page.content();
        console.log('Login page content:', loginPageContent);

        // Navigate to the specified course page　在下面’’裡貼上要載入網頁
        await page.goto('https://ilearn.fcu.edu.tw/course/view.php?id=124219', {
            waitUntil: 'networkidle0'
        });

        // Print course page content
        const coursePageContent = await page.content();
        console.log('Course page content:', coursePageContent);

        // Close browser
        // await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the script
ilearnLogin();
