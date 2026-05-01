/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        
        ListNode *mergedHead = new ListNode();
        
        ListNode *mergedIt = mergedHead;
        ListNode *it1 = list1;
        ListNode *it2 = list2;
        while (it1 != nullptr || it2 != nullptr) {
            ListNode **smallerIt = [&]{
                if (it1 == nullptr) return &it2;
                if (it2 == nullptr) return &it1;
                return it1->val < it2->val ? &it1 : &it2;
            }();
            ListNode *it = *smallerIt;
            mergedIt->next = new ListNode(it->val);
            *smallerIt = it->next;
            mergedIt = mergedIt->next;
        }

        return mergedHead->next;
    }
};
