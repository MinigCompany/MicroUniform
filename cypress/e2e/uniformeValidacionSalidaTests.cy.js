describe('Uniforme API Tests', () => {
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
        id=response.body.uniforme;
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
  it('Validación de reporte del uniforme de salida(Test)', () => {
    const objeto = {
      entrada_ID: id.entradas[id.entradas.length-1]._id,
    };
    cy.request('POST', 'http://localhost:3000/ApiMinig/Uniformes/AllSalidas/'+id._id, objeto)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status',true);
    });
  });
  it('Borrar el Uniforme(test)', () => {

    cy.request('DELETE', `http://localhost:3000/ApiMinig/Uniformes/DeleteUniforme/${id._id}`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Uniforme eliminado');
      });
  });
  
});
  