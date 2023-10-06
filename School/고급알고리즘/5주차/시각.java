import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        int cnt = 0;

        for (int hour = 0; hour <= N; hour++) {
            if (hour % 10 == K || hour / 10 == K) {
                cnt += 3600;
            } else {
                for (int min = 0; min < 60; min++) {
                    if (min % 10 == K || min / 10 == K) {
                        cnt += 60;
                    } else {
                        for (int sec = 0; sec < 60; sec++) {
                            if (sec % 10 == K || sec / 10 == K) {
                                cnt++;
                            }
                        }
                    }
                }
            }
        }

        System.out.println(cnt);
    }
}
