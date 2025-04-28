package javacode;

import java.util.*;
import java.io.*;

public class MaxPairwiseProduct {
    static long getMaxPairwiseProduct(int[] numbers) {
        int maxFirst = Integer.MIN_VALUE;
        int maxSecond = Integer.MIN_VALUE;
        for (int i = 0; i < numbers.length; ++i) {
            if (maxFirst < numbers[i]) {
                maxSecond = maxFirst;
                maxFirst = numbers[i];
            }else{
                if(maxSecond < numbers[i]){
                    maxSecond = numbers[i];
                }
            }
        }
        return (long)maxSecond*maxFirst;
    }

    public static void main(String[] args) {
        FastScanner scanner = new FastScanner(System.in);
        int n = scanner.nextInt();
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }
        System.out.println(getMaxPairwiseProduct(numbers));
    }

    static class FastScanner {
        BufferedReader br;
        StringTokenizer st;

        FastScanner(InputStream stream) {
            try {
                br = new BufferedReader(new InputStreamReader(stream));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        String next() {
            while (st == null || !st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        int nextInt() {
            return Integer.parseInt(next());
        }
    }

}
