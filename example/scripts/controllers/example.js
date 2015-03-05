angular.module('fixtableExample').controller('ExampleCtrl', [
  '$scope', '$timeout', function($scope, $timeout) {

    $scope.rawData = [
      {
        year: 2015,
        film: 'Birdman or (The Unexpected Virtue of Ignorance)',
        director: 'Alejandro González Iñárritu'
      },
      {
        year: 2014,
        film: '12 Years a Slave',
        director: 'Steve McQueen'
      },
      {
        year: 2013,
        film: 'Argo',
        director: 'Ben Affleck'
      },
      {
        year: 2012,
        film: 'The Artist',
        director: 'Michel Hazanavicius'
      },
      {
        year: 2011,
        film: 'The King\'s Speech',
        director: 'Tom Hooper'
      },
      {
        year: 2010,
        film: 'The Hurt Locker',
        director: 'Kathryn Bigelow'
      },
      {
        year: 2009,
        film: 'Slumdog Millionaire',
        director: 'Danny Boyle, Loveleen Tandan'
      },
      {
        year: 2008,
        film: 'No Country For Old Men',
        director: 'Joel Coen, Ethan Coen'
      },
      {
        year: 2007,
        film: 'The Departed',
        director: 'Martin Scorsese'
      },
      {
        year: 2006,
        film: 'Crash',
        director: 'Paul Haggis'
      },
      {
        year: 2005,
        film: 'Million Dollar Baby',
        director: 'Clint Eastwood'
      },
      {
        year: 2004,
        film: 'Lord Of The Rings: Return Of The King',
        director: 'Peter Jackson'
      },
      {
        year: 2003,
        film: 'Chicago',
        director: 'Rob Marshall'
      },
      {
        year: 2002,
        film: 'A Beautiful Mind',
        director: 'Ron Howard'
      },
      {
        year: 2001,
        film: 'Gladiator',
        director: 'Ridley Scott'
      },
      {
        year: 2000,
        film: 'American Beauty',
        director: 'Sam Mendes'
      },
      {
        year: 1999,
        film: 'Shakespeare in Love',
        director: 'John Madden'
      },
      {
        year: 1998,
        film: 'Titanic',
        director: 'James Cameron'
      },
      {
        year: 1997,
        film: 'The English Patient',
        director: 'Anthony Minghella'
      },
      {
        year: 1996,
        film: 'Braveheart',
        director: 'Mel Gibson'
      },
      {
        year: 1995,
        film: 'Forrest Gump',
        director: 'Robert Zemeckis'
      },
      {
        year: 1994,
        film: 'Schindler\'s List',
        director: 'Steven Spielberg'
      },
      {
        year: 1993,
        film: 'Unforgiven',
        director: 'Clint Eastwood'
      },
      {
        year: 1992,
        film: 'The Silence of the Lambs',
        director: 'Jonathan Demme'
      },
      {
        year: 1991,
        film: 'Dances with Wolves',
        director: 'Kevin Costner'
      },
      {
        year: 1990,
        film: 'Driving Miss Daisy',
        director: 'Bruce Beresford'
      },
      {
        year: 1989,
        film: 'Rain Man',
        director: 'Barry Levinson'
      },
      {
        year: 1988,
        film: 'The Last Emperor',
        director: 'Bernardo Bertolucci'
      },
      {
        year: 1987,
        film: 'Platoon',
        director: 'Oliver Stone'
      },
      {
        year: 1986,
        film: 'Out of Africa',
        director: 'Sydney Pollack'
      },
      {
        year: 1985,
        film: 'Amadeus',
        director: 'Miloš Forman'
      },
      {
        year: 1984,
        film: 'Terms of Endearment',
        director: 'James L. Brooks'
      },
      {
        year: 1983,
        film: 'Gandhi',
        director: 'Richard Attenborough'
      },
      {
        year: 1982,
        film: 'Chariots of Fire',
        director: 'Hugh Hudson'
      },
      {
        year: 1981,
        film: 'Ordinary People',
        director: 'Robert Redford'
      },
      {
        year: 1980,
        film: 'Kramer vs. Kramer',
        director: 'Robert Benton'
      }
    ];

    $scope.getPageData = function(opt) {
      $scope.tableData = []
      $scope.loadingData = true
      begin = opt.pageSize * (opt.currentPage - 1)
      end = begin + opt.pageSize
      
      $timeout(function(){
        $scope.loadingData = false
        $scope.tableData = $scope.rawData.slice(begin, end);
      }, 500);
    }

    $scope.tableOptions = {
      data: 'tableData',
      tableClass: 'table table-striped',
      columns: [
        {
          property: 'year',
          label: 'Year',
          width: 75
        }, {
          property: 'film',
          label: 'Film',
          template: 'partials/filmCell.html',
          width: '67%'
        }, {
          property: 'director',
          label: 'Director',
          width: '33%'
        }
      ],
      headerTemplate: null,
      footerTemplate: null,
      loading: 'loadingData',
      loadingTemplate: null,
      paging: true,
      pagingOptions: {
        callback: 'getPageData',
        currentPage: 1,
        pageSize: 25,
        pageSizeOptions: [10, 25, 50],
        totalItems: 36
      }
    }

  }
]);