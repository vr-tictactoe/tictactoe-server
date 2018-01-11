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
    if(checkBoard[0].indexOf('') != -1 && 
      checkBoard[0].indexOf('XXX') === -1 && 
      checkBoard[0].indexOf('OOO') === -1){
      return winner = 'DRAW'
    }
  }

  chai.use(chaiHttp)
  describe('POST History', function(){
    it('post history', function(done){
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
      chai.request('https://us-central1-vtitu-191706.cloudfunctions.net/')
      .get('/deleteHistory')
      .end(function(err, res){
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res).to.be.json
        done()
      })
    })

    it('logic X Vertical Win', function(){
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

    it('logic X Horizontal Win', function(){
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

    it('logic O Vertical Win', function(){
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

    it('logic O Horizontal Win', function(){
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

    it('logic Draw', function(){
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
  })