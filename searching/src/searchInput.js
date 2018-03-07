import React from 'react';

class SearchInput extends React.Component {

    linearSearch(num) {
        const number = parseInt(num, 10)
        
        if (!number) {
            throw new Error('Input not a number.')
        }

        for (let i=0; i<this.props.data.length-1; i++) {
            if (this.props.data[i] === number) {
                this.setState(Object.assign({}, this.props, {
                    number,
                    count: i+1
                }))
                return;
            }
            this.setState(Object.assign({}, this.props, {
                number,
                count: null
            }))
        }
    }

    binarySearch(number, start=0, last=this.props.sortedData.length, count=0){
      const num = parseInt(number, 10);

      if(start > last) {
        this.setState(Object.assign({}, this.props, {
          number: num,
          count: null
        }))
        return;
      }

      count = ++count;
      let midPoint = Math.floor((start + last) /2);
      let currentValue = this.props.sortedData[midPoint];
      console.log('here we have the current value of ', currentValue, ' and the number of ', num)
      // Base case?
      if(currentValue === num){
        this.setState(Object.assign({}, this.props, {
          number: num,
          count: count
      }));
        return;
      } 
      
      else if(currentValue < num){
          return this.binarySearch(num, midPoint+1, last, count)
        } else if(currentValue > num){
          return this.binarySearch(num, start, midPoint-1, count)
        }
        else {
          console.log('We  shouldn\'t be here');
          return;
        }
      
    }

    findFeedback(){
        if(this.state === null) {
            return '';
        }

        if(this.state.count === null) {
            return `${this.state.number} was not found in the list`;
        }

        if(this.state.count === 1) {
            return `${this.state.number} was found in 1 iteration`;
        }

        return `${this.state.number} was found in ${this.state.count} iterations`;
    }

    render() {
        const feedback = this.findFeedback();

        return (
            <div>
                <p>{feedback}</p>
                <label htmlFor="search-number-input">Find this number:</label>
                <input type="text" id="search-number-input" />
                <button onClick={() => this.linearSearch(document.getElementById('search-number-input').value)}>Linear Search</button>
                <button onClick={e => this.binarySearch(document.getElementById('search-number-input').value)}>Binary Search</button>
            </div>
        )
    }
}

SearchInput.defaultProps = {
    data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    sortedData: [ 1,
      2,
      3,
      5,
      6,
      6,
      6,
      7,
      7,
      9,
      9,
      11,
      13,
      13,
      13,
      14,
      14,
      15,
      16,
      16,
      17,
      21,
      22,
      23,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      27,
      28,
      28,
      28,
      30,
      31,
      32,
      32,
      33,
      34,
      38,
      38,
      39,
      40,
      40,
      42,
      42,
      43,
      44,
      45,
      46,
      46,
      46,
      48,
      49,
      50,
      51,
      51,
      53,
      53,
      54,
      55,
      56,
      62,
      63,
      64,
      64,
      64,
      65,
      67,
      68,
      69,
      69,
      70,
      70,
      72,
      72,
      73,
      73,
      76,
      78,
      78,
      80,
      81,
      82,
      83,
      84,
      85,
      87,
      87,
      88,
      88,
      89,
      90,
      91,
      93,
      97,
      98,
      98 ],
    count: null,
    number: null
}

export default SearchInput;