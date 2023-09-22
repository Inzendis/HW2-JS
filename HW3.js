(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "HW3_atlas_1",
      frames: [
        [0, 298, 344, 360],
        [0, 709, 694, 119],
        [0, 0, 1021, 296],
        [346, 298, 289, 409],
      ],
    },
  ];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.CachedBmp_4 = function () {
    this.initialize(ss["HW3_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_3 = function () {
    this.initialize(ss["HW3_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_2 = function () {
    this.initialize(ss["HW3_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_1 = function () {
    this.initialize(ss["HW3_atlas_1"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Goat = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.CachedBmp_4();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Goat,
    new cjs.Rectangle(0, 0, 172, 180),
    null
  );

  (lib.Goat2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Goat();
    this.instance.setTransform(86, 90, 1, 1, 0, 0, 0, 86, 90);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Goat2,
    new cjs.Rectangle(0, 0, 172, 180),
    null
  );

  // stage content:
  (lib.HW3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Match_Head
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRIxVAAIAAi0AoqmKIIcAAIAAEiIocAAAoqEdIAAmFIAAkiAoqEdIHCAAIAADSInCAAg"
      );
    this.shape.setTransform(123.95, 861.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#00FF33")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_1.setTransform(95.45, 866.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#33CCCC")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_2.setTransform(123.95, 861.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p("AjqGCIAAjUIHVAAIAADUgAAFAxIAAmyIDmAAIAAGyg");
    this.shape_3.setTransform(155.95, 856.525);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AIrFSIAAFRIxVAAIAAi0IHCAAIAAjSInCAAIAAmFIAAkiAoqhoIIcAAIAAkiIocAAAoqHvIAAjS"
      );
    this.shape_4.setTransform(141.95, 861.25);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("rgba(0,0,0,0.027)")
      .ss(0.1, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_5.setTransform(173.95, 856.375);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#05F932")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_6.setTransform(113.45, 866.25);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#36C9C9")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_7.setTransform(141.95, 861.25);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("rgba(0,0,0,0.051)")
      .ss(0.1, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_8.setTransform(192, 856.225);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#0AF230")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_9.setTransform(131.5, 866.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#38C7C7")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_10.setTransform(160, 861.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AoqhoIIcAAIAAkiIocAAAIrFSIAAFRIxVAAIAAi0IHCAAIAAjSInCAAIAAmFIAAkiAoqHvIAAjS"
      );
    this.shape_11.setTransform(178, 860.95);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("rgba(0,0,0,0.078)")
      .ss(0.1, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_12.setTransform(210, 856.075);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#0FEC2F")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_13.setTransform(149.5, 865.95);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#3BC4C4")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_14.setTransform(178, 860.95);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("rgba(0,0,0,0.102)")
      .ss(0.1, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_15.setTransform(228, 855.925);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#14E52E")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_16.setTransform(167.5, 865.8);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#3DC2C2")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_17.setTransform(196, 860.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("rgba(0,0,0,0.129)")
      .ss(0.2, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_18.setTransform(246, 855.775);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#1ADF2D")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_19.setTransform(185.5, 865.65);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#40BFBF")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_20.setTransform(214, 860.65);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f()
      .s("rgba(0,0,0,0.153)")
      .ss(0.2, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_21.setTransform(264, 855.625);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AoqEdIAAmFIAAkiAoqHvIHCAAIAAjSInCAAAoqhoIIcAAIAAkiIocAAAIrFSIAAFRIxVAAIAAi0IAAjS"
      );
    this.shape_22.setTransform(232, 860.5);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#1FD92B")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_23.setTransform(203.5, 865.5);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#42BDBD")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_24.setTransform(232, 860.5);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f()
      .s("rgba(0,0,0,0.18)")
      .ss(0.2, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_25.setTransform(282.05, 855.475);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AoqhoIIcAAIAAkiIocAAAoqEdIAAmFIAAkiAoqHvIHCAAIAAjSInCAAAIrFSIAAFRIxVAAIAAi0IAAjS"
      );
    this.shape_26.setTransform(250.05, 860.35);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#24D22A")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_27.setTransform(221.55, 865.35);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#45BABA")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_28.setTransform(250.05, 860.35);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AoqhoIIcAAIAAkiIocAAAoqEdIAAmFIAAkiAIrFSIAAFRIxVAAIAAi0IAAjSAoqHvIHCAAIAAjSInCAA"
      );
    this.shape_29.setTransform(268.05, 860.2);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f()
      .s("rgba(0,0,0,0.204)")
      .ss(0.2, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_30.setTransform(300.05, 855.325);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#29CC29")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_31.setTransform(239.55, 865.2);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#47B8B8")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_32.setTransform(268.05, 860.2);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f()
      .s("rgba(0,0,0,0.231)")
      .ss(0.3, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_33.setTransform(318.05, 855.175);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwAIrAAIAAB9AIrFSIAAFRIxVAAIAAi0IAAjSIAAmFIAAkiAoqhoIIcAAIAAkiIocAAAoqHvIHCAAIAAjSInCAA"
      );
    this.shape_34.setTransform(286.05, 860.05);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#2EC627")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_35.setTransform(257.55, 865.05);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#4AB5B5")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_36.setTransform(286.05, 860.05);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f()
      .s("rgba(0,0,0,0.255)")
      .ss(0.3, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_37.setTransform(336.1, 855.025);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#33BF26")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_38.setTransform(275.6, 864.9);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#4CB3B3")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_39.setTransform(304.1, 859.9);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f()
      .s("rgba(0,0,0,0.282)")
      .ss(0.3, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_40.setTransform(354.1, 854.875);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#38B925")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_41.setTransform(293.6, 864.75);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#4FB0B0")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_42.setTransform(322.1, 859.75);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f()
      .s("rgba(0,0,0,0.306)")
      .ss(0.3, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_43.setTransform(372.1, 854.725);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#3DB224")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_44.setTransform(311.6, 864.6);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#51AEAE")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_45.setTransform(340.1, 859.6);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f()
      .s("rgba(0,0,0,0.333)")
      .ss(0.4, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_46.setTransform(390.1, 854.575);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#42AC22")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_47.setTransform(329.6, 864.45);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#54ABAB")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_48.setTransform(358.1, 859.45);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f()
      .s("rgba(0,0,0,0.361)")
      .ss(0.4, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_49.setTransform(408.15, 854.425);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#47A621")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_50.setTransform(347.65, 864.3);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#57A8A8")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_51.setTransform(376.15, 859.3);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f()
      .s("rgba(0,0,0,0.384)")
      .ss(0.4, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_52.setTransform(426.15, 854.275);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#4D9F20")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_53.setTransform(365.65, 864.15);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#59A6A6")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_54.setTransform(394.15, 859.15);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f()
      .s("rgba(0,0,0,0.412)")
      .ss(0.4, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_55.setTransform(444.15, 854.125);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#52991E")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_56.setTransform(383.65, 864);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#5CA3A3")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_57.setTransform(412.15, 859);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f()
      .s("rgba(0,0,0,0.435)")
      .ss(0.5, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_58.setTransform(462.15, 853.975);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#57921D")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_59.setTransform(401.65, 863.85);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#5EA1A1")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_60.setTransform(430.15, 858.85);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f()
      .s("rgba(0,0,0,0.463)")
      .ss(0.5, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_61.setTransform(480.2, 853.825);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#5C8C1C")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_62.setTransform(419.7, 863.7);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#619E9E")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_63.setTransform(448.2, 858.7);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f()
      .s("rgba(0,0,0,0.486)")
      .ss(0.5, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_64.setTransform(498.2, 853.675);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#61861B")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_65.setTransform(437.7, 863.55);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#639C9C")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_66.setTransform(466.2, 858.55);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f()
      .s("rgba(0,0,0,0.514)")
      .ss(0.5, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_67.setTransform(516.2, 853.525);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#667F19")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_68.setTransform(455.7, 863.4);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#669999")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_69.setTransform(484.2, 858.4);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f()
      .s("rgba(0,0,0,0.537)")
      .ss(0.6, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_70.setTransform(534.2, 853.375);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#6B7918")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_71.setTransform(473.7, 863.25);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#689797")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_72.setTransform(502.2, 858.25);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f()
      .s("rgba(0,0,0,0.565)")
      .ss(0.6, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_73.setTransform(552.25, 853.225);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#707317")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_74.setTransform(491.75, 863.1);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#6B9494")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_75.setTransform(520.25, 858.1);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f()
      .s("rgba(0,0,0,0.588)")
      .ss(0.6, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_76.setTransform(570.25, 853.075);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#756C16")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_77.setTransform(509.75, 862.95);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#6D9292")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_78.setTransform(538.25, 857.95);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f()
      .s("rgba(0,0,0,0.616)")
      .ss(0.6, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_79.setTransform(588.25, 852.925);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#7A6614")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_80.setTransform(527.75, 862.8);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#708F8F")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_81.setTransform(556.25, 857.8);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f()
      .s("rgba(0,0,0,0.639)")
      .ss(0.7, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_82.setTransform(606.25, 852.775);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#805F13")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_83.setTransform(545.75, 862.65);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#728D8D")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_84.setTransform(574.25, 857.65);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f()
      .s("rgba(0,0,0,0.667)")
      .ss(0.7, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_85.setTransform(624.3, 852.625);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#855912")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_86.setTransform(563.8, 862.5);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#758A8A")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_87.setTransform(592.3, 857.5);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f()
      .s("rgba(0,0,0,0.694)")
      .ss(0.7, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_88.setTransform(642.3, 852.475);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqhoIIcAAIAAkiIocAAIAAkYIRVAAIAADwAoqEdIAAmFIAAkiAIrFSIAAFRIxVAAIAAi0IAAjSAoqHvIHCAAIAAjSInCAAAIrAAIAAB9"
      );
    this.shape_89.setTransform(610.3, 857.35);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#788787")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_90.setTransform(610.3, 857.35);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#8A5310")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_91.setTransform(581.8, 862.35);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f()
      .s("rgba(0,0,0,0.718)")
      .ss(0.7, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_92.setTransform(660.3, 852.325);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqEdIAAmFIAAkiIAAkYIRVAAIAADwAoqHvIHCAAIAAjSInCAAAoqhoIIcAAIAAkiIocAAAIrFSIAAFRIxVAAIAAi0IAAjSAIrAAIAAB9"
      );
    this.shape_93.setTransform(628.3, 857.2);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#8F4C0F")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_94.setTransform(599.8, 862.2);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#7A8585")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_95.setTransform(628.3, 857.2);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f()
      .s("rgba(0,0,0,0.745)")
      .ss(0.8, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_96.setTransform(678.3, 852.175);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#94460E")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_97.setTransform(617.8, 862.05);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#7D8282")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_98.setTransform(646.3, 857.05);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f()
      .s("rgba(0,0,0,0.769)")
      .ss(0.8, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_99.setTransform(696.35, 852.025);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqEdIAAmFIAAkiIAAkYIRVAAIAADwAIrFSIAAFRIxVAAIAAi0IAAjSAIrAAIAAB9AoqhoIIcAAIAAkiIocAAAoqHvIHCAAIAAjSInCAA"
      );
    this.shape_100.setTransform(664.35, 856.9);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#993F0D")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_101.setTransform(635.85, 861.9);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#7F8080")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_102.setTransform(664.35, 856.9);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f()
      .s("rgba(0,0,0,0.796)")
      .ss(0.8, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_103.setTransform(714.35, 851.875);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#9E390B")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_104.setTransform(653.85, 861.75);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#827D7D")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_105.setTransform(682.35, 856.75);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f()
      .s("rgba(0,0,0,0.82)")
      .ss(0.8, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_106.setTransform(732.35, 851.725);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#A3330A")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_107.setTransform(671.85, 861.6);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#847B7B")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_108.setTransform(700.35, 856.6);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f()
      .s("rgba(0,0,0,0.847)")
      .ss(0.9, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_109.setTransform(750.4, 851.575);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#A82C09")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_110.setTransform(689.9, 861.45);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#877878")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_111.setTransform(718.4, 856.45);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f()
      .s("rgba(0,0,0,0.871)")
      .ss(0.9, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_112.setTransform(768.4, 851.425);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f("#AD2607")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_113.setTransform(707.9, 861.3);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#897676")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_114.setTransform(736.4, 856.3);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f()
      .s("rgba(0,0,0,0.898)")
      .ss(0.9, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_115.setTransform(786.4, 851.275);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#B32006")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_116.setTransform(725.9, 861.15);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#8C7373")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_117.setTransform(754.4, 856.15);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f()
      .s("rgba(0,0,0,0.922)")
      .ss(0.9, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_118.setTransform(804.4, 851.125);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f("#B81905")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_119.setTransform(743.9, 861);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f("#8E7171")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_120.setTransform(772.4, 856);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f()
      .s("rgba(0,0,0,0.949)")
      .ss(1, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_121.setTransform(822.4, 850.975);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#BD1304")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_122.setTransform(761.9, 860.85);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#916E6E")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_123.setTransform(790.4, 855.85);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f()
      .s("rgba(0,0,0,0.973)")
      .ss(1, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_124.setTransform(840.45, 850.825);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#C20C02")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_125.setTransform(779.95, 860.7);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#936C6C")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_126.setTransform(808.45, 855.7);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9IAADVIAAFRIxVAAIAAi0IHCAAIAAjSInCAAIAAmFgAIrB9InWAAIAADVIHWAAAIrmyIAAGyAoqhoIIcAAIAAkiIocAAAoqHvIAAjS"
      );
    this.shape_127.setTransform(826.45, 855.55);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#C70601")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_128.setTransform(797.95, 860.55);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics
      .f("#966969")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_129.setTransform(826.45, 855.55);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics
      .f()
      .s("rgba(0,0,0,0.875)")
      .ss(0.9, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_130.setTransform(860.7, 850.675);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#C80501")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_131.setTransform(800.2, 860.55);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f()
      .s("rgba(0,0,0,0.749)")
      .ss(0.8, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_132.setTransform(862.95, 850.625);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics
      .f("#976868")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_133.setTransform(830.95, 855.5);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics
      .f()
      .s("rgba(0,0,0,0.624)")
      .ss(0.7, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_134.setTransform(865.2, 850.625);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics
      .f("#C90401")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_135.setTransform(804.7, 860.5);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics
      .f()
      .s("rgba(0,0,0,0.502)")
      .ss(0.5, 1, 1)
      .p("ADrmBIAAGyIjmAAIAAmygADrCuIAADUInVAAIAAjUg");
    this.shape_136.setTransform(867.45, 850.625);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics
      .f("#CA0301")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_137.setTransform(806.95, 860.5);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics
      .f("#986868")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_138.setTransform(835.45, 855.5);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics
      .f()
      .s("rgba(0,0,0,0.376)")
      .ss(0.4, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_139.setTransform(869.7, 850.575);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics
      .f("#CA0200")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_140.setTransform(809.2, 860.45);

    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics
      .f("#986767")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRg"
      );
    this.shape_141.setTransform(837.7, 855.45);

    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics
      .f()
      .s("rgba(0,0,0,0.251)")
      .ss(0.3, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_142.setTransform(871.95, 850.575);

    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics
      .f("#CB0200")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_143.setTransform(811.45, 860.45);

    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics
      .f()
      .s("rgba(0,0,0,0.125)")
      .ss(0.2, 1, 1)
      .p("ADrCuIAADUInVAAIAAjUgADrmBIAAGyIjmAAIAAmyg");
    this.shape_144.setTransform(874.2, 850.525);

    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics
      .f("#CB0100")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_145.setTransform(813.7, 860.4);

    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics
      .f("#996666")
      .s()
      .p(
        "AoqKjIAAi0IHCAAIAAjSInCAAIAAmFIIcAAIAAkiIocAAIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADUIHWAAIAAFSg"
      );
    this.shape_146.setTransform(842.2, 855.4);

    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AoqmKIAAkYIRVAAIAADwIjmAAIAAGyIDmAAIAAB9InWAAIAADVIHWAAIAAFRIxVAAIAAi0IAAjSIHCAAIAADSInCAAAoqmKIIcAAIAAEiIocAAAoqEdIAAmFIAAki"
      );
    this.shape_147.setTransform(844.45, 855.4);

    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics
      .f("#CC0000")
      .s()
      .p("AkNG9IAAjSIHBAAIAADSgAkNiaIAAkiIIbAAIAAEig");
    this.shape_148.setTransform(815.95, 860.4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3, p: { x: 155.95, y: 856.525 } },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 173.95, y: 856.375 } },
              { t: this.shape_7 },
              { t: this.shape_6 },
              { t: this.shape_5 },
              { t: this.shape_4, p: { x: 141.95, y: 861.25 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_10 },
              { t: this.shape_3, p: { x: 192, y: 856.225 } },
              { t: this.shape_9 },
              { t: this.shape_4, p: { x: 160, y: 861.1 } },
              { t: this.shape_8 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 210, y: 856.075 } },
              { t: this.shape_14 },
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11, p: { x: 178, y: 860.95 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_17 },
              { t: this.shape_3, p: { x: 228, y: 855.925 } },
              { t: this.shape_16 },
              { t: this.shape_11, p: { x: 196, y: 860.8 } },
              { t: this.shape_15 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 246, y: 855.775 } },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
              { t: this.shape_11, p: { x: 214, y: 860.65 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_24 },
              { t: this.shape_3, p: { x: 264, y: 855.625 } },
              { t: this.shape_23 },
              { t: this.shape_22, p: { x: 232, y: 860.5 } },
              { t: this.shape_21 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_28 },
              { t: this.shape_27 },
              { t: this.shape_3, p: { x: 282.05, y: 855.475 } },
              { t: this.shape_26, p: { x: 250.05, y: 860.35 } },
              { t: this.shape_25 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 300.05, y: 855.325 } },
              { t: this.shape_32 },
              { t: this.shape_31 },
              { t: this.shape_30 },
              { t: this.shape_29, p: { x: 268.05, y: 860.2 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_36 },
              { t: this.shape_3, p: { x: 318.05, y: 855.175 } },
              { t: this.shape_35 },
              { t: this.shape_34, p: { x: 286.05, y: 860.05 } },
              { t: this.shape_33 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 336.1, y: 855.025 } },
              { t: this.shape_39 },
              { t: this.shape_38 },
              { t: this.shape_37 },
              { t: this.shape_4, p: { x: 304.1, y: 859.9 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_42 },
              { t: this.shape_3, p: { x: 354.1, y: 854.875 } },
              { t: this.shape_41 },
              { t: this.shape_4, p: { x: 322.1, y: 859.75 } },
              { t: this.shape_40 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 372.1, y: 854.725 } },
              { t: this.shape_45 },
              { t: this.shape_44 },
              { t: this.shape_43 },
              { t: this.shape_11, p: { x: 340.1, y: 859.6 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_48 },
              { t: this.shape_3, p: { x: 390.1, y: 854.575 } },
              { t: this.shape_47 },
              { t: this.shape_11, p: { x: 358.1, y: 859.45 } },
              { t: this.shape_46 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_51 },
              { t: this.shape_3, p: { x: 408.15, y: 854.425 } },
              { t: this.shape_50 },
              { t: this.shape_11, p: { x: 376.15, y: 859.3 } },
              { t: this.shape_49 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_54 },
              { t: this.shape_3, p: { x: 426.15, y: 854.275 } },
              { t: this.shape_53 },
              { t: this.shape_22, p: { x: 394.15, y: 859.15 } },
              { t: this.shape_52 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_57 },
              { t: this.shape_56 },
              { t: this.shape_3, p: { x: 444.15, y: 854.125 } },
              { t: this.shape_26, p: { x: 412.15, y: 859 } },
              { t: this.shape_55 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_60 },
              { t: this.shape_3, p: { x: 462.15, y: 853.975 } },
              { t: this.shape_59 },
              { t: this.shape_29, p: { x: 430.15, y: 858.85 } },
              { t: this.shape_58 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_63 },
              { t: this.shape_3, p: { x: 480.2, y: 853.825 } },
              { t: this.shape_62 },
              { t: this.shape_34, p: { x: 448.2, y: 858.7 } },
              { t: this.shape_61 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_66 },
              { t: this.shape_3, p: { x: 498.2, y: 853.675 } },
              { t: this.shape_65 },
              { t: this.shape_4, p: { x: 466.2, y: 858.55 } },
              { t: this.shape_64 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_69 },
              { t: this.shape_3, p: { x: 516.2, y: 853.525 } },
              { t: this.shape_68 },
              { t: this.shape_4, p: { x: 484.2, y: 858.4 } },
              { t: this.shape_67 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_72 },
              { t: this.shape_3, p: { x: 534.2, y: 853.375 } },
              { t: this.shape_71 },
              { t: this.shape_11, p: { x: 502.2, y: 858.25 } },
              { t: this.shape_70 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_75 },
              { t: this.shape_3, p: { x: 552.25, y: 853.225 } },
              { t: this.shape_74 },
              { t: this.shape_11, p: { x: 520.25, y: 858.1 } },
              { t: this.shape_73 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_78 },
              { t: this.shape_3, p: { x: 570.25, y: 853.075 } },
              { t: this.shape_77 },
              { t: this.shape_11, p: { x: 538.25, y: 857.95 } },
              { t: this.shape_76 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_81 },
              { t: this.shape_3, p: { x: 588.25, y: 852.925 } },
              { t: this.shape_80 },
              { t: this.shape_22, p: { x: 556.25, y: 857.8 } },
              { t: this.shape_79 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_84 },
              { t: this.shape_83 },
              { t: this.shape_3, p: { x: 606.25, y: 852.775 } },
              { t: this.shape_26, p: { x: 574.25, y: 857.65 } },
              { t: this.shape_82 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_87 },
              { t: this.shape_3, p: { x: 624.3, y: 852.625 } },
              { t: this.shape_86 },
              { t: this.shape_29, p: { x: 592.3, y: 857.5 } },
              { t: this.shape_85 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_91 },
              { t: this.shape_90 },
              { t: this.shape_3, p: { x: 642.3, y: 852.475 } },
              { t: this.shape_89 },
              { t: this.shape_88 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_95 },
              { t: this.shape_3, p: { x: 660.3, y: 852.325 } },
              { t: this.shape_94 },
              { t: this.shape_93, p: { x: 628.3, y: 857.2 } },
              { t: this.shape_92 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_98 },
              { t: this.shape_97 },
              { t: this.shape_3, p: { x: 678.3, y: 852.175 } },
              { t: this.shape_93, p: { x: 646.3, y: 857.05 } },
              { t: this.shape_96 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_102 },
              { t: this.shape_101 },
              { t: this.shape_3, p: { x: 696.35, y: 852.025 } },
              { t: this.shape_100, p: { x: 664.35, y: 856.9 } },
              { t: this.shape_99 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_105 },
              { t: this.shape_104 },
              { t: this.shape_3, p: { x: 714.35, y: 851.875 } },
              { t: this.shape_100, p: { x: 682.35, y: 856.75 } },
              { t: this.shape_103 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_108 },
              { t: this.shape_107 },
              { t: this.shape_3, p: { x: 732.35, y: 851.725 } },
              { t: this.shape_100, p: { x: 700.35, y: 856.6 } },
              { t: this.shape_106 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_111 },
              { t: this.shape_3, p: { x: 750.4, y: 851.575 } },
              { t: this.shape_110 },
              { t: this.shape_22, p: { x: 718.4, y: 856.45 } },
              { t: this.shape_109 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_114 },
              { t: this.shape_3, p: { x: 768.4, y: 851.425 } },
              { t: this.shape_113 },
              { t: this.shape_26, p: { x: 736.4, y: 856.3 } },
              { t: this.shape_112 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_117 },
              { t: this.shape_3, p: { x: 786.4, y: 851.275 } },
              { t: this.shape_116 },
              { t: this.shape_29, p: { x: 754.4, y: 856.15 } },
              { t: this.shape_115 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_120 },
              { t: this.shape_3, p: { x: 804.4, y: 851.125 } },
              { t: this.shape_119 },
              { t: this.shape_34, p: { x: 772.4, y: 856 } },
              { t: this.shape_118 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_123 },
              { t: this.shape_3, p: { x: 822.4, y: 850.975 } },
              { t: this.shape_122 },
              { t: this.shape_4, p: { x: 790.4, y: 855.85 } },
              { t: this.shape_121 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_126 },
              { t: this.shape_3, p: { x: 840.45, y: 850.825 } },
              { t: this.shape_125 },
              { t: this.shape_4, p: { x: 808.45, y: 855.7 } },
              { t: this.shape_124 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_129, p: { x: 826.45 } },
              { t: this.shape_3, p: { x: 858.45, y: 850.675 } },
              { t: this.shape_128 },
              { t: this.shape_127 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_129, p: { x: 828.7 } },
              { t: this.shape_3, p: { x: 860.7, y: 850.675 } },
              { t: this.shape_131, p: { x: 800.2, y: 860.55 } },
              { t: this.shape_11, p: { x: 828.7, y: 855.55 } },
              { t: this.shape_130 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_133, p: { x: 830.95 } },
              { t: this.shape_3, p: { x: 862.95, y: 850.625 } },
              { t: this.shape_131, p: { x: 802.45, y: 860.5 } },
              { t: this.shape_11, p: { x: 830.95, y: 855.5 } },
              { t: this.shape_132 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_133, p: { x: 833.2 } },
              { t: this.shape_3, p: { x: 865.2, y: 850.625 } },
              { t: this.shape_135 },
              { t: this.shape_11, p: { x: 833.2, y: 855.5 } },
              { t: this.shape_134 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_138 },
              { t: this.shape_3, p: { x: 867.45, y: 850.625 } },
              { t: this.shape_137 },
              { t: this.shape_11, p: { x: 835.45, y: 855.5 } },
              { t: this.shape_136 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_141, p: { x: 837.7 } },
              { t: this.shape_3, p: { x: 869.7, y: 850.575 } },
              { t: this.shape_140 },
              { t: this.shape_11, p: { x: 837.7, y: 855.45 } },
              { t: this.shape_139 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_141, p: { x: 839.95 } },
              { t: this.shape_3, p: { x: 871.95, y: 850.575 } },
              { t: this.shape_143 },
              { t: this.shape_11, p: { x: 839.95, y: 855.45 } },
              { t: this.shape_142 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_146, p: { x: 842.2 } },
              { t: this.shape_3, p: { x: 874.2, y: 850.525 } },
              { t: this.shape_145 },
              { t: this.shape_11, p: { x: 842.2, y: 855.4 } },
              { t: this.shape_144 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_3, p: { x: 876.45, y: 850.525 } },
              { t: this.shape_148 },
              { t: this.shape_146, p: { x: 844.45 } },
              { t: this.shape_147 },
            ],
          },
          1
        )
        .wait(1)
    );

    // Layer_1
    this.instance = new lib.CachedBmp_1();
    this.instance.setTransform(141.65, 267.6, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

    // Layer_4
    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRkwQAABJgzCIQg0CJhSCQQjIFijDBfQjpBymsBwQnWB8kWAAQjyAAm0j+Qhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhDAfgoQA3hEAAg8QAAhKAkhqQAkhtA/hrQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBSQAWBzAMAcQAkBRBbAtQBaAsCLAZQABAADmAgQB9ASA2AZQBHAjAABCg"
      );
    this.shape_149.setTransform(238.6071, 642.35);

    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g5QBFhEAfgoQA3hDAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaArCLAZIDnAhQB9ASA2AaQBHAhAABDQAABJgzCIQg0CJhSCQQjIFjjDBeQjpBymsBwQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_150.setTransform(238.6071, 642.35);

    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRkdQAABCiaAuQhxAij4AjQmcA6gBAAQjeAlhaArQhcAtgOCGQgGA+AQDIQAOCmgaBGQgmBniGAAQkXAAp5ifQpXiWjkhvQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg8QAAhKAkhqQAkhtA/hsQCXkCDChfQBggvDZAhQCeAYEeBPQHDB8ANAEQD6A/CAAAQDPAAAWhAQAEgLABgCQAEgFAMADQATAFBlAxQBaArCLAZQABABDmAgQB9ARA2AaQBHAiAABDg"
      );
    this.shape_151.setTransform(237.9071, 683.2315);

    this.shape_152 = new cjs.Shape();
    this.shape_152.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ArvKPQpXiWjkhvQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg8QAAhKAkhqQAkhtA/hsQCXkCDChfQBggvDZAhQCeAYEeBPIHQCAQD6A/CAAAQDPAAAWhAIAFgNQAEgFAMADQATAFBlAxQBaArCLAZIDnAhQB9ARA2AaQBHAiAABDQAABCiaAuQhxAij4AjImdA6QjeAlhaArQhcAtgOCGQgGA+AQDIQAOCmgaBGQgmBniGAAQkXAAp5ifg"
      );
    this.shape_152.setTransform(237.9071, 683.2315);

    this.shape_153 = new cjs.Shape();
    this.shape_153.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRjWQAABDhPA0Qg/ApiFApQijAvhVAZQiXAthWApQhaAshbCBQg1BMhmCsQhfCYhSBHQhwBgiHAAQkXAAp5ifQpXiWjkhvQhggvgGgyQgFgnA0g6QBFhDAfgnQA3hFAAg9QAAhJAkhqQAkhtA/hrQCXkDDChfQDBheFOgqQEKgiFaAAQHaAACHAJQFTAWC2BZQDJBiBtCcQBkCOAACag"
      );
    this.shape_153.setTransform(242.7071, 623);

    this.shape_154 = new cjs.Shape();
    this.shape_154.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ArvLWQpXiWjkhvQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg+QAAhJAkhpQAkhtA/hsQCXkDDChfQDBheFOgqQEKgiFaAAQHaAACHAJQFTAWC2BZQDJBiBtCcQBkCOAACaQAABDhPAzQg/ApiFAqIj4BHQiXAuhWApQhaAshbCBQg1BMhmCsQhfCYhSBGQhwBhiHAAQkXAAp5ifg"
      );
    this.shape_154.setTransform(242.7071, 623);

    this.shape_155 = new cjs.Shape();
    this.shape_155.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AO5mnQAAA7AtBcQAaA0A1BnQAmBXgMA3QgPBJhhAvQhaAshbCBQg2BMhmCsQhfCYhSBGQhvBhiHAAQiIAAhQg8Qg6gsgyhiQhRidgHgLQg8hchbgtQhZgrjFgpQjwgsh1gWQjQgohgglQiBgyAAhCQAAh0FziLQArgQEPheQC5g/BSgoQBZgsBOhUQBShlApgwQBJhUBJgnQBfgzCIAAQHaAACGAJQFTAWC3BZQBfAugmAlQgYAZh6ApQiTAxg0AbQhkA0AABAg"
      );
    this.shape_155.setTransform(234.9057, 616.45);

    this.shape_156 = new cjs.Shape();
    this.shape_156.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAPM5Qg6gsgyhiQhRicgHgMQg8hdhbgsQhZgrjFgoIllhDQjQgnhggmQiBgyAAhCQAAh0FziLQArgQEPheQC5g/BSgoQBZgsBOhUQBShlApgwQBJhUBJgnQBfgzCIAAQHaAACGAJQFTAWC3BZQBfAugmAlQgYAZh6ApQiTAxg0AbQhkA1AAA/QAAA7AtBdIBPCaQAmBXgMA4QgPBIhhAvQhaAshbCBQg2BMhmCsQhfCYhSBHQhvBgiHAAQiIAAhQg8g"
      );
    this.shape_156.setTransform(234.9057, 616.45);

    this.shape_157 = new cjs.Shape();
    this.shape_157.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AIbmnQAAA6A9CZQBuERAEAMQA9CrAABnQAACEhgAvQhPAmh2BLQiNBagyAbQjnCBjyAAQiIAAhQg8Qg7gsgyhiQhRidgHgLQg8hchbgsQhjgxgmgrQghgmADgtQABgUAWhKQAUhFAAg2QAAg8gohEQgwhIgRggQgeg2ARgmQAUgwBigwQBZgsBOhUQBShlApgwQBJhUBJgnQBggzCIAAQHZAACGAJQFTAWC3BZQBfAugmAmQgYAZh6AoQiTAxg0AbQhkA0AABAg"
      );
    this.shape_157.setTransform(259.9097, 628.35);

    this.shape_158 = new cjs.Shape();
    this.shape_158.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmOM5Qg7gsgyhiQhRicgHgMQg8hdhbgsQhjgwgmgrQghgmADgtQABgUAWhKQAUhFAAg2QAAg8gohEQgwhHgRggQgeg2ARgnQAUgxBigvQBZgsBOhUQBShlApgwQBJhUBJgmQBgg0CIAAQHZAACGAJQFTAWC3BZQBfAvgmAkQgYAZh6ApQiTAxg0AbQhkA0AABAQAAA6A9CZQBuERAEALQA9CsAABnQAACEhgAvQhPAmh2BLQiNBagyAbQjnCBjyAAQiIAAhQg8g"
      );
    this.shape_158.setTransform(259.9097, 628.35);

    this.shape_159 = new cjs.Shape();
    this.shape_159.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AVyuNQAABHh2DwQhzDoinERQiyEjicDLQixDnhjAwQhOAmh3BLQiNBagwAbQjnCBj0AAQhxAAiOAKQidALgoAAQjAAEiuhUQhggvgChzQgBhZA7iUQBNiqAihOQA7iHAAg6QAAg8gnhEQgwhHgSggQgdg2AQgmQAVgxBhgvQBbgsBRiIQALgRB8j0QBSiiBKhLQBmhmCHAAQCGAAAhCjQAXBvgVEEQgZExAFBaQAJDDBcAtQBfAuESiuQDDh8FZkXQHLlyAdgVQDUigAAA/g"
      );
    this.shape_159.setTransform(314.6492, 608.684);

    this.shape_160 = new cjs.Shape();
    this.shape_160.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "A0PPUQhggvgChzQgBhZA7iUIBvj4QA7iHAAg6QAAg8gnhEQgwhHgSggQgdg2AQgmQAVgxBhgvQBbgsBRiIQALgRB8j0QBSiiBKhLQBmhmCHAAQCGAAAhCjQAXBvgVEEQgZExAFBaQAJDDBcAtQBfAuESiuQDDh8FZkXQHLlyAdgVQDUigAAA/QAABHh2DwQhzDoinERQiyEjicDLQixDnhjAwQhOAmh3BLQiNBagwAbQjnCBj0AAQhxAAiOAKQidALgoAAIgSAAQi2AAimhQg"
      );
    this.shape_160.setTransform(314.6492, 608.684);

    this.shape_161 = new cjs.Shape();
    this.shape_161.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRkwQAABJgzCJQg0CIhSCRQjIFijDBeQjpBymsBwQnWB8kWAAQjyAAm0j+Qhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaAsCLAZQABAADmAgQB9ASA2AaQBHAiAABCg"
      );
    this.shape_161.setTransform(343.7071, 628.05);

    this.shape_162 = new cjs.Shape();
    this.shape_162.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g5QBFhEAfgoQA3hDAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaArCLAZIDnAhQB9ASA2AaQBHAhAABDQAABJgzCIQg0CJhSCRQjIFijDBeQjpBxmsBxQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_162.setTransform(343.7071, 628.05);

    this.shape_163 = new cjs.Shape();
    this.shape_163.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRiHQAABJgzCHQg0CKhSCQQjIFijDBfQhdAtijh/QhkhOjdjrQjnj1hwhdQi9ieiEAAQiCAAjeB1QhxA8kpC9QkFCmh/A6QjBBXhfguQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg9QAAh8DCh1QBGgqB7g6QBFghCOhDQFiisFEh7QH6jBEBAAQCHAAA5AxQApAiAQBTQAWBzAMAcQAkBRBbAtQBaArCLAZQABABDmAgQB9ARA2AaQBHAiAABDg"
      );
    this.shape_163.setTransform(350.3571, 611.4501);

    this.shape_164 = new cjs.Shape();
    this.shape_164.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ANNLTQhkhPjdjqQjnj2hwhdQi9ieiEABQiCgBjeB2QhxA7kpC9QkFCnh/A5QjBBXhfguQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg9QAAh8DCh1QBGgqB7g6IDThkQFiisFEh7QH6jBEBAAQCHAAA5AxQApAiAQBTQAWBzAMAcQAkBRBbAtQBaAsCLAZIDnAgQB9ARA2AaQBHAjAABCQAABJgzCIQg0CJhSCQQjIFijDBfQgYAMgeAAQhSAAh4hdg"
      );
    this.shape_164.setTransform(350.3571, 611.4501);

    this.shape_165 = new cjs.Shape();
    this.shape_165.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AbYkCQAABCkIA6QjAArmaA1Qp3BRgXAEQlLAwhaAsQhSAojPCPQlNDlg8AnQoRFdjvAAQiFAAAag+QAPgkByhuQB5hzAfg5QAzhdhdgtQhhgvgGgzQgEgmA0g6QBFhEAfgnQA3hEAAg8QAAh9DCh1QBFgqB7g6QBFghCPhDQFiisFDh7QH6jBECAAQCHAAA5AxQAoAiAQBTQAWBzANAcQAjBRBbAtQBaArCMAZQABABDmAgQB9ARA1AaQBIAiAABDg"
      );
    this.shape_165.setTransform(386.4874, 621.525);

    this.shape_166 = new cjs.Shape();
    this.shape_166.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "A7SNtQAPgkByhuQB5hzAfg5QAzhdhdgtQhhgvgGgzQgEgmA0g6QBFhEAfgnQA3hEAAg8QAAh9DCh1QBFgqB7g6IDUhkQFiisFDh7QH6jBECAAQCHAAA5AxQAoAiAQBTQAWBzANAcQAjBRBbAtQBaArCMAZIDnAhQB9ARA1AaQBIAiAABDQAABCkIA6QjAArmaA1IqOBVQlLAwhaAsQhSAojPCPQlNDlg8AnQoRFdjvAAQiFAAAag+g"
      );
    this.shape_166.setTransform(386.4874, 621.525);

    this.shape_167 = new cjs.Shape();
    this.shape_167.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AbYkwQAABEi3C8QifCjkIDdQjyDKjqCsQjsCthoAzQipBSsEgzQhmgHnrgnQlAgZhzAAQiFAAAag+QAPglByhtQB5hzAfg5QAzhdhdguQhhgvgGgyQgEgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBFgqB7g6QBFghCPhCQFiisFDh8QH6jBECAAQCDAAi6CJQhhBGmHDxQlwDkiLBtQjXCoBeAtQBdAtF/hAQDngnIfh6QIUh3C+gfQE/g0AABAg"
      );
    this.shape_167.setTransform(469.1874, 644.7646);

    this.shape_168 = new cjs.Shape();
    this.shape_168.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ApjPFQhmgHnrgnQlAgZhzAAQiFAAAag+QAPglByhtQB5hzAfg5QAzhdhdguQhhgvgGgyQgEgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBFgqB7g6IDUhjQFiisFDh8QH6jBECAAQCDAAi6CJQhhBGmHDxQlwDkiLBtQjXCoBeAtQBdAtF/hAQDngnIfh6QIUh3C+gfQE/g0AABAQAABEi3C8QifCjkIDdQjyDKjqCsQjsCthoAzQhoAzlMAAQjQAAkpgUg"
      );
    this.shape_168.setTransform(469.1874, 644.7646);

    this.shape_169 = new cjs.Shape();
    this.shape_169.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AlvIgQAABADoA7QCMAkFbA5QFRA3BjAbQCoAuheAuQipBSsDgzQhngHnqgnQlAgZh0AAQiFAAAag+QAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6QBFghCOhCQFhisFEh8QH7jBEBAAQCEAAi7CJQhgBGmHDxQlxDkiMBtQjVCoBdAtQBfAugiBDQgYAwhwBSQioB7gVATQhgBSAAA/g"
      );
    this.shape_169.setTransform(439.2563, 623.6646);

    this.shape_170 = new cjs.Shape();
    this.shape_170.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhOPFQhngHnqgnQlAgZh0AAQiFAAAag+QAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6IDThjQFhisFEh8QH7jBEBAAQCEAAi7CJQhgBGmHDxQlxDkiMBtQjVCoBdAtQBfAugiBDQgYAwhwBSQioB7gVATQhgBSAAA/QAABADoA7QCMAkFbA5QFRA3BjAbQCoAuheAuQhoAzlMAAQjQAAkogUg"
      );
    this.shape_170.setTransform(439.2563, 623.6646);

    this.shape_171 = new cjs.Shape();
    this.shape_171.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "ADeHuQBTASCIAxQCfA5B2A8QFGCni2BZQipBSsDgzQhngHnqgnQlAgZh0AAQiFAAAag+QAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6QBFghCOhCQFhisFEh8QH7jBEBAAQCEAAi7CJQhgBGmHDxQlxDkiMBtQjVCoBdAtQBbAtAGBLQADAjgfBmQgZBWAUArQAeA/CHAfg"
      );
    this.shape_171.setTransform(481.3063, 605.8646);

    this.shape_172 = new cjs.Shape();
    this.shape_172.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AhOPFQhngHnqgnQlAgZh0AAQiFAAAag+QAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g5QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6IDThjQFhisFEh8QH7jBEBAAQCEAAi7CJQhgBGmHDxQlxDkiMBtQjVCoBdAtQBbAtAGBLQADAjgfBmQgZBWAUArQAeA/CHAfQBTASCIAxQCfA5B2A8QFGCni2BZQhoAzlMAAQjQAAkogUg"
      );
    this.shape_172.setTransform(481.3063, 605.8646);

    this.shape_173 = new cjs.Shape();
    this.shape_173.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AMqkWQkRAAiiATQjqAbB4A7QBcAtAGBLQADAjgfBlQgZBWAUArQAeA/CHAfQBCAOgMAJQgJAGhPAPQjzAuiPBGQj9B8idAvQjlBFkOAAQiFAAAag+QAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g4QBFhEAfgnQA3hEAAg+QAAh9DCh1QBGgqB7g6QBFghCOhCQBZgsBkAtQBFAgB1BmQCTCBA3AmQB8BXB1AQQAfAFAeAAQBnAAgggCQgfgDhlAAg"
      );
    this.shape_173.setTransform(542.0077, 620.3684);

    this.shape_174 = new cjs.Shape();
    this.shape_174.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AtrKEQAPglBzhtQB4hzAfg5QAzhdhdguQhggvgGgyQgFgnA0g4QBFhEAfgnQA3hEAAg+QAAh9DCh1QBGgqB7g6IDShjQBagsBkAtQBFAgB1BmQCTCBA3AmQB8BXB1AQQkRAAiiATQjqAbB4A7QBcAtAGBLQADAjgfBlQgZBWAUArQAeA/CHAfQBCAOgMAJQgJAGhPAPQjzAuiPBGQj9B8idAvQjlBFkOAAQiFAAAag+g"
      );
    this.shape_174.setTransform(535.0124, 620.3684);

    this.shape_175 = new cjs.Shape();
    this.shape_175.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AIKmJQicAAFHC9QCxBmE6CZQBNAlgiBXQgZBAhkB0Qg4BBhzCCQhYBsgHA8QgEAlAXAYQAZAaA5ANQAoAJgegdQgdgchSg0QiuhwlkATQiRAIiIAdQiCAdhNAlQhfAvhzgLQhSgHiIguQjLhFglgLQiTgoiAAAQiFAAAag+QAPglByhtQB5hzAfg5QAzhdhdguQhhgvgGgxQgEgnA0g5QBFhEAfgnQA3hEAAg+QAAh9DCh1QBFgqB7g6QBFghCPhCQBagsBkAtQBFAgBzBmQCTCBA4AmQB8BXB0AQQAgAFAeAAQBmAAgfgCQgggDhlAAg"
      );
    this.shape_175.setTransform(561.0702, 616.85);

    this.shape_176 = new cjs.Shape();
    this.shape_176.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmIMYQhSgIiIguQjLhFglgKQiTgpiAAAQiFAAAag+QAPgkByhuQB5hzAfg5QAzhdhdgtQhhgvgGgzQgEglA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBFgqB7g6IDUhkQBagsBkAuQBFAfBzBnQCTCAA4AnQB8BWB0ARQicAAFHC8QCxBnE6CYQBNAmgiBWQgZBBhkB0Qg4BBhzCCQhYBsgHA7QiuhwlkAUQiRAIiIAdQiCAchNAmQhOAmhaAAQgVAAgVgCg"
      );
    this.shape_176.setTransform(561.0702, 614.1401);

    this.shape_177 = new cjs.Shape();
    this.shape_177.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmIMYQhSgIiIguQjLhFglgKQiTgpiAAAQiFAAAag+QAPgkByhuQB5hzAfg5QAzhdhdgtQhhgvgGgzQgEglA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBFgqB7g6IDUhkQBagsBkAuQBFAfBzBnQCTCAA4AnQB8BWB0ARQicAAFHC8QCxBnE6CYQBNAmgiBWQgZBBhkB0IirDDQhYBsgHA7QiuhwlkAUQiRAIiIAdQiCAchNAmQhOAmhaAAQgVAAgVgCg"
      );
    this.shape_177.setTransform(637.8702, 631.7401);

    this.shape_178 = new cjs.Shape();
    this.shape_178.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AEjnxQiJAIiAAcQiCAchNAmQhgAuhygKQhTgIiHguQjLhFglgKQiUgpiAAAQiFAAAag+QAPgkBzhuQB4hzAfg5QAzhdhdgtQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6QBFghCOhDQBagsBkAuQBFAfB0BnQCTCAA3AnQB8BWB1ARQidAAFHC8QCxBnE6CZQBdAthFB4QgQAbglAvQgzBAhYBiIgMAOQgYAbgRAVQEFl7AGgHQAMAOhXCUQhYCQhoCOQhvCYgPgKQgfgTgigPIgKgBIpigbQgRgNCcgQQDYgYAbgEQB7gSgVgVQhNhMgqg1Qgvg7AcAHQAoAJC9C/QAfAfDpj1QBzh8AsgtQBJhMAHAIQgEAIjeFKQinD6AAACQgBADgCABIg3ghIgHgFIAAAAQiphKkoAQgAIL3tQAfAEAeAAQBnAAgggCQgfgChlAAgAMEm4IgKgBAPDpiQheBtgWA5QAyhIBChegAJEeaQgDgDgDgC"
      );
    this.shape_178.setTransform(668.7487, 746.4934);

    this.shape_179 = new cjs.Shape();
    this.shape_179.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmHMYQhTgIiHguQjLhFglgKQiUgpiAAAQiFAAAag+QAPgkBzhuQB4hzAfg5QAzhdhdgtQhggvgGgzQgFglA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6IDThkQBagsBkAuQBFAfB0BnQCTCAA3AnQB8BWB1ARQidAAFHC8QCxBnE6CYQBdAthFB4QgQAbglAvQBXiUgMgOQgHgIhJBMQgsAthzB8QjpD1gfgfQi9i/gogJQgcgHAvA7QAqA1BNBMQAVAVh7ASQgbAEjYAYQiJAIiAAcQiCAchNAmQhOAmhbAAQgUAAgVgCgATOCbIjiFSQgYAbgRAVQEFl7AGgHg"
      );
    this.shape_179.setTransform(668.7487, 631.2901);

    this.shape_180 = new cjs.Shape();
    this.shape_180.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRkwQAABJgzCIQg0CJhSCQQjIFijDBfQjpBxmsBxQnWB8kWAAQjyAAm0j+Qhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhEAfgnQA3hEAAg8QAAhKAkhqQAkhtA/hsQCXkCDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAiAQBTQAWBzAMAcQAkBRBbAtQBaArCLAZQABABDmAgQB9ARA2AaQBHAiAABDg"
      );
    this.shape_180.setTransform(657.1571, 623.45);

    this.shape_181 = new cjs.Shape();
    this.shape_181.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g5QBFhEAfgoQA3hDAAg9QAAhKAkhpQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaArCLAZIDnAhQB9ASA2AaQBHAhAABDQAABJgzCIQg0CJhSCQQjIFjjDBeQjpBymsBwQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_181.setTransform(657.1571, 623.45);

    this.shape_182 = new cjs.Shape();
    this.shape_182.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRjWQAABDhPA0Qg/AoiFAqQijAvhVAZQiXAthWApQhaAshbCBQg1BMhmCsQhfCYhSBHQhwBgiHAAQkXAAp5ifQpXiWjkhvQhggvgGgyQgFgnA0g6QBFhDAfgoQA3hEAAg9QAAhJAkhqQAkhtA/hrQCXkDDChfQDBheFOgqQEKgiFaAAQHaAACHAJQFTAWC2BZQDJBiBtCcQBkCOAACag"
      );
    this.shape_182.setTransform(738.8071, 633.35);

    this.shape_183 = new cjs.Shape();
    this.shape_183.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ArvLWQpXiWjkhvQhggvgGgyQgFgnA0g5QBFhEAfgoQA3hDAAg+QAAhIAkhqQAkhtA/hsQCXkDDChfQDBheFOgqQEKgiFaAAQHaAACHAJQFTAWC2BZQDJBiBtCcQBkCOAACaQAABDhPA0Qg/AoiFAqIj4BHQiXAuhWApQhaAshbCBQg1BMhmCsQhfCYhSBGQhwBhiHAAQkXAAp5ifg"
      );
    this.shape_183.setTransform(738.8071, 633.35);

    this.shape_184 = new cjs.Shape();
    this.shape_184.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AO5mnQAAA7AtBcQAaA0A1BnQAmBXgMA4QgPBIhhAvQhaAshbCBQg2BMhmCsQhfCYhSBHQhvBgiHAAQiIAAhQg8Qg6gsgyhiQhRicgHgMQg8hchbgsQhZgsjFgoQjwgsh1gXQjQgnhggmQiBgyAAhCQAAh0FziLQArgQEPhdQC5hABSgoQBZgsBOhUQBShlApgvQBJhVBJgmQBfg0CIAAQHaAACGAJQFTAWC3BZQBfAvgmAlQgYAZh6AoQiTAxg0AcQhkAzAABAg"
      );
    this.shape_184.setTransform(729.6057, 622.3);

    this.shape_185 = new cjs.Shape();
    this.shape_185.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAPM5Qg6gsgyhiQhRidgHgLQg8hdhbgsQhZgrjFgoIllhDQjQgnhggmQiBgyAAhCQAAh0FziLQArgQEPheQC5g/BSgoQBZgsBOhUQBShlApgvQBJhVBJgnQBfgzCIAAQHaAACGAJQFTAWC3BZQBfAugmAlQgYAZh6ApQiTAxg0AbQhkA1AAA/QAAA7AtBdIBPCaQAmBXgMA4QgPBIhhAvQhaAshbCBQg2BMhmCsQhfCYhSBHQhvBgiHAAQiIAAhQg8g"
      );
    this.shape_185.setTransform(729.6057, 622.3);

    this.shape_186 = new cjs.Shape();
    this.shape_186.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AIbmnQAAA6A9CZQBuESAEALQA9CrAABnQAACEhgAvQhPAmh2BMQiNBZgyAcQjnCAjyAAQiIAAhQg8Qg7gsgyhiQhRicgHgMQg8hchbgsQhjgxgmgrQghglADguQABgUAWhKQAUhFAAg2QAAg8gohEQgwhHgRggQgeg2ARgnQAUgwBigwQBZgsBOhUQBShlApgvQBJhVBJgmQBgg0CIAAQHZAACGAJQFTAWC3BZQBfAvgmAlQgYAZh6AoQiTAxg0AcQhkAzAABAg"
      );
    this.shape_186.setTransform(809.1097, 620.8);

    this.shape_187 = new cjs.Shape();
    this.shape_187.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmOM5Qg7gsgyhiQhRidgHgLQg8hchbgtQhjgwgmgrQghgmADgtQABgUAWhKQAUhFAAg2QAAg8gohEQgwhIgRgfQgeg3ARgmQAUgwBigwQBZgrBOhVQBShlApgwQBJhUBJgmQBgg0CIAAQHZAACGAJQFTAWC3BZQBfAugmAmQgYAYh6ApQiTAxg0AbQhkA0AABAQAAA6A9CZQBuERAEALQA9CsAABnQAACEhgAvQhPAmh2BLQiNBagyAbQjnCBjyAAQiIAAhQg8g"
      );
    this.shape_187.setTransform(809.1097, 620.8);

    this.shape_188 = new cjs.Shape();
    this.shape_188.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AaRkwQAABJgzCJQg0CIhSCQQjIFijDBfQjpBymsBwQnWB8kWAAQjyAAm0j+Qhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhDAfgnQA3hFAAg8QAAhKAkhqQAkhtA/hrQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBSQAWBzAMAdQAkBQBbAtQBaAsCLAZQABAADmAgQB9ASA2AaQBHAiAABCg"
      );
    this.shape_188.setTransform(822.9571, 586.75);

    this.shape_189 = new cjs.Shape();
    this.shape_189.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhEAfgnQA3hDAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBSQAWBzAMAdQAkBRBbAsQBaAsCLAYIDnAhQB9ARA2AbQBHAhAABDQAABJgzCIQg0CJhSCRQjIFhjDBfQjpBxmsBxQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_189.setTransform(822.9571, 586.75);

    this.shape_190 = new cjs.Shape();
    this.shape_190.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ANNLSQhkhOjdjqQjnj2hwhdQi9idiEgBQiCABjeB0QhxA8kpC9QkFCmh/A6QjBBXhfguQhggvgGgyQgFgnA0g6QBFhEAfgnQA3hDAAg+QAAh8DCh1QBGgqB7g6IDThjQFiitFEh7QH6jBEBAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaArCLAZIDnAhQB9ASA2AaQBHAhAABDQAABJgzCHQg0CKhSCRQjIFijDBeQgYAMgeAAQhSAAh4heg"
      );
    this.shape_190.setTransform(850.9571, 593.6001);

    this.shape_191 = new cjs.Shape();
    this.shape_191.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AIKmJQAgAFAeAAQBmAAgfgCQgggDhlAAQicAAFHC9QCxBmE6CZQBNAlgiBXQgZBAhkB0Qg4BBhzCCQhYBsgHA8QgEAlAXAYQAZAaA5ANQAoAJgegdQgdgchSg0QiuhwlkATQiRAIiIAdQiCAdhNAlQhfAvhzgLQhSgHiIguQjLhFglgLQiTgoiAAAQiFAAAag+QAPglByhtQB5hzAfg5QAzhdhdguQhhgvgGgxQgEgnA0g5QBFhEAfgnQA3hEAAg+QAAh9DCh1QBFgqB7g6QBFghCPhCQBagsBkAtQBFAgBzBmQCTCBA4AmQB8BXB0AQg"
      );
    this.shape_191.setTransform(596.4202, 597.55);

    this.shape_192 = new cjs.Shape();
    this.shape_192.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AIL5ZQAfAEAeAAQBnAAgggCQgfgChlAAQidAAFHC8QCxBnE6CZQBdAthFB4QgQAbglAvQgzBAhYBiIgMAOQgYAbgRAVQheBtgWA5QAyhIBCheQEFl7AGgHQAMAOhXCUQhYCQhoCOQhvCYgPgKQgBADgCABIg3ghIgHgFIgKgBIpigbQgKgIApgHQAhgGBLgIQDYgYAbgEQB7gSgVgVQhNhMgqg1Qgvg7AcAHQAoAJC9C/QAfAfDpj1QBzh8AsgtQBJhMAHAIQgEAIjeFKQinD6AAACQgfgTgigPIAAAAIgKgBAMEokQiphKkoAQIgQABQiJAIiAAcQiCAchNAmQhgAuhygKQhTgIiHguQjLhFglgKQiUgpiAAAQiFAAAag+QAPgkBzhuQB4hzAfg5QAzhdhdgtQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6QBFghCOhDQBagsBkAuQBFAfB0BnQCTCAA3AnQB8BWB1AREAIBAgFQgDgCgDgD"
      );
    this.shape_192.setTransform(619.7487, 735.7184);

    this.shape_193 = new cjs.Shape();
    this.shape_193.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmHMYQhTgIiHguQjLhFglgKQiUgpiAAAQiFAAAag+QAPgkBzhuQB4hzAfg5QAzhdhdgtQhggvgGgzQgFglA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6IDThkQBagsBkAuQBFAfB0BnQCTCAA3AnQB8BWB1ARQidAAFHC8QCxBnE6CYQBdAthFB4QgQAbglAvQBXiUgMgOIjiFSQgYAbgRAVQEFl7AGgHQgHgIhJBMQgsAthzB8QjpD1gfgfQi9i/gogJQgcgHAvA7QAqA1BNBMQAVAVh7ASQgbAEjYAYQiJAIiAAcQiCAchNAmQhOAmhbAAQgUAAgVgCg"
      );
    this.shape_193.setTransform(619.7487, 609.7401);

    this.shape_194 = new cjs.Shape();
    this.shape_194.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhDAfgoQA3hDAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBTQAWByAMAdQAkBRBbAsQBaArCLAZIDnAhQB9ASA2AaQBHAiAABCQAABJgzCIQg0CJhSCRQjIFijDBeQjpBxmsBxQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_194.setTransform(520.1571, 632.1);

    this.shape_195 = new cjs.Shape();
    this.shape_195.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ArvLWQpXiWjkhvQhggvgGgzQgFgmA0g5QBFhEAfgnQA3hEAAg+QAAhJAkhpQAkhuA/hsQCXkCDChfQDBheFOgqQEKgiFaAAQHaAACHAJQFTAWC2BZQDJBiBtCcQBkCOAACaQAABDhPA0Qg/ApiFApIj4BHQiXAthWAqQhaAshbCBQg1BMhmCsQhfCYhSBGQhwBhiHAAQkXAAp5ifg"
      );
    this.shape_195.setTransform(558.7571, 624.25);

    this.shape_196 = new cjs.Shape();
    this.shape_196.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAPM5Qg6gsgyhiQhRidgHgLQg8hdhbgrQhZgsjFgpIllhCQjQgnhggmQiBgyAAhCQAAh0FziLQArgQEPhdQC5hABSgoQBZgrBOhVQBShlApgvQBJhVBJgmQBfg0CIAAQHaAACGAJQFTAWC3BZQBfAugmAmQgYAZh6AoQiTAxg0AcQhkAzAABAQAAA7AtBcIBPCbQAmBXgMA3QgPBJhhAvQhaAshbCBQg2BMhmCsQhfCYhSBGQhvBhiHAAQiIAAhQg8g"
      );
    this.shape_196.setTransform(516.8057, 638.55);

    this.shape_197 = new cjs.Shape();
    this.shape_197.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AmOM5Qg7gsgyhiQhRidgHgLQg8hdhbgrQhjgxgmgrQghgmADguQABgTAWhKQAUhFAAg2QAAg8gohEQgwhIgRgfQgeg2ARgnQAUgwBigwQBZgsBOhUQBShlApgvQBJhVBJgnQBggzCIAAQHZAACGAJQFTAWC3BZQBfAugmAlQgYAah6AoQiTAxg0AcQhkA0AAA/QAAA6A9CZQBuERAEAMQA9CrAABnQAACEhgAvQhPAmh2BMQiNBZgyAcQjnCAjyAAQiIAAhQg8g"
      );
    this.shape_197.setTransform(445.5097, 634.8);

    this.shape_198 = new cjs.Shape();
    this.shape_198.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AvaLbQhcg1jviWQi3hzhOgmQhggvgGgyQgFgnA0g6QBFhEAfgnQA3hDAAg9QAAhJAkhqQAkhtA/hsQCXkDDChfQC7hbImgyQGngnGPAAQCHAAA5AxQApAjAQBSQAWBzAMAdQAkBRBbAsQBaAsCLAYIDnAhQB9ASA2AaQBHAhAABDQAABJgzCIQg0CJhSCRQjIFhjDBfQjpBxmsBxQnWB8kWAAQjyAAm0j+g"
      );
    this.shape_198.setTransform(445.2571, 638.95);

    this.shape_199 = new cjs.Shape();
    this.shape_199.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "ANNLSQhkhOjdjqQjnj2hwhdQi9ieiEAAQiCAAjeB2QhxA7kpC9QkFCnh/A5QjBBXhfguQhggvgGgyQgFgnA0g6QBFhEAfgnQA3hEAAg9QAAh8DCh1QBGgqB7g6IDThjQFiisFEh8QH6jBEBAAQCHAAA5AxQApAjAQBSQAWBzAMAdQAkBRBbAsQBaAsCLAYIDnAhQB9ARA2AbQBHAhAABDQAABJgzCHQg0CKhSCRQjIFhjDBfQgYAMgeAAQhSAAh4heg"
      );
    this.shape_199.setTransform(440.1571, 607.2001);

    this.shape_200 = new cjs.Shape();
    this.shape_200.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "ANELOQiuhwlkATQiRAIiIAdQiCAdhNAlQhfAvhzgLQhSgHiIguQjLhFglgLQiTgoiAAAQiFAAAag+QAPglByhtQB5hzAfg5QAzhdhdguQhhgvgGgxQgEgnA0g5QBFhEAfgnQA3hEAAg+QAAh9DCh1QBFgqB7g6QBFghCPhCQBagsBkAtQBFAgBzBmQCTCBA4AmQB8BXB0AQQAgAFAeAAQBmAAgfgCQgggDhlAAQicAAFHC9QCxBmE6CZQBNAlgiBXQgZBAhkB0Qg4BBhzCCQhYBsgHA8QgEAlAXAYQAZAaA5ANQAoAJgegdQgdgchSg0g"
      );
    this.shape_200.setTransform(273.3702, 598.15);

    this.shape_201 = new cjs.Shape();
    this.shape_201.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AEjpzQiJAIiAAcQiCAchNAmQhgAuhygKQhTgIiHguQjLhFglgKQiUgpiAAAQiFAAAag+QAPgkBzhuQB4hzAfg5QAzhdhdgtQhggvgGgzQgFgmA0g6QBFhEAfgnQA3hEAAg9QAAh9DCh1QBGgqB7g6QBFghCOhDQBagsBkAuQBFAfB0BnQCTCAA3AnQB8BWB1ARQidAAFHC8QCxBnE6CZQBdAthFB4QgQAbglAvQgzBAhYBiIgMAOQgYAbgRAVQEFl7AGgHQgEAHjeFLQinD6AAACQgfgTgigPIgKgBIpigbQgKgIApgHQAhgGBLgIQDYgYAbgEQB7gSgVgVQhNhMgqg1Qgvg7AcAHQAoAJC9C/QAfAfDpj1QBzh8AsgtQBJhMAHAIQAMAOhXCUQhYCQhoCOQhvCYgPgKQgBADgCABIg3ghIgHgFIAAAAIgKgBAIL5vQAfAEAeAAQBnAAgggCQgfgChlAAgAPDrkQheBtgWA5QAyhIBChegAMEo6QiphKkoAQIgQABEAKIAgbQgDgCgDgD"
      );
    this.shape_201.setTransform(198.2487, 733.4809);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_150 },
            { t: this.shape_149, p: { x: 238.6071, y: 642.35 } },
          ],
        })
        .to(
          {
            state: [
              { t: this.shape_152, p: { x: 237.9071, y: 683.2315 } },
              { t: this.shape_151, p: { x: 237.9071, y: 683.2315 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_154 },
              { t: this.shape_153, p: { x: 242.7071, y: 623 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_156 }, { t: this.shape_155 }] }, 1)
        .to({ state: [{ t: this.shape_158 }, { t: this.shape_157 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_160, p: { x: 314.6492, y: 608.684 } },
              { t: this.shape_159, p: { x: 314.6492, y: 608.684 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_162 }, { t: this.shape_161 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_164 },
              { t: this.shape_163, p: { x: 350.3571, y: 611.4501 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_166, p: { x: 386.4874, y: 621.525 } },
              { t: this.shape_165, p: { x: 386.4874, y: 621.525 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_168, p: { x: 469.1874, y: 644.7646 } },
              { t: this.shape_167, p: { x: 469.1874, y: 644.7646 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_170, p: { x: 439.2563, y: 623.6646 } },
              { t: this.shape_169, p: { x: 439.2563, y: 623.6646 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_172, p: { x: 481.3063, y: 605.8646 } },
              { t: this.shape_171, p: { x: 481.3063, y: 605.8646 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_174, p: { x: 535.0124, y: 620.3684 } },
              { t: this.shape_173, p: { x: 542.0077, y: 620.3684 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_176, p: { x: 561.0702, y: 614.1401 } },
              { t: this.shape_175, p: { x: 561.0702, y: 616.85 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_177, p: { x: 637.8702, y: 631.7401 } },
              { t: this.shape_175, p: { x: 637.8702, y: 634.45 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_179, p: { x: 668.7487, y: 631.2901 } },
              { t: this.shape_178 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_181 },
              { t: this.shape_180, p: { x: 657.1571, y: 623.45 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_152, p: { x: 754.4571, y: 614.0315 } },
              { t: this.shape_151, p: { x: 754.4571, y: 614.0315 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_183 }, { t: this.shape_182 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_185 },
              { t: this.shape_184, p: { x: 729.6057, y: 622.3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_187 },
              { t: this.shape_186, p: { x: 809.1097, y: 620.8 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_160, p: { x: 812.7992, y: 596.034 } },
              { t: this.shape_159, p: { x: 812.7992, y: 596.034 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_189 }, { t: this.shape_188 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_190 },
              { t: this.shape_163, p: { x: 850.9571, y: 593.6001 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_166, p: { x: 773.5374, y: 603.575 } },
              { t: this.shape_165, p: { x: 773.5374, y: 603.575 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_168, p: { x: 716.0374, y: 617.5146 } },
              { t: this.shape_167, p: { x: 716.0374, y: 617.5146 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_170, p: { x: 666.4063, y: 611.9646 } },
              { t: this.shape_169, p: { x: 666.4063, y: 611.9646 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_172, p: { x: 625.0063, y: 612.5146 } },
              { t: this.shape_171, p: { x: 625.0063, y: 612.5146 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_174, p: { x: 617.0124, y: 601.8684 } },
              { t: this.shape_173, p: { x: 624.0077, y: 601.8684 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_176, p: { x: 596.4202, y: 594.8401 } },
              { t: this.shape_191, p: { x: 596.4202, y: 597.55 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_176, p: { x: 591.1702, y: 612.0901 } },
              { t: this.shape_191, p: { x: 591.1702, y: 614.8 } },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_193 }, { t: this.shape_192 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_194 },
              { t: this.shape_149, p: { x: 520.1571, y: 632.1 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_152, p: { x: 539.7071, y: 615.1315 } },
              { t: this.shape_151, p: { x: 539.7071, y: 615.1315 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_195 },
              { t: this.shape_153, p: { x: 558.7571, y: 624.25 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_196 },
              { t: this.shape_184, p: { x: 516.8057, y: 638.55 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_197 },
              { t: this.shape_186, p: { x: 445.5097, y: 634.8 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_160, p: { x: 458.4992, y: 622.334 } },
              { t: this.shape_159, p: { x: 458.4992, y: 622.334 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_198 },
              { t: this.shape_180, p: { x: 445.2571, y: 638.95 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_199 },
              { t: this.shape_163, p: { x: 440.1571, y: 607.2001 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_166, p: { x: 341.3874, y: 619.475 } },
              { t: this.shape_165, p: { x: 341.3874, y: 619.475 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_168, p: { x: 391.8374, y: 617.4146 } },
              { t: this.shape_167, p: { x: 391.8374, y: 617.4146 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_170, p: { x: 335.5563, y: 611.6146 } },
              { t: this.shape_169, p: { x: 335.5563, y: 611.6146 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_172, p: { x: 263.6063, y: 602.5146 } },
              { t: this.shape_171, p: { x: 263.6063, y: 602.5146 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_174, p: { x: 269.1124, y: 594.9184 } },
              { t: this.shape_173, p: { x: 276.1077, y: 594.9184 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_177, p: { x: 273.3702, y: 595.4401 } },
              { t: this.shape_200, p: { x: 273.3702, y: 598.15 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_176, p: { x: 245.9202, y: 614.5901 } },
              { t: this.shape_200, p: { x: 245.9202, y: 617.3 } },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_179, p: { x: 198.2487, y: 605.2901 } },
              { t: this.shape_201 },
            ],
          },
          1
        )
        .wait(1)
    );

    // MotionTween
    this.instance_1 = new lib.Goat2();
    this.instance_1.setTransform(94.05, 1149, 1, 1, 0, 0, 0, 86, 90);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ x: 99.25, y: 1132.8 }, 0)
        .wait(1)
        .to({ x: 105.05, y: 1116.9 }, 0)
        .wait(1)
        .to({ x: 112.45, y: 1101.6 }, 0)
        .wait(1)
        .to({ x: 120.5, y: 1086.65 }, 0)
        .wait(1)
        .to({ x: 129.1, y: 1072 }, 0)
        .wait(1)
        .to({ x: 138.45, y: 1057.8 }, 0)
        .wait(1)
        .to({ x: 148.65, y: 1044.25 }, 0)
        .wait(1)
        .to({ x: 160.05, y: 1031.7 }, 0)
        .wait(1)
        .to({ x: 173.6, y: 1021.55 }, 0)
        .wait(1)
        .to({ x: 189.75, y: 1016.35 }, 0)
        .wait(1)
        .to({ x: 206.35, y: 1012.75 }, 0)
        .wait(1)
        .to({ x: 223.05, y: 1009.75 }, 0)
        .wait(1)
        .to({ x: 239.85, y: 1007.3 }, 0)
        .wait(1)
        .to({ x: 256.75, y: 1005.45 }, 0)
        .wait(1)
        .to({ x: 273.7, y: 1004.3 }, 0)
        .wait(1)
        .to({ x: 290.65, y: 1003.9 }, 0)
        .wait(1)
        .to({ x: 307.6, y: 1004.85 }, 0)
        .wait(1)
        .to({ x: 324.45, y: 1007.1 }, 0)
        .wait(1)
        .to({ x: 341.25, y: 1009.35 }, 0)
        .wait(1)
        .to({ x: 358.1, y: 1011.6 }, 0)
        .wait(1)
        .to({ x: 374.95, y: 1013.9 }, 0)
        .wait(1)
        .to({ x: 391.75, y: 1016.25 }, 0)
        .wait(1)
        .to({ x: 408.55, y: 1018.6 }, 0)
        .wait(1)
        .to({ x: 425.4, y: 1021.05 }, 0)
        .wait(1)
        .to({ x: 442.05, y: 1024.25 }, 0)
        .wait(1)
        .to({ x: 458.6, y: 1027.9 }, 0)
        .wait(1)
        .to({ x: 475.2, y: 1031.7 }, 0)
        .wait(1)
        .to({ x: 491.75, y: 1035.55 }, 0)
        .wait(1)
        .to({ x: 508, y: 1040.25 }, 0)
        .wait(1)
        .to({ x: 523.6, y: 1046.85 }, 0)
        .wait(1)
        .to({ x: 539.3, y: 1053.35 }, 0)
        .wait(1)
        .to({ x: 555.05, y: 1059.7 }, 0)
        .wait(1)
        .to({ x: 570.85, y: 1065.95 }, 0)
        .wait(1)
        .to({ x: 586.7, y: 1072.1 }, 0)
        .wait(1)
        .to({ x: 602.6, y: 1078.1 }, 0)
        .wait(1)
        .to({ x: 618.5, y: 1084 }, 0)
        .wait(1)
        .to({ x: 634.5, y: 1089.8 }, 0)
        .wait(1)
        .to({ x: 650.5, y: 1095.4 }, 0)
        .wait(1)
        .to({ x: 666.6, y: 1100.75 }, 0)
        .wait(1)
        .to({ x: 682.8, y: 1105.85 }, 0)
        .wait(1)
        .to({ x: 699.15, y: 1110.55 }, 0)
        .wait(1)
        .to({ x: 715.7, y: 1114.35 }, 0)
        .wait(1)
        .to({ x: 732.55, y: 1115 }, 0)
        .wait(1)
        .to({ x: 749.5, y: 1114 }, 0)
        .wait(1)
        .to({ x: 766.45, y: 1114.7 }, 0)
        .wait(1)
        .to({ x: 783.35, y: 1116.6 }, 0)
        .wait(1)
        .to({ x: 800, y: 1119.95 }, 0)
        .wait(1)
    );

    // Layer_1
    this.instance_2 = new lib.CachedBmp_3();
    this.instance_2.setTransform(352, 41.3, 0.5, 0.5);

    this.instance_3 = new lib.CachedBmp_2();
    this.instance_3.setTransform(35, 117, 0.5, 0.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }, { t: this.instance_2 }] })
        .wait(48)
    );

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(520.1, 660.8, 500, 578.2);
  // library properties:
  lib.properties = {
    id: "538CCCBEC5646C4496A7D370AF9A3B6C",
    width: 1024,
    height: 1239,
    fps: 60,
    color: "#333333",
    opacity: 0.0,
    manifest: [{ src: "assets/HW3_atlas_1.png", id: "HW3_atlas_1" }],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["538CCCBEC5646C4496A7D370AF9A3B6C"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
