'use strict'

var chai = require('chai')
  ,chaiHttp = require('chai-http')
  ,expect = require('chai').expect

  let tictactoe = (board) => {
    let winner = ''

    let checkBoard =
    [
      `${board[0]+board[1]+board[2]},
      ${board[0]+board[3]+board[6]},
      ${board[0]+board[4]+board[8]},
      ${board[2]+board[4]+board[6]},
      ${board[2]+board[5]+board[8]},
      ${board[3]+board[4]+board[5]},
      ${board[6]+board[7]+board[8]},
      ${board[1]+board[4]+board[7]}`
    ]


    if(checkBoard[0].indexOf('XXX') != -1 ){
      return winner = 'X'
    }
    if(checkBoard[0].indexOf('OOO') != -1 ){
      return winner = 'O'
    }
    if(board.indexOf('') === -1 &&
      checkBoard[0].indexOf('XXX') === -1 &&
      checkBoard[0].indexOf('OOO') === -1){
      return winner = 'DRAW'
    }
  }

  chai.use(chaiHttp)
  describe('POST History', function(){
    it('post history', function(done){
      this.timeout(10000);
      chai.request('https://us-central1-vtitu-191706.cloudfunctions.net/')
      .post('/createHistory')
      .send({player1: "ahmad", player2: "nathan", gameId: "tes132", winner: "nathan"})
      .end(function(err, res){
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res).to.be.json
        done()
      })
    })
    it('get history', function(done){
      this.timeout(10000);
      chai.request('https://us-central1-vtitu-191706.cloudfunctions.net/')
      .get('/getHistory')
      .end(function(err, res){
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res).to.be.json
        done()
      })
    })
    it('delete history', function(done){
      this.timeout(10000);
      chai.request('https://us-central1-vtitu-191706.cloudfunctions.net/')
      .get('/deleteHistory')
      .end(function(err, res){
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res).to.be.json
        done()
      })
    })

    it('logic X Vertical, first row Win', function(){
      let board =
      [
        'X','O','X',
        'X','O','O',
        'X','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic X Vertical, second row Win', function(){
      let board =
      [
        'O','X','O',
        'O','X','X',
        'X','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic X Vertical, third row Win', function(){
      let board =
      [
        'O','O','X',
        'O','X','X',
        'X','O','X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic X Horizontal, first line Win', function(){
      let board =
      [
        'X','X','X',
        'X','O','O',
        'O','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic X Horizontal, second line Win', function(){
      let board =
      [
        'O','X','O',
        'X','X','X',
        'O','O','X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic X Horizontal, third line Win', function(){
      let board =
      [
        'O','O','X',
        'X','O','O',
        'X','X','X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string')
      expect(winner).not.to.be.null
    })

    it('logic O Vertical, first row Win', function(){
      let board =
      [
        'O','O','X',
        'O','X','O',
        'O','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Vertical, second row Win', function(){
      let board =
      [
        'O','O','X',
        'X','O','O',
        'X','O','X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Vertical, third row Win', function(){
      let board =
      [
        'O','X','O',
        'X','O','O',
        'X','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Horizontal, first line Win', function(){
      let board =
      [
        'O','O','O',
        'X','O','X',
        'X','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Horizontal, second line Win', function(){
      let board =
      [
        'X','O','X',
        'O','O','O',
        'X','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Horizontal, third line Win', function(){
      let board =
      [
        'X','O','X',
        'X','X','O',
        'O','O','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic X Diagonal 1, X Win', function () {
       let board = [
         'X', 'O', 'O',
         'O', 'X', 'O',
         'O', 'X', 'X'
       ]
       let winner = tictactoe(board)
       expect(winner).to.equal('X')
       expect(winner).to.be.a('string');
       expect(winner).not.to.be.null
    })

    it('logic X Diagonal 2, X Win', function () {
      let board = [
        'O', 'O', 'X',
        'O', 'X', 'O',
        'X', 'X', 'X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('X')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic O Diagonal 1, O Win', function () {
      let board = [
        'O', 'X', 'O',
        'X', 'O', 'X',
        'X', 'X', 'O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('O')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

     it('logic O Diagonal 2, O Win', function () {
       let board = [
         'O', 'X', 'O',
         'X', 'O', 'X',
         'O', 'X', 'X'
       ]
       let winner = tictactoe(board)
       expect(winner).to.equal('O')
       expect(winner).to.be.a('string');
       expect(winner).not.to.be.null
     })

    it('logic Draw 1', function(){
      let board =
      [
        'X','O','O',
        'O','X','X',
        'O','X','O'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('DRAW')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic Draw 2', function () {
      let board = [
        'O', 'X', 'X',
        'X', 'O', 'O',
        'X', 'O', 'X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('DRAW')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

    it('logic Draw 3', function () {
      let board = [
        'O', 'X', 'X',
        'X', 'O', 'O',
        'O', 'X', 'X'
      ]
      let winner = tictactoe(board)
      expect(winner).to.equal('DRAW')
      expect(winner).to.be.a('string');
      expect(winner).not.to.be.null
    })

     it('logic Draw 4', function () {
       let board = [
         'O', 'X', 'X',
         'X', 'X', 'O',
         'O', 'O', 'X'
       ]
       let winner = tictactoe(board)
       expect(winner).to.equal('DRAW')
       expect(winner).to.be.a('string');
       expect(winner).not.to.be.null
     })

     it('logic Draw 5', function () {
       let board = [
         'O', 'X', 'O',
         'X', 'X', 'O',
         'X', 'O', 'X'
       ]
       let winner = tictactoe(board)
       expect(winner).to.equal('DRAW')
       expect(winner).to.be.a('string');
       expect(winner).not.to.be.null
     })
  })