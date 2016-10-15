#include <stdio.h>

int main(void)
{
    int arr[6] = {78,2,4,1,7,6};
	int temp;
	int temp2;
	int check = 0;
	int arr_len = sizeof(arr) / sizeof(arr[0]);

	while(check < (arr_len - 1))
	{
		check = 0;
		for(int i = 0, n = (arr_len -1); i < n;i++)
		{
			if(arr[i] > arr[i+1])
			{
				temp = arr[i];
				temp2 = arr[i+1];
				arr[i] = temp2;
				arr[i+1] = temp;
			}
			else{
				check++;
			}
		}
	}
    
    for(int j = 0; j < arr_len;j++)
    {
        printf("%i ",arr[j]);
    }
    printf("\n");
    return 0;
}
