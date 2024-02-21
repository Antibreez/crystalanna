const serviceSupportRequestInputFile = new FileInput($('#form-service-request input[type="file"]'))
const serviceSupportRequestForm = new Form('#form-service-request')

const $serviceSelectCity = $('#service-city-select')
const $serviceSelectType = $('#service-type-select')

// $(document).on('click', '#service-city-select .modal__city-link', function(e) {
//   $('#service-city-select .modal__city-link').removeClass('active')
//   $(e.target).addClass('active')
//   $serviceSelectCity.find('.modal__title-close-button').trigger('click');
//   $('#service-city').val($(e.target).text()).trigger('change')
// })

// $(document).on('click', '#service-type-select .modal__city-link', function(e) {
//   $('#service-type-select .modal__city-link').removeClass('active')
//   $(e.target).addClass('active')
//   $serviceSelectType.find('.modal__title-close-button').trigger('click');
//   $('#service-type').val($(e.target).text()).trigger('change')
// })

// $('#service-city').on('select2:select', function() {
//   $('#service-city-select .modal__city-link').removeClass('active');

//   const text = $(this).val();
//   $('#service-city-select .modal__city-link').filter(function() {
//     return $(this).text() === text
//   }).addClass('active')
// })

// $('#service-type').on('select2:select', function() {
//   $('#service-type-select .modal__city-link').removeClass('active');

//   const text = $(this).val();
//   $('#service-type-select .modal__city-link').filter(function() {
//     return $(this).text() === text
//   }).addClass('active')
// })
