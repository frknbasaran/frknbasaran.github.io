/*
	when all scripts loaded in page
	run this fucking lovely codes
	date: 14.11.2014
	author: @frknbasaran
*/
$(function() {

//var endDate = "Nov 17, 2014 15:00:25";
	$('.physic').countdown({
      date: "Nov 17, 2014 15:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.introCompEng').countdown({
      date: "Nov 18, 2014 17:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.babyMat').countdown({
      date: "Nov 20, 2014 15:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.lineerMath').countdown({
      date: "Nov 21, 2014 09:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.algorithm').countdown({
      date: "Nov 22, 2014 15:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.discreteOp').countdown({
      date: "Nov 17, 2014 13:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.objectOriented').countdown({
      date: "Nov 18, 2014 13:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.dataStructures').countdown({
      date: "Nov 19, 2014 13:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.electronic').countdown({
      date: "Nov 21, 2014 17:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.differential').countdown({
      date: "Nov 22, 2014 17:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.imageProcessing').countdown({
      date: "Nov 18, 2014 11:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.signalsSystems').countdown({
      date: "Nov 17, 2014 09:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.networks').countdown({
      date: "Nov 18, 2014 15:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.discreteSimulation').countdown({
      date: "Nov 19, 2014 11:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.mobileAppDev').countdown({
      date: "Nov 19, 2014 11:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.microProcessors').countdown({
      date: "Nov 20, 2014 09:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.programming2').countdown({
      date: "Nov 21, 2014 10:30:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.computerNetworksProgramming').countdown({
      date: "Nov 22, 2014 09:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });

    $('.digitalIntegrated').countdown({
      date: "Nov 22, 2014 11:00:00",
      render: function(data) {
        $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>gün</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>saat</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>dakika</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>saniye</span></div>");
      }
    });








});


