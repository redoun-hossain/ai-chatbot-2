const CONFIG = {
    WEBHOOK_TEST_URL: 'https://arfinsami178.app.n8n.cloud/webhook-test/34ddc073-f07e-4ef6-9c64-a41e2613569c',
    WEBHOOK_PROD_URL: 'https://arfinsami178.app.n8n.cloud/webhook/34ddc073-f07e-4ef6-9c64-a41e2613569c',
    USE_TEST: false,
    VERSION: 'Version-2.1',
    get WEBHOOK_URL() {
        return this.USE_TEST ? this.WEBHOOK_TEST_URL : this.WEBHOOK_PROD_URL;
    }
};
