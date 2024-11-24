

    // Import library dan module yang diperlukan
    const supertest = require('supertest');
    const chai = require('chai');
    const app = require('D:\api-automation'); // Gantilah dengan path sesuai dengan struktur proyek Anda

    // Inisialisasi Supertest dengan aplikasi
    const request = supertest(app);
    const expect = chai.expect;

    // Test case pertama
    describe('First Test', () => {
      it('should return "Hello, World!"', async () => {
        // Kirim permintaan GET ke endpoint
        const response = await request.get('/hello');

        // Asssertion menggunakan Chai
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Hello, World!');
      });
    });
