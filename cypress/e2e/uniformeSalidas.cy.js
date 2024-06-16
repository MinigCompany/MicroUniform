describe('Uniforme Salida API Tests', () => {
    it('Lista de categorias', () => {
        cy.request('GET', 'http://localhost:3000/ApiMinig/Categorias/Categorias')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Category).to.be.an('array');
            expect(response.body.Category).to.have.length.greaterThan(0);
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
    it('Crear nueva salida para el uniforme cuando el valor supere su cantidad(Test)', () => {
        const newSalida = {
            uniforme_ID: id,
            salida:{
                fecha: new Date().toISOString(),
                nombreTrabajador:"Miguel Test",
                cantidad:300,
                observacion:"Test Detail"
            }
        };
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/ApiMinig/Uniformes/AddSalida',
            body: newSalida,
            failOnStatusCode: false
        })
          .then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('message','El valor esta fuera del límite en el inventario');
            expect(response.body).to.have.property('status',false);
        });
    });

    it('Borrar el Uniforme(test)', () => {
      cy.request('DELETE', `http://localhost:3000/ApiMinig/Uniformes/DeleteUniforme/${id}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Uniforme eliminado');
        });
    });
})