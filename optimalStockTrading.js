//Code 
export default function optimalStockTrading(prices) {
 let min_price = Infinity;
    let max_profit = 0;

    for (let price of prices) {
        if (price < min_price) {
            min_price = price;
        } else {
            let profit = price - min_price;
            max_profit = Math.max(max_profit, profit);
        }
    }

    return max_profit;
}

/**
 * TIME COMPLEXITY : O(N) 
 * SPACE COMPLEXITY : O(1) -> Only two variables max_profit and min_price are used for to track intermediate results
 * 
 */