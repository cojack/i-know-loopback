module.exports = function(app) {
  var Patient = app.models.Patient,
    Physican = app.models.Physician,
    Appointment = app.models.Appointment;

  var physican;

  Physican.create({
    type: 'oncologist'
  }).then(function (p) {
    physican = p;
    return Patient.create({name: 'John Smith'});
  }).then(function (patient) {
    return Appointment.create({
      patient: patient,
      physican: physican,
      appointmentDate: new Date()
    });
  }).then(function (appointment) {
    console.log(appointment);
  });
};
