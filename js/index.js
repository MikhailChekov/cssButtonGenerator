(function(){

  let app = {

    // bind html elements to variable
    increaseRad : $('#increase_radius'),
    decreaseRad : $('#decrease_radius'),
    bgColorInput : $('#background-color'),
    brColorInput : $('#border-color'),
    codeResultArea : $('#code-result'),
    create : $('.create'),
    maxRadius : 20,
    minRadius : 0,


    increaseRadiusHandler(){

      let currentRadius = this.create.css('border-radius'),
          step = $('#step').val(),
          newRadius = (parseInt(currentRadius) + parseInt(step));

      if(newRadius > this.maxRadius){
        newRadius = this.maxRadius;
        $(this).addClass('disabled');
      }

      if(newRadius > this.minRadius){
        this.decreaseRad.removeClass('disabled');
      }

      this.create.css({
          'border-radius' : newRadius
      })

      this.updateResult();

    },

    decreaseRadiusHandler(){

      let currentRadius = this.create.css('border-radius'),
          step = $('#step').val(),
          newRadius = (parseInt(currentRadius) - parseInt(step));

          if(newRadius < this.minRadius){
            newRadius = this.minRadius;
            $(this).addClass('disabled');
          }
          if(newRadius < maxRadius){
            this.increaseRad.removeClass('disabled');
          }
      create.css({
          'border-radius' : newRadius
      })

      this.updateResult();


    },

    bgColorHandler() {
      let newColor = '#' + $('#background-color').val();
      this.create.css({
        'background-color' : newColor
      })

      this.updateResult();
    },

    brColorHandler() {
      let newColor = '#' + $('#border-color').val();
      this.create.css({
        'border-color' : newColor
      })

      this.updateResult();
    },

    // show results in textarea
    updateResult() {
      let borderRad = this.create.css('border-radius'),
          brColor = this.create.css('border-color'),
          bgColor = this.create.css('background-color');

      this.codeResultArea.text(
        'border-radius: ' + borderRad + ';\n' +
        'border-color: ' + brColor + ';\n' +
        'background-color: ' + bgColor + ';'
      )

    },

    setUplisteners(){
      // set radius handlers
      this.increaseRad.on('click', $.proxy(this.increaseRadiusHandler, this));
      this.decreaseRad.on('click',$.proxy(this.decreaseRadiusHandler, this));
      // set color handlers
      this.bgColorInput.on('change', $.proxy(this.bgColorHandler, this));
      this.brColorInput.on('change', $.proxy(this.brColorHandler, this));
    },

    initialize(){
      this.setUplisteners();
      this.updateResult();
    }

  }

  app.initialize();

}());
