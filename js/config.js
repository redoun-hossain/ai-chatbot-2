const CONFIG = {
    WEBHOOK_TEST_URL: 'https://n8n.srv1106977.hstgr.cloud/webhook-test/34ddc073-f07e-4ef6-9c64-a41e2613569c',
    WEBHOOK_PROD_URL: 'https://n8n.srv1106977.hstgr.cloud/webhook/34ddc073-f07e-4ef6-9c64-a41e2613569c',
    USE_TEST: false,
    VERSION: 'Version-2.5',
    get WEBHOOK_URL() {
        return this.USE_TEST ? this.WEBHOOK_TEST_URL : this.WEBHOOK_PROD_URL;
    }
};
