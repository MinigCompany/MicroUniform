describe('Uniformes API Tests', () => {
    it('Buscar todos los uniformes', () => {
      cy.request('GET', 'http://localhost:3000/ApiMinig/Uniformes/Uniformes')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.Uniformes).to.be.an('array');
          expect(response.body.Uniformes).to.have.length.greaterThan(0);
        });
    });
    let id="";
    it('Crear nuevo uniforme(Test)', () => {
      const newUniform = {
        nombreUniforme: 'Test Uniforme',
        cantidad: 100,
        udm:"u",
        detalle: 'Test Detail',
        categoria: 'test',
        fecha: new Date().toISOString()
      };
  
      cy.request('POST', 'http://localhost:3000/ApiMinig/Uniformes/AddUniforme', newUniform)
        .then((response) => {
          id=response.body.uniforme._id;
          expect(response.status).to.eq(200);
          expect(response.body.uniforme).to.have.property('_id');
        });
    });
    it('Actualizar el uniforme(Test)', () => {
      const uniformUpdate = {
        uniforme_ID: id,
        nombreUniforme: 'Updated Test uniforme',
        cantidad: 80,
        udm:"kg",
        detalle: 'Updated Test Detail',
        categoria: 'test-updated',
        fecha: new Date().toISOString()
      };
  
      cy.request('PUT', 'http://localhost:3000/ApiMinig/Uniformes/UpdateUniforme', uniformUpdate)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.uniforme).to.have.property('nombreUniforme', 'Updated Test uniforme');
        });
    });
    it('Borrar el Uniforme(test)', () => {

      cy.request('DELETE', `http://localhost:3000/ApiMinig/Uniformes/DeleteUniforme/${id}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Uniforme eliminado');
        });
    });
});
  