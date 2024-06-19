describe('Uniforme API Tests', () => {
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

    it('Crear nueva salida para el Uniforme(Test)', () => {
      const newSalida = {
          uniforme_ID: id,
          salida:{
              fecha: new Date().toISOString(),
              nombreTrabajador:"Miguel Test",
              cantidad:50,
              observacion:"Test Detail"
          }
      };
      cy.request('POST', 'http://localhost:3000/ApiMinig/Uniformes/AddSalida', newSalida)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message','Salida registrada');
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
  