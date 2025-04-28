export const insertionSort = (values) => {
    const items = values.slice();
    for (let i = 0; i < items.length; i++) {
        const value = items[i];
        let j = i - 1;
        while (j >= 0 && items[j] > value) {
            items[j + 1] = items[j];
            j--;
        }
        items[j + 1] = value
    }
    return items;
}
export const insertionSort2 = values => { 
    const nums = values.slice(); 
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] < nums[j]) {
          let spliced = nums.splice(i, 1);
          nums.splice(j, 0, spliced[0]);
        }
      }
    }
    return nums;
};